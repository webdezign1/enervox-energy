import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  ArrowRight,
  Download,
  Phone,
  Mail,
  ShieldCheck,
  CheckCircle2,
  Zap,
  Layers,
  FileText
} from 'lucide-react';
import { PageBanner } from '@/components/common/PageBanner';
import { serviceCategories, siteConfig } from '@/data/siteData';

interface Props {
  params: Promise<{ slug: string }>;
}

const detailedServices = [
  ...serviceCategories,
  {
    id: 'maintenance-services',
    number: '04',
    title: 'Maintenance & SCADA Diagnostics',
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

export async function generateStaticParams() {
  return detailedServices.map((service) => ({
    slug: service.id,
  }));
}

export default async function ServiceSinglePage({ params }: Props) {
  const { slug } = await params;
  const service = detailedServices.find((s) => s.id === slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <PageBanner
        title={service.title}
        eyebrow="SERVICE SPECIFICATION"
        breadcrumbs={[
          { label: 'Page', href: '/about' },
          { label: 'Services', href: '/services' },
          { label: service.title }
        ]}
        bgImage={service.image}
      />

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* SIDEBAR (4 cols) */}
            <aside className="lg:col-span-4 space-y-8 order-2 lg:order-1">
              {/* All Services Navigation List */}
              <div className="bg-[#F8FAFC] p-6 rounded-xs border border-gray-200">
                <h4 className="text-sm font-black uppercase tracking-wider text-[#2D3239] mb-4 pb-3 border-b border-gray-200">
                  All Services
                </h4>
                <nav className="space-y-2">
                  {detailedServices.map((s) => {
                    const isCurrent = s.id === service.id;
                    return (
                      <Link
                        key={s.id}
                        href={s.href}
                        className={`flex items-center justify-between px-4 py-3 rounded-xs text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                          isCurrent
                            ? 'bg-[#FF7029] text-white shadow-md'
                            : 'bg-white text-[#2D3239] hover:bg-gray-100 border border-gray-200/80 hover:border-[#FF7029]'
                        }`}
                      >
                        <span>{s.title}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    );
                  })}
                </nav>
              </div>

              {/* Download Brochure Box */}
              <div className="bg-[#2D3239] text-white p-6 rounded-xs border-t-4 border-[#FF7029] shadow-lg">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xs bg-[#FF7029] flex items-center justify-center text-white shrink-0">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="text-sm font-black uppercase tracking-wide">
                      Technical Brochure
                    </h5>
                    <span className="text-[10px] text-gray-400 uppercase">PDF (4.8 MB)</span>
                  </div>
                </div>
                <p className="text-xs text-gray-300 leading-relaxed mb-4">
                  Download complete mechanical schematics, certification proofs, and efficiency curves.
                </p>
                <a
                  href="/brochure-specifications.pdf"
                  download="Enervox-Specifications.pdf"
                  className="w-full bg-white hover:bg-[#FF7029] hover:text-white text-[#2D3239] py-3 text-xs font-black uppercase tracking-widest rounded-xs transition-colors flex items-center justify-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  <span>Download PDF</span>
                </a>
              </div>

              {/* 24/7 Emergency Support Help Desk */}
              <div className="bg-[#FF7029] text-white p-6 rounded-xs shadow-xl">
                <h5 className="text-xs font-black uppercase tracking-widest text-white/80 mb-1">
                  // NEED IMMEDIATE SUPPORT?
                </h5>
                <h4 className="text-xl font-black mb-3">
                  24/7 SCADA Dispatch
                </h4>
                <p className="text-xs text-white/90 leading-relaxed mb-4">
                  Field engineer response teams are available 24 hours a day for operational grid emergencies.
                </p>
                <div className="space-y-2 text-xs font-bold">
                  <a
                    href={`tel:${siteConfig.phones[0].replace(/\D/g, '')}`}
                    className="flex items-center gap-2 bg-black/20 hover:bg-black/30 p-2.5 rounded-xs transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    <span>{siteConfig.phones[0]}</span>
                  </a>
                  <a
                    href={`mailto:${siteConfig.emails[0]}`}
                    className="flex items-center gap-2 bg-black/20 hover:bg-black/30 p-2.5 rounded-xs transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    <span>{siteConfig.emails[0]}</span>
                  </a>
                </div>
              </div>
            </aside>

            {/* MAIN CONTENT (8 cols) */}
            <main className="lg:col-span-8 space-y-8 order-1 lg:order-2">
              {/* High-res Hero Photo */}
              <div className="relative rounded-xs overflow-hidden shadow-2xl border-4 border-white aspect-16/9 bg-gray-100">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Title & In-depth Technical Description */}
              <div>
                <span className="text-xs uppercase font-extrabold tracking-widest text-[#FF7029] block mb-1">
                  // SECTOR {service.number} OVERVIEW
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-[#2D3239]">
                  {service.title}
                </h2>
                <p className="text-base text-gray-700 font-medium mt-3 leading-relaxed">
                  {service.shortDesc}
                </p>
              </div>

              <div className="text-sm text-gray-600 space-y-4 leading-relaxed">
                <p>
                  Enervox engineers and constructs utility renewable assets designed for hostile environmental conditions, including salt-spray offshore environments, high-altitude alpine ridges, and extreme arid desert deserts.
                </p>
                <p>
                  Our equipment utilizes direct-drive rare-earth permanent magnet motors, heavy-gauge copper stator windings, and aerospace composite carbon fibers to guarantee maximum torque resilience and zero gear-oil degradation.
                </p>
              </div>

              {/* Key Features Grid */}
              <div className="bg-[#F8FAFC] p-8 rounded-xs border border-gray-100">
                <h3 className="text-lg font-black text-[#2D3239] uppercase tracking-wider mb-4">
                  Engineering Advantages & Benchmarks
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#FF7029] shrink-0 mt-0.5" />
                      <span className="text-xs font-semibold text-gray-800 leading-snug">
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Specifications Table */}
              <div>
                <h3 className="text-lg font-black text-[#2D3239] uppercase tracking-wider mb-4">
                  Standard Technical Parameters
                </h3>
                <div className="overflow-x-auto border border-gray-200 rounded-xs">
                  <table className="w-full text-xs text-left">
                    <thead className="bg-[#2D3239] text-white uppercase font-black tracking-wider">
                      <tr>
                        <th className="p-3">Specification Parameter</th>
                        <th className="p-3">Standard Rating</th>
                        <th className="p-3">Enervox Advantage</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 font-medium text-gray-700">
                      <tr className="hover:bg-gray-50">
                        <td className="p-3 font-bold text-[#2D3239]">Design Lifespan</td>
                        <td className="p-3">25 Years</td>
                        <td className="p-3 text-[#FF7029] font-bold">30+ Years with Mid-Life Overhaul</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="p-3 font-bold text-[#2D3239]">Annual Availability SLA</td>
                        <td className="p-3">97.0%</td>
                        <td className="p-3 text-[#FF7029] font-bold">99.8% Guaranteed Availability</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="p-3 font-bold text-[#2D3239]">Grid Code Compliance</td>
                        <td className="p-3">Regional standard</td>
                        <td className="p-3 text-[#FF7029] font-bold">Synthetic Inertia + FRT Worldwide</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Consultation / Proposal CTA Form */}
              <div className="bg-[#2D3239] text-white p-8 rounded-xs border-l-4 border-[#FF7029]">
                <h4 className="text-xl font-black uppercase tracking-wider mb-2">
                  Request a Technical Project Proposal
                </h4>
                <p className="text-xs text-gray-300 mb-6">
                  Provide your planned capacity and site coordinates to receive our engineering feasibility report.
                </p>

                <form className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <input
                    type="text"
                    required
                    placeholder="Project Name / Client Organization"
                    className="bg-white/10 border border-white/20 p-3 rounded-xs text-white placeholder-gray-400 focus:outline-none focus:border-[#FF7029]"
                  />
                  <input
                    type="text"
                    required
                    placeholder="Target Megawatt Capacity (e.g. 150MW)"
                    className="bg-white/10 border border-white/20 p-3 rounded-xs text-white placeholder-gray-400 focus:outline-none focus:border-[#FF7029]"
                  />
                  <input
                    type="email"
                    required
                    placeholder="Authorized Contact Email"
                    className="bg-white/10 border border-white/20 p-3 rounded-xs text-white placeholder-gray-400 focus:outline-none focus:border-[#FF7029]"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="bg-white/10 border border-white/20 p-3 rounded-xs text-white placeholder-gray-400 focus:outline-none focus:border-[#FF7029]"
                  />
                  <div className="sm:col-span-2">
                    <button
                      type="button"
                      className="w-full bg-[#FF7029] hover:bg-[#E55A15] text-white py-3.5 font-black uppercase tracking-widest rounded-xs transition-colors flex items-center justify-center gap-2"
                    >
                      <span>Submit RFP / Project Scope</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              </div>
            </main>
          </div>
        </div>
      </section>
    </>
  );
}
