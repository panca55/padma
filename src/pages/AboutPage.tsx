// src/pages/AboutPage.tsx
import { Target, Eye } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import briefcase from '../assets/clients/briefcase.png';
import handshake from '../assets/clients/handshake.png';
import material from '../assets/clients/material.png';
import shield from '../assets/clients/shield-yes.png';
import uil from '../assets/clients/uil.png';

const values = [
  { icon: briefcase, title: "Professional" },
  { icon: shield, title: "High Integrity" },
  { icon: material, title: "Accountable" },
  { icon: uil, title: "Competitive Cost Efficient" },
  { icon: handshake, title: "Excellent Service" },
];

const services = [
  {
    titleKey: "bpo",
    descKey: "bpoDesc",
    pointKeys: ["bpoBenefit1", "bpoBenefit2", "bpoBenefit3"]
  },
  {
    titleKey: "mpo",
    descKey: "mpoDesc", 
    pointKeys: ["mpoBenefit1", "mpoBenefit2", "mpoBenefit3"]
  },
  {
    titleKey: "headhunter",
    descKey: "headhunterDesc",
    pointKeys: ["headhunterBenefit1", "headhunterBenefit2", "headhunterBenefit3"]
  }
];

export default function AboutPage() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-white dark:bg-gray-900"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-blue-600 dark:text-blue-400 mb-4 sm:mb-6" data-aos="fade-up">
            {t('aboutUsTitle')}
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto mb-6 sm:mb-8" data-aos="fade-up" data-aos-delay="200">
            {t('aboutPageDesc')}
          </p>
        </div>
      </section>

      {/* Padma is Your Trusted Partner */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            {/* Text Content */}
            <div data-aos="fade-right">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-blue-600 dark:text-blue-400 mb-4 sm:mb-6">
                {t('padmaPartner')}
              </h2>
              <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                {t('aboutPageContent')}
              </p>
            </div>

            {/* Building Image */}
            <div>
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Building"
                  className="w-full h-64 sm:h-80 md:h-96 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <div className="grid gap-6 sm:gap-8 overflow-hidden">
            {/* Vision */}
            <div className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 sm:p-8 border border-gray-200 dark:border-gray-700 hover:bg-gradient-to-r hover:from-[#155DFB] hover:to-[#00B7DB] hover:shadow-2xl hover:-translate-y-1 hover:scale-[1.005] sm:hover:-translate-y-2 sm:hover:scale-[1.01] will-change-transform transition-all duration-700" data-aos="fade-up" data-aos-delay="200" style={{transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)'}}>
            <div className="flex items-start gap-4 sm:gap-6">
              <div className="p-3 sm:p-4 bg-gray-100 dark:bg-gray-700 group-hover:bg-white/20 rounded-2xl flex-shrink-0 transition-all duration-300">
                <Eye className="w-6 h-6 sm:w-8 sm:h-8 text-gray-700 dark:text-gray-300 group-hover:text-white transition-colors duration-300" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white group-hover:text-white mb-3 transition-colors duration-300">{t('vision')}</h3>
                <p className="text-gray-700 dark:text-gray-300 group-hover:text-white leading-relaxed transition-colors duration-300">
                  {t('visionText')}
                </p>
              </div>
            </div>
          </div>

            {/* Mission */}
            <div className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 sm:p-8 border border-gray-200 dark:border-gray-700 hover:bg-gradient-to-r hover:from-[#155DFB] hover:to-[#00B7DB] hover:shadow-2xl hover:-translate-y-1 hover:scale-[1.005] sm:hover:-translate-y-2 sm:hover:scale-[1.01] will-change-transform transition-all duration-700" data-aos="fade-up" data-aos-delay="300" style={{transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)'}}>
            <div className="flex items-start gap-4 sm:gap-6">
              <div className="p-3 sm:p-4 bg-gray-100 dark:bg-gray-700 group-hover:bg-white/20 rounded-2xl flex-shrink-0 transition-all duration-300">
                <Target className="w-6 h-6 sm:w-8 sm:h-8 text-gray-700 dark:text-gray-300 group-hover:text-white transition-colors duration-300" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white group-hover:text-white mb-4 transition-colors duration-300">{t('mission')}</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-gray-500 dark:text-gray-400 group-hover:text-white/80 mt-1 transition-colors duration-300">•</span>
                    <span className="text-gray-700 dark:text-gray-300 group-hover:text-white leading-relaxed transition-colors duration-300">{t('mission1')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gray-500 dark:text-gray-400 group-hover:text-white/80 mt-1 transition-colors duration-300">•</span>
                    <span className="text-gray-700 dark:text-gray-300 group-hover:text-white leading-relaxed transition-colors duration-300">{t('mission2')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gray-500 dark:text-gray-400 group-hover:text-white/80 mt-1 transition-colors duration-300">•</span>
                    <span className="text-gray-700 dark:text-gray-300 group-hover:text-white leading-relaxed transition-colors duration-300">{t('mission3')}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16" data-aos="fade-up">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-blue-600 dark:text-blue-400 mb-4 sm:mb-6">
              {t('ourValues')}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 overflow-hidden" data-aos="fade-up" data-aos-delay="200">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-700 rounded-2xl p-6 text-center shadow-lg hover:shadow-xl hover:-translate-y-2 hover:scale-105 transform-gpu transition-all duration-500 ease-in-out"
              >
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <img src={value.icon} alt={value.title} className="w-12 h-12 dark:brightness-0 dark:invert" />
                </div>
                <h4 className="text-sm font-semibold text-gray-900 dark:text-white leading-tight">
                  {t(value.title.toLowerCase().replace(/\s+/g, ''))}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16" data-aos="fade-up">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-blue-600 dark:text-blue-400 mb-4 sm:mb-6">
              {t('ourServices')}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-4">
                  {t(service.titleKey)}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {t(service.descKey)}
                </p>
                <ul className="space-y-3">
                  {service.pointKeys.map((pointKey, pointIndex) => (
                    <li key={pointIndex} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">{t(pointKey)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}