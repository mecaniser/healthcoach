import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "About | A Work of Art Health Coach",
  description: "Learn about Karen Myers' holistic health coaching philosophy, approach, and qualifications to help you achieve balance and personal growth.",
};

export default function About() {
  return (
    <main className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-sage-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">About Me</h1>
            <p className="text-xl text-sage-100 max-w-3xl mx-auto">
              You might feel like a failure but actually, you&apos;re a work of art. It&apos;s not a diet plan–it&apos;s an inner journey. Let&apos;s walk it together.
            </p>
          </div>
        </div>
      </section>

      {/* Coach Profile Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/3">
              <div className="relative w-full h-[300px] rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/woa.png"
                  alt="Wellness Coach Profile"
                  width={400}
                  height={400}
                  className="object-cover"
                />
              </div>
            </div>
            <div className="md:w-2/3">
              <h2 className="text-3xl font-bold text-peach-600 mb-6">Karen Myers</h2>
              <p className="text-lg text-charcoal-900 mb-6">
                I&apos;m a holistic life and health coach–and, a veteran medical social worker with 25 years of field experience who holds dual licenses as an LCSW in both North Carolina and Utah. I am also a certified ACHP-SW (end of life specialist).
              </p>
              <p className="text-lg text-charcoal-900 mb-6">
                My work as a holistic life and health coach was born from my own long and winding road learning to manage my weight, restore balance and regain peace in my relationship with food and my body. And along the way, I learned how to achieve vibrant health with a health span matching my lifespan.
              </p>
              <p className="text-lg text-charcoal-900 mb-6">
                I&apos;m also a mindfulness-based psychotherapist, lifestyle medicine practitioner, nourishing & nurturing slow food gourmet maestra, mindful distance swimmer, lifelong learner, and wannabe flamenco dancer.
              </p>
              <p className="text-lg text-charcoal-900 mb-8">
                Recently, I realized there was a need for health coaching and a niche needing to be filled by someone with my specialized professional background as a healthcare professional and medical social worker. My purpose is simple. To help women struggling with these same issues.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-sage-600 px-4 py-2 rounded-md">
                  <span className="font-semibold text-white">LCSW (NC & UT)</span>
                </div>
                <div className="bg-peach-600 px-4 py-2 rounded-md">
                  <span className="font-semibold text-white">ACHP-SW</span>
                </div>
                <div className="bg-gold-600 px-4 py-2 rounded-md">
                  <span className="font-semibold text-white">Holistic Health Coach</span>
                </div>
                <div className="bg-charcoal-700 px-4 py-2 rounded-md">
                  <span className="font-semibold text-white">Mindfulness Practitioner</span>
                </div>
                <div className="bg-sage-700 px-4 py-2 rounded-md">
                  <span className="font-semibold text-white">Lifestyle Medicine Practitioner</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 bg-sage-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">My Coaching Philosophy</h2>
            <p className="text-xl text-sage-100 max-w-3xl mx-auto">
              My approach is heart-centered and draws upon my training in Western behavioral science balanced with Eastern wisdom traditions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Philosophy 1 */}
            <div className="bg-sage-700 rounded-lg p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-white mb-4">Collaborative & Intuitive</h3>
              <p className="text-sage-100">
                My approach is collaborative, organic and intuitive. I equip women with tools to help them restore their balance and regain peace around their relationship with food and their bodies.
              </p>
            </div>
            
            {/* Philosophy 2 */}
            <div className="bg-peach-600 rounded-lg p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-white mb-4">The Five Pillars of Health</h3>
              <p className="text-peach-100">
                Using The Five Pillars of Health as the foundation for transformational change, women learn to re-prioritize their need for self-care, deep breath work, mindfulness meditation, and movement.
              </p>
            </div>
            
            {/* Philosophy 3 */}
            <div className="bg-gold-600 rounded-lg p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-white mb-4">Transformational Change</h3>
              <p className="text-gold-100">
                I help women identify and reverse negative self-talk, respond to and eliminate food triggers, eat meals to nourish and nurture–and, end emotional or mouth-hunger–and much more.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal-900 mb-4">My Coaching Approach</h2>
            <p className="text-xl text-charcoal-600 max-w-3xl mx-auto">
              A structured yet flexible process designed to help you achieve meaningful results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-charcoal-900 mb-6">What to Expect</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-sage-100 flex items-center justify-center mr-3 mt-1">
                    <span className="text-sage-600 font-semibold">1</span>
                  </div>
                  <p className="text-charcoal-600">
                    <span className="font-semibold">Initial Assessment:</span> We begin with a comprehensive assessment to understand your current situation, goals, and challenges.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-sage-100 flex items-center justify-center mr-3 mt-1">
                    <span className="text-sage-600 font-semibold">2</span>
                  </div>
                  <p className="text-charcoal-600">
                    <span className="font-semibold">Goal Setting:</span> Together, we&apos;ll establish clear, achievable goals that align with your values and aspirations.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-sage-100 flex items-center justify-center mr-3 mt-1">
                    <span className="text-sage-600 font-semibold">3</span>
                  </div>
                  <p className="text-charcoal-600">
                    <span className="font-semibold">Strategy Development:</span> I&apos;ll help you create practical strategies and action plans tailored to your specific needs.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-sage-100 flex items-center justify-center mr-3 mt-1">
                    <span className="text-sage-600 font-semibold">4</span>
                  </div>
                  <p className="text-charcoal-600">
                    <span className="font-semibold">Implementation Support:</span> Regular sessions provide accountability, guidance, and adjustments as you implement changes.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-sage-100 flex items-center justify-center mr-3 mt-1">
                    <span className="text-sage-600 font-semibold">5</span>
                  </div>
                  <p className="text-charcoal-600">
                    <span className="font-semibold">Progress Evaluation:</span> We&apos;ll regularly assess your progress and refine our approach as needed to ensure optimal results.
                  </p>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold text-charcoal-900 mb-6">Coaching Methods</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-charcoal-800 mb-2">Heart-Centered Approach</h4>
                  <p className="text-charcoal-600">
                    My approach makes a real difference in helping women to feel better about their lives and to function more effectively in their relationships with others.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-charcoal-800 mb-2">Western & Eastern Integration</h4>
                  <p className="text-charcoal-600">
                    I draw upon my training in Western behavioral science and balance that with Eastern wisdom traditions to create a comprehensive approach to wellness.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-charcoal-800 mb-2">Mindfulness & Meditation</h4>
                  <p className="text-charcoal-600">
                    Learn deep breath work and mindfulness meditation techniques that help restore balance and create a foundation for lasting change.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-charcoal-800 mb-2">Nourishing Food Relationship</h4>
                  <p className="text-charcoal-600">
                    Develop a healthy relationship with food that focuses on nourishment rather than restriction, ending the cycle of emotional eating and dieting.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-sage-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Begin Your Journey?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Take the first step toward a more balanced, fulfilling life with a personalized coaching session.
          </p>
          <Link 
            href="/book" 
            className="bg-peach-600 hover:bg-peach-700 text-white font-medium py-3 px-8 rounded-md transition-colors duration-300 inline-block shadow-md"
          >
            Schedule a Session
          </Link>
        </div>
      </section>
    </main>
  );
}
