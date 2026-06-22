import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const products = [
  {
    name: 'ClassBridge',
    role: 'Operations',
    line: 'Everything a school does in a day, in one place.',
    href: 'https://classbridge.in',
    domain: 'classbridge.in',
    features: [
      'Attendance, marked from the teacher\'s phone in seconds',
      'Fees that match how Indian schools charge, paid online',
      'Timetables that handle substitutions when a teacher is away',
      'Exams, report cards and assignments that flow into each other',
      'A parent app in the parent\'s own language',
    ],
    accent: {
      bar: 'bg-blue-600',
      tint: 'bg-blue-50/70',
      role: 'text-blue-700',
      dot: 'bg-blue-500',
      link: 'hover:text-blue-600',
      glow: 'group-hover:shadow-blue-600/10',
    },
  },
  {
    name: 'LearnLab',
    role: 'Learning',
    line: 'The parts of science and math that are hard to teach on a board.',
    href: 'https://learnlab.in',
    domain: 'learnlab.in',
    features: [
      'Simulations students run themselves: orbits, circuits, reactions',
      'Tied to the chapters already in their textbook',
      'Works on a classroom display or a student\'s device',
      'Built with curriculum publishers, not around them',
    ],
    accent: {
      bar: 'bg-amber-500',
      tint: 'bg-amber-50/70',
      role: 'text-amber-700',
      dot: 'bg-amber-500',
      link: 'hover:text-amber-600',
      glow: 'group-hover:shadow-amber-500/10',
    },
  },
  {
    name: 'Relay',
    role: 'Communication',
    line: 'School to parent, on the app every parent already opens.',
    href: 'https://relayhq.in',
    domain: 'relayhq.in',
    features: [
      'One official school number on WhatsApp, not a personal phone',
      'Messages segmented by class, grade or whole school',
      'You can see what was delivered and read',
      'Nothing for parents to install',
    ],
    accent: {
      bar: 'bg-emerald-500',
      tint: 'bg-emerald-50/70',
      role: 'text-emerald-700',
      dot: 'bg-emerald-500',
      link: 'hover:text-emerald-600',
      glow: 'group-hover:shadow-emerald-500/10',
    },
  },
];

export default function Solutions() {
  return (
    <section id="products" className="py-20 md:py-28 border-t border-gray-100" aria-labelledby="products-heading">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <div className="max-w-2xl mb-12 md:mb-16">
          <h2 id="products-heading" className="text-2xl md:text-3xl font-bold leading-tight tracking-[-0.01em] text-gray-900 mb-4 text-balance">
            What's inside each one.
          </h2>
          <p className="text-base text-gray-600 leading-relaxed">
            You can use one product or all three. Most schools start where the pain is sharpest and add the rest when they're ready.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((p) => {
            const a = p.accent;
            return (
              <article
                key={p.name}
                className={`group relative flex flex-col bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${a.glow}`}
              >
                {/* color accent bar */}
                <div className={`h-1 ${a.bar}`} />

                {/* tinted header */}
                <div className={`px-6 pt-6 pb-5 ${a.tint}`}>
                  <p className={`text-xs font-semibold mb-2 ${a.role}`}>{p.role}</p>
                  <h3 className="text-xl font-semibold text-gray-900 tracking-[-0.01em] mb-2">{p.name}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{p.line}</p>
                </div>

                {/* features */}
                <div className="px-6 py-6 flex-1">
                  <ul className="space-y-3">
                    {p.features.map((f) => (
                      <li key={f} className="flex gap-3 text-sm text-gray-700 leading-relaxed">
                        <span className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${a.dot}`} />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* footer link */}
                <div className="px-6 py-4 border-t border-gray-100">
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-1.5 text-sm font-medium text-gray-500 transition-colors ${a.link}`}
                  >
                    {p.domain}
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
