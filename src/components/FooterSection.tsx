import logo from '../assets/clients/logo.png';
import x from '../assets/clients/x.png';
import linkedin from '../assets/clients/linkedin.png';
import ig from '../assets/clients/ig.png';
import { useTranslation } from 'react-i18next';
// import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
function FooterSection() {
  const { t } = useTranslation();
  return (
    <footer className="bg-gray-900/95 dark:bg-black/95 backdrop-blur-lg text-white py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-8">
            <div className="text-center sm:text-left">
            <img src={logo} alt="Logo Padma Raharja Sentosa" style={{ width: '80px', height: '80px' }} className="mb-4 mx-auto sm:mx-0"/>

              <p className="text-gray-400 text-sm sm:text-base">
                {t('ptPadma')}<br />
                {t('trustedExcellentFooter')}<br />
                {t('since2020')}
              </p>
            </div>
            <div className="text-center sm:text-left sm:col-span-1 md:col-span-1">
              <h4 className="font-bold mb-4">{t('quickLinks')}</h4>
              <ul className="space-y-2 text-gray-400 text-sm sm:text-base"> 
                <li><a href="/" className="hover:text-white transition">{t('home')}</a></li>
                <li><a href="/about" className="hover:text-white transition">{t('about')}</a></li>
                <li><a href="/news" className="hover:text-white transition">{t('news')}</a></li>
                <li><a href="/clients-services" className="hover:text-white transition">{t('clientsServices')}</a></li>
                <li><a href="/partner" className="hover:text-white transition">{t('partner')}</a></li>
                <li><a href="/carrier" className="hover:text-white transition">{t('carrier')}</a></li>
              </ul>
            </div>
            <div className="text-center sm:text-left sm:col-span-2 md:col-span-1">
              <h4 className="font-bold mb-4">{t('servicesFooter')}</h4>
              <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
                <li>{t('bpoShort')}</li>
                <li>{t('mpoShort')}</li>
                <li>{t('headhunterShort')}</li>
              </ul>
              {/* sosmed */}
              <div className="mt-6 flex justify-center sm:justify-start space-x-4">
                <a href="https://www.instagram.com/padmaraharjasentosa" target="_blank" rel="noopener noreferrer" className="group hover:text-white transition-all duration-300">
                  <img src={ig} alt="Instagram" className="w-5 h-5 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 filter group-hover:brightness-110" />
                </a>
                <a href="https://twitter.com/PadmaRaharjaS" target="_blank" rel="noopener noreferrer" className="group hover:text-white transition-all duration-300">
                  <img src={x} alt="Twitter" className="w-5 h-5 group-hover:scale-110 group-hover:-rotate-12 transition-all duration-300 filter group-hover:brightness-110" />
                </a>
                <a href="https://www.linkedin.com/company/pt-padma-raharja-sentosa/" target="_blank" rel="noopener noreferrer" className="group hover:text-white transition-all duration-300">
                  <img src={linkedin} alt="LinkedIn" className="w-5 h-5 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 filter group-hover:brightness-110" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2020 {t('ptPadma')}. {t('allRights')}</p>
          </div>
        </div>
      </footer>
  )
}

export default FooterSection
