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
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-32 px-6 lg:px-8 overflow-hidden pt-20">
        <div className="absolute inset-0 bg-white"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-blue-600 mb-6" data-aos="fade-up">
            {t('aboutUsTitle')}
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto mb-8" data-aos="fade-up" data-aos-delay="200">
            {t('aboutPageDesc')}
          </p>
        </div>
      </section>

      {/* Padma is Your Trusted Partner */}
      <section className="py-20 px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div data-aos="fade-right">
              <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-6">
                {t('padmaPartner')}
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                {t('aboutPageContent')}
              </p>
            </div>

            {/* Building Image */}
            <div data-aos="fade-left">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Building"
                  className="w-full h-96 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid gap-8">
            {/* Vision */}
            <div className="bg-gray-50 rounded-3xl p-8 shadow-lg" data-aos="fade-up">
              <div className="flex items-start gap-6">
                <div className="p-4 bg-blue-100 rounded-2xl flex-shrink-0">
                  <Eye className="w-8 h-8 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-blue-600 mb-4">{t('vision')}</h3>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    {t('visionText')}
                  </p>
                </div>
              </div>
            </div>

            {/* Mission */}
            <div className="bg-gray-50 rounded-3xl p-8 shadow-lg" data-aos="fade-up" data-aos-delay="200">
              <div className="flex items-start gap-6">
                <div className="p-4 bg-blue-100 rounded-2xl flex-shrink-0">
                  <Target className="w-8 h-8 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-blue-600 mb-4">{t('mission')}</h3>
                  <ul className="space-y-3 text-gray-700 text-lg">
                    <li className="flex items-start gap-3">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>{t('mission1')}</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>{t('mission3')}</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>{t('mission2')}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-6">
              {t('ourValues')}
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6" data-aos="fade-up" data-aos-delay="200">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <img src={value.icon} alt={value.title} className="w-12 h-12" />
                </div>
                <h4 className="text-sm font-semibold text-gray-900 leading-tight">
                  {t(value.title.toLowerCase().replace(' ', ''))}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-20 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-6">
              {t('ourServices')}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {t(service.titleKey)}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {t(service.descKey)}
                </p>
                <ul className="space-y-3">
                  {service.pointKeys.map((pointKey, pointIndex) => (
                    <li key={pointIndex} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm leading-relaxed">{t(pointKey)}</span>
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