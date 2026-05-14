import React from 'react';
import { ArrowUpRight } from "lucide-react";

const RelayMark = ({ className = '' }: { className?: string }) => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
    {/* Stacked messages: sent, delivered, read */}
    <rect x="4" y="8" width="22" height="6" rx="3" fill="currentColor" opacity="0.18" />
    <rect x="8" y="18" width="26" height="6" rx="3" fill="currentColor" opacity="0.32" />
    {/* Foreground bubble with tail */}
    <path
      d="M14 30 H38 a4 4 0 0 1 4 4 v6 a4 4 0 0 1 -4 4 H22 l-6 4 v-4 a4 4 0 0 1 -4 -4 v-6 a4 4 0 0 1 4 -4 z"
      fill="currentColor"
    />
    {/* Two read-receipt ticks */}
    <path d="M27 38.5 l2 2 l3.5 -3.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    <path d="M31 38.5 l2 2 l3.5 -3.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.7" />
  </svg>
);

const ClassBridgeMark = ({ className = '' }: { className?: string }) => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
    {/* Bridge arch connecting two pillars */}
    <path d="M6 36 Q24 14 42 36" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" />
    {/* Vertical cables */}
    <line x1="14" y1="36" x2="14" y2="28" stroke="currentColor" strokeWidth="1.5" opacity="0.55" />
    <line x1="20" y1="36" x2="20" y2="22.5" stroke="currentColor" strokeWidth="1.5" opacity="0.55" />
    <line x1="28" y1="36" x2="28" y2="22.5" stroke="currentColor" strokeWidth="1.5" opacity="0.55" />
    <line x1="34" y1="36" x2="34" y2="28" stroke="currentColor" strokeWidth="1.5" opacity="0.55" />
    {/* Deck */}
    <rect x="4" y="36" width="40" height="3" rx="1" fill="currentColor" />
    {/* Pillars */}
    <rect x="6" y="36" width="3" height="6" fill="currentColor" opacity="0.7" />
    <rect x="39" y="36" width="3" height="6" fill="currentColor" opacity="0.7" />
    {/* Apex node */}
    <circle cx="24" cy="14" r="2.5" fill="currentColor" />
  </svg>
);

const LearnLabMark = ({ className = '' }: { className?: string }) => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
    {/* Erlenmeyer flask */}
    <path
      d="M19 8 h10 v10 l7 18 a3 3 0 0 1 -2.7 4.3 H14.7 a3 3 0 0 1 -2.7 -4.3 l7 -18 z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinejoin="round"
      fill="none"
    />
    {/* Liquid fill */}
    <path
      d="M16.3 28 H31.7 l3.3 8.3 a3 3 0 0 1 -2.7 4.3 H15.7 a3 3 0 0 1 -2.7 -4.3 z"
      fill="currentColor"
      opacity="0.22"
    />
    {/* Flask neck stripe */}
    <line x1="18" y1="11" x2="30" y2="11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    {/* Reaction particles */}
    <circle cx="20" cy="33" r="1.5" fill="currentColor" />
    <circle cx="27" cy="35" r="1.2" fill="currentColor" opacity="0.7" />
    <circle cx="23" cy="37.5" r="1" fill="currentColor" opacity="0.55" />
  </svg>
);

const products = [
  {
    name: 'Relay',
    role: 'Parent communication',
    Mark: RelayMark,
    pitch: 'One official school number on WhatsApp. Send class-wise, grade-wise, or whole-school updates with delivery receipts. Replaces teachers messaging parents from personal phones.',
    bullets: [
      'Runs on the WhatsApp Business API',
      'Segment by class, grade, or whole school',
      'Delivery and read receipts on every send',
      'No app for parents to install',
    ],
    accent: {
      ring: 'ring-emerald-100',
      iconBg: 'bg-emerald-50',
      iconColor: 'text-emerald-600',
      role: 'text-emerald-700',
      bullet: 'bg-emerald-500',
    },
    cta: { label: 'relayhq.in', href: 'https://relayhq.in' },
    meta: { audience: 'Any school', setup: 'Live in days' },
    flow: [
      'School connects its WhatsApp Business number',
      'Staff compose or schedule structured messages',
      'Parents read; school sees delivery + read status',
    ],
  },
  {
    name: 'ClassBridge',
    role: 'School operations',
    Mark: ClassBridgeMark,
    pitch: 'The school management platform. Attendance, fees, timetables, exams, assignments, and analytics in one system. Mobile for teachers and parents, web for admin. Built for how Indian schools actually run.',
    bullets: [
      'Date-based timetables with real substitutions',
      'Fee structures Indian schools recognise',
      'Ask Sage in plain language: "who\'s below 75% attendance?"',
      'Parent app in the parent\'s language',
    ],
    accent: {
      ring: 'ring-blue-100',
      iconBg: 'bg-blue-50',
      iconColor: 'text-blue-600',
      role: 'text-blue-700',
      bullet: 'bg-blue-500',
    },
    cta: { label: 'classbridge.in', href: 'https://classbridge.in' },
    meta: { audience: 'K-12 institutions', setup: 'Onboarded in weeks' },
    flow: [
      'Teachers take attendance, set assignments, mark exams on mobile',
      'Admin sees fees, dues, timetables, analytics in one place on the web',
      'Parents check the app in their language — no calls to the office',
    ],
  },
  {
    name: 'LearnLab',
    role: 'Classroom learning',
    Mark: LearnLabMark,
    pitch: 'Interactive science and math simulations built around the topics already in the syllabus. Students can wire a circuit, mix reactants, or change the angle of refraction and watch what happens.',
    bullets: [
      'Aligned to NCERT and major Indian publisher syllabi',
      'Distributed through curriculum publishers',
      'Works on classroom displays and student devices',
      'Built around topics teachers already teach',
    ],
    accent: {
      ring: 'ring-amber-100',
      iconBg: 'bg-amber-50',
      iconColor: 'text-amber-600',
      role: 'text-amber-700',
      bullet: 'bg-amber-500',
    },
    cta: { label: 'learnlab.in', href: 'https://learnlab.in' },
    meta: { audience: 'Science & math classrooms', setup: 'Via publisher partners' },
    flow: [
      'Publisher includes LearnLab simulations alongside their textbook chapters',
      'Teacher opens the simulation tied to today\'s lesson on the classroom display',
      'Students manipulate the variable, see the result, the lesson sticks',
    ],
  },
];

export default function Solutions() {
  return (
    <section id="products" className="py-20 md:py-24 border-t border-gray-100 section-warm scroll-mt-20" aria-labelledby="products-heading">
      <div className="max-w-5xl mx-auto px-5 md:px-8">
        <div className="mb-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-end">
          <div className="lg:col-span-7">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-3">Products</p>
            <h2 id="products-heading" className="text-2xl md:text-3xl font-bold leading-tight tracking-[-0.01em] text-gray-900 mb-4">
              Three products, built for the Indian classroom.
            </h2>
            <p className="text-base text-gray-600 leading-relaxed">
              Each product stands on its own. Most schools begin with Relay because parent communication has already moved to WhatsApp — we just put structure around what's already happening. ClassBridge follows as the system of record once the trust is there. LearnLab arrives through the publishers schools already buy textbooks from, so the classroom layer doesn't require a separate decision.
            </p>
          </div>
          <div className="lg:col-span-5">
            <div className="bg-white border border-gray-200 rounded-xl p-5">
              <p className="text-[11px] font-semibold text-gray-500 uppercase tracking-widest mb-3">A note on order</p>
              <p className="text-sm text-gray-700 leading-relaxed">
                You don't have to adopt all three. A school on ClassBridge already has structured parent messaging. A school using Relay can stay there. LearnLab works alongside whatever operations stack you run today.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {products.map((p) => {
            const { Mark, accent } = p;
            return (
              <article
                key={p.name}
                className="relative bg-white border border-gray-200 rounded-xl p-6 flex flex-col transition-all hover:-translate-y-0.5 hover:shadow-lg"
              >
                <div className={`w-14 h-14 rounded-xl ${accent.iconBg} flex items-center justify-center mb-5`}>
                  <Mark className={`w-8 h-8 ${accent.iconColor}`} />
                </div>
                <p className={`text-[11px] font-semibold uppercase tracking-widest mb-1 ${accent.role}`}>{p.role}</p>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{p.name}</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-5">{p.pitch}</p>
                <ul className="space-y-2 mb-6">
                  {p.bullets.map((b) => (
                    <li key={b} className="text-sm text-gray-700 leading-snug flex gap-2.5">
                      <span className={`mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full ${accent.bullet}`} />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                {p.cta && (
                  <a
                    href={p.cta.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors mb-5"
                  >
                    {p.cta.label}
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                )}

                {/* Workflow strip */}
                <div className="mt-auto pt-5 border-t border-gray-100">
                  <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest mb-3">How it works</p>
                  <ol className="space-y-2.5 mb-5">
                    {p.flow.map((step, idx) => (
                      <li key={step} className="flex gap-2.5 text-xs text-gray-700 leading-snug">
                        <span className={`flex-shrink-0 w-4 h-4 rounded-full ${accent.iconBg} ${accent.iconColor} text-[10px] font-bold flex items-center justify-center mt-0.5`}>
                          {idx + 1}
                        </span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ol>
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-50">
                    <div>
                      <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest mb-1">For</p>
                      <p className="text-xs text-gray-700 leading-snug">{p.meta.audience}</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest mb-1">Setup</p>
                      <p className="text-xs text-gray-700 leading-snug">{p.meta.setup}</p>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
