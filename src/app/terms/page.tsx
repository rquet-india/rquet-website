import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service - Rquet',
  description: 'Read the terms and conditions for using the Rquet platform.',
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Terms of Service
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Please read these terms carefully before using our platform.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            <strong>Last updated:</strong> July 17, 2024
          </p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">1. Agreement to Terms</h2>
              <p className="text-gray-600 dark:text-gray-300">
                By accessing and using Rquet ("we," "our," or "us"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">2. Description of Service</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Rquet is a platform that provides information about racquet sports tournaments in Bangalore. Our service includes:
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                <li>Tournament listings and details</li>
                <li>Venue information and maps</li>
                <li>Organizer contact information</li>
                <li>Links to external registration platforms</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">3. User Responsibilities</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                When using our service, you agree to:
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                <li>Use the service only for lawful purposes</li>
                <li>Provide accurate information when contacting us</li>
                <li>Respect intellectual property rights</li>
                <li>Not attempt to harm or disrupt our service</li>
                <li>Not use automated systems to access our content</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">4. Tournament Information</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Please note that:
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                <li>We display tournament information provided by organizers</li>
                <li>We are not responsible for tournament cancellations or changes</li>
                <li>Registration and participation are handled by tournament organizers</li>
                <li>We do not guarantee the accuracy of all tournament details</li>
                <li>Users should verify information directly with organizers</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">5. External Links</h2>
              <p className="text-gray-600 dark:text-gray-300">
                Our service contains links to external websites for tournament registration and venue information. We are not responsible for the content, privacy policies, or practices of these external sites. Use them at your own risk.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">6. Disclaimer of Warranties</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Our service is provided "as is" without any warranties, express or implied. We do not warrant that:
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                <li>The service will be uninterrupted or error-free</li>
                <li>All information will be accurate or up-to-date</li>
                <li>The service will meet your specific requirements</li>
                <li>Any defects will be corrected</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">7. Limitation of Liability</h2>
              <p className="text-gray-600 dark:text-gray-300">
                In no event shall Rquet be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">8. Intellectual Property</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                The Rquet platform, including its design, content, and functionality, is protected by copyright and other intellectual property laws. You may not:
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                <li>Copy, modify, or distribute our content without permission</li>
                <li>Use our trademarks or branding without authorization</li>
                <li>Reverse engineer or attempt to extract our source code</li>
                <li>Create derivative works based on our platform</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">9. Privacy</h2>
              <p className="text-gray-600 dark:text-gray-300">
                Your privacy is important to us. Please review our Privacy Policy, which also governs your use of our service, to understand our practices.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">10. Modifications to Terms</h2>
              <p className="text-gray-600 dark:text-gray-300">
                We reserve the right to modify these terms at any time. We will notify users of any material changes by posting the new Terms of Service on this page and updating the "Last updated" date. Your continued use of the service constitutes acceptance of the modified terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">11. Termination</h2>
              <p className="text-gray-600 dark:text-gray-300">
                We may terminate or suspend your access to our service immediately, without prior notice or liability, for any reason, including breach of these Terms of Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">12. Governing Law</h2>
              <p className="text-gray-600 dark:text-gray-300">
                These Terms shall be interpreted and governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Bangalore, Karnataka.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">13. Contact Information</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                <p className="text-gray-600 dark:text-gray-300">
                  Email: legal@rquet.com<br />
                  Phone: +91 80 1234 5678<br />
                  Address: Bangalore, Karnataka, India
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}