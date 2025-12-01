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
      title: 'Business Process Outsourcing (BPO)',
      description: 'Contracting of the operations and responsibilities of a specific business process',
      benefits: ['Cost efficiency and flexibility', 'Focus on core competencies', 'Example: sales outsource by hiring man power and managing sales targets']
    },
    {
      title: 'Man Power Outsourcing (MPO)',
      description: 'Hiring and retaining talent through external service provider',
      benefits: ['Cut cost', 'Get the right candidates', 'Expand capacity']
    },
    {
      title: 'Headhunter',
      description: 'Recruiting professionals from mid-level to executive roles',
      benefits: ['Attract Passive Candidates', 'Headhunter experience to spot the best talent', 'Maintain confidentiality for certain roles']
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
      title: 'Time Saving',
      description: 'Focus on your core business while we handle all HR and operational workforce processes.',
      icon: time
    },
    {
      title: 'Fast & Flexible Manpower Supply',
      description: 'Immediate access to a pool of qualified, pre-screened workers to match urgent or changing demands.',
      icon: person
    },
    {
      title: 'Cost Efficiency',
      description: 'Reduce operational costs related to recruitment, training, payroll, and employee management.',
      icon: uil
    },
    {
      title: 'Regulatory Compliance',
      description: 'All our HR processes and contracts follow Indonesian labor laws — minimizing your legal risks.',
      icon: carbon
    }
  ];