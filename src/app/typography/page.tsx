import React from 'react';
import Link from 'next/link';
import { Check, Quote, ArrowRight, Code } from 'lucide-react';
import { PageBanner } from '@/components/common/PageBanner';
import { SectionHeading } from '@/components/common/SectionHeading';

export const metadata = {
  title: 'Typography & Editorial System | Enervox',
  description: 'Editorial typography standards, font scales, headings, blockquotes, drop caps, lists, and tabular formatting.'
};

export default function TypographyPage() {
  return (
    <>
      <PageBanner
        title="Typography & Editorial Hierarchy"
        eyebrow="BRAND DESIGN SYSTEM"
        breadcrumbs={[
          { label: 'Page', href: '/about' },
          { label: 'Typography' }
        ]}
        bgImage="https://images.unsplash.com/photo-1509391365360-2e959784a276?q=80&w=1920&auto=format&fit=crop"
      />

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <SectionHeading
            eyebrow="FONT FAMILIES & SCALES"
            title="Clean, Bold, Accessible Typography"
            subtitle="Engineered for high readability in both corporate white papers and outdoor dashboard displays."
            align="left"
          />

          {/* 1. HEADINGS H1 - H6 */}
          <div className="space-y-6">
            <h3 className="text-xl font-black text-[#2D3239] pb-3 border-b border-gray-200">
              01. Heading Hierarchy
            </h3>
            <div className="space-y-4">
              <div className="pb-4 border-b border-gray-100 flex flex-col md:flex-row md:items-baseline justify-between gap-2">
                <span className="text-xs font-mono text-gray-400 w-24">H1 / 48px</span>
                <h1 className="text-4xl sm:text-5xl font-black text-[#2D3239] flex-1">
                  Decarbonizing Industrial Infrastructure
                </h1>
              </div>

              <div className="pb-4 border-b border-gray-100 flex flex-col md:flex-row md:items-baseline justify-between gap-2">
                <span className="text-xs font-mono text-gray-400 w-24">H2 / 36px</span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2D3239] flex-1">
                  Proven Utility-Scale Renewable Solutions
                </h2>
              </div>

              <div className="pb-4 border-b border-gray-100 flex flex-col md:flex-row md:items-baseline justify-between gap-2">
                <span className="text-xs font-mono text-gray-400 w-24">H3 / 28px</span>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#2D3239] flex-1">
                  Offshore Aerodynamics & Gearless Generators
                </h3>
              </div>

              <div className="pb-4 border-b border-gray-100 flex flex-col md:flex-row md:items-baseline justify-between gap-2">
                <span className="text-xs font-mono text-gray-400 w-24">H4 / 22px</span>
                <h4 className="text-xl font-bold text-[#2D3239] flex-1">
                  Sub-Second Synthetic Inertia Frequency Response
                </h4>
              </div>

              <div className="pb-4 border-b border-gray-100 flex flex-col md:flex-row md:items-baseline justify-between gap-2">
                <span className="text-xs font-mono text-gray-400 w-24">H5 / 18px</span>
                <h5 className="text-lg font-bold text-[#2D3239] flex-1">
                  Intelligent Microgrid Battery Thermal Management
                </h5>
              </div>

              <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2">
                <span className="text-xs font-mono text-gray-400 w-24">H6 / 14px</span>
                <h6 className="text-sm font-bold uppercase tracking-wider text-[#FF7029] flex-1">
                  Continuous Telemetry Verification Protocol
                </h6>
              </div>
            </div>
          </div>

          {/* 2. BODY TEXT & DROP CAPS */}
          <div className="space-y-6">
            <h3 className="text-xl font-black text-[#2D3239] pb-3 border-b border-gray-200">
              02. Paragraph Styles & Drop Caps
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-gray-600 leading-relaxed">
              <div>
                <h4 className="text-xs font-black uppercase tracking-wider text-[#2D3239] mb-3">
                  Lead Editorial Paragraph with Drop Cap
                </h4>
                <p>
                  <span className="float-left text-5xl font-black text-[#FF7029] leading-none pr-3 pt-1 font-sans">
                    E
                  </span>
                  nerving challenges faced by modern electrical transmission grids can no longer be resolved through traditional fossil generation reserves. As regional operators integrate gigawatts of variable solar and wind assets, synthetic inertia algorithms and fast-response lithium batteries provide the required frequency resilience.
                </p>
              </div>

              <div>
                <h4 className="text-xs font-black uppercase tracking-wider text-[#2D3239] mb-3">
                  Standard Body Paragraph & Inline Elements
                </h4>
                <p>
                  Enervox utilizes high-efficiency <strong className="text-[#2D3239]">N-Type TOPCon bifacial modules</strong> with a temperature coefficient of -0.30%/°C. In extreme desert installations, these cells maintain <span className="bg-[#FF7029]/15 text-[#FF7029] px-1 font-semibold rounded-xs">98.4% efficiency</span>, minimizing degradation over a 30-year operational lifecycle.
                </p>
              </div>
            </div>
          </div>

          {/* 3. BLOCKQUOTES & PULL QUOTES */}
          <div className="space-y-6">
            <h3 className="text-xl font-black text-[#2D3239] pb-3 border-b border-gray-200">
              03. Blockquotes & Pull Quotes
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <blockquote className="bg-[#F8FAFC] p-8 border-l-4 border-[#FF7029] rounded-xs text-[#2D3239] italic font-medium leading-relaxed">
                "The energy transition is not a distant vision for future generations; it is an active engineering transformation delivering immediate economic value and energy independence today."
                <footer className="mt-4 not-italic text-xs font-bold uppercase tracking-wider text-gray-500">
                  — Dr. Elena Rostova, CTO Enervox
                </footer>
              </blockquote>

              <blockquote className="bg-[#2D3239] p-8 rounded-xs text-white relative overflow-hidden">
                <Quote className="w-12 h-12 text-white/10 absolute -top-1 -left-1 fill-current" />
                <p className="text-lg font-black relative z-10 italic">
                  "Zero curtailment is our baseline promise to every utility grid operator we partner with."
                </p>
                <footer className="mt-4 not-italic text-xs font-bold uppercase tracking-wider text-[#FF7029]">
                  — Marcus Sterling, VP of Offshore Projects
                </footer>
              </blockquote>
            </div>
          </div>

          {/* 4. LISTS (UNORDERED & ORDERED) */}
          <div className="space-y-6">
            <h3 className="text-xl font-black text-[#2D3239] pb-3 border-b border-gray-200">
              04. List Formats & Bullet Styling
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs text-gray-700">
              <div className="space-y-2">
                <h5 className="font-bold uppercase tracking-wider text-[#2D3239] mb-3">Custom Icon List</h5>
                {[
                  'Aerodynamically optimized 85-meter composite blades',
                  'Rare-earth permanent magnet direct-drive generators',
                  'Predictive vibration SCADA analytics integration',
                  'Class 1A extreme offshore storm survival rating'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-[#FF7029] shrink-0" />
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <div>
                <h5 className="font-bold uppercase tracking-wider text-[#2D3239] mb-3">Ordered Step Sequence</h5>
                <ol className="space-y-2 list-decimal list-inside font-medium text-gray-600">
                  <li>Resource Assessment & Environmental Feasibility</li>
                  <li>Interconnection Permitting & Substation EPC Design</li>
                  <li>Civil Foundation & Nacelle Heavy-Lift Assembly</li>
                  <li>Cold & Hot Commissioning with Grid Code Verification</li>
                </ol>
              </div>
            </div>
          </div>

          {/* 5. CODE FORMATTING */}
          <div className="space-y-6">
            <h3 className="text-xl font-black text-[#2D3239] pb-3 border-b border-gray-200">
              05. Code Snippets & Technical Syntax
            </h3>

            <div className="bg-[#1E2228] text-white p-6 rounded-xs font-mono text-xs overflow-x-auto border border-white/10 shadow-lg">
              <div className="text-gray-500 mb-2">// Enervox SCADA Frequency Regulation Hook</div>
              <span className="text-[#FF7029]">async function</span> <span className="text-blue-400">stabilizeGridFrequency</span>(telemetry: GridState): Promise&lt;InverterDispatch&gt; &#123;<br />
              &nbsp;&nbsp;<span className="text-[#FF7029]">const</span> frequencyDelta = telemetry.nominalFrequency - telemetry.activeFrequency;<br />
              &nbsp;&nbsp;<span className="text-[#FF7029]">if</span> (Math.abs(frequencyDelta) &gt; <span className="text-emerald-400">0.05</span>) &#123;<br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-gray-400">// Dispatch synthetic inertia in &lt;10 milliseconds</span><br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#FF7029]">return</span> await bessContainer.<span className="text-blue-400">injectSyntheticInertia</span>(frequencyDelta * <span className="text-emerald-400">100</span>);<br />
              &nbsp;&nbsp;&#125;<br />
              &nbsp;&nbsp;<span className="text-[#FF7029]">return</span> &#123; mode: <span className="text-amber-400">'STEADY_STATE_FLOAT'</span>, status: <span className="text-emerald-400">200</span> &#125;;<br />
              &#125;
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
