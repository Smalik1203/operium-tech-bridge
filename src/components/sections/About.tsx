import React from 'react';

export default function About() {
  return (
    <section id="about" className="section-white scroll-mt-20 relative overflow-hidden" aria-labelledby="about-heading">
      {/* Editorial layout element */}
      <div className="absolute top-0 right-0 w-[45%] h-full bg-gray-50 border-l border-gray-100 hidden lg:block -z-10" />

      <div className="max-w-7xl mx-auto px-5 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-0">

          {/* Left Column: The Narrative (Spans 5 cols) */}
          <div className="lg:col-span-5 lg:py-16 lg:pr-12 xl:pr-16">
            <h2 id="about-heading" className="text-[2.5rem] md:text-5xl font-extrabold leading-[1.1] tracking-[-0.03em] text-gray-900 mb-8">
              How we <br className="hidden md:block" /> <span className="text-blue-600">started.</span>
            </h2>

            <div className="prose prose-lg text-gray-600">
              <p className="mb-6 font-medium text-gray-900 text-xl leading-snug">
                We noticed that educational institutions were spending too much time organizing papers and managing scattered chat groups.
              </p>
              <p className="mb-6 leading-relaxed">
                Teachers and administrators want to focus on students, but often get bogged down by administrative tasks. They end up using multiple apps that don't talk to each other, or complicated software that's hard to learn. We saw an opportunity to help simplify this.
              </p>
              <p className="leading-relaxed">
                Operium Technologies was started with a very straightforward goal: listen to what institutions actually need, and build software that genuinely helps save time. We aim to do good work and support our users every step of the way.
              </p>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-100">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-900 flex items-center justify-center text-white font-bold text-lg">
                  OT
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Operium Technologies Pvt Ltd</h4>
                  <p className="text-sm text-gray-500">Based in Hyderabad.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Spacer (1 col) */}
          <div className="hidden lg:block lg:col-span-1" />

          {/* Right Column: The Core Values (Spans 6 cols) */}
          <div className="lg:col-span-6 lg:py-16 lg:pl-12 xl:pl-16 relative">
            {/* Minimalist List Layout - Zero Icons */}
            <div className="space-y-16">
              {[
                {
                  number: '01',
                  title: 'Learn by Listening',
                  text: 'We don\'t pretend to know everything about running an educational institution. We spend time listening to administrators and educators to understand their daily challenges before writing any code.',
                },
                {
                  number: '02',
                  title: 'Keep Things Simple',
                  text: 'Software should be easy to use. Our aim is to build clear, straightforward interfaces that anyone can learn quickly, especially on their mobile phones.',
                },
                {
                  number: '03',
                  title: 'Support Our Users',
                  text: 'We know that technology can sometimes be frustrating. We try our best to be there when our users need help, offering guidance and working with them as partners.',
                },
              ].map((item) => (
                <div key={item.number} className="relative group">
                  {/* Decorative number behind text */}
                  <div className="absolute -left-4 -top-6 text-[5rem] font-bold text-gray-900/5 transition-colors group-hover:text-blue-600/5 select-none pointer-events-none font-['Inter_Tight']">
                    {item.number}
                  </div>

                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 tracking-[-0.01em]">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-lg leading-relaxed max-w-md">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
