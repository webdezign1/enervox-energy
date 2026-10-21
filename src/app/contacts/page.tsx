'use client';

import React, { useState } from 'react';
import {
  MapPin,
  Mail,
  Phone,
  Clock,
  Send,
  CheckCircle2,
  Building,
  Globe2,
  MessageSquare
} from 'lucide-react';
import { PageBanner } from '@/components/common/PageBanner';
import { SectionHeading } from '@/components/common/SectionHeading';
import { siteConfig } from '@/data/siteData';

export default function ContactsPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    projectCapacity: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: 'General Inquiry',
        projectCapacity: '',
        message: ''
      });
    }, 6000);
  };

  const offices = [
    {
      region: 'North America Headquarters',
      city: 'San Diego, California',
      address: '742 Evergreen Terrace, Clean Energy Park, CA 92101',
      phone: '+1 (800) 456-7890',
      email: 'na-hq@enervox-energy.com',
      hours: 'Mon - Fri: 8:00 AM - 6:00 PM PST'
    },
    {
      region: 'European Operations Hub',
      city: 'Frankfurt, Germany',
      address: 'Westhafen Tower, Speicherstraße 55, 60327 Frankfurt',
      phone: '+49 69 1234 5678',
      email: 'eu-hub@enervox-energy.com',
      hours: 'Mon - Fri: 8:30 AM - 6:30 PM CET'
    },
    {
      region: 'Asia-Pacific Regional Hub',
      city: 'Tokyo, Japan',
      address: 'Roppongi Hills Mori Tower, Minato City, Tokyo 106-6108',
      phone: '+81 3 5555 0192',
      email: 'apac-hub@enervox-energy.com',
      hours: 'Mon - Fri: 9:00 AM - 6:00 PM JST'
    }
  ];

  return (
    <>
      <PageBanner
        title="Contact Our Global Team"
        eyebrow="GET IN TOUCH"
        breadcrumbs={[{ label: 'Contacts' }]}
        bgImage="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=1920&auto=format&fit=crop"
      />

      {/* 3 Regional Office Cards */}
      <section className="py-16 bg-[#F8FAFC] border-b border-gray-200">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offices.map((office, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-xs border-t-4 border-[#FF7029] shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xs bg-[#FF7029]/10 text-[#FF7029] flex items-center justify-center mb-5">
                  <Building className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-[#FF7029] block mb-1">
                  {office.region}
                </span>
                <h3 className="text-xl font-black text-[#2D3239] mb-4">
                  {office.city}
                </h3>

                <div className="space-y-3 text-xs text-gray-600">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-[#FF7029] shrink-0 mt-0.5" />
                    <span>{office.address}</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Phone className="w-4 h-4 text-[#FF7029] shrink-0" />
                    <a href={`tel:${office.phone.replace(/\D/g, '')}`} className="hover:text-[#FF7029] font-semibold text-[#2D3239]">
                      {office.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Mail className="w-4 h-4 text-[#FF7029] shrink-0" />
                    <a href={`mailto:${office.email}`} className="hover:text-[#FF7029]">
                      {office.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Clock className="w-4 h-4 text-[#FF7029] shrink-0" />
                    <span>{office.hours}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Form & Map Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left: Contact Form (7 cols) */}
            <div className="lg:col-span-7">
              <SectionHeading
                eyebrow="SEND US A MESSAGE"
                title="Let's Discuss Your Renewable Project"
                subtitle="Fill out the contact form below and our regional business development engineers will respond within 24 hours."
              />

              <form onSubmit={handleSubmit} className="space-y-4 mt-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#2D3239] mb-1.5">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Sarah Jenkins"
                      className="w-full bg-[#F8FAFC] border border-gray-200 focus:border-[#FF7029] p-3.5 rounded-xs text-sm text-[#2D3239] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#2D3239] mb-1.5">
                      Corporate Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. s.jenkins@company.com"
                      className="w-full bg-[#F8FAFC] border border-gray-200 focus:border-[#FF7029] p-3.5 rounded-xs text-sm text-[#2D3239] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#2D3239] mb-1.5">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+1 (555) 000-0000"
                      className="w-full bg-[#F8FAFC] border border-gray-200 focus:border-[#FF7029] p-3.5 rounded-xs text-sm text-[#2D3239] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#2D3239] mb-1.5">
                      Inquiry Topic
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full bg-[#F8FAFC] border border-gray-200 focus:border-[#FF7029] p-3.5 rounded-xs text-sm text-[#2D3239] focus:outline-none"
                    >
                      <option value="General Inquiry">General Corporate Inquiry</option>
                      <option value="Utility Wind Project">Utility Wind Project (Onshore/Offshore)</option>
                      <option value="Solar PV Farm">Solar Photovoltaic Farm</option>
                      <option value="Hybrid BESS Storage">Hybrid BESS Energy Storage</option>
                      <option value="O&M Maintenance Services">O&M Maintenance Services</option>
                      <option value="Product Wholesale / Shop">Product Wholesale / Shop Inquiry</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#2D3239] mb-1.5">
                    Estimated Megawatt Capacity (if applicable)
                  </label>
                  <input
                    type="text"
                    value={formData.projectCapacity}
                    onChange={(e) => setFormData({ ...formData, projectCapacity: e.target.value })}
                    placeholder="e.g. 50MW Onshore Wind, 100MWh Storage"
                    className="w-full bg-[#F8FAFC] border border-gray-200 focus:border-[#FF7029] p-3.5 rounded-xs text-sm text-[#2D3239] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#2D3239] mb-1.5">
                    Project Scope & Details *
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Provide details regarding location, timeline, grid interconnection requirements, or technical goals..."
                    className="w-full bg-[#F8FAFC] border border-gray-200 focus:border-[#FF7029] p-3.5 rounded-xs text-sm text-[#2D3239] focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="bg-[#FF7029] hover:bg-[#2D3239] text-white px-8 py-4 text-xs font-black uppercase tracking-widest rounded-xs transition-all duration-300 shadow-md hover:shadow-xl flex items-center gap-2"
                >
                  <span>Transmit Message</span>
                  <Send className="w-4 h-4" />
                </button>

                {submitted && (
                  <div className="p-4 bg-green-50 border-l-4 border-green-500 text-green-800 text-sm flex items-center gap-3 rounded-xs animate-fadeIn">
                    <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0" />
                    <span>
                      Thank you! Your message has been routed to our regional renewable engineering desk. We will respond promptly.
                    </span>
                  </div>
                )}
              </form>
            </div>

            {/* Right: Interactive Styled Map (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-[#2D3239] text-white p-6 rounded-xs">
                <span className="text-[10px] font-black uppercase tracking-widest text-[#FF7029] block mb-1">
                  // GLOBAL DEPLOYMENTS
                </span>
                <h3 className="text-xl font-black">
                  Operational in 34 Countries
                </h3>
                <p className="text-xs text-gray-300 mt-2 leading-relaxed">
                  Our service engineers and monitoring assets span the Americas, EMEA, and Asia-Pacific regions.
                </p>
              </div>

              {/* Map Preview Canvas */}
              <div className="relative h-[420px] rounded-xs overflow-hidden shadow-2xl border-4 border-white bg-[#1E2228]">
                {/* Background Map Graphic with coordinates */}
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-40"
                  style={{
                    backgroundImage:
                      'url(https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1000&auto=format&fit=crop)'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E2228] via-transparent to-[#1E2228]/50" />

                {/* Animated Pulsing Location Pins */}
                <div className="absolute top-1/3 left-1/4 transform -translate-x-1/2 -translate-y-1/2 group">
                  <div className="relative">
                    <span className="absolute -inset-2 rounded-full bg-[#FF7029] opacity-75 animate-ping" />
                    <div className="w-6 h-6 rounded-full bg-[#FF7029] text-white flex items-center justify-center font-bold text-[10px] shadow-lg cursor-pointer">
                      1
                    </div>
                  </div>
                  <div className="absolute top-8 left-1/2 -translate-x-1/2 bg-[#2D3239] text-white text-[10px] py-1 px-2 rounded-xs whitespace-nowrap shadow-xl border border-white/20">
                    San Diego HQ
                  </div>
                </div>

                <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group">
                  <div className="relative">
                    <span className="absolute -inset-2 rounded-full bg-[#FF7029] opacity-75 animate-ping" />
                    <div className="w-6 h-6 rounded-full bg-[#FF7029] text-white flex items-center justify-center font-bold text-[10px] shadow-lg cursor-pointer">
                      2
                    </div>
                  </div>
                  <div className="absolute top-8 left-1/2 -translate-x-1/2 bg-[#2D3239] text-white text-[10px] py-1 px-2 rounded-xs whitespace-nowrap shadow-xl border border-white/20">
                    Frankfurt Operations
                  </div>
                </div>

                <div className="absolute top-1/3 right-1/4 transform -translate-x-1/2 -translate-y-1/2 group">
                  <div className="relative">
                    <span className="absolute -inset-2 rounded-full bg-[#FF7029] opacity-75 animate-ping" />
                    <div className="w-6 h-6 rounded-full bg-[#FF7029] text-white flex items-center justify-center font-bold text-[10px] shadow-lg cursor-pointer">
                      3
                    </div>
                  </div>
                  <div className="absolute top-8 left-1/2 -translate-x-1/2 bg-[#2D3239] text-white text-[10px] py-1 px-2 rounded-xs whitespace-nowrap shadow-xl border border-white/20">
                    Tokyo Hub
                  </div>
                </div>

                {/* Bottom coordinates badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-black/70 backdrop-blur-xs p-3 rounded-xs border border-white/10 text-white flex items-center justify-between text-xs">
                  <div>
                    <span className="text-[10px] text-gray-400 uppercase block">Global Headquarters</span>
                    <strong className="text-white">32.7157° N, 117.1611° W</strong>
                  </div>
                  <span className="text-[#FF7029] text-[10px] font-black uppercase tracking-wider">
                    ONLINE SCADA
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
