// src/pages/NotFoundPage.tsx
import { Home, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function NotFoundPage() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 flex items-center justify-center px-6">
      <div className="max-w-2xl mx-auto text-center">
        {/* 404 Number */}
        <div className="mb-8" data-aos="fade-up">
          <h1 className="text-[150px] md:text-[200px] font-black text-transparent bg-gradient-to-r from-[#155DFB] to-[#00B7DB] bg-clip-text leading-none">
            404
          </h1>
        </div>

        {/* Error Message */}
        <div className="mb-8" data-aos="fade-up" data-aos-delay="200">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t('pageNotFoundTitle')}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
            {t('pageNotFoundDesc')}
          </p>
        </div>

     

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center" data-aos="fade-up" data-aos-delay="400">
          <Link
            to="/"
            className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#155DFB] to-[#00B7DB] text-white font-bold text-base rounded-full hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 gap-3"
          >
            <Home className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
            <span>{t('backToHome')}</span>
          </Link>
          
          <button
            onClick={() => window.history.back()}
            className="group inline-flex items-center px-8 py-4 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white font-bold text-base rounded-full hover:border-[#155DFB] hover:bg-blue-50 dark:hover:bg-gray-700 transition-all duration-300 gap-3"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
            <span>{t('goBack')}</span>
          </button>
        </div>

        {/* Contact Information */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700" data-aos="fade-up" data-aos-delay="500">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            {t('needHelp')}
          </p>
          <div className="flex flex-col sm:flex-row gap-2 justify-center text-sm">
            <span className="text-gray-500 dark:text-gray-500">
              {t('contactUs')}: 
            </span>
            <a 
              href="mailto:prs@padmaraharjasentosa.com" 
              className="text-[#155DFB] hover:text-[#00B7DB] font-medium transition-colors duration-300"
            >
              prs@padmaraharjasentosa.com
            </a>
            <span className="hidden sm:inline text-gray-400">•</span>
            <a 
              href="tel:(021) 7486 7140" 
              className="text-[#155DFB] hover:text-[#00B7DB] font-medium transition-colors duration-300"
            >
              (021) 7486 7140
            </a>
          </div>
        </div>

        {/* Floating Particles Animation */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-pulse opacity-60"></div>
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-cyan-300 rounded-full animate-bounce opacity-50"></div>
          <div className="absolute bottom-1/4 left-1/2 w-3 h-3 bg-blue-300 rounded-full animate-ping opacity-40"></div>
          <div className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse opacity-70"></div>
        </div>
      </div>
    </div>
  );
}