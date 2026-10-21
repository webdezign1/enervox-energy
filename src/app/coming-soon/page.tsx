'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { SunMedium, ArrowRight, CheckCircle2, Clock } from 'lucide-react';
import { PageBanner } from '@/components/common/PageBanner';

export default function ComingSoonPage() {
  const [timeLeft, setTimeLeft] = useState({
    days: 48,
    hours: 14,
    minutes: 32,
    seconds: 19
  });

  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleNotify = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail('');
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  return (
    <>
      <PageBanner
        title="Project Helios 2.0 Launching Soon"
        eyebrow="NEXT-GEN CLEAN TECH"
        breadcrumbs={[
          { label: 'Page', href: '/about' },
          { label: 'Coming Soon' }
        ]}
        bgImage="https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=1920&auto=format&fit=crop"
      />

      <section className="py-24 lg:py-32 bg-[#2D3239] text-white relative overflow-hidden text-center">
        {/* Glow circles */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FF7029]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="w-16 h-16 rounded-xs bg-[#FF7029] text-white flex items-center justify-center mx-auto shadow-2xl">
            <SunMedium className="w-8 h-8" />
          </div>

          <div>
            <span className="text-xs uppercase font-extrabold tracking-widest text-[#FF7029] block mb-2">
              // UNDER CONSTRUCTION & COMMISSIONING
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white max-w-2xl mx-auto leading-tight">
              We Are Launching Our Global Energy Hub
            </h2>
            <p className="text-sm sm:text-base text-gray-300 mt-4 max-w-xl mx-auto leading-relaxed">
              Our engineering team is finalizing the automated real-time SCADA portal and customer self-service energy storage telemetry dashboard.
            </p>
          </div>

          {/* Countdown Clock */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto">
            <div className="p-6 bg-white/5 border border-white/10 rounded-xs backdrop-blur-xs">
              <span className="text-4xl sm:text-5xl font-black text-[#FF7029] block font-mono">
                {String(timeLeft.days).padStart(2, '0')}
              </span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mt-1 block">
                Days
              </span>
            </div>

            <div className="p-6 bg-white/5 border border-white/10 rounded-xs backdrop-blur-xs">
              <span className="text-4xl sm:text-5xl font-black text-[#FF7029] block font-mono">
                {String(timeLeft.hours).padStart(2, '0')}
              </span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mt-1 block">
                Hours
              </span>
            </div>

            <div className="p-6 bg-white/5 border border-white/10 rounded-xs backdrop-blur-xs">
              <span className="text-4xl sm:text-5xl font-black text-[#FF7029] block font-mono">
                {String(timeLeft.minutes).padStart(2, '0')}
              </span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mt-1 block">
                Minutes
              </span>
            </div>

            <div className="p-6 bg-white/5 border border-white/10 rounded-xs backdrop-blur-xs">
              <span className="text-4xl sm:text-5xl font-black text-[#FF7029] block font-mono">
                {String(timeLeft.seconds).padStart(2, '0')}
              </span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mt-1 block">
                Seconds
              </span>
            </div>
          </div>

          {/* Notification form */}
          <form onSubmit={handleNotify} className="max-w-md mx-auto pt-4">
            <div className="flex">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email for launch priority..."
                className="w-full bg-white/10 border border-white/20 px-4 py-3.5 text-xs text-white placeholder-gray-400 rounded-l-xs focus:outline-none focus:border-[#FF7029]"
              />
              <button
                type="submit"
                className="bg-[#FF7029] hover:bg-[#E55A15] text-white px-6 text-xs font-black uppercase tracking-wider rounded-r-xs transition-colors shrink-0"
              >
                Notify Me
              </button>
            </div>

            {submitted && (
              <div className="mt-3 text-xs text-green-400 flex items-center justify-center gap-1.5 animate-fadeIn">
                <CheckCircle2 className="w-4 h-4" />
                <span>You will receive priority access upon launch!</span>
              </div>
            )}
          </form>

          {/* Back Home */}
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-400 hover:text-white transition-colors"
            >
              <span>Return to Main Website</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
