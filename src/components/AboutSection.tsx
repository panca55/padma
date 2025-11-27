// src/components/AboutSection.tsx
import { Target, Award, Users, Shield, Zap, HeartHandshake, ChevronRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const values = [
  { icon: Shield, title: "Professional" },
  { icon: HeartHandshake, title: "High Integrity" },
  { icon: Users, title: "Accountable" },
  { icon: Zap, title: "Competitive Cost Efficient" },
  { icon: Award, title: "Excellent Service" },
];

export default function AboutSection() {
  const { t } = useTranslation();
  return (
    <section id="about" className="py-24 px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-blue-50 via-white to-white dark:from-gray-900 dark:via-gray-900 dark:to-gray-900">
      <div className="max-w-7xl mx-auto">

        {/* Header + Intro Text seperti PDF Halaman 2 */}
        <div className="text-center mb-20" data-aos="fade-up">
          <h1 className="text-5xl md:text-6xl font-bold text-blue-900 dark:text-blue-400 mb-6">
            {t('padmaPartner')}
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            {t('aboutDescription')}
          </p>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {t('managedLeaders')}
          </p>
          <div className="mt-8 w-32 h-1 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto rounded-full"></div>
        </div>

        {/* Vision & Mission – Desain lebih premium */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Vision */}
          <div className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-200/50 dark:border-gray-700/50 p-10 hover:shadow-3xl hover:-translate-y-2 transition-all duration-500 overflow-hidden" data-aos="fade-up" data-aos-delay="200">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10 flex items-start gap-5">
              <div className="p-4 bg-blue-100 dark:bg-blue-900/50 rounded-2xl">
                <Target className="w-10 h-10 text-blue-700 dark:text-blue-400" />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">{t('vision')}</h3>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  {t('visionText')}
                </p>
              </div>
            </div>
          </div>

          {/* Mission */}
          <div className="group relative bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl shadow-2xl p-10 text-white hover:shadow-3xl hover:-translate-y-2 transition-all duration-500" data-aos="fade-up" data-aos-delay="300">
            <div className="relative z-10">
              <div className="flex items-center gap-5 mb-6">
                <div className="p-4 bg-white/20 backdrop-blur-sm rounded-2xl">
                  <Award className="w-10 h-10" />
                </div>
                <h3 className="text-3xl font-bold">Our Mission</h3>
              </div>
              <ul className="space-y-5 text-lg">
                {[
                  t('mission1'),
                  t('mission2'),
                  t('mission3')
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <ChevronRight className="w-6 h-6 mt-0.5 flex-shrink-0" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Our Values – Grid lebih menarik */}
        <div className="text-center mb-12" data-aos="fade-up" data-aos-delay="400">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            {t('ourValues')}
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            {t('valuesSubtitle')}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8" data-aos="fade-up" data-aos-delay="500">
          {values.map((value, index) => (
            <div
              key={index}
              className="group relative bg-white/70 dark:bg-gray-800/70 backdrop-blur-lg rounded-3xl p-8 text-center shadow-xl hover:shadow-2xl hover:-translate-y-3 hover:scale-105 transition-all duration-400 border border-gray-200/50 dark:border-gray-700/50"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-400"></div>
              <div className="relative z-10">
                <div className="p-5 bg-blue-100 dark:bg-blue-900/50 rounded-full w-24 h-24 mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-12 h-12 text-blue-700 dark:text-blue-400" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 dark:text-white leading-tight">
                  {t(value.title.toLowerCase().replace(' ', ''))}
                </h4>
              </div>
            </div>
          ))}
        </div>

        {/* Optional: CTA kecil di bawah */}
        <div className="text-center mt-20" data-aos="fade-up" data-aos-delay="600">
          <p className="text-xl text-gray-700 dark:text-gray-300">
            {t('growTogether')}
          </p>
        </div>
      </div>
    </section>
  );
}