// src/pages/ClientsServicePage.tsx
import { Check } from 'lucide-react';
import { useTranslation } from 'react-i18next';
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

export default function ClientsServicePage() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-900">
      {/* Hero Section */}
      <section className="relative py-24 px-6 lg:px-8 overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6" data-aos="fade-up">
            {t('clientsServicesTitle')}
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto mb-8" data-aos="fade-up" data-aos-delay="200">
            {t('clientsServicesDesc')}
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" data-aos="fade-up" data-aos-delay="300"></div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {clientServices.map((client, index) => (
              <div
                key={index}
                className="group relative bg-white dark:bg-gray-800 rounded-3xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                {/* Header dengan Logo Client */}
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 text-white text-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/10"></div>
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="w-32 h-32 mx-auto object-contain filter invert brightness-0 contrast-100 relative z-10"
                  />
                  {/* <h3 className="mt-4 text-xl font-bold relative z-10">{client.name}</h3> */}
                </div>

                {/* Body: Services */}
                <div className="p-8 space-y-8">
                  {client.services.map((service, idx) => (
                    <div key={idx}>
                      <h4 className="font-semibold text-blue-700 dark:text-blue-400 text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        {service.type === 'Headhunter' ? t('headhunterType') : t('manPowerOutsourcingType')}
                      </h4>
                      <ul className="space-y-3">
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

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" data-aos="fade-up">
            {t('readyPartner')}
          </h2>
          <p className="text-xl mb-8 opacity-90" data-aos="fade-up" data-aos-delay="200">
            {t('readyDesc')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center" data-aos="fade-up" data-aos-delay="300">
            <a
              href="#contact"
              className="px-8 py-4 bg-white text-blue-600 font-bold text-lg rounded-full hover:bg-gray-100 transition-all duration-300 shadow-xl"
            >
              {t('contactToday')}
            </a>
            <a
              href="#home"
              className="px-8 py-4 border-2 border-white/50 bg-white/10 backdrop-blur-sm font-medium text-lg rounded-full hover:bg-white/20 transition-all duration-300"
            >
              {t('backHome')}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}