import React from 'react';
import { ArrowRight } from "lucide-react";
import { scrollToSection } from "@/utils/scroll";

const OpenBookMark = ({ className = '' }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
    {/* Open book spine + pages */}
    <path d="M12 6 C10 4.5 7 4 3 4 V18 C7 18 10 18.5 12 20 C14 18.5 17 18 21 18 V4 C17 4 14 4.5 12 6 Z"
          stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" fill="none" />
    <line x1="12" y1="6" x2="12" y2="20" stroke="currentColor" strokeWidth="1.5" />
    {/* Text lines, left page */}
    <line x1="5.5" y1="8.5" x2="10" y2="8.5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.7" />
    <line x1="5.5" y1="11" x2="9.5" y2="11" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.7" />
    {/* Text lines, right page */}
    <line x1="14" y1="8.5" x2="18.5" y2="8.5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.7" />
    <line x1="14" y1="11" x2="18" y2="11" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.7" />
    {/* Interactive cursor/arrow tip suggesting interactivity */}
    <path d="M14.5 14.5 l3 1.5 l-1.2 0.6 l0.7 1.5 l-1 0.5 l-0.7 -1.5 l-1.2 0.6 z"
          fill="currentColor" />
  </svg>
);

export default function WhyChoose() {
  return (
    <section id="publishers" className="py-16 md:py-20 scroll-mt-20" aria-labelledby="publishers-heading">
      <div className="max-w-5xl mx-auto px-5 md:px-8">
        <div className="relative overflow-hidden rounded-2xl px-7 py-10 md:px-12 md:py-14 bg-gradient-to-br from-indigo-600 via-blue-600 to-blue-700 text-white">
          {/* Decorative shapes */}
          <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-white/5 blur-3xl" />
          <div className="absolute -bottom-24 -left-12 w-60 h-60 rounded-full bg-amber-300/10 blur-3xl" />

          <div className="relative">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 mb-5">
              <OpenBookMark className="w-3.5 h-3.5 text-amber-200" />
              <span className="text-[11px] font-semibold uppercase tracking-widest text-white/90">For Publishers</span>
            </div>
            <h2 id="publishers-heading" className="text-xl md:text-2xl font-bold leading-snug tracking-[-0.01em] mb-4 max-w-2xl !text-white">
              Make your textbook content interactive. Keep the school relationship.
            </h2>
            <p className="text-base text-blue-50/90 leading-relaxed mb-7 max-w-2xl">
              LearnLab is the technology layer for science and math simulations built around your syllabus. You sell to the school, we build the experience, the revenue is shared. We don't compete with your distribution.
            </p>
            <button
              onClick={() => scrollToSection('contact')}
              className="group inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-blue-700 bg-white hover:bg-amber-50 rounded-lg transition-colors"
            >
              Talk to us about a partnership
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
