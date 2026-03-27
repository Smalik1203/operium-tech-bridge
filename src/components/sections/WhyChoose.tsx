import React from 'react';

const differentiators = [
  {
    title: 'Listen First',
    desc: 'We don\'t assume we know everything. We spend time with teachers and administrators to understand their real problems before we try to solve them.',
  },
  {
    title: 'Keep It Simple',
    desc: 'Software should be easy to use, not filled with features nobody needs. We try to keep our interfaces clean so you can get your work done faster.',
  },
  {
    title: 'Steady Improvements',
    desc: 'Instead of making huge changes all at once, we release small, helpful updates regularly based on what our users tell us they need.',
  },
  {
    title: 'We\'re Here to Help',
    desc: 'Technology can be frustrating. When things go wrong, we try our best to be reachable and helpful. We want to be a support system for your institution.',
  },
];

export default function WhyChoose() {
  return (
    <section id="why-choose" className="section-white scroll-mt-20 py-24 md:py-32" aria-labelledby="why-choose-heading">
      <div className="max-w-7xl mx-auto px-5 md:px-8">

        <div className="md:grid grid-cols-12 gap-12 items-start">

          {/* Sticky Header Section */}
          <div className="col-span-12 lg:col-span-5 mb-16 lg:mb-0 lg:sticky lg:top-32">
            <h2 id="why-choose-heading" className="text-4xl md:text-5xl font-extrabold leading-[1.1] tracking-[-0.03em] text-gray-900 mb-6">
              How we <br className="hidden lg:block" /> <span className="text-blue-600">work.</span>
            </h2>
            <p className="text-gray-600 text-xl leading-relaxed max-w-md">
              We focus on building practical tools and supporting the people who use them every day.
            </p>
          </div>

          {/* Staggered Vertical List (No Icons) */}
          <div className="col-span-12 lg:col-span-7">
            <div className="flex flex-col gap-12 md:gap-16">
              {differentiators.map((item, i) => (
                <div key={i} className="flex gap-6 md:gap-10">
                  {/* Clean typographic indicator instead of icon */}
                  <div className="flex-shrink-0 pt-1">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full border border-gray-200 text-sm font-bold text-gray-900">
                      0{i + 1}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-lg leading-relaxed md:max-w-lg">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer metric/statement */}
            <div className="mt-16 pt-10 border-t border-gray-100">
              <p className="text-xl font-medium text-gray-900 leading-snug">
                "Our goal is simple: provide software that works reliably, so your staff can focus on what actually matters."
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
