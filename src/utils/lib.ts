import { Award, Briefcase, MapPin, Shield, Target, TrendingUp, Users } from "lucide-react";
import time from '../assets/clients/time.png';
import carbon from '../assets/clients/carbon.png';
import person from '../assets/clients/person.png';
import uil from '../assets/clients/uil.png';
// import shield from '../assets/clients/shield-yes.png';

// Data untuk statistik perusahaan
 export const stats = [
    { number: '2000+', label: 'Deployed Employees', icon: Users },
    { number: '500+', label: 'Permanent Staff & PKWT', icon: Briefcase },
    { number: '5', label: 'Branch Offices', icon: MapPin },
    { number: '13', label: 'Sales Representatives', icon: TrendingUp }
  ];

  // Data layanan
  export const services = [
    {
      titleKey: 'bpo',
      descKey: 'bpoDesc',
      benefitKeys: ['bpoBenefit1', 'bpoBenefit2', 'bpoBenefit3']
    },
    {
      titleKey: 'mpo',
      descKey: 'mpoDesc',
      benefitKeys: ['mpoBenefit1', 'mpoBenefit2', 'mpoBenefit3']
    },
    {
      titleKey: 'headhunter',
      descKey: 'headhunterDesc',
      benefitKeys: ['headhunterBenefit1', 'headhunterBenefit2', 'headhunterBenefit3']
    }
  ];

  // Data nilai perusahaan
  export const values = [
    { title: 'Professional', icon: Award },
    { title: 'High Integrity', icon: Shield },
    { title: 'Accountable', icon: Target },
    { title: 'Cost Efficient', icon: TrendingUp }
  ];

  // Data keunggulan
  export const benefits = [
    {
      titleKey: 'timeSaving',
      descKey: 'timeSavingDesc',
      icon: time
    },
    {
      titleKey: 'fastFlexible',
      descKey: 'fastFlexibleDesc',
      icon: person
    },
    {
      titleKey: 'costEfficiency',
      descKey: 'costEfficiencyDesc',
      icon: uil
    },
    {
      titleKey: 'regulatoryCompliance',
      descKey: 'regulatoryComplianceDesc',
      icon: carbon
    }
  ];