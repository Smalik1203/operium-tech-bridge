import React from 'react';
import { ArrowRight } from "lucide-react";
import { scrollToSection } from "@/utils/scroll";

export default function WhyChoose() {
  return (
    <section id="publishers" className="py-16 md:py-20 scroll-mt-20" aria-labelledby="publishers-heading">
      <div className="max-w-5xl mx-auto px-5 md:px-8">
        <div className="relative overflow-hidden rounded-2xl px-7 py-10 md:px-12 md:py-14 bg-gradient-to-br from-indigo-600 via-blue-600 to-blue-700 text-white">
          {/* Decorative shapes */}
          <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-white/5 blur-3xl" />
          <div className="absolute -bottom-24 -left-12 w-60 h-60 rounded-full bg-amber-300/10 blur-3xl" />

          <div className="relative">
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
