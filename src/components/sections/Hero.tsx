import React from 'react';
import { ArrowUpRight, Search, ChevronLeft, SlidersHorizontal } from 'lucide-react';

/* ── ClassBridge: a realistic attendance surface ── */
function ClassBridgeMock() {
  const rows = [
    { name: 'Rohan Verma', cls: 'IX-B', mark: 'P', pct: 92 },
    { name: 'Sneha Nair', cls: 'IX-B', mark: 'P', pct: 88 },
    { name: 'Imran Sheikh', cls: 'IX-B', mark: 'L', pct: 79 },
    { name: 'Pooja Rao', cls: 'IX-B', mark: 'A', pct: 68 },
    { name: 'Vikram Das', cls: 'IX-B', mark: 'P', pct: 95 },
  ];
  const markStyle: Record<string, string> = {
    P: 'bg-emerald-50 text-emerald-700',
    L: 'bg-amber-50 text-amber-700',
    A: 'bg-red-50 text-red-600',
  };
  return (
    <div className="bg-white border border-gray-200/80 rounded-lg h-full flex flex-col font-sans shadow-sm overflow-hidden">
      {/* app chrome */}
      <div className="flex items-center justify-between px-3.5 py-2.5 border-b border-gray-100">
        <div className="flex items-center gap-2 text-gray-700">
          <ChevronLeft className="w-3.5 h-3.5 text-gray-400" />
          <span className="text-[12px] font-semibold">Attendance</span>
          <span className="text-[11px] text-gray-400">IX-B</span>
        </div>
        <div className="flex items-center gap-2.5 text-gray-400">
          <Search className="w-3.5 h-3.5" />
          <SlidersHorizontal className="w-3.5 h-3.5" />
        </div>
      </div>
      {/* date strip */}
      <div className="flex items-center justify-between px-3.5 py-1.5 bg-gray-50/80 border-b border-gray-100">
        <span className="text-[11px] text-gray-500">Mon, 14 Apr · Period 1</span>
        <span className="text-[11px] text-gray-400">38 / 40 marked</span>
      </div>
      {/* roll */}
      <div className="flex-1 overflow-hidden">
        {rows.map((r) => (
          <div key={r.name} className="flex items-center justify-between px-3.5 py-2 border-b border-gray-50">
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-[10px] font-semibold text-gray-500 flex-shrink-0">
                {r.name.split(' ').map((n) => n[0]).join('')}
              </div>
              <span className="text-[12px] text-gray-800 truncate">{r.name}</span>
            </div>
            <div className="flex items-center gap-2.5 flex-shrink-0">
              <span className="text-[10px] text-gray-400 tabular-nums">{r.pct}%</span>
              <span className={`w-5 h-5 rounded text-[10px] font-bold flex items-center justify-center ${markStyle[r.mark]}`}>
                {r.mark}
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="px-3.5 py-2.5 border-t border-gray-100 flex items-center justify-between">
        <span className="text-[11px] text-gray-400">2 flagged below 75%</span>
        <span className="text-[11px] font-medium text-blue-600">Save roll</span>
      </div>
    </div>
  );
}

/* ── LearnLab: a live solar-system sim (CSS-driven orbits) ── */
function LearnLabMock() {
  return (
    <div className="bg-[#0B0E14] border border-gray-200/80 rounded-lg h-full flex flex-col font-sans shadow-sm overflow-hidden">
      {/* sim chrome */}
      <div className="flex items-center justify-between px-3.5 py-2.5 border-b border-white/10">
        <div className="flex items-center gap-2 text-white/80">
          <ChevronLeft className="w-3.5 h-3.5 text-white/40" />
          <span className="text-[12px] font-semibold">The Solar System</span>
        </div>
        <span className="text-[11px] text-white/35">Class 6 · Science</span>
      </div>

      {/* canvas */}
      <div className="flex-1 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              'radial-gradient(1px 1px at 20% 30%, #fff, transparent), radial-gradient(1px 1px at 70% 60%, #fff, transparent), radial-gradient(1px 1px at 40% 80%, #fff, transparent), radial-gradient(1px 1px at 85% 25%, #fff, transparent), radial-gradient(1px 1px at 55% 15%, #fff, transparent), radial-gradient(1px 1px at 12% 70%, #fff, transparent)',
          }}
        />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[230px] h-[230px]">
          <div className="absolute inset-[28px] rounded-full border border-white/10" />
          <div className="absolute inset-[58px] rounded-full border border-white/10" />
          <div className="absolute inset-[88px] rounded-full border border-white/10" />
          <div className="absolute inset-[112px] rounded-full border border-white/[0.07]" />

          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="sun-core w-6 h-6 rounded-full bg-amber-400 shadow-[0_0_24px_8px_rgba(251,191,36,0.45)]" />
          </div>

          <div className="orbit orbit-1 inset-[28px]">
            <div className="absolute left-1/2 -top-1 -translate-x-1/2 w-2 h-2 rounded-full bg-sky-300" />
          </div>
          <div className="orbit orbit-2 inset-[58px]">
            <div className="absolute left-1/2 -top-1.5 -translate-x-1/2 w-3 h-3 rounded-full bg-emerald-400" />
          </div>
          <div className="orbit orbit-3 inset-[88px]">
            <div className="absolute left-1/2 -top-2 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-blue-400" />
          </div>
          <div className="orbit orbit-4 inset-[112px]">
            <div className="absolute left-1/2 -top-1.5 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-rose-300" />
          </div>
        </div>
      </div>

      {/* a real control */}
      <div className="px-3.5 py-2.5 border-t border-white/10">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[11px] text-white/60">Orbit speed</span>
          <span className="text-[11px] text-amber-300 tabular-nums">1.0×</span>
        </div>
        <div className="h-1 rounded-full bg-white/10">
          <div className="h-full rounded-full bg-amber-400 w-1/2" />
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden" aria-label="Hero section">
      <div
        className="absolute inset-0 -z-10 opacity-[0.4] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(15,23,42,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,23,42,0.04) 1px, transparent 1px)',
          backgroundSize: '72px 72px',
          maskImage: 'linear-gradient(to bottom, black 0%, transparent 55%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 0%, transparent 55%)',
        }}
      />

      {/* statement */}
      <div className="relative max-w-7xl mx-auto px-5 md:px-10 pt-14 md:pt-20 pb-10 md:pb-14">
        <h1 className="font-['Inter_Tight','Inter',sans-serif] font-semibold text-[2rem] sm:text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.07] tracking-[-0.025em] text-gray-900 max-w-3xl">
          Software that helps Indian schools run the day and teach the lesson.
        </h1>
        <p className="mt-6 text-base md:text-lg text-gray-600 max-w-xl leading-relaxed">
          ClassBridge handles the operations. LearnLab brings the classroom to life. Both built for how schools here actually work.
        </p>
      </div>

      {/* two products, working */}
      <div className="relative max-w-7xl mx-auto px-5 md:px-10 pb-20 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-gray-200 border border-gray-200 rounded-xl overflow-hidden">
          {/* ClassBridge */}
          <div className="bg-white p-6 md:p-8 flex flex-col">
            <div className="flex items-start justify-between mb-5">
              <div>
                <span className="text-xs font-semibold text-blue-600">Operations</span>
                <h2 className="font-['Inter_Tight','Inter',sans-serif] text-2xl md:text-3xl font-semibold tracking-[-0.02em] text-gray-900 mt-1">
                  ClassBridge
                </h2>
              </div>
              <a
                href="https://classbridge.in"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-1 text-xs text-gray-400 hover:text-blue-600 transition-colors mt-1"
              >
                classbridge.in
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed mb-6 max-w-sm">
              Attendance, fees, timetables, exams and analytics in one place. Teachers work from their phone, admins from the web, parents stay in the loop.
            </p>
            <div className="mt-auto h-[280px]">
              <ClassBridgeMock />
            </div>
          </div>

          {/* LearnLab */}
          <div className="bg-white p-6 md:p-8 flex flex-col">
            <div className="flex items-start justify-between mb-5">
              <div>
                <span className="text-xs font-semibold text-amber-600">Learning</span>
                <h2 className="font-['Inter_Tight','Inter',sans-serif] text-2xl md:text-3xl font-semibold tracking-[-0.02em] text-gray-900 mt-1">
                  LearnLab
                </h2>
              </div>
              <a
                href="https://learnlab.in"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-1 text-xs text-gray-400 hover:text-amber-600 transition-colors mt-1"
              >
                learnlab.in
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed mb-6 max-w-sm">
              Science and math students can actually play with. Set planets orbiting, wire a circuit, run a reaction. Built around the topics already in their syllabus.
            </p>
            <div className="mt-auto h-[280px]">
              <LearnLabMock />
            </div>
          </div>
        </div>

        {/* Relay, kept minor */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border border-t-0 border-gray-200 bg-gray-50/60 rounded-b-xl px-6 py-4">
          <p className="text-sm text-gray-600">
            <span className="text-gray-400">Also from us:</span>{' '}
            <span className="font-medium text-gray-800">Relay</span>, school-to-parent messaging on WhatsApp.
          </p>
          <a
            href="https://relayhq.in"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-1 text-xs text-gray-400 hover:text-emerald-600 transition-colors"
          >
            relayhq.in
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
