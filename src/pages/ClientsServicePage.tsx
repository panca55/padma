// src/pages/ClientsServicePage.tsx
import { useState, useEffect } from 'react';
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

// interface Service {
//   id: number;
//   title: string;
//   subtitle: string;
// }

interface ClientService {
  id: number;
  name: string;
  logo: string;
  services?: any[];
}

const staticClientServices: ClientService[] = [
  { id: 0, name: 'CIMB Niaga', logo: cimb, services: [
    { type: 'Headhunter', itemKeys: ['mortgageAlternateChannelManager', 'mortgageRelationshipManager', 'preferredRelationshipManager', 'emergingBusinessBankingRO', 'relationshipManagerDevProgram'] },
    { type: 'Man Power Outsourcing - PKWT & Mitra', itemKeys: ['mortgageSalesRepresentative', 'directSalesCardSupervisor', 'salesQRISMerchant', 'dsrFundingSupervisor', 'hajjBranchSalesRep', 'communitySalesExecSupervisor', 'branchSalesExecSupervisor', 'teleSalesOfficerSupervisor'] }
  ]},
  { id: 0, name: 'CIMB Niaga Finance', logo: cimbFinance, services: [
    { type: 'Headhunter', itemKeys: ['areaManager', 'salesManager', 'branchManager', 'rmCorporate', 'salesOfficer'] },
    { type: 'Man Power Outsourcing - PKWT & Mitra', itemKeys: ['cmoUsedCarNewCar', 'salesBranchInitiative', 'branchRelationshipOfficer', 'surveyor', 'directSalesAggregatorRef', 'deskCollectionAdmin', 'fieldCollectionMidRange', 'problemAccountOfficer'] }
  ]},
  { id: 0, name: 'OCBC', logo: ocbc, services: [
    { type: 'Man Power Outsourcing - PKWT & Mitra', itemKeys: ['agencySalesManager', 'supervisorTeamLeader', 'fundingMobileAcquisition', 'personalLoanDirectSales', 'creditCardDirectSales', 'adminSupport'] }
  ]},
  { id: 0, name: 'KB Bukopin', logo: kbbukopin, services: [
    { type: 'Headhunter – Permanent Staff', itemKeys: ['relationshipBankingOfficer', 'priorityBankingOfficer', 'rmMortgage', 'rmSmallMediumEnterprises', 'aoConsumer'] }
  ]},
  { id: 0, name: 'Allo Bank', logo: alloBank, services: [
    { type: 'Man Power Outsourcing', itemKeys: ['businessLeader', 'directSales', 'adminSupport', 'spgSpb'] }
  ]},
  { id: 0, name: 'Nobu Bank', logo: nobu, services: [
    { type: 'Man Power Outsourcing', itemKeys: ['supervisorTeamLeader', 'juniorSalesOfficer', 'seniorSalesOfficer'] }
  ]},
  { id: 0, name: 'Bank Mayapada', logo: mayapada, services: [
    { type: 'Man Power Outsourcing', itemKeys: ['supervisorTeamLeader', 'personalLoanSalesOfficer', 'creditCardSalesOfficer', 'directSales', 'telesales'] }
  ]},
  { id: 0, name: 'Bank AS', logo: bankas, services: [
    { type: 'Headhunter - Permanent', itemKeys: ['relationshipOfficerLending', 'relationshipOfficerFunding', 'operationalOfficerHeadBranch', 'headLendingFundingDivision', 'complianceRiskManagementExec'] }
  ]},
  { id: 0, name: 'Bank INA', logo: ina, services: [
    { type: 'Man Power Outsourcing', itemKeys: ['supervisorTeamLeader', 'juniorSalesAcquisition', 'seniorSalesAcquisition', 'executiveSalesAcquisition'] }
  ]},
  { id: 0, name: 'Hana Bank', logo: hana, services: [
    { type: 'Man Power Outsourcing', itemKeys: ['creditWithoutCollateralRepeat', 'quickCreditIncreaseLimit'] }
  ]},
  { id: 0, name: 'Bank Muamalat', logo: muamalat, services: [
    { type: 'Man Power Outsourcing', itemKeys: ['directSalesHaji', 'branchSalesOfficer', 'multifinanceUmroh', 'householdLoanCredit', 'creditWithoutCollateral'] }
  ]},
  { id: 0, name: 'Bank Aceh', logo: aceh, services: [
    { type: 'Man Power Outsourcing', itemKeys: ['directSalesFunding', 'directSalesQrisMerchant'] }
  ]},
  { id: 0, name: 'Moladin', logo: moladin, services: [
    { type: 'Headhunter – Permanent Staff', itemKeys: ['accountOfficerSME', 'agencyOfficer', 'supervisor', 'collection'] }
  ]},
];

export default function ClientsServicePage() {
  const { t } = useTranslation();
  const [clientServices, setClientServices] = useState<ClientService[]>(staticClientServices);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    const fetchClients = async () => {
      try {
        const response = await fetch('https://www.admin.padmaraharjasentosa.co.id/api/v1/clients');
        const result = await response.json();
        
        if (result.data && Array.isArray(result.data)) {
          const apiClients: ClientService[] = result.data.map((client: any) => ({
            id: client.id,
            name: client.name,
            logo: `https://admin.padmaraharjasentosa.co.id/${client.logo}`,
            services: client.services || []
          }));
          
          // Combine static data with API data (static first, then API)
          setClientServices([...staticClientServices, ...apiClients]);
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

  const getServiceTypeTranslation = (serviceType: string) => {
    switch (serviceType) {
      case 'Headhunter':
        return t('headhunterType');
      case 'Man Power Outsourcing - PKWT & Mitra':
        return t('manPowerOutsourcingType');
      case 'Man Power Outsourcing':
        return t('manPowerOutsourcing');
      case 'Headhunter – Permanent Staff':
        return t('headhunterPermanentStaff');
      case 'Headhunter - Permanent':
        return t('headhunterPermanent');
      default:
        return serviceType;
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative py-24 px-6 lg:px-8 overflow-hidden pt-20">
        <div className="absolute inset-0 bg-white dark:bg-gray-900"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-[#155DFB] to-[#00B7DB] bg-clip-text text-transparent mb-6" data-aos="fade-up">
            {t('clientsServicesTitle')}
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto mb-8" data-aos="fade-up" data-aos-delay="200">
            {t('clientsServicesDesc')}
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-[#155DFB] to-[#00B7DB] mx-auto rounded-full" data-aos="fade-up" data-aos-delay="300"></div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6 lg:px-8 bg-gradient-to-r from-[#155DFB] to-[#00B7DB] dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto">
          {loading ? (
            <div className="flex flex-wrap justify-center gap-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div
                  key={i}
                  className="bg-white dark:bg-gray-800 rounded-3xl shadow-lg overflow-hidden border border-gray-100 dark:border-gray-700 w-full sm:w-[300px] md:w-[320px] lg:w-[350px] animate-pulse"
                >
                  <div className="bg-gray-200 dark:bg-gray-700 h-64"></div>
                  <div className="p-8 space-y-4">
                    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded"></div>
                    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-wrap justify-center gap-8">
              {clientServices.map((client, index) => (
              <div
                key={client.id || index}
                className="bg-white dark:bg-gray-800 rounded-3xl shadow-lg overflow-hidden border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300 w-full sm:w-[300px] md:w-[320px] lg:w-[350px]"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                {/* Header dengan Logo Client */}
                <div className="bg-white dark:bg-gray-800 text-center p-8">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="w-32 h-32 mx-auto object-contain mb-6 dark:brightness-0 dark:invert"
                  />
                  <div className="w-16 h-1 bg-gradient-to-r from-[#155DFB] to-[#00B7DB] mx-auto rounded-full mb-6"></div>
                </div>

                {/* Body: Services */}
                <div className="px-8 pb-8 space-y-6">
                  {client.services && client.services.map((service: any, idx: number) => (
                    <div key={idx}>
                      <h4 className="font-bold text-[#155DFB] dark:text-blue-400 text-base mb-4">
                        {service.type ? getServiceTypeTranslation(service.type) : service.title || ''}
                      </h4>
                      <ul className="space-y-3">
                        {service.itemKeys ? service.itemKeys.map((itemKey: string, i: number) => (
                          <li key={i} className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                            <div className="w-5 h-5 rounded-full border-2 border-[#155DFB] dark:border-blue-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <Check className="w-3 h-3 text-[#155DFB] dark:text-blue-400" />
                            </div>
                            <span className="text-sm leading-relaxed">{t(itemKey)}</span>
                          </li>
                        )) : (
                          <li className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                            <div className="w-5 h-5 rounded-full border-2 border-[#155DFB] dark:border-blue-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <Check className="w-3 h-3 text-[#155DFB] dark:text-blue-400" />
                            </div>
                            <span className="text-sm leading-relaxed">{service.subtitle || ''}</span>
                          </li>
                        )}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
              ))}
            </div>
          )}
        </div>
      </section>


      {/* CTA Section */}
      {/* <section className="py-20 px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center text-black">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#155DFB] to-[#00B7DB] bg-clip-text text-transparent" data-aos="fade-up">
            {t('readyPartner')}
          </h2>
          <p className="text-xl mb-8 opacity-90" data-aos="fade-up" data-aos-delay="200">
            {t('readyDesc')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center" data-aos="fade-up" data-aos-delay="300">
            <a
              href="#contact"
              className="px-8 py-4 bg-gradient-to-r from-[#155DFB] to-[#00B7DB] text-white font-bold text-base rounded-full hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
            >
              {t('contactToday')}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="/"
              className="relative px-8 py-4 bg-white font-bold text-base rounded-full hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 overflow-hidden group"
            >
              <div className="absolute inset-0 rounded-full p-[2px] bg-gradient-to-r from-[#155DFB] to-[#00B7DB]">
                <div className="w-full h-full bg-white rounded-full"></div>
              </div>
              <span className="relative z-10 text-[#155DFB] group-hover:text-[#155DFB]">{t('backHome')}</span>
              <svg className="relative z-10 w-4 h-4 text-[#155DFB] group-hover:text-[#155DFB]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </section> */}
    </div>
  );
}