import { Menu, Moon, Sun, X } from 'lucide-react';
import { useState } from 'react'

interface NavbarSectionProps {
  isDark: boolean;
  setIsDark: (isDark: boolean) => void;
}

function NavbarSection({ isDark, setIsDark }: NavbarSectionProps) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
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
        <a href="#home" className="text-gray-800 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">Home</a>
        <a href="#about" className="text-gray-800 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">About</a>
        <a href="#services" className="text-gray-800 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">Services</a>
        <a href="#contact" className="text-gray-800 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">Contact</a>

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
        <a href="#home" className="block text-gray-800 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Home</a>
        <a href="#about" className="block text-gray-800 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">About</a>
        <a href="#services" className="block text-gray-800 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Services</a>
        <a href="#contact" className="block text-gray-800 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Contact</a>
      </div>
    </div>
  )}
</nav>

  )
}

export default NavbarSection
