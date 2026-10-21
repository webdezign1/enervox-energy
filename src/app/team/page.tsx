import React from 'react';
import Link from 'next/link';
import { ArrowRight, Mail, Phone, Globe, Share2 } from 'lucide-react';
import { PageBanner } from '@/components/common/PageBanner';
import { SectionHeading } from '@/components/common/SectionHeading';
import { teamMembers } from '@/data/siteData';

export const metadata = {
  title: 'Our Executive & Engineering Team | Enervox',
  description: 'Meet the engineers, scientists, and executives driving Enervox renewable energy installations worldwide.'
};

export default function TeamPage() {
  return (
    <>
      <PageBanner
        title="Our Leadership & Engineering Team"
        eyebrow="EXPERTS IN SUSTAINABILITY"
        breadcrumbs={[
          { label: 'Page', href: '/about' },
          { label: 'Our Team' }
        ]}
        bgImage="https://images.unsplash.com/photo-1548337138-e87d889cc369?q=80&w=1920&auto=format&fit=crop"
      />

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="GLOBAL TALENT"
            title="Passionate Minds Powering Clean Grids"
            subtitle="Our engineers and executives bring combined centuries of experience in power systems, aerodynamic mechanical design, and international project financing."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="bg-[#F8FAFC] rounded-xs overflow-hidden border border-gray-100 hover:border-[#FF7029] shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group flex flex-col justify-between"
              >
                <div>
                  {/* Portrait photo */}
                  <div className="relative aspect-4/5 overflow-hidden bg-gray-200">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#2D3239]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                      <div className="flex gap-2">
                        {member.socials.linkedin && (
                          <a
                            href={member.socials.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-8 h-8 rounded-xs bg-[#FF7029] text-white flex items-center justify-center hover:bg-white hover:text-[#2D3239] transition-colors text-xs font-bold"
                          >
                            IN
                          </a>
                        )}
                        {member.socials.twitter && (
                          <a
                            href={member.socials.twitter}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-8 h-8 rounded-xs bg-[#FF7029] text-white flex items-center justify-center hover:bg-white hover:text-[#2D3239] transition-colors text-xs font-bold"
                          >
                            X
                          </a>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Body Info */}
                  <div className="p-6">
                    <h3 className="text-xl font-black text-[#2D3239] group-hover:text-[#FF7029] transition-colors">
                      <Link href={`/team/${member.slug}`}>
                        {member.name}
                      </Link>
                    </h3>
                    <p className="text-xs uppercase font-bold text-[#FF7029] tracking-wider mt-1">
                      {member.role}
                    </p>
                    <p className="text-xs text-gray-600 mt-3 line-clamp-3 leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </div>

                {/* Footer with link */}
                <div className="p-6 pt-0 border-t border-gray-200/50 mt-2">
                  <Link
                    href={`/team/${member.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#2D3239] group-hover:text-[#FF7029] transition-colors mt-3"
                  >
                    <span>View Full Bio & Credentials</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
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
