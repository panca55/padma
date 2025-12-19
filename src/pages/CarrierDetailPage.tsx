import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowLeft,  CheckCircle2, ChevronRight } from 'lucide-react';

interface JobDetail {
  id: string;
  title: string;
  company: string;
  location: string;
  locationType: string;
  salaryMin: number;
  salaryMax: number;
  education: string;
  gender: string;
  age: string;
  experience: string;
  description: string;
  responsibilities?: string[];
  position?: string;
  branch?: string;
}

export default function CarrierDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [job, setJob] = useState<JobDetail | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobDetail = async () => {
      try {
        setLoading(true);
        // Replace with your actual API endpoint
        // const response = await fetch(`YOUR_API_ENDPOINT/jobs/${id}`);
        // const data = await response.json();
        // setJob(data);
        
        // Dummy data
        const dummyJob: JobDetail = {
          id: id || '1',
          title: 'Administrator',
          company: 'PT Padma Raharja Sentosa',
          location: 'Jakarta Barat, DKI Jakarta',
          locationType: 'Full Time',
          salaryMin: 3000000,
          salaryMax: 4000000,
          education: 'S1/S2',
          gender: 'Male / Female',
          age: '20-25 y/o',
          experience: 'None',
          description: `The Administrator is responsible for managing daily office operations, ensuring all administrative tasks run efficiently and smoothly. This includes handling documentation, coordinating meetings, maintaining records, and supporting internal teams with essential operational needs.

Key responsibilities include preparing reports, managing correspondence, organizing schedules, and ensuring proper filing systems are maintained. The Administrator also acts as a point of contact for internal and external communication, providing timely support and information when needed.

This position requires strong organizational skills, attention to detail, the ability to multitask, and proficiency with office software and communication tools.`
        };

        setJob(dummyJob);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching job detail:', error);
        setLoading(false);
      }
    };

    fetchJobDetail();
    window.scrollTo(0, 0);
  }, [id]);

  const formatSalary = (min: number, max: number) => {
    const formatNumber = (num: number) => {
      return `Rp${num.toLocaleString('id-ID')}`;
    };
    return `${formatNumber(min)} - ${formatNumber(max)}`;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-500 pt-20">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <div className="animate-pulse">
            <div className="h-8 bg-white/20 rounded w-32 mb-8"></div>
            <div className="bg-white dark:bg-gray-800 rounded-3xl p-8">
              <div className="h-20 bg-gray-200 dark:bg-gray-700 rounded mb-6"></div>
              <div className="space-y-4">
                <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded"></div>
                <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded"></div>
                <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!job) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-500 pt-20 flex items-center justify-center">
        <div className="text-center text-white">
          <h2 className="text-2xl font-bold mb-4">{t('jobNotFound')}</h2>
          <button
            onClick={() => navigate('/carrier')}
            className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-full hover:bg-gray-100 transition-all duration-300"
          >
            {t('backToJobs')}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-500">
      <div className="max-w-4xl mx-auto px-6 py-24 md:py-32">
        {/* Back Button & Title */}
        <div className="flex items-center gap-4 mb-8">
          <button
            onClick={() => navigate('/carrier')}
            className="p-3 bg-white/20 backdrop-blur-sm text-white rounded-full hover:bg-white/30 transition-all duration-300"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1 className="text-3xl font-bold text-white">{t('jobDetail')}</h1>
        </div>

        {/* Job Detail Card */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden">
          <div className="p-8 md:p-12">
            {/* Header with Logo */}
            <div className="flex items-start gap-6 mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                <img 
                  src="/logo.jpg" 
                  alt="Padma Logo" 
                  className="w-16 h-16 object-contain"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {job.title}
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 font-medium">
                  {job.company}
                </p>
              </div>
            </div>

            {/* Job Info */}
            <div className="space-y-4 mb-8 pb-8 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300 font-medium">
                  {job.location}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300 font-medium">
                  {job.locationType}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300 font-medium">
                  {formatSalary(job.salaryMin, job.salaryMax)}
                </span>
              </div>
            </div>

            {/* Requirements */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                {t('requirements')}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
                      {t('lastHighestEducation')}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                      {job.education}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
                      {t('gender')}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                      {job.gender}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
                      {t('age')}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                      {job.age}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
                      {t('experience')}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                      {job.experience}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Job Description */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                {t('jobDescription')}
              </h3>
              <div className="text-gray-600 dark:text-gray-400 leading-relaxed whitespace-pre-line">
                {job.description}
              </div>
            </div>

            {/* Apply Button */}
            <div className="flex justify-end pt-6">
              <button
                onClick={() => navigate(`/carrier/${id}/apply`)}
                className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold text-lg rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                {t('apply')}
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
