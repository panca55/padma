import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import NavbarSection from './components/NavbarSection'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import ServiceSection from './components/ServiceSection'
import ContactSection from './components/ContactSection'
import FooterSection from './components/FooterSection'
import ClientsSections from './components/ClientsSection'
import ClientsServicePage from './pages/ClientsServicePage'
import AboutPage from './pages/AboutPage'
import PartnerPage from './pages/PartnerPage'
import NotFoundPage from './pages/NotFoundPage'
import i18n from './i18n'

function App() {
  const [isDark, setIsDark] = useState(() => {
  return localStorage.getItem("theme") === "dark";
});
useEffect(() => {
  localStorage.setItem("theme", isDark ? "dark" : "light");
  document.documentElement.classList.toggle("dark", isDark);
}, [isDark]);

  return (
    <div className="bg-white dark:bg-black min-h-screen text-black dark:text-white">
      <Routes>
        <Route path="/" element={
          <>
            <NavbarSection isDark={isDark} setIsDark={setIsDark} />
            <HeroSection />
            <AboutSection />
            <ServiceSection />
            <ClientsSections />
            <ContactSection />
            <FooterSection />
          </>
        } />
        <Route path="/about" element={
          <>
            <NavbarSection isDark={isDark} setIsDark={setIsDark} />
            <AboutPage />
            <FooterSection />
          </>
        } />
        <Route path="/partner" element={
          <>
            <NavbarSection isDark={isDark} setIsDark={setIsDark} />
            <PartnerPage />
            <FooterSection />
          </>
        } />
        <Route path="/clients-services" element={
          <>
            <NavbarSection isDark={isDark} setIsDark={setIsDark} />
            <ClientsServicePage key={i18n.language} />
            <FooterSection />
          </>
        } />
        {/* 404 Catch-all Route */}
        <Route path="*" element={
          <>
            <NavbarSection isDark={isDark} setIsDark={setIsDark} />
            <NotFoundPage />
            <FooterSection />
          </>
        } />
      </Routes>
    </div>
  )
}

export default App
