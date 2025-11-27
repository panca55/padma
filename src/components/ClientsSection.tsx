
// Import logo client (ganti dengan path asli di project kamu)
import cimb from '../assets/clients/cmb.png';
import cimbFinance from '../assets/clients/cmbfinance.png';
import ocbc from '../assets/clients/ocbc.png';
import kbbukopin from '../assets/clients/kb.png';
import alloBank from '../assets/clients/allo.png';
import nobu from '../assets/clients/nobu.png';
import mayapada from '../assets/clients/mayapada.jpg';
import bankas from '../assets/clients/os.jpg';
import ina from '../assets/clients/ina.png';
import hana from '../assets/clients/hana.png';
import muamalat from '../assets/clients/muamalat.jpg';
import aceh from '../assets/clients/aceh.png';
import moladin from '../assets/clients/moladin.png';
import { Check } from 'lucide-react';

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

  const clientServices = [
  { name: 'CIMB Niaga', logo: cimb, services: [
    { type: 'Headhunter', items: ['Mortgage Alternate Channel Manager (MACM)', 'Mortgage Relationship Manager (RMM)', 'Preferred Relationship Manager (RMP)', 'Emerging Business Banking Relationship Officer (RMEBB)', 'Relationship Manager Development Program (RMDP)'] },
    { type: 'Man Power Outsourcing - PKWT & Mitra', items: ['Mortgage Sales Representative (MSR)', 'Direct Sales Card Supervisor & Direct Sales Card', 'Sales QRIS & Merchant', 'DSR Funding Supervisor & DSR Funding', 'Hajj Branch Sales Representative', 'Community Sales Executive Supervisor & Sales Officer', 'Branch Sales Executive Supervisor & Sales Officer', 'Tele Sales Officer Supervisor & Sales Officer'] }
  ]},
  { name: 'CIMB Niaga Finance', logo: cimbFinance, services: [
    { type: 'Headhunter', items: ['Area Manager (AM)', 'Sales Manager (SM)', 'Branch Manager (BM)', 'RM Corporate (RM)', 'Sales Officer (SO)'] },
    { type: 'Man Power Outsourcing - PKWT & Mitra', items: ['CMO Used Car & New Car', 'Sales Branch Initiative', 'Branch Relationship Officer', 'Surveyor', 'Direct Sales & Aggregator Refinancing', 'Desk Collection, Admin Collection, & Reminder Call', 'Field Collection, Mid Range Collection, Recovery Collection', 'Problem Account Officer, Hardcore Officer'] }
  ]},
  { name: 'OCBC', logo: ocbc, services: [
    { type: 'Man Power Outsourcing - PKWT & Mitra', items: ['Agency Sales Manager', 'Supervisor / Team Leader', 'Funding Mobile Acquisition', 'Personal Loan (KTA) Direct Sales', 'Credit Card Direct Sales', 'Admin Support'] }
  ]},
  { name: 'KB Bukopin', logo: kbbukopin, services: [
    { type: 'Headhunter – Permanent Staff', items: ['Relationship Banking Officer (RBO)', 'Priority Banking Officer (PBO)', 'RM Mortgage', 'RM Small Medium Enterprises', 'AO Consumer'] }
  ]},
  { name: 'Allo Bank', logo: alloBank, services: [
    { type: 'Man Power Outsourcing', items: ['Business Leader', 'Direct Sales', 'Admin Support', 'SPG/SPB'] }
  ]},
  { name: 'Nobu Bank', logo: nobu, services: [
    { type: 'Man Power Outsourcing', items: ['Sales Supervisor / Team Leader', 'Junior Sales Officer', 'Senior Sales Officer'] }
  ]},
  { name: 'Bank Mayapada', logo: mayapada, services: [
    { type: 'Man Power Outsourcing', items: ['Supervisor / Team Leader', 'Personal Loan Sales Officer', 'Credit Card Sales Officer', 'Direct Sales', 'Telesales'] }
  ]},
  { name: 'Bank AS', logo: bankas, services: [
    { type: 'Headhunter - Permanent', items: ['Relationship Officer Lending', 'Relationship Officer Funding', 'Operational Officer Head of Branch', 'Head of Lending/Funding Division', 'Compliance & Risk Management Executive'] }
  ]},
  { name: 'Bank INA', logo: ina, services: [
    { type: 'Man Power Outsourcing', items: ['Sales Supervisor / Team Leader', 'Junior Sales Acquisition', 'Senior Sales Acquisition', 'Executive Sales Acquisition'] }
  ]},
  { name: 'Hana Bank', logo: hana, services: [
    { type: 'Man Power Outsourcing', items: ['Credit Without Collateral (KTA): Repeat, Top Up and Increase Limit', 'Quick Credit: Increase Limit'] }
  ]},
  { name: 'Bank Muamalat', logo: muamalat, services: [
    { type: 'Man Power Outsourcing', items: ['Direct Sales Haji', 'Branch Sales Officer', 'Multifinance: Umroh', 'Household Loan Credit (KPR)', 'Credit Without Collateral (KTA)'] }
  ]},
  { name: 'Bank Aceh', logo: aceh, services: [
    { type: 'Man Power Outsourcing', items: ['Direct Sales Funding', 'Direct Sales Qris Merchant'] }
  ]},
  { name: 'Moladin', logo: moladin, services: [
    { type: 'Headhunter – Permanent Staff', items: ['Account Officer - SME', 'Agency Officer', 'Supervisor', 'Collection'] }
  ]},
];

  return (
    <>
      {/* === SECTION 1: Our Clients === */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
              Our Clients
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              Dipercaya oleh bank dan institusi keuangan terkemuka di Indonesia
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
            {clientLogos.map((client, i) => (
              <div
                key={i}
                className="flex items-center justify-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
              >
                <img
                  src={client.src}
                  alt={client.alt}
                  className="max-h-16 w-auto object-contain filter dark:invert dark:brightness-0 dark:contrast-100"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === SECTION 2: Our Client & Service === */}
      <section className="py-20 bg-white dark:bg-gray-800 transition-colors">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
              Our Client & Service
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              Layanan outsourcing & headhunter yang telah kami berikan
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {clientServices.map((client, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 rounded-3xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-300"
              >
                {/* Header dengan Logo Client */}
                <div className="bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-800 dark:to-blue-900 p-8 text-white text-center">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="h-20 mx-auto object-contain filter"
                  />
                  {/* <h3 className="mt-4 text-xl font-bold">{client.name}</h3> */}
                </div>

                {/* Body: Services */}
                <div className="p-8 space-y-8">
                  {client.services.map((service, idx) => (
                    <div key={idx}>
                      <h4 className="font-semibold text-blue-700 dark:text-blue-400 text-sm uppercase tracking-wider mb-3">
                        {service.type}
                      </h4>
                      <ul className="space-y-2">
                        {service.items.map((item, i) => (
                          <li key={i} className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                            <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                            <span className="text-sm leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}