import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  MapPin,
  Zap,
  Calendar,
  Building,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Share2
} from 'lucide-react';
import { PageBanner } from '@/components/common/PageBanner';
import { portfolioItems } from '@/data/siteData';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return portfolioItems.map((item) => ({
    slug: item.slug,
  }));
}

export default async function SinglePortfolioPage({ params }: Props) {
  const { slug } = await params;
  const project = portfolioItems.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const currentIndex = portfolioItems.findIndex((p) => p.slug === slug);
  const prevProject =
    portfolioItems[(currentIndex - 1 + portfolioItems.length) % portfolioItems.length];
  const nextProject =
    portfolioItems[(currentIndex + 1) % portfolioItems.length];

  return (
    <>
      <PageBanner
        title={project.title}
        eyebrow={`CASE STUDY // ${project.category.toUpperCase()}`}
        breadcrumbs={[
          { label: 'Portfolio', href: '/portfolio' },
          { label: project.title.slice(0, 30) + '...' }
        ]}
        bgImage={project.image}
      />

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* MAIN CONTENT (8 cols) */}
            <main className="lg:col-span-8 space-y-10">
              {/* Hero Image */}
              <div className="relative rounded-xs overflow-hidden shadow-2xl border-4 border-white aspect-16/10 bg-gray-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Title & Introduction */}
              <div>
                <span className="text-xs uppercase font-extrabold tracking-widest text-[#FF7029] block mb-1">
                  // PROJECT SHOWCASE
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-[#2D3239]">
                  {project.title}
                </h2>
                <p className="text-base text-gray-700 font-medium mt-3 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Case Study Sections: Challenge, Solution, Results */}
              <div className="space-y-8 text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-8">
                <div>
                  <h3 className="text-xl font-black text-[#2D3239] mb-3 flex items-center gap-2">
                    <span className="text-[#FF7029]">01.</span> The Engineering Challenge
                  </h3>
                  <p>
                    The site presented severe topographical and environmental hurdles, including high seasonal wind shear, extreme ambient temperature variations, and strict wildlife migration corridor buffer requirements. The regional grid operator mandated a zero-curtailment tolerance during peak solar midday generation.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-black text-[#2D3239] mb-3 flex items-center gap-2">
                    <span className="text-[#FF7029]">02.</span> The Enervox EPC Solution
                  </h3>
                  <p>
                    Enervox deployed customized bifacial TOPCon photovoltaic trackers coupled with intelligent sub-second pitch-regulated direct-drive turbines. An integrated containerized lithium-iron-phosphate (LFP) BESS absorbs mid-day power surges and feeds synthetic inertia into the high-voltage substation.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-black text-[#2D3239] mb-3 flex items-center gap-2">
                    <span className="text-[#FF7029]">03.</span> Measured Environmental & Economic Impact
                  </h3>
                  <p>
                    Since commissioning in {project.year}, the installation has operated at a verified 99.85% availability factor. Over 480,000 metric tons of CO2 emissions are avoided annually, displacing local fossil peaker generators and stabilizing the regional transmission loop.
                  </p>
                </div>
              </div>

              {/* Performance Metrics Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                <div className="p-6 bg-[#F8FAFC] border-t-2 border-[#FF7029] rounded-xs text-center">
                  <span className="text-3xl font-black text-[#2D3239] block">{project.capacity}</span>
                  <span className="text-xs uppercase font-bold text-gray-500 mt-1 block">Installed Rating</span>
                </div>
                <div className="p-6 bg-[#F8FAFC] border-t-2 border-[#FF7029] rounded-xs text-center">
                  <span className="text-3xl font-black text-[#2D3239] block">99.8%</span>
                  <span className="text-xs uppercase font-bold text-gray-500 mt-1 block">Annual Uptime</span>
                </div>
                <div className="p-6 bg-[#F8FAFC] border-t-2 border-[#FF7029] rounded-xs text-center">
                  <span className="text-3xl font-black text-[#2D3239] block">480k</span>
                  <span className="text-xs uppercase font-bold text-gray-500 mt-1 block">Tons CO2 Avoided</span>
                </div>
              </div>

              {/* Previous / Next Project Navigation Bar */}
              <div className="pt-8 border-t border-gray-200 flex items-center justify-between gap-4">
                <Link
                  href={`/portfolio/${prevProject.slug}`}
                  className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#2D3239] hover:text-[#FF7029] transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span className="hidden sm:inline">{prevProject.title}</span>
                  <span className="sm:hidden">Previous</span>
                </Link>

                <Link
                  href="/portfolio"
                  className="bg-gray-100 hover:bg-[#FF7029] hover:text-white px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-xs transition-colors"
                >
                  All Projects
                </Link>

                <Link
                  href={`/portfolio/${nextProject.slug}`}
                  className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#2D3239] hover:text-[#FF7029] transition-colors"
                >
                  <span className="hidden sm:inline">{nextProject.title}</span>
                  <span className="sm:hidden">Next</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </main>

            {/* SIDEBAR: Project Specs (4 cols) */}
            <aside className="lg:col-span-4 space-y-8">
              <div className="bg-[#2D3239] text-white p-8 rounded-xs border-t-4 border-[#FF7029] shadow-xl">
                <span className="text-[10px] font-black uppercase tracking-widest text-[#FF7029] block mb-2">
                  // PROJECT DATA SHEET
                </span>
                <h4 className="text-xl font-black mb-6 border-b border-white/10 pb-4">
                  Project Specifications
                </h4>

                <div className="space-y-4 text-xs">
                  <div className="flex items-center justify-between pb-3 border-b border-white/10">
                    <span className="text-gray-400">Client / Authority:</span>
                    <strong className="text-white text-right">{project.client}</strong>
                  </div>
                  <div className="flex items-center justify-between pb-3 border-b border-white/10">
                    <span className="text-gray-400">Geographic Location:</span>
                    <strong className="text-white text-right">{project.location}</strong>
                  </div>
                  <div className="flex items-center justify-between pb-3 border-b border-white/10">
                    <span className="text-gray-400">Rated Peak Capacity:</span>
                    <strong className="text-[#FF7029] text-right text-sm font-black">{project.capacity}</strong>
                  </div>
                  <div className="flex items-center justify-between pb-3 border-b border-white/10">
                    <span className="text-gray-400">Sector Category:</span>
                    <strong className="text-white text-right">{project.category}</strong>
                  </div>
                  <div className="flex items-center justify-between pb-3 border-b border-white/10">
                    <span className="text-gray-400">Year Commissioned:</span>
                    <strong className="text-white text-right">{project.year}</strong>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Scope of Work:</span>
                    <strong className="text-white text-right">Turnkey EPC + 20-Yr O&M</strong>
                  </div>
                </div>

                <Link
                  href="/contacts"
                  className="mt-8 w-full bg-[#FF7029] hover:bg-[#E55A15] text-white py-3.5 text-xs font-black uppercase tracking-widest rounded-xs text-center block transition-colors shadow-md"
                >
                  Consult on Similar Project
                </Link>
              </div>

              {/* Assistance Card */}
              <div className="bg-[#F8FAFC] p-6 rounded-xs border border-gray-200">
                <h4 className="text-sm font-black uppercase tracking-wider text-[#2D3239] mb-2">
                  Need a Feasibility Study?
                </h4>
                <p className="text-xs text-gray-600 leading-relaxed mb-4">
                  Enervox provides bankable resource assessment reports for utility developers and sovereign lenders.
                </p>
                <Link
                  href="/contacts"
                  className="text-xs font-bold text-[#FF7029] uppercase tracking-wider hover:underline flex items-center gap-1"
                >
                  <span>Request Feasibility Review</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
