import React from 'react';

const todayRows = [
  {
    label: 'Parent comms',
    today: 'Teachers messaging from personal phones in class WhatsApp groups. No record, no segmentation, no read receipts.',
  },
  {
    label: 'Operations',
    today: 'Four separate vendors: an attendance app, fee software, an exam tool, a report-card maker. None of them talk to each other.',
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
    <section className="py-20 md:py-24 border-t border-gray-100 bg-white/40" aria-label="The gap we close">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <div className="max-w-2xl mb-12">
          <h2 className="text-2xl md:text-3xl font-bold leading-tight tracking-[-0.01em] text-gray-900 mb-4 text-balance">
            Schools have changed. Most of their software hasn't.
          </h2>
          <p className="text-base text-gray-600 leading-relaxed">
            Parents live on WhatsApp, fees move on UPI, and yet the day-to-day still runs on registers and disconnected apps. Here's the gap we close.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Today */}
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-7 md:p-9">
            <p className="text-sm font-semibold text-gray-900 mb-6">How most schools run today</p>
            <ul className="space-y-5">
              {todayRows.map((r) => (
                <li key={r.label}>
                  <p className="text-sm font-semibold text-gray-700 mb-1">{r.label}</p>
                  <p className="text-sm text-gray-500 leading-relaxed">{r.today}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* With us */}
          <div className="bg-white border border-blue-100 rounded-2xl p-7 md:p-9 shadow-sm shadow-blue-900/[0.03]">
            <p className="text-sm font-semibold text-blue-700 mb-6">How they run with us</p>
            <ul className="space-y-5">
              {withUsRows.map((r) => (
                <li key={r.label}>
                  <p className="text-sm font-semibold text-gray-900 mb-1">{r.label}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{r.us}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
