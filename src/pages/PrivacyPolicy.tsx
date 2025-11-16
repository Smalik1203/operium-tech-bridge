import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Shield, Lock, Eye, UserCheck, FileText, Mail } from 'lucide-react';

export default function PrivacyPolicy() {
  const lastUpdated = "January 15, 2025";
  
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <div className="flex-grow">
        <div className="bg-gradient-to-r from-operium-primary to-operium-dark text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex justify-center mb-4">
                <Shield className="h-16 w-16" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
              <p className="text-xl text-gray-100">
                Your privacy is important to us. This policy explains how we collect, use, and protect your information.
              </p>
              <p className="text-sm text-gray-200 mt-4">
                Last Updated: {lastUpdated}
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 md:p-12">
            <div className="prose prose-lg max-w-none">
              
              {/* Introduction */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                  <FileText className="h-6 w-6 mr-2 text-operium-primary" />
                  1. Introduction
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Operium Technologies Pvt Ltd ("we," "our," or "us") operates mobile applications and web services 
                  accessible at <strong>operiumtechnologies.in</strong> (collectively, the "Service"). This Privacy Policy 
                  informs you of our policies regarding the collection, use, and disclosure of personal data when you use 
                  our Service and the choices you have associated with that data.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  By using our Service, you agree to the collection and use of information in accordance with this policy. 
                  If you do not agree with our policies and practices, do not use our Service.
                </p>
              </section>

              {/* Information We Collect */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                  <Eye className="h-6 w-6 mr-2 text-operium-primary" />
                  2. Information We Collect
                </h2>
                
                <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">2.1 Information You Provide</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We collect information that you voluntarily provide to us when you:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                  <li>Register for an account or create a profile</li>
                  <li>Use our educational services and features</li>
                  <li>Contact us for support or inquiries</li>
                  <li>Participate in surveys or feedback programs</li>
                  <li>Subscribe to newsletters or communications</li>
                </ul>
                <p className="text-gray-600 leading-relaxed mb-4">
                  This information may include:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                  <li><strong>Account Information:</strong> Full name, email address, phone number, password (encrypted), and profile information</li>
                  <li><strong>Educational Information:</strong> School name, class/grade, student ID, academic records, attendance data, test scores, assignments, and related educational data</li>
                  <li><strong>Payment Information:</strong> Billing address, payment method details (processed securely through third-party payment processors)</li>
                  <li><strong>Communication Data:</strong> Messages, inquiries, and feedback you send to us</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">2.2 Automatically Collected Information</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  When you access or use our Service, we automatically collect certain technical information, including:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                  <li><strong>Device Information:</strong> Device type, manufacturer, model, operating system version, unique device identifiers (such as Android ID, iOS ID), device language, screen resolution, and mobile network information</li>
                  <li><strong>Log Data:</strong> IP address, browser type and version, access times and dates, pages viewed, time spent on pages, clickstream data, and referring website addresses</li>
                  <li><strong>Usage Data:</strong> Features accessed, actions taken, time spent on features, frequency of use, performance data, error logs, and crash reports</li>
                  <li><strong>Location Data:</strong> General location information (city, state, country) based on IP address. We do not collect precise GPS location data unless you explicitly grant permission and it is necessary for specific features</li>
                  <li><strong>App Information:</strong> App version, installation source, and update history</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">2.3 Cookies and Tracking Technologies</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We use cookies, web beacons, and similar tracking technologies to collect and store information about your use of our Service. These technologies help us:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                  <li>Remember your preferences and settings</li>
                  <li>Analyze how you use our Service</li>
                  <li>Improve and personalize your experience</li>
                  <li>Provide security and prevent fraud</li>
                </ul>
                <p className="text-gray-600 leading-relaxed">
                  You can control cookies through your browser or device settings. However, disabling cookies may limit your ability to use certain features of our Service.
                </p>
              </section>

              {/* How We Use Information */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                  <UserCheck className="h-6 w-6 mr-2 text-operium-primary" />
                  3. How We Use Your Information
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We use the collected information for the following purposes, based on our legitimate business interests, 
                  contractual necessity, legal obligations, and your consent:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                  <li><strong>Service Delivery:</strong> To provide, operate, maintain, and improve our Service, including processing registrations, managing accounts, and delivering educational content</li>
                  <li><strong>Transaction Processing:</strong> To process payments, manage subscriptions, send invoices, and handle billing-related communications</li>
                  <li><strong>Communication:</strong> To send you service-related notifications, updates, educational content, administrative messages, and respond to your inquiries and support requests</li>
                  <li><strong>Personalization:</strong> To customize your experience, provide personalized content and recommendations, and remember your preferences</li>
                  <li><strong>Analytics and Improvement:</strong> To analyze usage patterns, understand how users interact with our Service, identify trends, and improve functionality, performance, and user experience</li>
                  <li><strong>Security and Safety:</strong> To detect, prevent, and address fraud, security threats, technical issues, unauthorized access, and other harmful activities</li>
                  <li><strong>Legal Compliance:</strong> To comply with applicable laws, regulations, legal processes, and government requests, and to enforce our Terms of Service and other agreements</li>
                  <li><strong>Research and Development:</strong> To conduct research, develop new features, and test improvements to our Service</li>
                  <li><strong>Marketing:</strong> To send you promotional communications about our services (with your consent, where required by law). You can opt-out at any time</li>
                </ul>
                <p className="text-gray-600 leading-relaxed">
                  We process your personal information based on: (1) your consent, (2) performance of a contract, (3) compliance with legal obligations, 
                  (4) protection of vital interests, (5) public interest, or (6) legitimate business interests.
                </p>
              </section>

              {/* Data Sharing */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                  <Lock className="h-6 w-6 mr-2 text-operium-primary" />
                  4. Data Sharing and Disclosure
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  <strong>We do not sell, rent, or trade your personal information to third parties for their marketing purposes.</strong> 
                  We may share your information only in the following limited circumstances:
                </p>
                
                <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">4.1 Service Providers and Business Partners</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We may share information with trusted third-party service providers who perform services on our behalf and are 
                  contractually bound to protect your information. These include:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                  <li><strong>Cloud Infrastructure:</strong> Supabase, AWS, and other cloud hosting providers for data storage and processing</li>
                  <li><strong>Analytics Services:</strong> Google Analytics and similar services to understand usage patterns (data is anonymized where possible)</li>
                  <li><strong>Payment Processors:</strong> Secure payment processing services (we do not store full payment card details)</li>
                  <li><strong>Communication Services:</strong> Email delivery, SMS, and push notification services</li>
                  <li><strong>Customer Support:</strong> Help desk and customer support platforms</li>
                </ul>
                <p className="text-gray-600 leading-relaxed mb-4">
                  These service providers are required to: (1) use your information only for the purposes we specify, 
                  (2) implement appropriate security measures, (3) comply with applicable privacy laws, and (4) not disclose 
                  your information to other parties without our authorization.
                </p>

                <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">4.2 Educational Institutions</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  If you are a student, teacher, or administrator associated with an educational institution using our Service, 
                  we may share relevant information with your school or educational institution as necessary to:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                  <li>Provide educational services and manage academic records</li>
                  <li>Facilitate communication between students, teachers, and administrators</li>
                  <li>Generate reports and analytics for educational purposes</li>
                  <li>Comply with educational institution policies and requirements</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">4.3 Legal Requirements and Law Enforcement</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We may disclose your information if we believe it is necessary to:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                  <li>Comply with applicable laws, regulations, legal processes, or government requests</li>
                  <li>Respond to subpoenas, court orders, or other legal processes</li>
                  <li>Enforce our Terms of Service, Privacy Policy, or other agreements</li>
                  <li>Protect our rights, property, or safety, or that of our users or others</li>
                  <li>Investigate potential violations or prevent fraud, security threats, or illegal activities</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">4.4 Business Transfers</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  In the event of a merger, acquisition, reorganization, bankruptcy, or sale of all or a portion of our assets, 
                  your information may be transferred to the acquiring entity. We will notify you of any such change in ownership 
                  or control of your personal information, and the acquiring entity will be required to honor the commitments in this Privacy Policy.
                </p>

                <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">4.5 With Your Consent</h3>
                <p className="text-gray-600 leading-relaxed">
                  We may share your information with other parties when you explicitly consent to such sharing, such as when 
                  you choose to connect your account with third-party services or participate in promotional activities.
                </p>
              </section>

              {/* Mobile App Permissions */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">5. Mobile App Permissions</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Our mobile application may request certain permissions on your device to provide specific features and functionality. 
                  These permissions are requested only when necessary, and you can grant or deny them at any time through your device settings.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  <strong>Permissions We May Request:</strong>
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                  <li><strong>Internet/Network Access:</strong> Required to connect to our servers and provide core functionality</li>
                  <li><strong>Storage:</strong> To save educational content, assignments, and app data locally on your device</li>
                  <li><strong>Camera:</strong> To capture photos for assignments, profile pictures, or document scanning (if applicable)</li>
                  <li><strong>Microphone:</strong> To record audio for educational activities or voice notes (if applicable)</li>
                  <li><strong>Location:</strong> Only if required for specific features (e.g., attendance tracking). We do not collect precise GPS location without your explicit permission</li>
                  <li><strong>Notifications:</strong> To send you important updates, alerts, and educational notifications</li>
                  <li><strong>Contacts:</strong> Only if you choose to sync contacts for communication features (optional)</li>
                </ul>
                <p className="text-gray-600 leading-relaxed">
                  You can manage these permissions at any time through your device's settings. Denying certain permissions may limit 
                  your ability to use some features of our Service, but core functionality will remain available.
                </p>
              </section>

              {/* Data Security */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                  <Lock className="h-6 w-6 mr-2 text-operium-primary" />
                  6. Data Security
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We implement industry-standard technical and organizational security measures to protect your personal information 
                  against unauthorized access, alteration, disclosure, or destruction. Our security measures include:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                  <li><strong>Encryption:</strong> Data encryption in transit (TLS/SSL) and at rest using industry-standard encryption algorithms</li>
                  <li><strong>Access Controls:</strong> Role-based access controls, multi-factor authentication, and regular access reviews</li>
                  <li><strong>Security Monitoring:</strong> Continuous monitoring, intrusion detection, and security incident response procedures</li>
                  <li><strong>Regular Updates:</strong> Regular security assessments, vulnerability scanning, and timely application of security patches</li>
                  <li><strong>Secure Infrastructure:</strong> Secure data centers, firewalls, and network security measures</li>
                  <li><strong>Data Backup:</strong> Regular encrypted backups with disaster recovery procedures</li>
                  <li><strong>Employee Training:</strong> Regular security awareness training for employees and contractors</li>
                  <li><strong>Incident Response:</strong> Established procedures for responding to security incidents and data breaches</li>
                </ul>
                <p className="text-gray-600 leading-relaxed mb-4">
                  <strong>Data Breach Notification:</strong> In the event of a data breach that may affect your personal information, 
                  we will notify you and relevant authorities as required by applicable laws, typically within 72 hours of becoming aware 
                  of the breach. Notifications will include information about the nature of the breach, the data affected, and steps we are 
                  taking to address it.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to use 
                  commercially acceptable means to protect your information, we cannot guarantee absolute security. You are responsible 
                  for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
                </p>
              </section>

              {/* Data Retention */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">7. Data Retention</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We retain your personal information only for as long as necessary to fulfill the purposes outlined in this 
                  Privacy Policy, unless a longer retention period is required or permitted by law. Our retention periods are 
                  based on:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                  <li>The nature of the information and the purpose for which it was collected</li>
                  <li>Legal, regulatory, and contractual requirements</li>
                  <li>Legitimate business interests (e.g., fraud prevention, dispute resolution)</li>
                  <li>Your account status (active accounts are retained while active and for a reasonable period after closure)</li>
                </ul>
                <p className="text-gray-600 leading-relaxed mb-4">
                  <strong>Retention Periods:</strong>
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                  <li><strong>Account Information:</strong> Retained while your account is active and for up to 7 years after account closure for legal and tax purposes</li>
                  <li><strong>Educational Records:</strong> Retained as required by educational institutions and applicable laws (typically 5-7 years after graduation or withdrawal)</li>
                  <li><strong>Transaction Records:</strong> Retained for 7 years for accounting, tax, and legal compliance purposes</li>
                  <li><strong>Marketing Communications:</strong> Retained until you opt-out or unsubscribe</li>
                  <li><strong>Support Communications:</strong> Retained for 3 years after the last interaction</li>
                </ul>
                <p className="text-gray-600 leading-relaxed">
                  When we no longer need your information, we will securely delete or anonymize it using industry-standard methods. 
                  Some information may be retained in backup systems for a limited period before permanent deletion. If you request 
                  deletion of your information, we will process your request in accordance with applicable laws and this Privacy Policy.
                </p>
              </section>

              {/* Your Rights */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                  <UserCheck className="h-6 w-6 mr-2 text-operium-primary" />
                  8. Your Rights and Choices
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Depending on your location and applicable laws (such as GDPR, CCPA, and other data protection regulations), 
                  you may have the following rights regarding your personal information:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                  <li><strong>Right to Access:</strong> Request access to and receive a copy of your personal information we hold</li>
                  <li><strong>Right to Rectification:</strong> Request correction of inaccurate, incomplete, or outdated information</li>
                  <li><strong>Right to Erasure (Right to be Forgotten):</strong> Request deletion of your personal information, subject to certain exceptions (e.g., legal obligations, legitimate business interests)</li>
                  <li><strong>Right to Data Portability:</strong> Request a copy of your data in a structured, commonly used, and machine-readable format</li>
                  <li><strong>Right to Object:</strong> Object to processing of your information based on legitimate interests or for direct marketing purposes</li>
                  <li><strong>Right to Restrict Processing:</strong> Request restriction of processing in certain circumstances</li>
                  <li><strong>Right to Withdraw Consent:</strong> Withdraw your consent at any time where processing is based on consent (withdrawal does not affect lawfulness of processing before withdrawal)</li>
                  <li><strong>Right to Opt-Out:</strong> Opt-out of the sale or sharing of personal information (we do not sell your information, but you can opt-out of certain data sharing)</li>
                  <li><strong>Right to Non-Discrimination:</strong> Exercise your privacy rights without discrimination</li>
                </ul>
                <p className="text-gray-600 leading-relaxed mb-4">
                  <strong>How to Exercise Your Rights:</strong>
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  To exercise any of these rights, please contact us using the information provided in the "Contact Us" section below. 
                  We will respond to your request within a reasonable timeframe, typically within 30 days, and may require verification 
                  of your identity to protect your privacy.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  <strong>Account Settings:</strong> You can also manage certain aspects of your information directly through your account 
                  settings in our mobile application or web service, including updating your profile information, managing notification 
                  preferences, and adjusting privacy settings.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  <strong>California Privacy Rights:</strong> If you are a California resident, you have additional rights under the 
                  California Consumer Privacy Act (CCPA), including the right to know what personal information we collect, the right 
                  to delete personal information, and the right to opt-out of the sale of personal information (we do not sell your information).
                </p>
              </section>

              {/* Children's Privacy */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">9. Children's Privacy</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Our Service is designed for use by educational institutions and may be used by students, including those 
                  under the age of 18. We comply with applicable laws regarding children's privacy, including:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Collecting only information necessary for educational purposes</li>
                  <li>Obtaining appropriate consent from parents or educational institutions</li>
                  <li>Providing parents and educational institutions with access to and control over children's information</li>
                  <li>Not knowingly collecting personal information from children under 13 without parental consent</li>
                </ul>
                <p className="text-gray-600 leading-relaxed mt-4">
                  If you are a parent or guardian and believe your child has provided us with personal information, 
                  please contact us immediately.
                </p>
              </section>

              {/* Third-Party Services */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">10. Third-Party Services and Links</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Our Service may contain links to third-party websites, applications, or services that are not operated or controlled by us. 
                  We are not responsible for the privacy practices, content, or security of these third-party services. We encourage you to 
                  review the privacy policies and terms of service of any third-party services you access.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  <strong>Third-Party Services We Use:</strong>
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Our Service integrates with the following third-party services to provide functionality:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                  <li><strong>Supabase:</strong> Cloud database, authentication, and backend infrastructure services. 
                    <a href="https://supabase.com/privacy" target="_blank" rel="noopener noreferrer" className="text-operium-primary hover:underline ml-1">View their privacy policy</a></li>
                  <li><strong>Google Services:</strong> Google Analytics for usage analytics, Google Firebase for push notifications (if applicable), 
                    and Google Sign-In for authentication (if applicable). 
                    <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-operium-primary hover:underline ml-1">View Google's privacy policy</a></li>
                  <li><strong>Payment Processors:</strong> Secure payment processing services for subscription and transaction processing. 
                    Payment information is processed directly by these providers and not stored by us.</li>
                  <li><strong>Cloud Storage:</strong> AWS (Amazon Web Services) or similar cloud infrastructure providers for data hosting and storage</li>
                </ul>
                <p className="text-gray-600 leading-relaxed">
                  These third-party services may collect, use, and share your information according to their own privacy policies. 
                  We recommend reviewing their privacy policies to understand how they handle your data.
                </p>
              </section>

              {/* International Data Transfers */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">11. International Data Transfers</h2>
                <p className="text-gray-600 leading-relaxed">
                  Your information may be transferred to and processed in countries other than your country of residence. 
                  These countries may have data protection laws that differ from those in your country. We take appropriate 
                  measures to ensure that your information receives an adequate level of protection in accordance with this 
                  Privacy Policy.
                </p>
              </section>

              {/* Changes to Privacy Policy */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">12. Changes to This Privacy Policy</h2>
                <p className="text-gray-600 leading-relaxed">
                  We may update our Privacy Policy from time to time. We will notify you of any changes by posting the 
                  new Privacy Policy on this page at <strong>operiumtechnologies.in/privacy-policy</strong> and updating 
                  the "Last Updated" date. You are advised to review this Privacy Policy periodically for any changes. 
                  Changes to this Privacy Policy are effective when they are posted on this page.
                </p>
              </section>

              {/* Contact Us */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                  <Mail className="h-6 w-6 mr-2 text-operium-primary" />
                  13. Contact Us
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, 
                  please contact us:
                </p>
                <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-operium-primary">
                  <p className="text-gray-800 font-semibold mb-2">Operium Technologies Pvt Ltd</p>
                  <p className="text-gray-600 mb-1">
                    <strong>Website:</strong> <a href="https://operiumtechnologies.in" target="_blank" rel="noopener noreferrer" className="text-operium-primary hover:underline">operiumtechnologies.in</a>
                  </p>
                  <p className="text-gray-600 mb-1">
                    <strong>Email:</strong> <a href="mailto:contact@operium.in" className="text-operium-primary hover:underline">contact@operium.in</a>
                  </p>
                  <p className="text-gray-600 mb-1">
                    <strong>Phone:</strong> <a href="tel:+919391906310" className="text-operium-primary hover:underline">+91 9391906310</a> / 
                    <a href="tel:+919391906311" className="text-operium-primary hover:underline"> +91 9391906311</a>
                  </p>
                  <p className="text-gray-600">
                    <strong>Address:</strong><br />
                    Prajay Princeton Towers, 1017, 10th floor,<br />
                    Doctors Colony, Saroornagar,<br />
                    Hyderabad, Telangana 500035, India
                  </p>
                </div>
              </section>

              {/* Consent */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">14. Your Consent</h2>
                <p className="text-gray-600 leading-relaxed">
                  By using our Service, you consent to our Privacy Policy and agree to its terms. If you do not agree 
                  with this policy, please do not use our Service.
                </p>
              </section>

            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

