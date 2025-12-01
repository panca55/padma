import { CheckCircle } from 'lucide-react';
import { benefits, services } from '../utils/lib';
import { useTranslation } from 'react-i18next';

function ServiceSection() {
  const { t } = useTranslation();
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">{t('ourServices')}</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              {t('comprehensiveSolutions')}
            </p>
          </div>

          {/* Service Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16" data-aos="fade-up" data-aos-delay="200">
            {services.map((service, index) => (
              <div key={index} className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg p-8 rounded-xl shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-200/50 dark:border-gray-700/50">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{t(service.titleKey)}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">{t(service.descKey)}</p>
                <ul className="space-y-3">
                  {service.benefitKeys.map((benefitKey, idx) => (
                    <li key={idx} className="flex items-start text-gray-700 dark:text-gray-300">
                      <CheckCircle className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-2 mt-0.5 shrink-0" />
                      <span className="text-sm">{t(benefitKey)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Benefits Section */}
          <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl rounded-xl p-8 shadow-2xl border border-gray-200/50 dark:border-gray-700/50" data-aos="fade-up" data-aos-delay="300">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-12">
              {t('benefitsCollab')}
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <div className="shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mr-4">
                    <img src={benefit.icon} alt={benefit.titleKey} className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white mb-2">{t(benefit.titleKey)}</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">{t(benefit.descKey)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
  )
}

export default ServiceSection
