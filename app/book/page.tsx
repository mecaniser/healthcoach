import Link from "next/link";
import Script from "next/script";

export const metadata = {
  title: "Book a Session | A Work of Art Health Coach",
  description: "Schedule your holistic health coaching session with Karen Myers. Take the first step toward a more balanced life and vibrant health.",
};

export default function Book() {
  return (
    <main className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-sage-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Book a Session</h1>
            <p className="text-xl text-sage-100 max-w-3xl mx-auto">
              Take the first step toward a more balanced, fulfilling life by scheduling your personalized coaching session.
            </p>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-lg shadow-md p-6 mb-10">
              <h2 className="text-2xl font-bold text-charcoal-900 mb-6">Schedule Your Session</h2>
              <p className="text-charcoal-600 mb-8">
                Use the calendar below to find a time that works for you. Once you select a time, you&apos;ll receive a confirmation email with all the details you need for our session.
              </p>
              
              {/* Calendly inline widget */}
              <div 
                className="calendly-inline-widget min-h-[800px] md:min-h-[900px] lg:min-h-[1000px] w-full relative overflow-hidden rounded-lg border border-gray-200" 
                data-url="https://calendly.com/wellnesscoach/coaching-session"
                style={{ height: 'auto' }}
              ></div>
              
              <Script 
                src="https://assets.calendly.com/assets/external/widget.js" 
                async
              />
            </div>
            
            {/* Session Info */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-charcoal-900 mb-6">What to Expect</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-sage-700 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Free Consultation</h4>
                  <p className="text-sage-100 mb-4">
                    Our first conversation focuses on understanding your current situation, goals, and challenges. We&apos;ll discuss your wellness journey and determine if we&apos;re a good fit to work together.
                  </p>
                  <p className="font-semibold text-white">Free</p>
                </div>
                
                <div className="bg-peach-600 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Coaching Sessions</h4>
                  <p className="text-peach-100 mb-4">
                    Regular coaching sessions to track progress, address challenges, and refine strategies to help you achieve your wellness goals. Includes personalized advice, goal-setting, and regular check-ins.
                  </p>
                  <p className="font-semibold text-white">See packages below</p>
                </div>
              </div>
              
              <div className="mt-8 bg-gold-600 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-white mb-3">Package Options</h4>
                <p className="text-gold-100 mb-4">
                  My coaching is available in comprehensive packages designed to provide the support and guidance you need for meaningful transformation.
                </p>
                <ul className="list-disc list-inside text-gold-100 space-y-2 mb-4">
                  <li>8-Week Package: $1,600</li>
                  <li>12-Week Package: $2,100 (Discounted)</li>
                </ul>
                <p className="text-gold-100">
                  Payment is expected at the time of service. Personalized advice, goal-setting, regular process monitoring and check-ins to track progress are included.
                </p>
                <p className="text-gold-100 mt-4">
                  Please call me to schedule a free consultation or DM me on LinkedIn.
                </p>
              </div>
            </div>
            
            {/* FAQ */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-charcoal-900 mb-6">Frequently Asked Questions</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-charcoal-800 mb-2">How do sessions take place?</h4>
                  <p className="text-charcoal-600">
                    Sessions are conducted via Zoom video call. You'll receive a link in your confirmation email after booking.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-charcoal-800 mb-2">What if I need to reschedule?</h4>
                  <p className="text-charcoal-600">
                    You can reschedule your session up to 24 hours before the scheduled time through the link in your confirmation email.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-charcoal-800 mb-2">How do I prepare for my first session?</h4>
                  <p className="text-charcoal-600">
                    Find a quiet, private space where you won&apos;t be interrupted. Consider reflecting on your goals and what you hope to achieve through coaching. You&apos;ll receive a brief questionnaire to complete before our first session.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-charcoal-800 mb-2">What forms of payment do you accept?</h4>
                  <p className="text-charcoal-600">
                    We accept credit/debit cards, PayPal, and Venmo. Payment is processed securely at the time of booking.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-sage-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Have Questions?</h2>
          <p className="text-lg text-sage-100 mb-8 max-w-2xl mx-auto">
            If you have any questions about coaching sessions or need help choosing the right option for you, please don't hesitate to reach out.
          </p>
          <Link 
            href="/contact" 
            className="bg-peach-600 hover:bg-peach-700 text-white font-medium py-3 px-8 rounded-md transition-colors duration-300 inline-block shadow-md"
          >
            Contact Me
          </Link>
        </div>
      </section>
    </main>
  );
}
