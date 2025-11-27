// src/components/AboutSection.tsx
import { Target, Award, Users, Shield, Zap, HeartHandshake, ChevronRight } from 'lucide-react';

const values = [
  { icon: Shield, title: "Professional" },
  { icon: HeartHandshake, title: "High Integrity" },
  { icon: Users, title: "Accountable" },
  { icon: Zap, title: "Competitive Cost Efficient" },
  { icon: Award, title: "Excellent Service" },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-blue-50 via-white to-white dark:from-gray-900 dark:via-gray-900 dark:to-gray-900">
      <div className="max-w-7xl mx-auto">

        {/* Header + Intro Text seperti PDF Halaman 2 */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold text-blue-900 dark:text-blue-400 mb-6">
            Padma is Your Trusted Partner
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            PT Padma Raharja Sentosa is a <span className="font-semibold text-blue-700 dark:text-blue-400">trusted and reliable outsource company</span> that 
            supports your growth. Established in 2020, Padma now employs <span className="font-bold text-blue-700 dark:text-blue-400">2,000+ talents</span> across Indonesia.
          </p>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Managed by experienced leaders, Padma is committed to providing excellent services to its business partners and talents.
          </p>
          <div className="mt-8 w-32 h-1 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto rounded-full"></div>
        </div>

        {/* Vision & Mission – Desain lebih premium */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Vision */}
          <div className="group relative bg-white dark:bg-gray-800 rounded-3xl shadow-xl border border-gray-200 dark:border-gray-700 p-10 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10 flex items-start gap-5">
              <div className="p-4 bg-blue-100 dark:bg-blue-900/50 rounded-2xl">
                <Target className="w-10 h-10 text-blue-700 dark:text-blue-400" />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Our Vision</h3>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  The most trusted and reliable partner in outsourcing and headhunter service in Indonesia
                </p>
              </div>
            </div>
          </div>

          {/* Mission */}
          <div className="group relative bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl shadow-xl p-10 text-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
            <div className="relative z-10">
              <div className="flex items-center gap-5 mb-6">
                <div className="p-4 bg-white/20 backdrop-blur-sm rounded-2xl">
                  <Award className="w-10 h-10" />
                </div>
                <h3 className="text-3xl font-bold">Our Mission</h3>
              </div>
              <ul className="space-y-5 text-lg">
                {[
                  "Hire excellent and competitive professionals in the industry",
                  "Implement high standard work ethics",
                  "Collaborate with various corporations in multi industries"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <ChevronRight className="w-6 h-6 mt-0.5 flex-shrink-0" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Our Values – Grid lebih menarik */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Our Values
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Professional. High Integrity. Accountable. Competitive Cost Efficient. Excellent Service.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="group relative bg-white dark:bg-gray-800 rounded-3xl p-8 text-center shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-400 border border-gray-200 dark:border-gray-700"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-400"></div>
              <div className="relative z-10">
                <div className="p-5 bg-blue-100 dark:bg-blue-900/50 rounded-full w-24 h-24 mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-12 h-12 text-blue-700 dark:text-blue-400" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 dark:text-white leading-tight">
                  {value.title}
                </h4>
              </div>
            </div>
          ))}
        </div>

        {/* Optional: CTA kecil di bawah */}
        <div className="text-center mt-20">
          <p className="text-xl text-gray-700 dark:text-gray-300">
            Let’s grow together with <span className="font-bold text-blue-700 dark:text-blue-400">Padma</span>
          </p>
        </div>
      </div>
    </section>
  );
}