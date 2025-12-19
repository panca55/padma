import { Menu, Moon, Sun, X } from 'lucide-react';
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
        <Link to="/partner" className="text-gray-800 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">{t('partner')}</Link>
        <Link to="/carrier" className="text-gray-800 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">{t('carrier')}</Link>
        <Link to="/#services" className="text-gray-800 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">{t('services')}</Link>
        <Link to="/#contact" className="text-gray-800 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">{t('contact')}</Link>

        {/* Language Toggle */}
        <div className="flex items-center bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
          <button
            onClick={() => i18n.changeLanguage('id')}
            className={`px-3 py-1 text-sm font-medium rounded transition-all ${
              i18n.language === 'id' 
                ? 'bg-blue-600 text-white shadow-sm' 
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200'
            }`}
          >
            ID
          </button>
          <div className="w-px h-4 bg-gray-300 dark:bg-gray-600 mx-1"></div>
          <button
            onClick={() => i18n.changeLanguage('en')}
            className={`px-3 py-1 text-sm font-medium rounded transition-all ${
              i18n.language === 'en' 
                ? 'bg-blue-600 text-white shadow-sm' 
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200'
            }`}
          >
            EN
          </button>
        </div>

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
        <div className="flex items-center bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
          <button
            onClick={() => i18n.changeLanguage('id')}
            className={`px-2 py-1 text-xs font-medium rounded transition-all ${
              i18n.language === 'id' 
                ? 'bg-blue-600 text-white shadow-sm' 
                : 'text-gray-600 dark:text-gray-400'
            }`}
          >
            ID
          </button>
          <div className="w-px h-3 bg-gray-300 dark:bg-gray-600 mx-1"></div>
          <button
            onClick={() => i18n.changeLanguage('en')}
            className={`px-2 py-1 text-xs font-medium rounded transition-all ${
              i18n.language === 'en' 
                ? 'bg-blue-600 text-white shadow-sm' 
                : 'text-gray-600 dark:text-gray-400'
            }`}
          >
            EN
          </button>
        </div>
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
        <Link to="/partner" className="block text-gray-800 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">{t('partner')}</Link>
        <Link to="/carrier" className="block text-gray-800 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">{t('carrier')}</Link>
        <Link to="/#services" className="block text-gray-800 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">{t('services')}</Link>
        <Link to="/#contact" className="block text-gray-800 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">{t('contact')}</Link>
      </div>
    </div>
  )}
</nav>

  )
}

export default NavbarSection
