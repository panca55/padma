
import { useState, useEffect } from 'react';
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
import { useTranslation } from 'react-i18next';

interface Service {
  id: number;
  title: string;
  subtitle: string;
}

interface ClientLogo {
  id: number;
  name: string;
  logo: string;
  services?: Service[];
}

// Static client data - always displayed
const staticClients: ClientLogo[] = [
  { id: 0, name: 'CIMB Niaga', logo: cimb },
  { id: 0, name: 'CIMB Niaga Finance', logo: cimbFinance },
  { id: 0, name: 'OCBC', logo: ocbc },
  { id: 0, name: 'KB Bukopin', logo: kbbukopin },
  { id: 0, name: 'Allo Bank', logo: alloBank },
  { id: 0, name: 'Nobu Bank', logo: nobu },
  { id: 0, name: 'Bank Mayapada', logo: mayapada },
  { id: 0, name: 'Bank AS', logo: bankas },
  { id: 0, name: 'Bank INA', logo: ina },
  { id: 0, name: 'Hana Bank', logo: hana },
  { id: 0, name: 'Bank Muamalat', logo: muamalat },
  { id: 0, name: 'Bank Aceh', logo: aceh },
  { id: 0, name: 'Moladin', logo: moladin },
];

export default function ClientsSections() {
  const { t } = useTranslation();

  const [clientLogos, setClientLogos] = useState<ClientLogo[]>(staticClients);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const response = await fetch('https://www.admin.padmaraharjasentosa.co.id/api/v1/clients');
        const result = await response.json();
        
        if (result.data && Array.isArray(result.data)) {
          const apiClients: ClientLogo[] = result.data.map((client: any) => ({
            id: client.id,
            name: client.name,
            logo: `https://admin.padmaraharjasentosa.co.id/${client.logo}`,
            services: client.services || []
          }));
          
          // Combine static data with API data (static first, then API)
          setClientLogos([...staticClients, ...apiClients]);
        }
        setLoading(false);
      } catch (error) {
        console.error('Error fetching clients:', error);
        // Keep static data if API fails
        setLoading(false);
      }
    };

    fetchClients();
  }, []);

  return (
    <>
      {/* === SECTION 1: Our Clients === */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors">
        <div className="max-w-[92rem] mx-auto px-4">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
              {t('ourClients')}
            </h2>
            <div className="mt-8 w-32 h-1 bg-gradient-to-r from-[#155DFB] to-[#00B7DB] mx-auto rounded-full"></div>
          </div>

          {loading ? (
            <div className="animate-pulse">
              <div className="grid grid-cols-5 gap-8 items-center mb-8">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="bg-gray-200 dark:bg-gray-700 rounded-2xl h-32"></div>
                ))}
              </div>
              <div className="grid grid-cols-5 gap-8 items-center mb-8">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="bg-gray-200 dark:bg-gray-700 rounded-2xl h-32"></div>
                ))}
              </div>
              <div className="grid grid-cols-3 gap-8 items-center justify-center max-w-3xl mx-auto">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="bg-gray-200 dark:bg-gray-700 rounded-2xl h-32"></div>
                ))}
              </div>
            </div>
          ) : (
            <div data-aos="fade-up" data-aos-delay="200">
              {/* First Row: 5 logos */}
              {/* <div className="grid grid-cols-5 gap-8 items-center mb-8">
                {clientLogos.slice(0, 5).map((client, i) => (
                  <div
                    key={client.id || i}
                    className="group relative flex items-center justify-center p-6 bg-white dark:bg-gray-800 backdrop-blur-lg rounded-2xl shadow-lg hover:shadow-2xl hover:scale-110 transition-all duration-300 border border-gray-200/50 dark:border-gray-700/50 hover:border-transparent"
                  >
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#155DFB] to-[#00B7DB] opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-[2px]">
                      <div className="w-full h-full bg-white dark:bg-gray-800 backdrop-blur-lg rounded-[14px]"></div>
                    </div>
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="relative z-10 w-20 h-20 object-contain filter dark:invert dark:brightness-0 dark:contrast-100"
                    />
                  </div>
                ))}
              </div> */}

              {/* Second Row: 5 logos */}
              <div className="flex flex-wrap justify-center gap-8 mb-8">
                {clientLogos.map((client, i) => (
                  <div
                    key={client.id || i}
                    className="group relative flex items-center justify-center py-4 px-10 bg-white dark:bg-gray-800 backdrop-blur-lg rounded-2xl shadow-lg hover:shadow-2xl hover:scale-110 transition-all duration-300 border border-gray-200/50 dark:border-gray-700/50 hover:border-transparent"
                  >
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#155DFB] to-[#00B7DB] opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-[2px]">
                      <div className="w-full h-full bg-white dark:bg-gray-800 backdrop-blur-lg rounded-[14px]"></div>
                    </div>

                    <img
                      src={client.logo}
                      alt={client.name}
                      className="relative z-10 w-40 h-40 object-contain filter dark:invert dark:brightness-0 dark:contrast-100"
                    />
                  </div>
                ))}
              </div>

              {/* Third Row: remaining logos */}
              {/* {clientLogos.length > 10 && (
                <div className="grid grid-cols-3 gap-8 items-center justify-center max-w-3xl mx-auto">
                  {clientLogos.slice(10, 13).map((client, i) => (
                    <div
                      key={client.id || i}
                      className="group relative flex items-center justify-center p-6 bg-white dark:bg-gray-800 backdrop-blur-lg rounded-2xl shadow-lg hover:shadow-2xl hover:scale-110 transition-all duration-300 border border-gray-200/50 dark:border-gray-700/50 hover:border-transparent"
                    >
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#155DFB] to-[#00B7DB] opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-[2px]">
                        <div className="w-full h-full bg-white dark:bg-gray-800 backdrop-blur-lg rounded-[14px]"></div>
                      </div>
                      <img
                        src={client.logo}
                        alt={client.name}
                        className="relative z-10 w-20 h-20 object-contain filter dark:invert dark:brightness-0 dark:contrast-100"
                      />
                    </div>
                  ))}
                </div>
              )} */}
            </div>
          )}

          {/* CTA to Clients & Services Page */}
          <div className="text-center mt-16" data-aos="fade-up" data-aos-delay="300">
            <Link
              to="/clients-services"
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-bold text-lg rounded-full hover:bg-blue-700 transition-all duration-300 shadow-xl gap-3"
            >
              {t('viewServices')}
              <ChevronRight className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}