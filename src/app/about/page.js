
import Link from 'next/link';

export const metadata = {
  title: 'About Us | B.Tech Admissions',
  description: 'Learn how we help students secure admissions in top engineering colleges like VIT and SRM.',
};

export default function About() {
  return (
    <main className="min-h-screen bg-[#FEFCF4] text-[#2D241E] font-sans selection:bg-[#D6FF00] selection:text-black">
   
      {/* 1. ABOUT HERO SECTION */}
      <section className="pt-24 pb-16 max-w-7xl mx-auto px-4 text-center">
        <div className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-2 text-sm font-semibold mb-8 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-[#F96D24]"></span>
          About BTech Admissions
        </div>
        
        <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-[1.1] mb-6">
          Bridging the Gap Between <br />
          <span className="text-[#3B63F6]">Talent and Opportunity</span>
        </h1>
        
        <p className="text-lg text-gray-600 max-w-3xl mx-auto font-medium">
          We are a team of dedicated educational counselors with over a decade of experience. We take the stress out of engineering admissions, ensuring you secure a seat in top-tier institutions like VIT, SRM, and more.
        </p>
      </section>

      {/* 2. OUR MISSION & VISION (Split Layout) */}
      <section className="py-20 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left Side: Text */}
          <div>
            <h2 className="text-4xl font-extrabold mb-6">Our Mission is Simple: <span className="text-[#F96D24]">Your Success.</span></h2>
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              Every year, thousands of students miss out on their dream colleges due to a lack of proper guidance, missed deadlines, or confusing application procedures. 
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              We step in to provide <strong className="text-[#2D241E]">end-to-end admission counseling</strong>. From helping you choose the right campus to filling out forms and preparing for entrance exams, we act as your personal admission bridge.
            </p>
            
            <ul className="space-y-4 font-semibold text-lg">
              <li className="flex items-center gap-3">
                <span className="text-[#3B63F6] text-xl">✓</span> Transparent Process
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#3B63F6] text-xl">✓</span> Direct University Connections
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#3B63F6] text-xl">✓</span> 100% Secure Admissions Support
              </li>
            </ul>
          </div>

          {/* Right Side: Image/Graphic Placeholder */}
          <div className="bg-[#eef2ff] rounded-3xl p-10 h-full min-h-[400px] flex flex-col justify-center items-center text-center border-2 border-[#3B63F6]/20 relative overflow-hidden">
             {/* Decorative background elements */}
             <div className="absolute top-[-50px] right-[-50px] w-40 h-40 bg-[#3B63F6] rounded-full opacity-10 blur-2xl"></div>
             <div className="absolute bottom-[-50px] left-[-50px] w-40 h-40 bg-[#F96D24] rounded-full opacity-10 blur-2xl"></div>
             
             <div className="text-7xl mb-6 relative z-10">🎯</div>
             <h3 className="text-2xl font-bold text-[#3B63F6] mb-2 relative z-10">10,000+</h3>
             <p className="text-gray-700 font-medium relative z-10">Students successfully counseled and placed in top private universities across India.</p>
          </div>
        </div>
      </section>

      {/* 3. WHY CHOOSE US (Orange Cards to match the theme) */}
      <section className="py-24 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold mb-4">Why Partner With Us?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">We don't just give advice; we execute the entire admission strategy for you.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-[#F96D24] rounded-2xl p-8 text-white shadow-xl">
              <div className="bg-white w-12 h-12 rounded-lg flex items-center justify-center text-2xl mb-6 shadow-sm">
                🧭
              </div>
              <h3 className="text-2xl font-bold mb-3">Expert Counseling</h3>
              <p className="text-orange-100 font-medium leading-relaxed">
                We analyze your academic profile and align it with the best possible engineering branches at VIT and SRM campuses.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-[#F96D24] rounded-2xl p-8 text-white shadow-xl">
              <div className="bg-white w-12 h-12 rounded-lg flex items-center justify-center text-2xl mb-6 shadow-sm">
                📝
              </div>
              <h3 className="text-2xl font-bold mb-3">Application Support</h3>
              <p className="text-orange-100 font-medium leading-relaxed">
                Never miss a deadline. We handle the complex documentation and application tracking for VITEEE and SRMJEEE.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-[#F96D24] rounded-2xl p-8 text-white shadow-xl">
              <div className="bg-white w-12 h-12 rounded-lg flex items-center justify-center text-2xl mb-6 shadow-sm">
                🤝
              </div>
              <h3 className="text-2xl font-bold mb-3">End-to-End Service</h3>
              <p className="text-orange-100 font-medium leading-relaxed">
                From the first consultation call to the day you step onto the campus, we are with you every step of the way.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. BOTTOM CTA */}
      <section className="py-24 text-center max-w-4xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-black mb-6">Ready to secure your future?</h2>
        <p className="text-xl text-gray-600 mb-10">
          Let's discuss your academic goals and chart out the perfect admission roadmap.
        </p>
        <Link 
          href="/contact" 
          className="inline-flex bg-[#D6FF00] text-black font-bold py-4 px-10 rounded-full shadow-lg hover:bg-[#c4eb00] transition items-center gap-2 text-xl"
        >
          Get in Touch Today <span>→</span>
        </Link>
      </section>

     
    </main>
  );
}