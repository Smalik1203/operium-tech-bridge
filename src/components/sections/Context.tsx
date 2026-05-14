import React from 'react';

const todayRows = [
  {
    label: 'Parent comms',
    today: 'Teachers messaging from personal phones in class WhatsApp groups. No record, no segmentation, no read receipts.',
  },
  {
    label: 'Operations',
    today: 'Four vendors stitched together — attendance app, fee software, exam tool, report card maker. None of them talk.',
  },
  {
    label: 'The classroom',
    today: 'Science and math taught from the textbook with a diagram on the board. Same as it was in 1995.',
  },
];

const withUsRows = [
  {
    label: 'Parent comms',
    us: 'One official school number on the WhatsApp Business API. Structured messages, delivery and read receipts, segmented by class or grade.',
  },
  {
    label: 'Operations',
    us: 'One system for attendance, fees, timetables, exams, assignments, analytics. The data connects, so reports take seconds, not nights.',
  },
  {
    label: 'The classroom',
    us: 'Interactive simulations students can actually use. Built around the topics already in the syllabus, distributed through the publishers schools already buy from.',
  },
];

export default function Context() {
  return (
    <section className="py-20 md:py-24 border-t border-gray-100" aria-label="What we replace">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Today */}
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-7 md:p-9">
            <div className="flex items-center gap-2 mb-6">
              <span className="text-[11px] font-semibold text-gray-500 uppercase tracking-widest">How most schools run today</span>
            </div>
            <ul className="space-y-5">
              {todayRows.map((r) => (
                <li key={r.label}>
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">{r.label}</p>
                  <p className="text-sm text-gray-700 leading-relaxed">{r.today}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* With us */}
          <div className="bg-white border border-blue-100 rounded-2xl p-7 md:p-9 shadow-sm shadow-blue-900/[0.03]">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span className="text-[11px] font-semibold text-blue-700 uppercase tracking-widest">What we change</span>
            </div>
            <ul className="space-y-5">
              {withUsRows.map((r) => (
                <li key={r.label}>
                  <p className="text-xs font-semibold text-blue-700 uppercase tracking-wider mb-1.5">{r.label}</p>
                  <p className="text-sm text-gray-800 leading-relaxed">{r.us}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
