// src/components/AboutSection.tsx
import { Target, Award } from 'lucide-react';
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

export default function AboutSection() {
  const { t } = useTranslation();
  return (
    <section id="about" className="py-16 sm:py-24 px-6 lg:px-8 overflow-hidden bg-gradient-to-r from-blue-50 via-white to-white dark:from-gray-900 dark:via-gray-900 dark:to-gray-900" style={{ contain: 'layout' }}>
      <div className="max-w-7xl mx-auto overflow-hidden" style={{ contain: 'layout' }}>

        {/* Header + Intro Text seperti PDF Halaman 2 */}
        <div className="text-center mb-12 sm:mb-20" data-aos="fade-up">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-[#155DFB] to-[#00B7DB] bg-clip-text text-transparent mb-6">
            {t('padmaPartner')}
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            {t('aboutDescription')}
          </p>
          <p className="mt-6 text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {t('managedLeaders')}
          </p>
          <div className="mt-8 w-32 h-1 bg-gradient-to-r from-[#155DFB] to-[#00B7DB] mx-auto rounded-full"></div>
        </div>

        {/* Vision & Mission – Simple card layout like image */}
        <div className="grid gap-6 sm:gap-8 mb-12 sm:mb-20 max-w-4xl mx-auto overflow-hidden">
          {/* Vision */}
          <div className="
                group bg-white dark:bg-gray-800 rounded-2xl
                shadow-lg p-6 sm:p-8 border border-gray-200 dark:border-gray-700
                hover:bg-gradient-to-r hover:from-[#155DFB] hover:to-[#00B7DB]
                hover:shadow-2xl
                transform-gpu
                hover:-translate-y-1 hover:scale-[1.005] sm:hover:-translate-y-1 sm:hover:scale-[1.01]
                transition-[transform,box-shadow,background]
                duration-500
                will-change-transform"
              data-aos="fade-up"
              data-aos-delay="200"
              style={{
                transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
              }}
            >
            <div className="flex items-start gap-4 sm:gap-6">
              <div className="p-3 sm:p-4 bg-gray-100 dark:bg-gray-700 group-hover:bg-white/20 rounded-2xl flex-shrink-0 transition-all duration-300">
                <Target className="w-6 h-6 sm:w-8 sm:h-8 text-gray-700 dark:text-gray-300 group-hover:text-white transition-colors duration-300" />
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
          <div className="
                group bg-white dark:bg-gray-800 rounded-2xl
                shadow-lg p-6 sm:p-8 border border-gray-200 dark:border-gray-700
                hover:bg-gradient-to-r hover:from-[#155DFB] hover:to-[#00B7DB]
                hover:shadow-2xl
                transform-gpu
                hover:-translate-y-1 hover:scale-[1.005] sm:hover:-translate-y-1 sm:hover:scale-[1.01]
                transition-[transform,box-shadow,background]
                duration-500
                will-change-transform
              "
              data-aos="fade-up"
              data-aos-delay="300"
              style={{
                transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
              }}
            >
            <div className="flex items-start gap-4 sm:gap-6">
              <div className="p-3 sm:p-4 bg-gray-100 dark:bg-gray-700 group-hover:bg-white/20 rounded-2xl flex-shrink-0 transition-all duration-300">
                <Award className="w-6 h-6 sm:w-8 sm:h-8 text-gray-700 dark:text-gray-300 group-hover:text-white transition-colors duration-300" />
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

        {/* Our Values – Grid lebih menarik */}
        <div className="text-center mb-8 sm:mb-12" data-aos="fade-up" data-aos-delay="400">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            {t('ourValues')}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 dark:text-gray-400">
            {t('valuesSubtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 sm:gap-8 overflow-hidden px-4" data-aos="fade-up" data-aos-delay="500">
          {values.map((value, index) => (
            <div
              key={index}
              className="group my-6 relative bg-white/70 dark:bg-gray-800/70 backdrop-blur-lg rounded-3xl p-6 sm:p-8 text-center shadow-xl hover:shadow-2xl hover:bg-gradient-to-r hover:from-[#155DFB] hover:to-[#00B7DB] hover:-translate-y-2 sm:hover:-translate-y-3 hover:scale-105 transform-gpu transition-all duration-500 ease-in-out border border-gray-200/50 dark:border-gray-700/50"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-400"></div>
              <div className="relative z-10">
                <div className="p-4 sm:p-5 bg-blue-100 dark:bg-blue-900/50 group-hover:stroke-2 stroke-white bg-transparent rounded-full w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-6 flex items-center justify-center group-hover:scale-105 sm:group-hover:scale-110 transition-all duration-300">
                  <img src={value.icon} alt={value.title} className="w-10 h-10 sm:w-12 sm:h-12 group-hover:filter group-hover:invert group-hover:brightness-0 group-hover:contrast-100 transition-all duration-300" />
                </div>
                <h4 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white group-hover:text-white leading-tight transition-colors duration-300">
                  {t(value.title.toLowerCase().replace(/\s+/g, ''))}
                </h4>
              </div>
            </div>
          ))}
        </div>

        {/* Optional: CTA kecil di bawah */}
        <div className="text-center mt-12 sm:mt-20" data-aos="fade-up" data-aos-delay="600">
          <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300">
            {t('growTogether')}
          </p>
        </div>
      </div>
    </section>
  );
}