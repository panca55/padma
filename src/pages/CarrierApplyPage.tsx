import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ChevronRight, Upload } from 'lucide-react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
    // Validasi ukuran file (max 2MB)
    const maxSize = 2 * 1024 * 1024; // 2MB dalam bytes
    
    console.log('File selected:', {
      name: file.name,
      size: `${(file.size / 1024 / 1024).toFixed(2)}MB`,
      sizeBytes: file.size,
      type: file.type,
      lastModified: new Date(file.lastModified).toISOString()
    });
    
    if (file.size > maxSize) {
      toast.error(t('fileSizeExceeded') || `Ukuran file melebihi 2MB. Ukuran saat ini: ${(file.size / 1024 / 1024).toFixed(2)}MB`);
      e.target.value = ''; // Reset input file
      return;
    }
    
    // Validasi tipe file - harus sesuai dengan backend: pdf, doc, docx
    const allowedTypes = [
      'application/pdf', 
      'application/msword', 
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    ];
    
    const allowedExtensions = ['.pdf', '.doc', '.docx'];
    const fileExtension = file.name.toLowerCase().substring(file.name.lastIndexOf('.'));
    
    // Cek MIME type ATAU extension (kadang browser Windows tidak set MIME type dengan benar)
    if (!allowedTypes.includes(file.type) && !allowedExtensions.includes(fileExtension)) {
      toast.error(t('invalidFileType') || `Hanya file PDF, DOC, dan DOCX yang diperbolehkan.\nFile type: ${file.type}\nExtension: ${fileExtension}`);
      e.target.value = ''; // Reset input file
      return;
    }
    
    // Warning jika MIME type kosong atau tidak standar (tapi extension valid)
    if (!allowedTypes.includes(file.type) && allowedExtensions.includes(fileExtension)) {
      console.warn('File MIME type tidak standar, tapi extension valid:', {
        type: file.type,
        extension: fileExtension
      });
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
  
  // Validate required fields with specific error messages
  const emptyFields = [];
  
  if (!formData.name) emptyFields.push(t('name') || 'Name');
  if (!formData.address) emptyFields.push(t('address') || 'Address');
  if (!formData.phone) emptyFields.push(t('phone') || 'Phone');
  if (!formData.education) emptyFields.push(t('lastHighestEducation') || 'Education');
  if (!formData.salaryExpectation) emptyFields.push(t('salaryExpectation') || 'Salary Expectation');
  if (!formData.email) emptyFields.push(t('email') || 'Email');
  if (!formData.previousPosition) emptyFields.push(t('previousPosition') || 'Previous Position');
  if (!formData.age) emptyFields.push(t('age') || 'Age');
  
  if (emptyFields.length > 0) {
    toast.error(`${t('pleaseFillRequired') || 'Please fill all required fields'}: ${emptyFields.join(', ')}`, { autoClose: 5000 });
    return;
  }

  if (!formData.cv) {
    toast.error(t('pleaseUploadCV') || 'Please upload your CV');
    return;
  }

  if (!jobDetail) {
    toast.error(t('jobNotFound') || 'Job information not found');
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
    formDataToSend.append('cv', formData.cv, formData.cv.name); // Explicitly set filename
    formDataToSend.append('karir_id', id || '');
    formDataToSend.append('user_id', String(jobDetail.pic.id));

    // Log untuk debugging
    console.log('=== SUBMITTING APPLICATION ===');
    console.log('Form Data:', {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      address: formData.address,
      education: formData.education,
      salary: formData.salaryExpectation,
      previousJob: formData.previousPosition,
      age: formData.age,
      karirId: id,
      userId: jobDetail.pic.id,
    });
    console.log('CV File:', {
      name: formData.cv.name,
      size: `${(formData.cv.size / 1024 / 1024).toFixed(2)}MB`,
      sizeBytes: formData.cv.size,
      type: formData.cv.type,
      lastModified: new Date(formData.cv.lastModified).toISOString()
    });
    
    // Log FormData contents (untuk debugging)
    console.log('FormData entries:');
    for (let pair of formDataToSend.entries()) {
      if (pair[1] instanceof File) {
        console.log(pair[0], ':', `[File: ${pair[1].name}, ${pair[1].size} bytes, ${pair[1].type}]`);
      } else {
        console.log(pair[0], ':', pair[1]);
      }
    }

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

    console.log('Response status:', response.status);
    console.log('Response headers:', Object.fromEntries(response.headers.entries()));

    // Check if response was redirected (indicates backend issue)
    if (response.redirected) {
      throw new Error('Backend API melakukan redirect. Hubungi admin untuk perbaiki konfigurasi Laravel (periksa routes/api.php dan APP_URL di .env)');
    }

    const result = await response.json();
    console.log('Response body:', result);

    if (response.ok) {
      toast.success(t('applicationSubmitted') || 'Application submitted successfully!');
      setTimeout(() => navigate('/carrier'), 1500);
    } else {
      // Log detailed error untuk debugging
      console.error('=== VALIDATION ERROR ===');
      console.error('Full response:', result);
      
      // Tampilkan pesan error yang lebih spesifik dari Laravel
      let errorMessage = result.message || 'Failed to submit application';
      
      // Jika ada validation errors dari Laravel
      if (result.errors) {
        const errorDetails = Object.entries(result.errors)
          .map(([field, messages]: [string, any]) => {
            const fieldLabel = {
              'name': 'Name',
              'email': 'Email',
              'phone': 'Phone',
              'address': 'Address',
              'last_highest_education': 'Education',
              'salary_expectation': 'Salary Expectation',
              'previous_job': 'Previous Position',
              'age': 'Age',
              'karir_id': 'Job ID',
              'user_id': 'PIC ID',
              'cv': 'CV File'
            }[field] || field;
            
            return `${fieldLabel}: ${Array.isArray(messages) ? messages.join(', ') : messages}`;
          })
          .join('\n');
        
        console.error('Field errors:', result.errors);
        
        // Jika error CV upload, tambahkan info tambahan
        if (result.errors.cv) {
          errorMessage = `Gagal upload CV.\n\n` +
            `File Anda: ${formData.cv.name} (${(formData.cv.size / 1024 / 1024).toFixed(2)}MB)\n\n` +
            `Kemungkinan penyebab:\n` +
            `1. Folder storage/app/public/cv tidak ada atau tidak punya permission write\n` +
            `2. Disk space server penuh\n` +
            `3. SELinux atau security policy memblokir write\n\n` +
            `Detail error: ${Array.isArray(result.errors.cv) ? result.errors.cv.join(', ') : result.errors.cv}\n\n` +
            `Harap hubungi administrator untuk memperbaiki konfigurasi server.`;
        } else {
          errorMessage = `Validation failed:\n${errorDetails}`;
        }
      }
      
      toast.error(errorMessage, { autoClose: 5000 });
      throw new Error(errorMessage);
    }
  } catch (error: any) {
    console.error('=== ERROR SUBMITTING ===');
    console.error('Error:', error);
    if (!error.message.includes('Validation failed') && !error.message.includes('Gagal upload')) {
      toast.error(error.message || t('applicationFailed') || 'Failed to submit application. Please try again.');
    }
  } finally {
    setSubmitting(false);
  }
};

  const handleCancel = () => {
    navigate(-1);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-20 pb-20">
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} closeOnClick pauseOnHover theme="colored" />
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
