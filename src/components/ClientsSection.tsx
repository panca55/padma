
import cimb from '../assets/clients/cmb.png';
import cimbFinance from '../assets/clients/cmbfinance.png';
import ocbc from '../assets/clients/ocbc.png';
import kbbukopin from '../assets/clients/kb.png';
import alloBank from '../assets/clients/allo.png';
import nobu from '../assets/clients/nobu.png';
import mayapada from '../assets/clients/mayapada.png';
import bankas from '../assets/clients/os.png';
import ina from '../assets/clients/ina.png';
import hana from '../assets/clients/hana.png';
import muamalat from '../assets/clients/muamalat.png';
import aceh from '../assets/clients/aceh.png';
import moladin from '../assets/clients/moladin.png';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ClientsSections() {
  const clientLogos = [
    { src: cimb, alt: 'CIMB Niaga' },
    { src: cimbFinance, alt: 'CIMB Niaga Finance' },
    { src: ocbc, alt: 'OCBC' },
    { src: kbbukopin, alt: 'KB Bukopin' },
    { src: alloBank, alt: 'Allo Bank' },
    { src: nobu, alt: 'Nobu Bank' },
    { src: mayapada, alt: 'Bank Mayapada' },
    { src: bankas, alt: 'Bank AS' },
    { src: ina, alt: 'Bank INA' },
    { src: hana, alt: 'Hana Bank' },
    { src: muamalat, alt: 'Bank Muamalat' },
    { src: aceh, alt: 'Bank Aceh' },
    { src: moladin, alt: 'Moladin' },
  ];

  return (
    <>
      {/* === SECTION 1: Our Clients === */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
              Our Clients
            </h2>
            <div className="mt-8 w-32 h-1 bg-gradient-to-r from-[#155DFB] to-[#00B7DB] mx-auto rounded-full"></div>
          </div>

          {/* First Row: 5 logos */}
          <div data-aos="fade-up" data-aos-delay="200">
            <div className="grid grid-cols-5 gap-8 items-center mb-8">
              {clientLogos.slice(0, 5).map((client, i) => (
                <div
                  key={i}
                  className="group relative flex items-center justify-center p-6 bg-white dark:bg-gray-800 backdrop-blur-lg rounded-2xl shadow-lg hover:shadow-2xl hover:scale-110 transition-all duration-300 border border-gray-200/50 dark:border-gray-700/50 hover:border-transparent"
                >
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#155DFB] to-[#00B7DB] opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-[2px]">
                    <div className="w-full h-full bg-white dark:bg-gray-800 backdrop-blur-lg rounded-[14px]"></div>
                  </div>
                  <img
                    src={client.src}
                    alt={client.alt}
                    className="relative z-10 w-20 h-20 object-contain filter dark:invert dark:brightness-0 dark:contrast-100"
                  />
                </div>
              ))}
            </div>

            {/* Second Row: 5 logos */}
            <div className="grid grid-cols-5 gap-8 items-center mb-8">
              {clientLogos.slice(5, 10).map((client, i) => (
                <div
                  key={i}
                  className="group relative flex items-center justify-center p-6 bg-white dark:bg-gray-800 backdrop-blur-lg rounded-2xl shadow-lg hover:shadow-2xl hover:scale-110 transition-all duration-300 border border-gray-200/50 dark:border-gray-700/50 hover:border-transparent"
                >
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#155DFB] to-[#00B7DB] opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-[2px]">
                    <div className="w-full h-full bg-white dark:bg-gray-800 backdrop-blur-lg rounded-[14px]"></div>
                  </div>
                  <img
                    src={client.src}
                    alt={client.alt}
                    className="relative z-10 w-20 h-20 object-contain filter dark:invert dark:brightness-0 dark:contrast-100"
                  />
                </div>
              ))}
            </div>

            {/* Third Row: 3 logos */}
            <div className="grid grid-cols-3 gap-8 items-center justify-center max-w-3xl mx-auto">
              {clientLogos.slice(10, 13).map((client, i) => (
                <div
                  key={i}
                  className="group relative flex items-center justify-center p-6 bg-white dark:bg-gray-800 backdrop-blur-lg rounded-2xl shadow-lg hover:shadow-2xl hover:scale-110 transition-all duration-300 border border-gray-200/50 dark:border-gray-700/50 hover:border-transparent"
                >
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#155DFB] to-[#00B7DB] opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-[2px]">
                    <div className="w-full h-full bg-white dark:bg-gray-800 backdrop-blur-lg rounded-[14px]"></div>
                  </div>
                  <img
                    src={client.src}
                    alt={client.alt}
                    className="relative z-10 w-20 h-20 object-contain filter dark:invert dark:brightness-0 dark:contrast-100"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* CTA to Clients & Services Page */}
          <div className="text-center mt-16" data-aos="fade-up" data-aos-delay="300">
            <Link
              to="/clients-services"
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-bold text-lg rounded-full hover:bg-blue-700 transition-all duration-300 shadow-xl gap-3"
            >
              View Our Client & Services
              <ChevronRight className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}