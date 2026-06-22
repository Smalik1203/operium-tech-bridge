import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-20 md:py-24 border-t border-gray-100 scroll-mt-20" aria-labelledby="about-heading">
      <div className="max-w-5xl mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Narrative */}
          <div className="lg:col-span-7">
            <p className="text-sm font-semibold text-blue-600 mb-3">About</p>
            <h2 id="about-heading" className="text-2xl md:text-3xl font-bold leading-tight tracking-[-0.01em] text-gray-900 mb-6">
              We build for how Indian schools actually work.
            </h2>

            <div className="space-y-5 text-base text-gray-700 leading-relaxed">
              <p>
                Operium Labs makes software for K-12 schools in India. Three products that each do one job well and connect when you use more than one, so a school can start with what hurts most and grow into the rest.
              </p>
              <p>
                Most of what shapes our products comes from being on the ground. Indian schools don't run like the ones our tools were copied from. Fees are charged in ways no global template expects. Timetables change when a teacher is absent. Half the parents read better in a language the app usually ignores. We build for those realities first.
              </p>
              <p>
                We're based in Hyderabad, and the people who design and write the code stay close to the schools using it. More often than not, the next thing we build is a problem someone described to us on a campus the week before.
              </p>
            </div>
          </div>

          {/* Side panel — plain facts, no second product list */}
          <aside className="lg:col-span-5">
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-7 lg:sticky lg:top-28 lg:mt-12">
              <dl className="divide-y divide-gray-200">
                <div className="flex items-baseline justify-between gap-4 pb-4">
                  <dt className="text-sm text-gray-500">Based in</dt>
                  <dd className="text-sm font-medium text-gray-900">Hyderabad, India</dd>
                </div>
                <div className="flex items-baseline justify-between gap-4 py-4">
                  <dt className="text-sm text-gray-500">Built for</dt>
                  <dd className="text-sm font-medium text-gray-900">K-12 schools</dd>
                </div>
                <div className="flex items-baseline justify-between gap-4 pt-4">
                  <dt className="text-sm text-gray-500">Products</dt>
                  <dd className="text-sm font-medium text-gray-900">ClassBridge, LearnLab, Relay</dd>
                </div>
              </dl>

              <p className="mt-6 pt-6 border-t border-gray-200 text-sm text-gray-600 leading-relaxed">
                If you run a school or teach in one, we'd like to hear from you.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
