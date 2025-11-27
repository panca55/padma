import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      // Navbar
      home: 'Home',
      about: 'About',
      services: 'Services',
      contact: 'Contact',
      clientsServices: 'Clients & Services',

      // Hero Section
      companyProfile: 'COMPANY PROFILE',
      ptPadma: 'PT Padma Raharja Sentosa',
      trustedExcellent: 'Trusted and Excellent',
      heroDescription: 'PT Padma Raharja Sentosa is a trusted and reliable outsource company that supports your growth. Established in 2020, we now employ 2,000+ talents across Indonesia.',
      managedBy: 'Managed by experienced leaders · Committed to providing excellent services',
      exploreServices: 'Explore Our Services',
      contactUs: 'Contact Us',
      deployedEmployees: 'Deployed Employees',
      permanentStaff: 'Permanent Staff & PKWT',
      branchOffices: 'Branch Offices',
      salesRepresentatives: 'Sales Representatives Cities',
      excellentOperational: 'Excellent Operational Service Across Indonesia',

      // About Section
      padmaPartner: 'Padma is Your Trusted Partner',
      aboutDescription: 'PT Padma Raharja Sentosa is a trusted and reliable outsource company that supports your growth. Established in 2020, Padma now employs 2,000+ talents across Indonesia.',
      managedLeaders: 'Managed by experienced leaders, Padma is committed to providing excellent services to its business partners and talents.',
      vision: 'Our Vision',
      visionText: 'The most trusted and reliable partner in outsourcing and headhunter service in Indonesia',
      mission: 'Our Mission',
      mission1: 'Hire excellent and competitive professionals in the industry',
      mission2: 'Implement high standard work ethics',
      mission3: 'Collaborate with various corporations in multi industries',
      ourValues: 'Our Values',
      valuesSubtitle: 'Professional. High Integrity. Accountable. Competitive Cost Efficient. Excellent Service.',
      professional: 'Professional',
      highIntegrity: 'High Integrity',
      accountable: 'Accountable',
      costEfficient: 'Competitive Cost Efficient',
      excellentService: 'Excellent Service',
      growTogether: "Let's grow together with Padma",

      // Clients Section
      ourClients: 'Our Clients',
      trustedClients: 'Dipercaya oleh bank dan institusi keuangan terkemuka di Indonesia',
      viewServices: 'View Our Client & Services',

      // Services Section
      ourServices: 'Our Services',
      comprehensiveSolutions: 'Comprehensive outsourcing solutions tailored to your business needs',
      bpo: 'Business Process Outsourcing (BPO)',
      bpoDesc: 'Contracting of the operations and responsibilities of a specific business process',
      bpoBenefit1: 'Cost efficiency and flexibility',
      bpoBenefit2: 'Focus on core competencies',
      bpoBenefit3: 'Example: sales outsource by hiring man power and managing sales targets',
      mpo: 'Man Power Outsourcing (MPO)',
      mpoDesc: 'Hiring and retaining talent through external service provider',
      mpoBenefit1: 'Cut cost',
      mpoBenefit2: 'Get the right candidates',
      mpoBenefit3: 'Expand capacity',
      headhunter: 'Headhunter',
      headhunterDesc: 'Recruiting professionals from mid-level to executive roles',
      headhunterBenefit1: 'Attract Passive Candidates',
      headhunterBenefit2: 'Headhunter experience to spot the best talent',
      headhunterBenefit3: 'Maintain confidentiality for certain roles',
      benefitsTitle: 'Benefits of Collaborating with Padma',
      timeSaving: 'Time Saving',
      timeSavingDesc: 'Focus on your core business while we handle all HR and operational workforce processes.',
      fastFlexible: 'Fast & Flexible Manpower Supply',
      fastFlexibleDesc: 'Immediate access to a pool of qualified, pre-screened workers to match urgent or changing demands.',
      costEfficiency: 'Cost Efficiency',
      costEfficiencyDesc: 'Reduce operational costs related to recruitment, training, payroll, and employee management.',
      regulatoryCompliance: 'Regulatory Compliance',
      regulatoryComplianceDesc: 'All our HR processes and contracts follow Indonesian labor laws — minimizing your legal risks.',

      // Contact Section
      contactUsTitle: 'Contact Us',
      letsGrow: "Let's Grow Together!",
      headOffice: 'Head Office',
      address: 'Address',
      phone: 'Phone',
      email: 'Email',
      otherOffices: 'Other Offices',
      sendMessage: 'Get In Touch',
      name: 'Name',
      message: 'Message',
      send: 'Send Message',

      // Footer
      trustedExcellentFooter: 'Trusted and Excellent',
      since2020: 'since 2020',
      quickLinks: 'Quick Links',
      servicesFooter: 'Services',
      bpoShort: 'Business Process Outsourcing',
      mpoShort: 'Man Power Outsourcing',
      headhunterShort: 'Headhunter Services',
      allRights: 'All rights reserved.',

      // Clients Services Page
      clientsServicesTitle: 'Our Clients & Services',
      clientsServicesDesc: 'Comprehensive outsourcing and headhunter services tailored for leading financial institutions across Indonesia',
      readyPartner: 'Ready to Partner with Us?',
      readyDesc: 'Join our network of trusted financial institutions and experience excellence in outsourcing services.',
      contactToday: 'Contact Us Today',
      backHome: 'Back to Home',
      headhunterType: 'Headhunter',
      manPowerOutsourcingType: 'Man Power Outsourcing - PKWT & Mitra'
    }
  },
  id: {
    translation: {
      // Navbar
      home: 'Beranda',
      about: 'Tentang',
      services: 'Layanan',
      contact: 'Kontak',
      clientsServices: 'Klien & Layanan',

      // Hero Section
      companyProfile: 'PROFIL PERUSAHAAN',
      ptPadma: 'PT Padma Raharja Sentosa',
      trustedExcellent: 'Terpercaya dan Unggul',
      heroDescription: 'PT Padma Raharja Sentosa adalah perusahaan outsourcing yang terpercaya dan handal yang mendukung pertumbuhan Anda. Didirikan pada tahun 2020, kami sekarang mempekerjakan 2,000+ talenta di seluruh Indonesia.',
      managedBy: 'Dikelola oleh pemimpin berpengalaman · Berkomitmen untuk memberikan layanan yang sangat baik',
      exploreServices: 'Jelajahi Layanan Kami',
      contactUs: 'Hubungi Kami',
      deployedEmployees: 'Karyawan yang Ditempatkan',
      permanentStaff: 'Staf Tetap & PKWT',
      branchOffices: 'Kantor Cabang',
      salesRepresentatives: 'Kota Perwakilan Penjualan',
      excellentOperational: 'Layanan Operasional Unggul di Seluruh Indonesia',

      // About Section
      padmaPartner: 'Padma adalah Mitra Terpercaya Anda',
      aboutDescription: 'PT Padma Raharja Sentosa adalah perusahaan outsourcing yang terpercaya dan handal yang mendukung pertumbuhan Anda. Didirikan pada tahun 2020, Padma sekarang mempekerjakan 2,000+ talenta di seluruh Indonesia.',
      managedLeaders: 'Dikelola oleh pemimpin berpengalaman, Padma berkomitmen untuk memberikan layanan yang sangat baik kepada mitra bisnis dan talenta.',
      vision: 'Visi Kami',
      visionText: 'Mitra terpercaya dan handal dalam layanan outsourcing dan headhunter di Indonesia',
      mission: 'Misi Kami',
      mission1: 'Merekrut profesional yang sangat baik dan kompetitif di industri',
      mission2: 'Menerapkan etika kerja standar tinggi',
      mission3: 'Berkolaborasi dengan berbagai korporasi di multi industri',
      ourValues: 'Nilai Kami',
      valuesSubtitle: 'Profesional. Integritas Tinggi. Bertanggung Jawab. Efisien Biaya Kompetitif. Layanan Unggul.',
      professional: 'Profesional',
      highIntegrity: 'Integritas Tinggi',
      accountable: 'Bertanggung Jawab',
      costEfficient: 'Efisien Biaya Kompetitif',
      excellentService: 'Layanan Unggul',
      growTogether: 'Mari tumbuh bersama dengan Padma',

      // Clients Section
      ourClients: 'Klien Kami',
      trustedClients: 'Dipercaya oleh bank dan institusi keuangan terkemuka di Indonesia',
      viewServices: 'Lihat Layanan Klien & Kami',

      // Services Section
      ourServices: 'Layanan Kami',
      comprehensiveSolutions: 'Solusi outsourcing komprehensif yang disesuaikan dengan kebutuhan bisnis Anda',
      bpo: 'Business Process Outsourcing (BPO)',
      bpoDesc: 'Kontrak operasi dan tanggung jawab proses bisnis tertentu',
      bpoBenefit1: 'Efisiensi biaya dan fleksibilitas',
      bpoBenefit2: 'Fokus pada kompetensi inti',
      bpoBenefit3: 'Contoh: outsourcing penjualan dengan merekrut tenaga kerja dan mengelola target penjualan',
      mpo: 'Man Power Outsourcing (MPO)',
      mpoDesc: 'Merekrut dan mempertahankan talenta melalui penyedia layanan eksternal',
      mpoBenefit1: 'Potong biaya',
      mpoBenefit2: 'Dapatkan kandidat yang tepat',
      mpoBenefit3: 'Perluas kapasitas',
      headhunter: 'Headhunter',
      headhunterDesc: 'Merekrut profesional dari tingkat menengah hingga eksekutif',
      headhunterBenefit1: 'Tarik Kandidat Pasif',
      headhunterBenefit2: 'Pengalaman headhunter untuk menemukan talenta terbaik',
      headhunterBenefit3: 'Jaga kerahasiaan untuk peran tertentu',
      benefitsTitle: 'Manfaat Berkolaborasi dengan Padma',
      timeSaving: 'Penghematan Waktu',
      timeSavingDesc: 'Fokus pada bisnis inti Anda sementara kami menangani semua proses SDM dan operasional tenaga kerja.',
      fastFlexible: 'Pasokan Tenaga Kerja Cepat & Fleksibel',
      fastFlexibleDesc: 'Akses langsung ke kumpulan pekerja yang berkualitas dan telah disaring untuk memenuhi permintaan mendesak atau berubah.',
      costEfficiency: 'Efisiensi Biaya',
      costEfficiencyDesc: 'Kurangi biaya operasional terkait perekrutan, pelatihan, gaji, dan manajemen karyawan.',
      regulatoryCompliance: 'Kepatuhan Regulasi',
      regulatoryComplianceDesc: 'Semua proses SDM dan kontrak kami mengikuti hukum ketenagakerjaan Indonesia — meminimalkan risiko hukum Anda.',

      // Contact Section
      contactUsTitle: 'Hubungi Kami',
      letsGrow: 'Mari Tumbuh Bersama!',
      headOffice: 'Kantor Pusat',
      address: 'Alamat',
      phone: 'Telepon',
      email: 'Email',
      otherOffices: 'Kantor Lain',
      sendMessage: 'Hubungi Kami',
      name: 'Nama',
      message: 'Pesan',
      send: 'Kirim Pesan',

      // Footer
      trustedExcellentFooter: 'Terpercaya dan Unggul',
      since2020: 'sejak 2020',
      quickLinks: 'Tautan Cepat',
      servicesFooter: 'Layanan',
      bpoShort: 'Business Process Outsourcing',
      mpoShort: 'Man Power Outsourcing',
      headhunterShort: 'Layanan Headhunter',
      allRights: 'Seluruh hak cipta.',

      // Clients Services Page
      clientsServicesTitle: 'Klien & Layanan Kami',
      clientsServicesDesc: 'Layanan outsourcing dan headhunter komprehensif yang disesuaikan untuk institusi keuangan terkemuka di Indonesia',
      readyPartner: 'Siap Bermitra dengan Kami?',
      readyDesc: 'Bergabunglah dengan jaringan institusi keuangan terpercaya kami dan alami keunggulan dalam layanan outsourcing.',
      contactToday: 'Hubungi Kami Hari Ini',
      backHome: 'Kembali ke Beranda',
      headhunterType: 'Headhunter',
      manPowerOutsourcingType: 'Outsourcing Tenaga Kerja - PKWT & Mitra'
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    debug: false,

    interpolation: {
      escapeValue: false,
    },

    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  });

export default i18n;