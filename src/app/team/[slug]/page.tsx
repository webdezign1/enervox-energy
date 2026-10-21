import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  Mail,
  Phone,
  ArrowRight,
  ShieldCheck,
  Award,
  Send,
  Globe
} from 'lucide-react';
import { PageBanner } from '@/components/common/PageBanner';
import { teamMembers, portfolioItems } from '@/data/siteData';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return teamMembers.map((member) => ({
    slug: member.slug,
  }));
}

export default async function SingleTeamPage({ params }: Props) {
  const { slug } = await params;
  const member = teamMembers.find((m) => m.slug === slug);

  if (!member) {
    notFound();
  }

  // Related projects
  const relatedProjects = portfolioItems.slice(0, 3);

  return (
    <>
      <PageBanner
        title={member.name}
        eyebrow="TEAM PROFILE"
        breadcrumbs={[
          { label: 'Page', href: '/about' },
          { label: 'Our Team', href: '/team' },
          { label: member.name }
        ]}
        bgImage="https://images.unsplash.com/photo-1548337138-e87d889cc369?q=80&w=1920&auto=format&fit=crop"
      />

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Portrait & Direct Contact (5 cols) */}
            <div className="lg:col-span-5 space-y-8">
              <div className="relative rounded-xs overflow-hidden shadow-2xl border-4 border-white aspect-4/5">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Direct Contact Card */}
              <div className="bg-[#F8FAFC] p-6 sm:p-8 rounded-xs border border-gray-100 shadow-md">
                <h4 className="text-sm font-black uppercase tracking-wider text-[#2D3239] mb-4 border-b border-gray-200 pb-2">
                  Direct Contact
                </h4>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-3 text-gray-700">
                    <Mail className="w-4 h-4 text-[#FF7029] shrink-0" />
                    <a href={`mailto:${member.email}`} className="hover:text-[#FF7029] transition-colors">
                      {member.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700">
                    <Phone className="w-4 h-4 text-[#FF7029] shrink-0" />
                    <a href={`tel:${member.phone.replace(/\D/g, '')}`} className="hover:text-[#FF7029] transition-colors">
                      {member.phone}
                    </a>
                  </div>
                </div>

                {/* Social Channels */}
                <div className="flex gap-2 mt-6 pt-4 border-t border-gray-200">
                  {member.socials.linkedin && (
                    <a
                      href={member.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-xs bg-[#2D3239] hover:bg-[#FF7029] text-white flex items-center justify-center transition-colors text-xs font-bold"
                    >
                      IN
                    </a>
                  )}
                  {member.socials.twitter && (
                    <a
                      href={member.socials.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-xs bg-[#2D3239] hover:bg-[#FF7029] text-white flex items-center justify-center transition-colors text-xs font-bold"
                    >
                      X
                    </a>
                  )}
                </div>
              </div>
            </div>

            {/* Right Column: Bio, Skills, and Form (7 cols) */}
            <div className="lg:col-span-7">
              <div>
                <span className="text-xs uppercase font-extrabold tracking-widest text-[#FF7029] block mb-1">
                  // {member.role}
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#2D3239]">
                  {member.name}
                </h2>
              </div>

              <div className="mt-6 text-sm text-gray-600 space-y-4 leading-relaxed">
                <p className="text-base font-semibold text-[#2D3239]">
                  {member.bio}
                </p>
                <p>
                  With specialized focus on industrial scalability and fault-tolerant power conversion, {member.name.split(' ')[0]} has pioneered key breakthroughs in grid code compliance, subsea cable integrity, and autonomous SCADA response algorithms.
                </p>
                <p>
                  Frequently consulted by international energy regulators and green finance authorities, they advise on grid decarbonization architecture, long-term PPA asset risks, and optimal storage sizing for multi-gigawatt utility contracts.
                </p>
              </div>

              {/* Skills & Competencies Progress Bars */}
              <div className="mt-10 pt-8 border-t border-gray-100">
                <h3 className="text-xl font-black text-[#2D3239] mb-6">
                  Technical Expertise & Domain Specialization
                </h3>
                <div className="space-y-5">
                  {member.skills.map((skill, idx) => (
                    <div key={idx} className="space-y-1.5">
                      <div className="flex justify-between text-xs font-bold uppercase tracking-wider text-[#2D3239]">
                        <span>{skill.label}</span>
                        <span className="text-[#FF7029]">{skill.percentage}%</span>
                      </div>
                      <div className="w-full h-2.5 bg-gray-100 rounded-xs overflow-hidden">
                        <div
                          className="h-full bg-[#FF7029] rounded-xs"
                          style={{ width: `${skill.percentage}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Direct Appointment Request Box */}
              <div className="mt-12 bg-[#2D3239] text-white p-8 rounded-xs border-l-4 border-[#FF7029]">
                <h4 className="text-lg font-black uppercase tracking-wider mb-2">
                  Request an Engineering Consultation
                </h4>
                <p className="text-xs text-gray-300 mb-4">
                  Schedule a technical discovery session with {member.name} to evaluate project feasibility.
                </p>
                <form className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <input
                    type="text"
                    placeholder="Your Full Name"
                    className="bg-white/10 border border-white/20 p-3 rounded-xs text-white placeholder-gray-400 focus:outline-none focus:border-[#FF7029]"
                  />
                  <input
                    type="email"
                    placeholder="Official Work Email"
                    className="bg-white/10 border border-white/20 p-3 rounded-xs text-white placeholder-gray-400 focus:outline-none focus:border-[#FF7029]"
                  />
                  <div className="sm:col-span-2">
                    <button
                      type="button"
                      className="w-full bg-[#FF7029] hover:bg-[#E55A15] text-white py-3 font-bold uppercase tracking-widest rounded-xs transition-colors flex items-center justify-center gap-2"
                    >
                      <span>Submit Request</span>
                      <Send className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
