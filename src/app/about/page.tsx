import React from 'react';
import Link from 'next/link';
import {
  ShieldCheck,
  Award,
  Globe2,
  Users,
  Leaf,
  CheckCircle2,
  ArrowRight,
  Target,
  Sparkles,
  Zap
} from 'lucide-react';
import { PageBanner } from '@/components/common/PageBanner';
import { SectionHeading } from '@/components/common/SectionHeading';
import { teamMembers, statsData } from '@/data/siteData';

export const metadata = {
  title: 'About Us | Enervox Renewable Energy',
  description: 'Learn about Enervox, our 25+ years of clean power engineering, executive leadership, and mission to accelerate global decarbonization.'
};

export default function AboutPage() {
  return (
    <>
      {/* Title Banner with Breadcrumbs */}
      <PageBanner
        title="About Our Company"
        eyebrow="GLOBAL RENEWABLE LEADERSHIP"
        breadcrumbs={[{ label: 'About Us' }]}
        bgImage="https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=1920&auto=format&fit=crop"
      />

      {/* Main Story & Vision Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Visual with experience badge */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-xs overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src="https://images.unsplash.com/photo-1509391365360-2e959784a276?q=80&w=800&auto=format&fit=crop"
                  alt="Enervox Solar Field"
                  className="w-full h-[440px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-4 bg-[#FF7029] text-white p-6 rounded-xs shadow-xl max-w-xs">
                <span className="text-3xl font-black block leading-none">18+ GW</span>
                <span className="text-xs uppercase font-bold tracking-wider mt-1 block">
                  Total Utility Clean Power Delivered Globally
                </span>
              </div>
            </div>

            {/* Story Content */}
            <div className="lg:col-span-7">
              <SectionHeading
                eyebrow="OUR HERITAGE & MISSION"
                title="Pioneering the Transition to Zero-Carbon Energy"
                subtitle="Founded in 2008 with a single onshore wind project, Enervox has expanded into a global powerhouse designing, constructing, and maintaining gigawatt-scale wind, solar, and hybrid storage arrays."
              />

              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                Our multidisciplinary teams of aerodynamicists, electrical engineers, and environmental scientists work in unison to eliminate fossil fuel dependency. We don't just supply equipment; we deliver turnkey infrastructure backed by 30-year performance guarantees.
              </p>

              {/* 4 Pillars Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
                {[
                  {
                    title: 'Sustainable Innovation',
                    desc: 'Deploying high-efficiency TOPCon solar cells and gearless direct-drive turbines.',
                    icon: Leaf
                  },
                  {
                    title: 'Tier-1 Reliability',
                    desc: 'Operating with 99.8% annual availability across four distinct continental grids.',
                    icon: ShieldCheck
                  },
                  {
                    title: 'Turnkey EPC Delivery',
                    desc: 'Single-contract accountability from land feasibility to grid interconnection.',
                    icon: Award
                  },
                  {
                    title: 'Global Community Impact',
                    desc: 'Investing in local green workforce training and habitat preservation.',
                    icon: Users
                  }
                ].map((pillar, idx) => {
                  const Icon = pillar.icon;
                  return (
                    <div key={idx} className="p-4 bg-[#F8FAFC] rounded-xs border border-gray-100 flex items-start gap-3">
                      <div className="w-10 h-10 rounded-xs bg-[#FF7029]/10 text-[#FF7029] flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-[#2D3239]">{pillar.title}</h4>
                        <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">{pillar.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="pt-2 flex items-center gap-4">
                <Link
                  href="/services"
                  className="bg-[#FF7029] hover:bg-[#2D3239] text-white px-7 py-4 text-xs font-bold uppercase tracking-widest rounded-xs transition-colors shadow-md flex items-center gap-2 group"
                >
                  <span>Our Services</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/portfolio"
                  className="bg-white hover:bg-gray-100 text-[#2D3239] border border-gray-300 px-6 py-4 text-xs font-bold uppercase tracking-widest rounded-xs transition-colors shadow-xs"
                >
                  View Case Studies
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certified Standards & Compliance */}
      <section className="py-16 bg-[#2D3239] text-white border-y border-white/10">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs uppercase tracking-widest text-[#FF7029] font-bold block mb-2">
            // INTERNATIONAL CERTIFICATIONS
          </span>
          <h3 className="text-2xl sm:text-3xl font-black mb-10">
            Adhering to the World's Highest Engineering Standards
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { code: 'ISO 14001', label: 'Environmental Management System' },
              { code: 'ISO 9001', label: 'Quality Management Systems' },
              { code: 'ISO 45001', label: 'Occupational Health & Safety' },
              { code: 'IEC 61400', label: 'Wind Turbine Design Certification' }
            ].map((cert, idx) => (
              <div
                key={idx}
                className="p-6 bg-white/5 border border-white/10 rounded-xs hover:border-[#FF7029] hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xs bg-[#FF7029]/20 text-[#FF7029] group-hover:bg-[#FF7029] group-hover:text-white flex items-center justify-center mx-auto mb-4 transition-colors">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-black text-white">{cert.code}</h4>
                <p className="text-xs text-gray-400 mt-1 leading-snug">{cert.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team Preview */}
      <section className="py-20 lg:py-28 bg-[#F8FAFC]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <SectionHeading
              eyebrow="EXECUTIVE LEADERSHIP"
              title="Meet Our Visionaries & Engineers"
              subtitle="Industry-renowned engineers and clean energy pioneers leading our global renewable operations."
              align="left"
              className="mb-0"
            />
            <Link
              href="/team"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#FF7029] hover:text-[#2D3239] transition-colors"
            >
              <span>View All Team Members</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member) => (
              <Link
                key={member.id}
                href={`/team/${member.slug}`}
                className="bg-white rounded-xs overflow-hidden border border-gray-100 hover:border-[#FF7029] shadow-md hover:shadow-xl transition-all duration-300 group block"
              >
                <div className="aspect-4/5 overflow-hidden bg-gray-100 relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2D3239]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <span className="text-xs uppercase font-bold text-white tracking-wider flex items-center gap-1 text-[#FF7029]">
                      View Profile <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h4 className="text-base font-black text-[#2D3239] group-hover:text-[#FF7029] transition-colors">
                    {member.name}
                  </h4>
                  <p className="text-xs uppercase font-bold text-gray-500 tracking-wider mt-1">
                    {member.role}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
