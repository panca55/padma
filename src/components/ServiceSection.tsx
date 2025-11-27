import { CheckCircle } from 'lucide-react';
import { benefits, services } from '../utils/lib';

function ServiceSection() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Services</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Comprehensive outsourcing solutions tailored to your business needs
            </p>
          </div>

          {/* Service Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16" data-aos="fade-up" data-aos-delay="200">
            {services.map((service, index) => (
              <div key={index} className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg p-8 rounded-xl shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-200/50 dark:border-gray-700/50">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start text-gray-700 dark:text-gray-300">
                      <CheckCircle className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-2 mt-0.5 shrink-0" />
                      <span className="text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Benefits Section */}
          <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl rounded-xl p-8 shadow-2xl border border-gray-200/50 dark:border-gray-700/50" data-aos="fade-up" data-aos-delay="300">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-12">
              Benefits of Collaborating with Us
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <div className="shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mr-4">
                    <benefit.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white mb-2">{benefit.title}</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
  )
}

export default ServiceSection
