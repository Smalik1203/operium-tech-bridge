import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-20 md:py-24 border-t border-gray-100 scroll-mt-20" aria-labelledby="about-heading">
      <div className="max-w-5xl mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Narrative */}
          <div className="lg:col-span-7">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-3">About</p>
            <h2 id="about-heading" className="text-2xl md:text-3xl font-bold leading-tight tracking-[-0.01em] text-gray-900 mb-6">
              An education technology company building for Indian K-12.
            </h2>

            <div className="space-y-5 text-base text-gray-700 leading-relaxed">
              <p>
                Operium Labs builds software for Indian K-12 schools across three layers — parent communication, school operations, and classroom learning. Each product works on its own and connects with the others, so a school can adopt what it needs and add the rest when it's ready.
              </p>
              <p>
                We work the way Indian schools work. Mobile-first, because that's where parents, teachers, and principals already are. Plain language in the parent app. Fee structures and timetables that match how institutions actually charge and substitute. Configurable for boards, mediums, and grade structures across the country.
              </p>
              <p>
                The company is based in Hyderabad. Our product, design, and engineering teams sit together, ship together, and stay close to the schools we work with — close enough that what gets built next is usually a problem we heard on a campus the week before.
              </p>
            </div>
          </div>

          {/* Side panel — what we work on, not how we got here */}
          <aside className="lg:col-span-5">
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-7 lg:sticky lg:top-28">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-5">What we work on</p>

              <ul className="space-y-5">
                <li>
                  <a href="https://relayhq.in" target="_blank" rel="noopener noreferrer" className="group block">
                    <div className="flex items-baseline justify-between gap-3 mb-1.5">
                      <p className="text-sm font-semibold text-gray-900 group-hover:text-emerald-700 transition-colors">Relay <span className="text-[11px] font-normal text-gray-400 group-hover:text-emerald-600">· relayhq.in ↗</span></p>
                      <span className="text-[11px] font-medium text-emerald-700">Communication</span>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">School-to-parent messaging on the WhatsApp Business API.</p>
                  </a>
                </li>
                <li className="pt-5 border-t border-gray-200">
                  <a href="https://classbridge.in" target="_blank" rel="noopener noreferrer" className="group block">
                    <div className="flex items-baseline justify-between gap-3 mb-1.5">
                      <p className="text-sm font-semibold text-gray-900 group-hover:text-blue-700 transition-colors">ClassBridge <span className="text-[11px] font-normal text-gray-400 group-hover:text-blue-600">· classbridge.in ↗</span></p>
                      <span className="text-[11px] font-medium text-blue-700">Operations</span>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">School management platform — attendance, fees, timetables, exams, analytics.</p>
                  </a>
                </li>
                <li className="pt-5 border-t border-gray-200">
                  <a href="https://learnlab.in" target="_blank" rel="noopener noreferrer" className="group block">
                    <div className="flex items-baseline justify-between gap-3 mb-1.5">
                      <p className="text-sm font-semibold text-gray-900 group-hover:text-amber-700 transition-colors">LearnLab <span className="text-[11px] font-normal text-gray-400 group-hover:text-amber-600">· learnlab.in ↗</span></p>
                      <span className="text-[11px] font-medium text-amber-700">Learning</span>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">Interactive simulations for science and math, distributed through curriculum publishers.</p>
                  </a>
                </li>
              </ul>

              <div className="mt-6 pt-6 border-t border-gray-200 grid grid-cols-2 gap-4">
                <div>
                  <p className="text-[10px] font-semibold text-gray-500 uppercase tracking-widest mb-1">Based in</p>
                  <p className="text-sm font-medium text-gray-900">Hyderabad</p>
                </div>
                <div>
                  <p className="text-[10px] font-semibold text-gray-500 uppercase tracking-widest mb-1">Built for</p>
                  <p className="text-sm font-medium text-gray-900">K-12, India</p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
