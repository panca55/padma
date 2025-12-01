// src/components/HeroSection.tsx
import { ChevronRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';

const stats = [
  { number: "2.000+", label: "deployedEmployees" },
  { number: "500+", label: "permanentStaff" },
  { number: "5", label: "branchOffices" },
  { number: "13", label: "salesRepresentatives" },
];

export default function HeroSection() {
  const { t } = useTranslation();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 pt-20">
      {/* Parallax Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)',
          transform: `scale(${1 + scrollY * 0.0005})`
        }}
      ></div>
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950/90 via-blue-900/80 to-blue-800/70"></div>

      {/* Animated Particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-cyan-300 rounded-full animate-bounce opacity-50"></div>
        <div className="absolute bottom-1/4 left-1/2 w-3 h-3 bg-blue-300 rounded-full animate-ping opacity-40"></div>
        <div className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse opacity-70"></div>
      </div>

      {/* Background Decorative Dots seperti PDF */}
      <div className="absolute bottom-0 left-0 opacity-30">
        <div className="flex gap-1">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: `${i * 0.1}s` }} />
          ))}
        </div>
      </div>

      

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-8">
        {/* Layout: Desktop = side-by-side, Mobile = stack */}
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Side: Text & CTA */}
          <div className="text-white text-center lg:text-left order-2 lg:order-1" data-aos="fade-up">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight">
              {t('ptPadma')} <br />
            </h1>

            <p className="text-lg md:text-xl font-light mb-3 text-blue-100">
              {t('trustedExcellent')}
            </p>

            <p className="text-base md:text-lg mb-6 text-blue-200 max-w-3xl">
              {t('heroDescription')}
            </p>

            <p className="text-sm md:text-base mb-6 text-blue-300">
              {t('managedBy')}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#services"
                className="group relative px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold text-base rounded-full hover:from-blue-700 hover:to-cyan-600 transition-all duration-300 shadow-xl hover:shadow-blue-500/50 flex items-center justify-center gap-3 overflow-hidden"
              >
                <span className="relative z-10">{t('exploreServices')}</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              <a
                href="#contact"
                className="group px-6 py-3 border-2 border-white/50 bg-white/10 backdrop-blur-sm font-medium text-base rounded-full hover:bg-white/20 hover:border-white/70 transition-all duration-300 shadow-lg hover:shadow-white/20"
              >
                {t('contactUs')}
              </a>
            </div>

            {/* Stats di bawah CTA (mobile & tablet) */}
            <div className="grid grid-cols-2 gap-4 mt-8 lg:hidden" data-aos="fade-up" data-aos-delay="200">
              {stats.map((stat, i) => (
                <div key={i} className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-4 text-center hover:bg-white/20 hover:scale-105 transition-all duration-500 shadow-xl">
                  <div className="text-2xl font-bold text-white">{stat.number}</div>
                  <div className="text-xs text-blue-200 uppercase tracking-wider mt-1">
                    {t(stat.label)}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Building Image + Stats (desktop only) */}
          <div className="order-1 lg:order-2">
            <div className="relative">

              {/* Stats Overlay di desktop */}
              <div className="hidden lg:grid grid-cols-2 gap-4 mt-6" data-aos="fade-up" data-aos-delay="300">
                {stats.map((stat, i) => (
                  <div
                    key={i}
                    className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-6 text-center hover:bg-white/20 hover:scale-105 transition-all duration-500 shadow-2xl hover:shadow-blue-500/25"
                  >
                    <div className="text-4xl font-extrabold text-white mb-2">{stat.number}</div>
                    <div className="text-xs font-medium text-blue-200 uppercase tracking-wider">
                      {t(stat.label)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Tagline bawah */}
        <div className="text-center mt-4 text-blue-200 text-base font-medium">
          {t('excellentOperational')}
        </div>
      </div>
    </section>
  );
}