import React from 'react';
import { ArrowRight, Sparkles } from "lucide-react";
import { scrollToSection } from "@/utils/scroll";

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden noise-bg" aria-label="Hero section">
      {/* Colorful background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50/50" />

      {/* Decorative elements */}
      <div className="blob-blue absolute -top-32 -right-32 w-[600px] h-[600px]" />
      <div className="blob-indigo absolute -bottom-40 -left-40 w-[500px] h-[500px]" />

      {/* Floating shapes */}
      <div className="absolute top-32 right-[15%] w-16 h-16 rounded-2xl bg-blue-500/10 rotate-12 animate-float hidden lg:block" />
      <div className="absolute bottom-40 left-[10%] w-12 h-12 rounded-full bg-indigo-500/10 animate-float hidden lg:block" style={{ animationDelay: '2s' }} />
      <div className="absolute top-[40%] right-[8%] w-8 h-8 rounded-lg bg-emerald-500/10 rotate-45 animate-float hidden lg:block" style={{ animationDelay: '4s' }} />

      <div className="max-w-7xl mx-auto px-5 md:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Text */}
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-blue-100 shadow-sm mb-8">
              <Sparkles className="w-3.5 h-3.5 text-blue-500" />
              <span className="text-xs font-semibold text-blue-600 tracking-wide uppercase">Operium Technologies Pvt Ltd</span>
            </div>

            <h1 className="text-[2.75rem] sm:text-5xl lg:text-[4rem] font-extrabold leading-[1.08] tracking-[-0.03em] text-gray-900 mb-6">
              Building practical software for <br />
              <span className="relative inline-block mt-2">
                <span className="relative z-10 text-blue-600">educational institutions</span>
                <span className="absolute bottom-2 left-0 w-full h-4 bg-blue-100/60 -z-0 rounded-sm" />
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8 max-w-md font-medium">
              We're a team of developers focused on creating simple, helpful tools that make managing educational institutions a little bit easier every day.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => scrollToSection('about')}
                className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 text-[15px] font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-lg shadow-blue-600/20 hover:shadow-blue-700/30 transition-all"
              >
                Our Story
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
              <button
                onClick={() => scrollToSection('solutions')}
                className="inline-flex items-center justify-center px-7 py-3.5 text-[15px] font-semibold text-gray-700 bg-white border border-gray-200 hover:border-gray-300 hover:shadow-sm rounded-xl transition-all"
              >
                What We Build
              </button>
            </div>
          </div>

          {/* Right — Abstract Tech Representation */}
          <div className="hidden lg:flex justify-end pr-8">
            <div className="relative w-[440px] h-[480px]">
              {/* Background card (tilted) */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-100/80 to-indigo-100/40 rotate-3" />

              {/* Main card */}
              <div className="absolute inset-4 rounded-[2rem] glass-panel shadow-2xl shadow-blue-900/10 -rotate-2 overflow-hidden flex flex-col">
                {/* Header bar */}
                <div className="px-6 py-4 border-b border-gray-50 flex items-center justify-between">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-gray-200" />
                    <div className="w-3 h-3 rounded-full bg-gray-200" />
                    <div className="w-3 h-3 rounded-full bg-gray-200" />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Active System</span>
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse-ring" />
                  </div>
                </div>

                <div className="p-8 flex-1 flex flex-col gap-6">
                  <div className="space-y-2">
                    <div className="h-2 w-12 bg-blue-600 rounded-full" />
                    <h3 className="text-xl font-bold text-gray-900">Platform Services</h3>
                    <p className="text-xs text-gray-400 font-mono">Running smoothly // connected</p>
                  </div>

                  {/* Abstract data lines */}
                  <div className="space-y-4 flex-1 mt-4">
                    {[100, 75, 90, 60].map((width, i) => (
                      <div key={i} className="flex items-center gap-4">
                        <div className="w-8 flex-shrink-0 text-[10px] font-mono text-gray-400">0{i + 1}</div>
                        <div className="flex-1 h-1.5 bg-gray-50 rounded-full overflow-hidden">
                          <div
                            className={`h-full rounded-full transition-all duration-1000 ${i === 0 ? 'bg-blue-600' : i === 1 ? 'bg-indigo-500' : 'bg-gray-200'}`}
                            style={{ width: `${width}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* API Mockup */}
                  <div className="bg-gray-50 rounded-xl p-4 mt-auto border border-gray-100">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="px-1.5 py-0.5 rounded uppercase text-[9px] font-bold bg-emerald-100 text-emerald-700">UPDATE</div>
                      <span className="text-[10px] font-mono text-gray-500 flex-1 truncate">/records/sync</span>
                      <span className="text-[10px] font-mono text-gray-400">Done</span>
                    </div>
                    <div className="font-mono text-[9px] text-gray-400 leading-relaxed">
                      {`{
  "status": "success",
  "records_updated": 45,
  "time": "morning"
}`}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
