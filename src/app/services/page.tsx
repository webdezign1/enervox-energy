import React from 'react';
import Link from 'next/link';
import { ArrowRight, Wind, SunMedium, Zap, Wrench, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { PageBanner } from '@/components/common/PageBanner';
import { SectionHeading } from '@/components/common/SectionHeading';
import { serviceCategories, servicesStripData } from '@/data/siteData';

export const metadata = {
  title: 'Renewable Energy Services & Turnkey EPC | Enervox',
  description: 'Explore Enervox services: utility wind turbine generation, commercial solar photovoltaics, hybrid BESS storage, and 24/7 predictive maintenance.'
};

export default function ServicesPage() {
  const allServices = [
    ...serviceCategories,
    {
      id: 'maintenance-services',
      number: '04',
      title: 'Predictive O&M & Diagnostics',
      shortDesc: 'Autonomous drone thermography, ultrasonic vibration diagnostics, and round-the-clock SCADA telemetry.',
      href: '/services/maintenance-services',
      image: 'https://images.unsplash.com/photo-1548337138-e87d889cc369?q=80&w=1200&auto=format&fit=crop',
      features: [
        'Drone-based optical and infrared blade inspection',
        'Vibration spectral analysis on gearboxes and generators',
        'Emergency response dispatch within 4 hours globally'
      ]
    }
  ];

  return (
    <>
      <PageBanner
        title="Our Services & EPC Solutions"
        eyebrow="ENGINEERED FOR HIGH YIELD"
        breadcrumbs={[
          { label: 'Page', href: '/about' },
          { label: 'Services' }
        ]}
        bgImage="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=1920&auto=format&fit=crop"
      />

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="WHAT WE DELIVER"
            title="Comprehensive Clean Energy EPC Services"
            subtitle="From pre-feasibility and resource assessment to procurement, turnkey installation, and 30-year operational asset management."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {allServices.map((service) => (
              <div
                key={service.id}
                className="bg-[#F8FAFC] rounded-xs overflow-hidden border border-gray-100 hover:border-[#FF7029] shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-64 overflow-hidden bg-gray-200">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                    />
                    <div className="absolute top-4 left-4 bg-[#FF7029] text-white text-xs font-black px-3 py-1 rounded-xs">
                      SECTOR {service.number}
                    </div>
                  </div>

                  <div className="p-8">
                    <h3 className="text-2xl font-black text-[#2D3239] group-hover:text-[#FF7029] transition-colors mb-3">
                      <Link href={service.href}>
                        {service.title}
                      </Link>
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed mb-6">
                      {service.shortDesc}
                    </p>

                    <div className="space-y-2 border-t border-gray-200/60 pt-4 mb-6">
                      {service.features.map((feat, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs font-semibold text-gray-700">
                          <CheckCircle2 className="w-4 h-4 text-[#FF7029] shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-8 pt-0">
                  <Link
                    href={service.href}
                    className="w-full bg-white hover:bg-[#FF7029] text-[#2D3239] hover:text-white border border-gray-200 hover:border-transparent py-3.5 text-xs font-bold uppercase tracking-wider rounded-xs transition-all duration-300 flex items-center justify-center gap-2 shadow-xs group/link"
                  >
                    <span>View Technical Specifications</span>
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
