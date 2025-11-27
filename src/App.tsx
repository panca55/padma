import { useState, useEffect } from 'react'
import NavbarSection from './components/NavbarSection'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import ServiceSection from './components/ServiceSection'
import ContactSection from './components/ContactSection'
import FooterSection from './components/FooterSection'
import ClientsSections from './components/ClientsSection'

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
      <NavbarSection  isDark={isDark} setIsDark={setIsDark} />
      <HeroSection />
      <AboutSection />
      <ClientsSections/>
      <ServiceSection />
      <ContactSection />
      <FooterSection />
    </div>
  )
}

export default App
