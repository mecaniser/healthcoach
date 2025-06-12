import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact | A Work of Art Health Coach",
  description: "Get in touch with Karen Myers for holistic health coaching. Let&apos;s start your wellness journey together.",
};

export default function Contact() {
  return (
    <main className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-sage-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Contact Me</h1>
            <p className="text-xl text-sage-100 max-w-3xl mx-auto">
              I&apos;m here to help you on your wellness journey. Reach out with any questions or to schedule a consultation.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-charcoal-900 mb-6">Get in Touch</h2>
              <p className="text-lg text-charcoal-600 mb-8">
                I&apos;m here to support you on your wellness journey. Whether you have questions about my coaching approach, want to discuss your specific needs, or are ready to schedule a consultation, I&apos;d love to hear from you.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 bg-sage-100 rounded-full flex items-center justify-center mr-3">
                    <svg className="h-5 w-5 text-sage-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-charcoal-900">Phone</h3>
                    <p className="text-charcoal-600">
                    <a href="tel:+17044699601" className="hover:text-sage-600 transition-colors">
                      (704) 469-9601
                    </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 bg-sage-100 rounded-full flex items-center justify-center mr-3">
                    <svg className="h-5 w-5 text-sage-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-charcoal-900">Email</h3>
                    <p className="text-charcoal-600">
                    <a href="mailto:aworkofarthealthcoach@gmail.com" className="hover:text-sage-600 transition-colors">
                      aworkofarthealthcoach@gmail.com
                    </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 bg-sage-100 rounded-full flex items-center justify-center mr-3">
                    <svg className="h-5 w-5 text-sage-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-charcoal-900">Location</h3>
                    <p className="text-charcoal-600">
                      Virtual coaching sessions available worldwide
                    </p>
                    <p className="text-charcoal-600">
                      Licensed in North Carolina and Utah
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 bg-sage-100 rounded-full flex items-center justify-center mr-3">
                    <svg className="h-5 w-5 text-sage-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-charcoal-900">Office Hours</h3>
                    <p className="text-charcoal-600">Monday - Friday: 9am - 6pm</p>
                    <p className="text-charcoal-600">Saturday: 10am - 2pm</p>
                    <p className="text-charcoal-600">Sunday: Closed</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <h3 className="text-lg font-semibold text-charcoal-900 mb-4">Connect With Me</h3>
                <div className="flex space-x-4">
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-charcoal-400 hover:text-sage-500 transition-colors">
                    <span className="sr-only">Twitter</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-charcoal-400 hover:text-peach-500 transition-colors">
                    <span className="sr-only">Instagram</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-charcoal-400 hover:text-sage-700 transition-colors">
                    <span className="sr-only">LinkedIn</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-sage-50 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-charcoal-900 mb-6">Send a Message</h2>
              
              {/* Formspree Form */}
              <form 
                action="https://formspree.io/f/your-formspree-endpoint" 
                method="POST"
                className="space-y-6"
              >
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-charcoal-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    className="w-full px-4 py-2 border border-sage-300 rounded-md focus:ring-sage-500 focus:border-sage-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-charcoal-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    className="w-full px-4 py-2 border border-sage-300 rounded-md focus:ring-sage-500 focus:border-sage-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-charcoal-700 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    required
                    className="w-full px-4 py-2 border border-sage-300 rounded-md focus:ring-sage-500 focus:border-sage-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-charcoal-700 mb-1">
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows={5}
                    required
                    className="w-full px-4 py-2 border border-sage-300 rounded-md focus:ring-sage-500 focus:border-sage-500"
                  ></textarea>
                </div>
                
                <div>
                  <button
                    type="submit"
                    className="w-full bg-peach-600 hover:bg-peach-700 text-white font-medium py-3 px-4 rounded-md transition-colors duration-300 shadow-md"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-sage-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-sage-100 max-w-3xl mx-auto">
              Find answers to common questions about wellness coaching and how to get started.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              <div className="bg-sage-600 rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-white mb-2">How quickly can I expect a response?</h3>
                <p className="text-sage-100">
                  I&apos;ll get back to you within 24 hours.
                </p>
              </div>
              
              <div className="bg-peach-600 rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-white mb-2">Do you offer free consultations?</h3>
                <p className="text-peach-100">
                  Yes, I offer a complimentary 15-minute phone consultation to discuss your goals and determine if we&apos;re a good fit for working together. You can schedule this through the booking page.
                </p>
              </div>
              
              <div className="bg-gold-600 rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-white mb-2">What if I&apos;m not sure coaching is right for me?</h3>
                <p className="text-gold-100">
                  That&apos;s completely normal! I encourage you to reach out with your questions or schedule a free consultation. We can discuss your specific situation and determine if coaching would be beneficial for you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Book CTA */}
      <section className="py-16 bg-sage-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Life?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Let&apos;s connect and explore how I can support your wellness goals.
          </p>
          <Link 
            href="/book" 
            className="bg-peach-600 hover:bg-peach-700 text-white font-medium py-3 px-8 rounded-md transition-colors duration-300 inline-block shadow-md"
          >
            Book Your Session Now
          </Link>
        </div>
      </section>
    </main>
  );
}
