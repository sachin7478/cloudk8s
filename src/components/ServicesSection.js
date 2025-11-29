import React from 'react';
import ServiceCard from './ServiceCard';
import { DevIcon, ConsultingIcon, DataIcon, SecurityIcon, AiIcon, TrainingIcon } from './icons';

const services = [
  {
    title: 'Software Development',
    desc: 'Innovating custom solutions tailored for business needs — web, mobile and enterprise applications.',
    icon: <DevIcon />,
  },
  {
    title: 'IT Consulting & System Integration',
    desc: 'Strategic guidance and seamless technology integration to align IT with business objectives.',
    icon: <ConsultingIcon />,
  },
  {
    title: 'Digital Transformation & Data Analytics',
    desc: 'Driving growth with data-driven insights and digital strategies, BI and analytics pipelines.',
    icon: <DataIcon />,
  },
  {
    title: 'Cybersecurity & IT Infrastructure Management',
    desc: 'Ensuring secure, resilient and compliant IT environments with monitoring and response.',
    icon: <SecurityIcon />,
  },
  {
    title: 'AI, ML & Automation Technologies',
    desc: 'Leveraging AI and automation to optimise operations and build intelligent products.',
    icon: <AiIcon />,
  },
  {
    title: 'Training & Career Development',
    desc: 'Upskilling professionals with industry-aligned courses, bootcamps, and mentorship.',
    icon: <TrainingIcon />,
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="max-w-6xl mx-auto px-6 py-12 animate-on-view">
      <div className="mb-8 text-center">
        <h2 className="text-2xl font-bold text-slate-900">Our Services</h2>
        <p className="mt-2 text-slate-600 max-w-2xl mx-auto">Comprehensive technology and AI services to accelerate your digital transformation.</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map(s => (
          <ServiceCard key={s.title} title={s.title} icon={s.icon}>
            {s.desc}
          </ServiceCard>
        ))}
      </div>
    </section>
  );
}
