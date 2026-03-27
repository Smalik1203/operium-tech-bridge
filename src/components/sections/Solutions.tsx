import React, { useState } from 'react';
import { ArrowRight } from "lucide-react";

export default function Solutions() {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      title: 'ClassBridge',
      desc: 'Our main application. It helps educational institutions manage daily tasks like attendance, fee collection, and parent communication in one place.',
      highlight: 'Simple to use',
      link: 'https://classbridge.in'
    },
    {
      title: 'Administration',
      desc: 'We build tools that make it easier for staff to organize records, set up timetables, and keep track of student progress without spreadsheets.',
      highlight: 'Organize your data'
    },
    {
      title: 'Communication',
      desc: 'Helping institutions keep parents informed and involved with straightforward messaging features that don\'t feel overwhelming.',
      highlight: 'Clear updates'
    },
    {
      title: 'Listening & Learning',
      desc: 'We are always trying to understand what educational institutions need next. We spend time listening to feedback so we can build updates that actually help.',
      highlight: 'Always improving'
    },
  ];

  return (
    <section id="solutions" className="section-warm scroll-mt-20 border-y border-gray-100" aria-labelledby="solutions-heading">
      <div className="max-w-7xl mx-auto px-5 md:px-8">

        {/* Header Content */}
        <div className="mb-16 md:mb-24 md:flex items-end justify-between border-b border-gray-200 pb-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-gray-200 mb-6 shadow-sm">
              <span className="text-xs font-semibold text-gray-600 uppercase tracking-widest">Our Work</span>
            </div>
            <h2 id="solutions-heading" className="text-[2.5rem] md:text-5xl lg:text-[4rem] font-extrabold leading-[1.05] tracking-[-0.03em] text-gray-900 mb-6">
              What we're <span className="text-blue-600">building.</span>
            </h2>
            <p className="text-gray-600 text-xl leading-relaxed md:max-w-lg">
              We develop simple, practical software designed to help educational institutions run a bit smoother.
            </p>
          </div>
        </div>

        {/* Interactive Feature Accordion/Stagger Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

          {/* Left Side: The Interactive List */}
          <div className="flex flex-col">
            {features.map((feature, i) => (
              <div
                key={i}
                onMouseEnter={() => setActiveFeature(i)}
                className={`group cursor-pointer py-8 border-b border-gray-200 transition-colors duration-300 ${activeFeature === i ? 'border-gray-900' : 'hover:border-gray-400'
                  }`}
              >
                <div className="flex justify-between items-baseline mb-3">
                  <h3 className={`text-2xl md:text-3xl font-bold tracking-[-0.02em] transition-colors duration-300 ${activeFeature === i ? 'text-gray-900' : 'text-gray-400 group-hover:text-gray-600'
                    }`}>
                    {feature.title}
                  </h3>
                  <span className={`text-sm font-semibold uppercase tracking-widest transition-opacity duration-300 ${activeFeature === i ? 'opacity-100 text-blue-600' : 'opacity-0 text-gray-400'
                    }`}>
                    {feature.highlight}
                  </span>
                </div>

                <div className={`grid transition-all duration-300 ease-in-out ${activeFeature === i ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0 mt-0'
                  }`}>
                  <div className="overflow-hidden">
                    <p className="text-lg text-gray-600 leading-relaxed max-w-md mb-4">
                      {feature.desc}
                    </p>
                    {feature.link && (
                      <a
                        href={feature.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-bold text-gray-900 hover:text-blue-600 transition-colors"
                      >
                        Explore Product <ArrowRight className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side: Visual Anchor */}
          <div className="lg:h-[600px] bg-gray-50 rounded-[2rem] p-8 md:p-12 relative overflow-hidden flex flex-col justify-end noise-bg">
            <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-gray-200/50 to-transparent" />

            {/* Typography as art */}
            <div className="absolute top-12 left-12 right-12">
              <div className="text-[120px] leading-none font-bold text-gray-200 tracking-tighter">
                {String(activeFeature + 1).padStart(2, '0')}
              </div>
            </div>

            <div className="relative z-10 bg-white rounded-2xl p-8 shadow-2xl shadow-gray-900/10 border border-gray-50 transform transition-transform duration-500 hover:-translate-y-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-2 h-2 rounded-full bg-blue-600" />
                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest break-all">MODULE_{activeFeature + 1}</span>
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-4">{features[activeFeature].title}</h4>
              <p className="text-gray-500 font-medium leading-relaxed">
                {features[activeFeature].desc}
              </p>
              <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-between">
                <span className="text-sm font-semibold text-blue-600">{features[activeFeature].highlight}</span>
                <div className="flex gap-1">
                  {[0, 1, 2, 3].map((dot) => (
                    <div
                      key={dot}
                      className={`h-1.5 rounded-full transition-all duration-300 ${activeFeature === dot ? 'w-6 bg-blue-600' : 'w-1.5 bg-gray-200'
                        }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
