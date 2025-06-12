import Image from "next/image";
import Link from "next/link";
import TestimonialCard from "@/components/TestimonialCard";
import Header from "@/components/Header";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Header />
      {/* Hero Section */}
      <section 
        className="bg-charcoal-900 py-20 md:py-32 text-white pt-24 md:pt-32"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10 order-2 md:order-1">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                A Work of Art Health Coach
              </h1>
              <p className="text-xl text-sage-100 mb-8">
                You might feel like a failure but actually, you're a work of art. It's not a diet plan–it's an inner journey. Let's walk it together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/book" 
                  className="bg-peach-600 hover:bg-peach-700 text-white font-medium py-3 px-6 rounded-md transition-colors duration-300 text-center shadow-md"
                >
                  Book a Session
                </Link>
                <Link 
                  href="/about" 
                  className="bg-gold-600 hover:bg-gold-700 text-white font-medium py-3 px-6 rounded-md transition-colors duration-300 text-center shadow-md"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="w-full md:w-1/2 relative mb-8 md:mb-0 order-1 md:order-2 block">
              <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] bg-sage-200 rounded-lg overflow-hidden shadow-xl relative">
                <Image
                  src="/images/woa_face.png"
                  alt="Wellness coaching session"
                  fill
                  className="object-contain md:object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-sage-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">How I Can Help You</h2>
            <p className="text-xl text-sage-100 max-w-3xl mx-auto font-medium">
              My heart-centered approach draws upon Western behavioral science and Eastern wisdom traditions to help women restore balance and regain peace with food and their bodies.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-sage-700 rounded-lg p-8 transition-transform duration-300 hover:-translate-y-1 hover:shadow-md border border-sage-600">
              <div className="w-14 h-14 bg-sage-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-sage-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Holistic Health Coaching</h3>
              <p className="text-sage-100 font-medium">
                Using The Five Pillars of Health as the foundation for transformational change, learn to re-prioritize self-care, deep breath work, mindfulness meditation, and movement.
              </p>
            </div>
            
            {/* Service 2 */}
            <div className="bg-peach-600 rounded-lg p-8 transition-transform duration-300 hover:-translate-y-1 hover:shadow-md border border-peach-500">
              <div className="w-14 h-14 bg-peach-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-peach-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Food Relationship Healing</h3>
              <p className="text-peach-100 font-medium">
                Identify and reverse negative self-talk, respond to and eliminate food triggers, eat meals to nourish and nurture–and, end emotional or mouth-hunger.
              </p>
            </div>
            
            {/* Service 3 */}
            <div className="bg-gold-600 rounded-lg p-8 transition-transform duration-300 hover:-translate-y-1 hover:shadow-md border border-gold-500">
              <div className="w-14 h-14 bg-gold-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-gold-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Professional Experience</h3>
              <p className="text-gold-100 font-medium">
                Benefit from my 25 years as a medical social worker with dual LCSW licenses in North Carolina and Utah, and certification as an ACHP-SW (end of life specialist).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-sage-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Client Testimonials</h2>
            <p className="text-xl text-sage-100 max-w-3xl mx-auto">
              Hear from women who have transformed their relationship with food and their bodies through my coaching approach.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard 
              quote="Working with Karen has completely transformed my relationship with food. I've developed sustainable habits that have improved my energy levels and I finally feel at peace with my body."
              name="Jennifer Adams"
              title="Mother of Two"
            />
            
            <TestimonialCard 
              quote="The mindfulness techniques I learned have been invaluable. I no longer feel controlled by emotional eating and have a much more peaceful relationship with food and my body."
              name="Rebecca Taylor"
              title="Healthcare Professional"
            />
            
            <TestimonialCard 
              quote="After years of yo-yo dieting, Karen helped me find balance. Through our coaching sessions, I've learned to nourish my body and mind without the constant battle I used to face."
              name="Lisa Martinez"
              title="Business Owner"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-sage-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Take the first step toward a more balanced, fulfilling life with a personalized approach that treats you as the work of art you truly are.
          </p>
          <Link 
            href="/book" 
            className="bg-peach-600 hover:bg-peach-700 text-white font-medium py-3 px-8 rounded-md transition-colors duration-300 inline-block shadow-md"
          >
            Book Your First Session
          </Link>
        </div>
      </section>
    </main>
  );
}
