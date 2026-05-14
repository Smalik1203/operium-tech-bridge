import React from 'react';
import { ArrowRight } from "lucide-react";
import { scrollToSection } from "@/utils/scroll";

export default function Hero() {
  return (
    <section className="relative pt-24 pb-28 md:pt-32 md:pb-36 overflow-hidden" aria-label="Hero section">
      {/* Brand-tinted backdrop */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/70 via-white to-indigo-50/40 -z-10" />
      <div
        className="absolute inset-0 -z-10 opacity-[0.4]"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(15,23,42,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,23,42,0.05) 1px, transparent 1px)',
          backgroundSize: '44px 44px',
          maskImage: 'radial-gradient(ellipse at top, black 35%, transparent 75%)',
          WebkitMaskImage: 'radial-gradient(ellipse at top, black 35%, transparent 75%)',
        }}
      />
      <div className="blob-blue absolute -top-40 -right-40 w-[560px] h-[560px] hidden md:block -z-10" />
      <div className="blob-indigo absolute -bottom-56 -left-32 w-[460px] h-[460px] hidden md:block -z-10" />

      <div className="max-w-5xl mx-auto px-5 md:px-8 text-center md:text-left">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-blue-100 shadow-sm mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
          <span className="text-xs font-semibold text-gray-700 tracking-wide">Operium Labs · K-12 India</span>
        </div>

        {/* Headline */}
        <h1 className="text-[2.5rem] sm:text-5xl md:text-6xl lg:text-[4.25rem] font-bold leading-[1.05] tracking-[-0.025em] text-gray-900 mb-8 max-w-4xl">
          Smarter solutions for a{' '}
          <span className="text-blue-600">smarter generation.</span>
        </h1>

        {/* Subhead */}
        <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-10 max-w-2xl mx-auto md:mx-0">
          Software for Indian K-12 schools across three layers — parent communication, day-to-day operations, and the classroom itself.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 justify-center md:justify-start">
          <button
            onClick={() => scrollToSection('contact')}
            className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-sm shadow-blue-600/20 transition-colors"
          >
            Talk to us
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </button>
          <button
            onClick={() => scrollToSection('products')}
            className="inline-flex items-center justify-center px-7 py-3.5 text-sm font-semibold text-gray-700 hover:text-gray-900 bg-white border border-gray-200 hover:border-gray-300 rounded-lg transition-all"
          >
            See the products
          </button>
        </div>
      </div>

      {/* Three-product strip — separated, breathes below */}
      <div className="max-w-5xl mx-auto px-5 md:px-8 mt-20 md:mt-28">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-gray-200 rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
          <a
            href="https://relayhq.in"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white p-6 md:p-7 hover:bg-emerald-50/40 transition-colors"
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span className="text-[11px] font-semibold text-emerald-700 uppercase tracking-widest">Communication</span>
            </div>
            <div className="flex items-baseline justify-between gap-2 mb-1">
              <p className="text-base font-semibold text-gray-900">Relay</p>
              <span className="text-[11px] font-medium text-gray-400 group-hover:text-emerald-600 transition-colors">relayhq.in ↗</span>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">Parent updates on WhatsApp — structured, segmented, with read receipts.</p>
          </a>
          <a
            href="https://classbridge.in"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white p-6 md:p-7 hover:bg-blue-50/40 transition-colors"
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              <span className="text-[11px] font-semibold text-blue-700 uppercase tracking-widest">Operations</span>
            </div>
            <div className="flex items-baseline justify-between gap-2 mb-1">
              <p className="text-base font-semibold text-gray-900">ClassBridge</p>
              <span className="text-[11px] font-medium text-gray-400 group-hover:text-blue-600 transition-colors">classbridge.in ↗</span>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">Attendance, fees, timetables, exams, analytics — one system for the whole school.</p>
          </a>
          <a
            href="https://learnlab.in"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white p-6 md:p-7 hover:bg-amber-50/40 transition-colors"
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
              <span className="text-[11px] font-semibold text-amber-700 uppercase tracking-widest">Learning</span>
            </div>
            <div className="flex items-baseline justify-between gap-2 mb-1">
              <p className="text-base font-semibold text-gray-900">LearnLab</p>
              <span className="text-[11px] font-medium text-gray-400 group-hover:text-amber-600 transition-colors">learnlab.in ↗</span>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">Interactive science and math simulations built around the syllabus.</p>
          </a>
        </div>
      </div>
    </section>
  );
}
