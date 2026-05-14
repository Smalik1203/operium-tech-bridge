import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const sections = [
  { id: 'overview', label: 'Overview' },
  { id: 'what-we-collect', label: 'What we collect' },
  { id: 'how-we-use', label: 'How we use it' },
  { id: 'app-permissions', label: 'App permissions' },
  { id: 'how-we-share', label: 'How we share it' },
  { id: 'security', label: 'Security' },
  { id: 'retention', label: 'How long we keep it' },
  { id: 'your-rights', label: 'Your rights' },
  { id: 'children', label: 'Children' },
  { id: 'third-parties', label: 'Third-party services' },
  { id: 'international', label: 'International transfers' },
  { id: 'changes', label: 'Changes to this policy' },
  { id: 'contact', label: 'Contact us' },
];

export default function PrivacyPolicy() {
  const lastUpdated = 'January 15, 2025';
  const [activeId, setActiveId] = useState<string>(sections[0].id);

  useEffect(() => {
    document.title = 'Privacy Policy | Operium Labs';
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (visible?.target.id) setActiveId(visible.target.id);
      },
      { rootMargin: '-96px 0px -60% 0px', threshold: 0 }
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main className="flex-grow">
        {/* Header — quiet, not a marketing banner */}
        <header className="border-b border-gray-100">
          <div className="max-w-5xl mx-auto px-5 md:px-8 pt-12 pb-10 md:pt-16 md:pb-12">
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-900 transition-colors mb-6"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Back to home
            </Link>
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-3">Legal</p>
            <h1 className="text-3xl md:text-4xl font-bold leading-tight tracking-[-0.02em] text-gray-900 mb-4">
              Privacy Policy
            </h1>
            <p className="text-base text-gray-600 max-w-2xl leading-relaxed">
              How Operium Labs collects, uses, stores, and shares information about the people and institutions who use our services.
            </p>
            <p className="text-sm text-gray-400 mt-4">Last updated · {lastUpdated}</p>
          </div>
        </header>

        {/* Body — sticky TOC on desktop, prose on the right */}
        <div className="max-w-5xl mx-auto px-5 md:px-8 py-12 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            {/* Sticky TOC */}
            <aside className="lg:col-span-3">
              <nav aria-label="Privacy policy sections" className="lg:sticky lg:top-24">
                <p className="text-[11px] font-semibold text-gray-500 uppercase tracking-widest mb-4">
                  On this page
                </p>
                <ul className="space-y-1.5">
                  {sections.map((s) => (
                    <li key={s.id}>
                      <a
                        href={`#${s.id}`}
                        className={`block text-sm leading-snug transition-colors py-1 ${
                          activeId === s.id
                            ? 'text-blue-600 font-semibold'
                            : 'text-gray-600 hover:text-gray-900'
                        }`}
                      >
                        {s.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </aside>

            {/* Content */}
            <article className="lg:col-span-9 max-w-3xl">
              <Section id="overview" title="Overview">
                <p>
                  Operium Labs builds three products for Indian K-12 schools: Relay (parent communication on WhatsApp), ClassBridge (school management), and LearnLab (interactive science and math content). This Privacy Policy explains what information we collect through these products and our website, how we use it, and the choices you have.
                </p>
                <p>
                  This policy applies to <strong>operiumlabs.com</strong>, our mobile applications, and our web services. By using any of them, you agree to the practices described here. If you don't agree, please don't use the services.
                </p>
              </Section>

              <Section id="what-we-collect" title="What we collect">
                <p>We collect three kinds of information:</p>

                <SubHeading>Information you give us</SubHeading>
                <p>When you register, set up your school, contact support, or use our services, you provide information directly. This typically includes:</p>
                <BulletList items={[
                  <><strong>Account details</strong> — name, email, phone number, encrypted password, role (teacher, parent, admin, student), and profile information.</>,
                  <><strong>School and academic data</strong> — institution name, class or grade, student ID, attendance, assignments, exam scores, fee records, timetables, and other records required to run a school.</>,
                  <><strong>Communication data</strong> — messages, broadcasts, support tickets, and any content you send through our products.</>,
                  <><strong>Payment information</strong> — billing address and payment method details, handled by our payment partners. We don't store full card numbers ourselves.</>,
                ]} />

                <SubHeading>Information collected automatically</SubHeading>
                <p>When you use our products, our systems record technical information that helps us operate the service and diagnose problems. This includes device type, operating system, app version, IP address, time of access, and pages or features used.</p>

                <SubHeading>Cookies and similar technologies</SubHeading>
                <p>Our website and web app use cookies and similar storage technologies for authentication, session management, security, and to remember your preferences. You can disable cookies in your browser settings, but some parts of the service may not work without them.</p>
              </Section>

              <Section id="how-we-use" title="How we use it">
                <p>We use the information we collect to:</p>
                <BulletList items={[
                  'Run our products — process attendance, deliver messages, generate report cards, calculate fees, and everything else the products are built to do.',
                  'Communicate with you about your account, send transactional messages, respond to support requests, and notify you of important changes.',
                  'Improve the service — understand how features are used, fix bugs, and decide what to build next.',
                  'Keep the service secure — detect and prevent fraud, abuse, and unauthorised access.',
                  'Meet our legal and regulatory obligations.',
                ]} />
                <p>We do not sell your personal information. We do not use student data to train advertising models or sell it to third parties.</p>
              </Section>

              <Section id="app-permissions" title="App permissions">
                <p>Our mobile applications request the following device permissions only when needed for specific features. You can grant or deny any of them at any time in your device settings.</p>
                <BulletList items={[
                  <><strong>Internet</strong> — required to connect to our servers.</>,
                  <><strong>Storage</strong> — to cache content and data locally so the app works offline.</>,
                  <><strong>Camera</strong> — to scan documents, take profile pictures, or submit photo-based assignments. Used only when you take the action.</>,
                  <><strong>Microphone</strong> — to record voice notes or audio for assignments. Used only when you take the action.</>,
                  <><strong>Notifications</strong> — to deliver alerts about attendance, fees, exams, and parent messages.</>,
                  <><strong>Location</strong> — only if a feature requires it (for example, marking attendance at the school). We don't collect background location.</>,
                  <><strong>Contacts</strong> — only if you choose to import contacts. Optional.</>,
                ]} />
                <p>Denying a permission may limit specific features but core functionality stays available.</p>
              </Section>

              <Section id="how-we-share" title="How we share it">
                <p>We share information only in the situations below.</p>

                <SubHeading>With your school or institution</SubHeading>
                <p>If you're a student, parent, or teacher using ClassBridge or LearnLab, your school is the data controller for academic records. We share your information with your school as part of running the service. The school decides what is recorded, who in the school can see it, and how long it is retained.</p>

                <SubHeading>With service providers we rely on</SubHeading>
                <p>We use third-party providers for cloud hosting and infrastructure, transactional messaging (including the WhatsApp Business API for Relay), authentication, analytics, payment processing, and similar operational functions. These providers process information on our behalf under contracts that require them to protect it and use it only for the purposes we specify.</p>

                <SubHeading>For legal reasons</SubHeading>
                <p>We may disclose information if required by law, court order, or government request, or if we reasonably believe disclosure is necessary to protect the rights, property, or safety of Operium Labs, our users, or the public.</p>

                <SubHeading>In a business transaction</SubHeading>
                <p>If Operium Labs is acquired, merged, or undergoes a similar transaction, your information may be transferred to the new entity. You will be notified of any change in control and any material change to this policy.</p>

                <SubHeading>With your consent</SubHeading>
                <p>We will share information for any purpose not listed above only with your explicit consent.</p>
              </Section>

              <Section id="security" title="Security">
                <p>We take security seriously. The measures we use include:</p>
                <BulletList items={[
                  'Encryption in transit (TLS) for all connections between your device and our servers, and encryption at rest for data we store.',
                  'Role-based access controls — staff can only see the data they need to do their job, and access is reviewed regularly.',
                  'Monitoring, vulnerability scanning, and timely patching of the systems we run.',
                  'Backups, with documented disaster recovery procedures.',
                  'Security training for the people who build and operate the services.',
                ]} />
                <p>No system is completely secure. If a breach happens that affects your information, we will notify you and the relevant authorities as required by law — typically within 72 hours of becoming aware of it — and tell you what happened, what was affected, and what we're doing about it.</p>
                <p>You are responsible for keeping your password safe and for activity that happens under your account.</p>
              </Section>

              <Section id="retention" title="How long we keep it">
                <p>We keep information only as long as we need it for the purposes in this policy, or as required by law. Roughly:</p>
                <BulletList items={[
                  <><strong>Account information</strong> — kept while your account is active, and for a period after closure for legal, tax, and audit reasons.</>,
                  <><strong>Academic records</strong> — kept as required by the school and by applicable education and records-retention laws.</>,
                  <><strong>Transaction records</strong> — kept for the period required by Indian tax and accounting law.</>,
                  <><strong>Support communications</strong> — kept for a reasonable period after the last interaction.</>,
                  <><strong>Marketing communications</strong> — kept until you unsubscribe.</>,
                ]} />
                <p>When we no longer need information, we delete or anonymise it. Some copies may remain in encrypted backups for a limited period before being purged.</p>
              </Section>

              <Section id="your-rights" title="Your rights">
                <p>Depending on where you live, you may have the following rights regarding the personal information we hold about you:</p>
                <BulletList items={[
                  <><strong>Access</strong> — request a copy of the information we hold about you.</>,
                  <><strong>Correction</strong> — ask us to fix information that's wrong or out of date.</>,
                  <><strong>Deletion</strong> — ask us to delete your information, subject to legal limits (for example, where we are required to keep records).</>,
                  <><strong>Portability</strong> — receive your information in a structured, machine-readable format.</>,
                  <><strong>Objection or restriction</strong> — object to or restrict certain processing.</>,
                  <><strong>Withdraw consent</strong> — withdraw consent for processing based on consent, at any time.</>,
                ]} />
                <p>You can manage some of these directly inside your account. For everything else, write to us at the email below. We'll respond within 30 days and may need to verify your identity first.</p>
                <p>If you're a student or parent, some rights are exercised through your school as the data controller for academic records.</p>
              </Section>

              <Section id="children" title="Children">
                <p>Our services are used by educational institutions, which means students — including those under 18 — interact with them. We:</p>
                <BulletList items={[
                  'Collect only the information needed for educational purposes.',
                  'Rely on schools to obtain appropriate parental consent where required by law.',
                  'Provide schools and parents with the controls needed to manage children\'s information.',
                  'Do not knowingly collect personal information directly from children under 13 without parental or institutional consent.',
                ]} />
                <p>If you're a parent who believes a child has provided us information without consent, contact us and we'll address it.</p>
              </Section>

              <Section id="third-parties" title="Third-party services">
                <p>Our products may include links to third-party websites or apps, or integrate with services run by other companies (for example, messaging platforms, payment gateways, or identity providers). Those services have their own privacy policies and terms — we are not responsible for how they handle your information.</p>
                <p>We use third-party providers in categories including cloud infrastructure and hosting, transactional and WhatsApp messaging, authentication, analytics, payment processing, and customer support tooling. They process information only on our behalf and only for the purposes set out in our agreements with them. A current list of our subprocessors is available on request.</p>
              </Section>

              <Section id="international" title="International transfers">
                <p>We're based in India and most of our infrastructure runs in India. Some of the providers we use may process information in other countries. Where information is transferred outside India, we take reasonable steps to ensure it receives an equivalent level of protection.</p>
              </Section>

              <Section id="changes" title="Changes to this policy">
                <p>We may update this Privacy Policy from time to time. When we make material changes, we'll update the "Last updated" date at the top of this page and, where appropriate, notify you through the product or by email. Continuing to use our services after the change means you accept the updated policy.</p>
              </Section>

              <Section id="contact" title="Contact us">
                <p>For privacy questions, requests to exercise your rights, or any concerns about how we handle your information, reach out to us.</p>
                <div className="mt-5 bg-gray-50 border border-gray-200 rounded-2xl p-6">
                  <p className="text-sm font-semibold text-gray-900 mb-4">Operium Labs</p>
                  <dl className="space-y-3 text-sm">
                    <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3">
                      <dt className="text-gray-500 sm:w-20 flex-shrink-0">Email</dt>
                      <dd>
                        <a href="mailto:contact@operiumlabs.com" className="text-blue-600 hover:underline">
                          contact@operiumlabs.com
                        </a>
                      </dd>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3">
                      <dt className="text-gray-500 sm:w-20 flex-shrink-0">Phone</dt>
                      <dd className="text-gray-700">
                        <a href="tel:+919391906310" className="hover:text-blue-600">+91 9391906310</a>
                        <span className="text-gray-400 mx-2">·</span>
                        <a href="tel:+919391906311" className="hover:text-blue-600">+91 9391906311</a>
                      </dd>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3">
                      <dt className="text-gray-500 sm:w-20 flex-shrink-0">Web</dt>
                      <dd>
                        <a
                          href="https://operiumlabs.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline"
                        >
                          operiumlabs.com
                        </a>
                      </dd>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3">
                      <dt className="text-gray-500 sm:w-20 flex-shrink-0">Office</dt>
                      <dd className="text-gray-700 leading-relaxed">
                        Prajay Princeton Towers, 1017, 10th floor,<br />
                        Doctors Colony, Saroornagar,<br />
                        Hyderabad, Telangana 500035, India
                      </dd>
                    </div>
                  </dl>
                </div>
              </Section>
            </article>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-24 mb-14 last:mb-0">
      <h2 className="text-xl md:text-2xl font-bold text-gray-900 tracking-[-0.01em] mb-4">{title}</h2>
      <div className="space-y-4 text-[15px] text-gray-700 leading-[1.75]">{children}</div>
    </section>
  );
}

function SubHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="!text-sm !font-semibold !text-gray-900 uppercase tracking-wider mt-6 mb-2">
      {children}
    </h3>
  );
}

function BulletList({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="space-y-2.5 my-3">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3 leading-[1.7]">
          <span className="mt-2.5 w-1 h-1 rounded-full bg-gray-400 flex-shrink-0" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
