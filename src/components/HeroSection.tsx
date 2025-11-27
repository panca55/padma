// src/components/HeroSection.tsx
import { ChevronRight, Users, Building2, MapPin, Briefcase } from 'lucide-react';

const stats = [
  { icon: Briefcase, number: "2.000+", label: "Deployed Employees" },
  { icon: Users, number: "500+", label: "Permanent Staff & PKWT" },
  { icon: Building2, number: "5", label: "Branch Offices" },
  { icon: MapPin, number: "13", label: "Sales Representatives Cities" },
];

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(59,130,246,0.4),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,197,253,0.3),transparent_50%)]" />
      </div>


      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 text-center text-white">
        {/* Main Headline – Mirip PDF Halaman 1 & 2 */}
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
          Padma is Your <span className="text-blue-300">Trusted Partner</span>
        </h1>

        <p className="text-xl md:text-2xl font-light mb-6 max-w-5xl mx-auto opacity-90">
          PT Padma Raharja Sentosa is a trusted and reliable outsource company that supports your growth.
        </p>

        <p className="text-lg md:text-xl font-medium mb-10 max-w-4xl mx-auto text-blue-200">
          Established in 2020 · 2,000+ talents across Indonesia · Managed by experienced leaders
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-5 justify-center mb-20">
          <a
            href="#services"
            className="group px-10 py-5 bg-white text-blue-900 font-bold text-lg rounded-full hover:bg-blue-50 transition-all duration-300 shadow-xl hover:shadow-2xl flex items-center justify-center gap-3"
          >
            Explore Our Services
            <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#contact"
            className="px-10 py-5 border-2 border-white/50 backdrop-blur-sm bg-white/10 font-medium text-lg rounded-full hover:bg-white/20 transition-all duration-300"
          >
            Contact Us
          </a>
        </div>

        {/* Statistics – Desain premium seperti PDF Halaman 3 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 hover:bg-white/20 hover:scale-105 transition-all duration-500 shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <stat.icon className="w-12 h-12 mx-auto mb-4 text-blue-300 group-hover:text-white transition-colors" />
              
              <div className="text-5xl font-extrabold mb-2 text-white">
                {stat.number}
              </div>
              
              <div className="text-sm md:text-base font-medium text-blue-200 uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Tagline kecil di bawah */}
        <div className="mt-20 text-blue-300 font-medium text-lg">
          Excellent Operational Service Across Indonesia
        </div>
      </div>

    </section>
  );
}