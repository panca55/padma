import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ChevronRight, Upload } from 'lucide-react';

interface PIC {
  id: number;
  name: string;
}

interface JobDetail {
  id: string;
  title: string;
  position: string;
  pic: PIC;
}

export default function CarrierApplyPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { t } = useTranslation();
  
  const [jobDetail, setJobDetail] = useState<JobDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    phone: '',
    education: '',
    salaryExpectation: '',
    email: '',
    previousPosition: '',
    age: '',
    cv: null as File | null
  });

  const [fileName, setFileName] = useState('');

  // Fetch job detail to get pic.id (user_id)
  useEffect(() => {
    const fetchJobDetail = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://www.admin.padmaraharjasentosa.co.id/api/v1/karir/${id}`);
        const result = await response.json();
        
        if (result.data) {
          setJobDetail({
            id: String(result.data.id),
            title: result.data.title,
            position: result.data.position,
            pic: result.data.pic || { id: 0, name: 'HR Team' }
          });
        }
        setLoading(false);
      } catch (error) {
        console.error('Error fetching job detail:', error);
        setLoading(false);
      }
    };

    if (id) {
      fetchJobDetail();
    }
  }, [id]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 10 * 1024 * 1024) {
        alert(t('fileSizeExceeded'));
        return;
      }
      setFormData(prev => ({
        ...prev,
        cv: file
      }));
      setFileName(file.name);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.name || !formData.email || !formData.phone || !formData.address || !formData.education || !formData.age || !formData.previousPosition) {
      alert(t('pleaseFillRequired') || 'Please fill all required fields');
      return;
    }

    if (!formData.cv) {
      alert(t('pleaseUploadCV') || 'Please upload your CV');
      return;
    }

    if (!jobDetail) {
      alert(t('jobNotFound') || 'Job information not found');
      return;
    }

    try {
      setSubmitting(true);

      // Create FormData for multipart/form-data
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('address', formData.address);
      formDataToSend.append('phone', formData.phone);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('last_highest_education', formData.education);
      formDataToSend.append('salary_expectation', formData.salaryExpectation ? String(Number(formData.salaryExpectation)) : '0');
      formDataToSend.append('previous_job', formData.previousPosition);
      formDataToSend.append('age', formData.age);
      formDataToSend.append('cv', formData.cv);
      formDataToSend.append('karir_id', id || '');
      formDataToSend.append('user_id', String(jobDetail.pic.id));

      // Submit to API
      const response = await fetch('https://www.admin.padmaraharjasentosa.co.id/api/v1/applications', {
        method: 'POST',
        mode: 'cors',
        credentials: 'omit',
        body: formDataToSend,
        headers: {
          'Accept': 'application/json',
        }
        // Don't set Content-Type header, browser will set it automatically with boundary
      });

      // console.log('Response status:', response.status);
      // console.log('Response URL:', response.url);
      // console.log('Response redirected:', response.redirected);

      // Check if response was redirected (indicates backend issue)
      if (response.redirected) {
        throw new Error('Backend API melakukan redirect. Hubungi admin untuk perbaiki konfigurasi Laravel (periksa routes/api.php dan APP_URL di .env)');
      }

      const result = await response.json();

      if (response.ok) {
        alert(t('applicationSubmitted') || 'Application submitted successfully!');
        navigate('/carrier');
      } else {
        throw new Error(result.message || 'Failed to submit application');
      }
    } catch (error: any) {
      console.error('Error submitting application:', error);
      alert(t('applicationFailed') || 'Failed to submit application. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const handleCancel = () => {
    navigate(-1);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-20 pb-20">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-4">
          {t('pleaseInputBio')}
        </h1>
        
        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            <p className="mt-4 text-gray-600 dark:text-gray-400">{t('loading') || 'Loading...'}</p>
          </div>
        ) : jobDetail ? (
          <>
            <p className="text-center text-lg text-gray-600 dark:text-gray-400 mb-12">
              {t('applyingFor') || 'Applying for'}: <span className="font-semibold text-blue-600">{jobDetail.title} - {jobDetail.position}</span>
            </p>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-8">
          {/* Row 1: Name and Address */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-blue-600 dark:text-blue-400 font-bold text-lg mb-3">
                {t('name')}
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder={t('namePlaceholder')}
                className="w-full px-6 py-4 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                required
              />
            </div>
            <div>
              <label className="block text-blue-600 dark:text-blue-400 font-bold text-lg mb-3">
                {t('address')}
              </label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                placeholder={t('addressPlaceholder')}
                className="w-full px-6 py-4 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                required
              />
            </div>
          </div>

          {/* Row 2: Phone, Education, Salary */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-blue-600 dark:text-blue-400 font-bold text-lg mb-3">
                {t('phone')}
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder={t('phonePlaceholder')}
                className="w-full px-6 py-4 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                required
              />
            </div>
            <div>
              <label className="block text-blue-600 dark:text-blue-400 font-bold text-lg mb-3">
                {t('lastHighestEducation')}
              </label>
              <div className="relative">
                <select
                  name="education"
                  value={formData.education}
                  onChange={handleInputChange}
                  className="w-full px-6 py-4 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl text-gray-900 dark:text-white appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all cursor-pointer"
                  required
                >
                  <option value="" className="text-gray-400">{t('lastHighestEducation')}</option>
                  <option value="SMA/SMK">SMA/SMK</option>
                  <option value="D3">D3</option>
                  <option value="S1">S1</option>
                  <option value="S2">S2</option>
                  <option value="S3">S3</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none flex flex-col gap-0.5">
                  <svg className="w-3 h-3 text-gray-600 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
                  </svg>
                  <svg className="w-3 h-3 text-gray-600 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
            <div>
              <label className="block text-blue-600 dark:text-blue-400 font-bold text-lg mb-3">
                {t('salaryExpectation')}
              </label>
              <input
                type="number"
                name="salaryExpectation"
                value={formData.salaryExpectation}
                onChange={handleInputChange}
                placeholder={t('salaryPlaceholder') || 'e.g. 5000000'}
                className="w-full px-6 py-4 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                min="0"
                required
              />
            </div>
          </div>

          {/* Row 3: Email and Previous Position */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-blue-600 dark:text-blue-400 font-bold text-lg mb-3">
                {t('email')}
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder={t('emailPlaceholder')}
                className="w-full px-6 py-4 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                required
              />
            </div>
            <div>
              <label className="block text-blue-600 dark:text-blue-400 font-bold text-lg mb-3">
                {t('previousPosition')}
              </label>
              <input
                type="text"
                name="previousPosition"
                value={formData.previousPosition}
                onChange={handleInputChange}
                placeholder={t('previousPositionPlaceholder')}
                className="w-full px-6 py-4 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                required
              />
            </div>
          </div>

          {/* Row 4: Age and CV Upload */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-blue-600 dark:text-blue-400 font-bold text-lg mb-3">
                {t('age')}
              </label>
              <div className="relative">
                <select
                  name="age"
                  value={formData.age}
                  onChange={handleInputChange}
                  className="w-full px-6 py-4 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl text-gray-900 dark:text-white appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all cursor-pointer"
                  required
                >
                  <option value="" className="text-gray-400">{t('selectAge')}</option>
                  {Array.from({ length: 48 }, (_, i) => i + 18).map(age => (
                    <option key={age} value={age}>{age}</option>
                  ))}
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none flex flex-col gap-0.5">
                  <svg className="w-3 h-3 text-gray-600 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
                  </svg>
                  <svg className="w-3 h-3 text-gray-600 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
            <div>
              <label className="block text-blue-600 dark:text-blue-400 font-bold text-lg mb-3">
                CV
              </label>
              <div className="flex items-center gap-4">
                <span className="text-gray-600 dark:text-gray-400 font-medium">
                  {t('attachmentMax')}
                </span>
                <label className="px-6 py-4 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-2xl text-gray-900 dark:text-white font-medium cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 transition-all inline-flex items-center gap-2">
                  <Upload className="w-5 h-5" />
                  {fileName || t('uploadFile')}
                  <input
                    type="file"
                    onChange={handleFileChange}
                    accept=".pdf,.doc,.docx"
                    required
                    className="hidden"
                  />
                </label>
              </div>
              {fileName && (
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                  {t('selectedFile')}: {fileName}
                </p>
              )}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end gap-4 pt-8">
            <button
              type="button"
              onClick={handleCancel}
              className="px-12 py-4 bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 font-bold text-lg rounded-full border-2 border-blue-600 dark:border-blue-400 hover:bg-blue-50 dark:hover:bg-gray-700 transition-all duration-300"
            >
              {t('cancel')}
            </button>
            <button
              disabled={submitting}
              className="px-12 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold text-lg rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              {submitting ? (t('submitting') || 'Submitting...') : t('submit')}
              {!submitting && <ChevronRight className="w-6 h-6" />}
            </button>
          </div>
        </form>
          </>
        ) : (
          <div className="text-center py-12">
            <p className="text-red-600 dark:text-red-400 text-xl">{t('jobNotFound') || 'Job not found'}</p>
            <button
              onClick={() => navigate('/carrier')}
              className="mt-6 px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all duration-300"
            >
              {t('backToJobs') || 'Back to Jobs'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
