import { Mail, MapPin, Phone } from 'lucide-react'
import { useTranslation } from 'react-i18next'

function ContactSection() {
  const { t } = useTranslation();
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-14 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 underline decoration-blue-600">{t('contactUsTitle')}</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-16" data-aos="fade-up" data-aos-delay="200">
              {/* Contact Information */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">{t('headOffice')}</h3>
                
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center mb-2">
                      <MapPin className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-2" />
                      <h4 className="font-semibold text-gray-900 dark:text-white">{t('address')}</h4>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 ml-7">
                      Ruko Harvest Bintaro, Blok R No.9,<br />
                      Jl. Merpati Raya, Sawah Lama,<br />
                      Tangerang Selatan, Banten, 15413
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center mb-2">
                      <Phone className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-2" />
                      <h4 className="font-semibold text-gray-900 dark:text-white">{t('phone')}</h4>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 ml-7">(021) 7486 7140</p>
                  </div>

                  <div>
                    <div className="flex items-center mb-2">
                      <Mail className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-2" />
                      <h4 className="font-semibold text-gray-900 dark:text-white">{t('email')}</h4>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 ml-7">prs@padmaraharjasentosa.com</p>
                  </div>
                </div>
              </div>

              {/* Other Offices */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">{t('otherOffice')}</h3>
                
                <div className="grid grid-cols-4 gap-x-8 gap-y-4 text-gray-600 dark:text-gray-400">
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 text-blue-600 dark:text-blue-400 mr-2" />
                    <span>Surabaya</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 text-blue-600 dark:text-blue-400 mr-2" />
                    <span>Bandung</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 text-blue-600 dark:text-blue-400 mr-2" />
                    <span>Semarang</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 text-blue-600 dark:text-blue-400 mr-2" />
                    <span>Yogyakarta</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 text-blue-600 dark:text-blue-400 mr-2" />
                    <span>Medan</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 text-blue-600 dark:text-blue-400 mr-2" />
                    <span>Bekasi</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 text-blue-600 dark:text-blue-400 mr-2" />
                    <span>Kediri</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 text-blue-600 dark:text-blue-400 mr-2" />
                    <span>Jember</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </section>
  )
}

export default ContactSection
