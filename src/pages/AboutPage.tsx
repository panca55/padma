// src/pages/AboutPage.tsx
import { Target, Eye } from 'lucide-react';
// import { useTranslation } from 'react-i18next';
import briefcase from '../assets/clients/briefcase.png';
import handshake from '../assets/clients/handshake.png';
import material from '../assets/clients/material.png';
import shield from '../assets/clients/shield-yes.png';
import uil from '../assets/clients/uil.png';

const values = [
  { icon: briefcase, title: "Professional" },
  { icon: shield, title: "High Integrity" },
  { icon: material, title: "Accountable" },
  { icon: uil, title: "Competitive Cost Efficient" },
  { icon: handshake, title: "Excellent Service" },
];

const services = [
  {
    title: "Business Process Outsourcing (BPO)",
    description: "Contracting of the operations and responsibilities of a specific business process to an external service provider.",
    points: ["Cost efficiency and flexibility", "Focus on core competencies", "Expertise from outsourcing by hiring men power and managing their targets"]
  },
  {
    title: "Man Power Outsourcing (MPO)",
    description: "Hiring and managing talent through external service provider.",
    points: ["Cost effective", "Get the right candidates", "Expand quickly"]
  },
  {
    title: "Headhunter",
    description: "Recruiting professionals from the mid-level to executive positions.",
    points: ["Active Pipeline Candidates", "Headhunter experience to spot the best talent", "Maximum opportunity for various roles"]
  }
];

export default function AboutPage() {
//   const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-32 px-6 lg:px-8 overflow-hidden pt-20">
        <div className="absolute inset-0 bg-white"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-blue-600 mb-6" data-aos="fade-up">
            About Us
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto mb-8" data-aos="fade-up" data-aos-delay="200">
            Get to know the passionate team and core values that drive Padma Raharja Sentosa. We believe that by upholding integrity and excellence, we can deliver unmatched talent and service to all our partners.
          </p>
        </div>
      </section>

      {/* Padma is Your Trusted Partner */}
      <section className="py-20 px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div data-aos="fade-right">
              <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-6">
                Padma is Your Trusted Partner
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                PT Padma Raharja Sentosa is a trusted and reliable outsource and headhunter company that strategically supports your business growth. Established in 2020, Padma proudly employs over 2,000+ top talents across various industries in Indonesia. Managed by experienced leaders, we are committed to providing excellent, swift, and professional services to our business partners and talents.
              </p>
            </div>

            {/* Building Image */}
            <div data-aos="fade-left">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Building"
                  className="w-full h-96 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid gap-8">
            {/* Vision */}
            <div className="bg-gray-50 rounded-3xl p-8 shadow-lg" data-aos="fade-up">
              <div className="flex items-start gap-6">
                <div className="p-4 bg-blue-100 rounded-2xl flex-shrink-0">
                  <Eye className="w-8 h-8 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-blue-600 mb-4">Our Vision</h3>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    The most trusted and reliable partner in outsourcing and headhunter service in Indonesia
                  </p>
                </div>
              </div>
            </div>

            {/* Mission */}
            <div className="bg-gray-50 rounded-3xl p-8 shadow-lg" data-aos="fade-up" data-aos-delay="200">
              <div className="flex items-start gap-6">
                <div className="p-4 bg-blue-100 rounded-2xl flex-shrink-0">
                  <Target className="w-8 h-8 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-blue-600 mb-4">Our Mission</h3>
                  <ul className="space-y-3 text-gray-700 text-lg">
                    <li className="flex items-start gap-3">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>Hire excellent and competitive professionals in the industry</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>Collaborate with various corporations in multi industries</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>Implement high standard work ethics</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-6">
              Our Values
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6" data-aos="fade-up" data-aos-delay="200">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <img src={value.icon} alt={value.title} className="w-12 h-12" />
                </div>
                <h4 className="text-sm font-semibold text-gray-900 leading-tight">
                  {value.title}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-20 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-6">
              Our Services
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}