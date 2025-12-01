import { Menu, Moon, Sun, X, Languages } from 'lucide-react';
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

interface NavbarSectionProps {
  isDark: boolean;
  setIsDark: (isDark: boolean) => void;
}

function NavbarSection({ isDark, setIsDark }: NavbarSectionProps) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { t, i18n } = useTranslation();

    const toggleLanguage = () => {
      const newLang = i18n.language === 'en' ? 'id' : 'en';
      i18n.changeLanguage(newLang);
    };
  return (
    <nav className="fixed w-full top-0 z-50 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 transition-colors duration-300">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between items-center h-16">
      
      {/* Logo */}
      <div className="flex items-center">
        <img src="/logo.jpg" alt="" style={{ width: '40px', height: '40px' }}/>
        <span className="ml-2 text-sm text-gray-600 dark:text-gray-400 hidden sm:block">
          Trusted and Excellent
        </span>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center space-x-8">
        <Link to="/" className="text-gray-800 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">{t('home')}</Link>
        <Link to="/about" className="text-gray-800 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">{t('about')}</Link>
        <Link to="/clients-services" className="text-gray-800 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">{t('clientsServices')}</Link>
        <Link to="/partner" className="text-gray-800 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">Partner</Link>
        <Link to="/#services" className="text-gray-800 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">{t('services')}</Link>
        <Link to="/#contact" className="text-gray-800 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">{t('contact')}</Link>

        {/* Language Toggle */}
        <button
          onClick={toggleLanguage}
          className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition flex items-center gap-1"
          title={i18n.language === 'en' ? 'Switch to Indonesian' : 'Beralih ke Bahasa Inggris'}
        >
          <Languages className="w-5 h-5 text-gray-700 dark:text-gray-300" />
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300 uppercase">
            {i18n.language === 'en' ? 'ID' : 'EN'}
          </span>
        </button>

        {/* Theme Toggle */}
        <button
          onClick={() => setIsDark(!isDark)}
          className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
        >
          {isDark ? <Sun className="w-5 h-5 text-yellow-500" /> : <Moon className="w-5 h-5 text-gray-700" />}
        </button>
      </div>

      {/* Mobile Buttons */}
      <div className="md:hidden flex items-center space-x-2">
        <button
          onClick={toggleLanguage}
          className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition flex items-center gap-1"
          title={i18n.language === 'en' ? 'Switch to Indonesian' : 'Beralih ke Bahasa Inggris'}
        >
          <Languages className="w-5 h-5 text-gray-700 dark:text-gray-300" />
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300 uppercase">
            {i18n.language === 'en' ? 'ID' : 'EN'}
          </span>
        </button>
        <button
          onClick={() => setIsDark(!isDark)}
          className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800"
        >
          {isDark ? <Sun className="w-5 h-5 text-yellow-500" /> : <Moon className="w-5 h-5 text-gray-700" />}
        </button>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
    </div>
  </div>

  {/* Mobile Menu */}
  {isMenuOpen && (
    <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
      <div className="px-4 py-4 space-y-3">
        <Link to="/" className="block text-gray-800 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">{t('home')}</Link>
        <Link to="/about" className="block text-gray-800 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">{t('about')}</Link>
        <Link to="/clients-services" className="block text-gray-800 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">{t('clientsServices')}</Link>
        <Link to="/partner" className="block text-gray-800 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Partner</Link>
        <Link to="/#services" className="block text-gray-800 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">{t('services')}</Link>
        <Link to="/#contact" className="block text-gray-800 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">{t('contact')}</Link>
      </div>
    </div>
  )}
</nav>

  )
}

export default NavbarSection
