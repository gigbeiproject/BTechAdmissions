
import Link from 'next/link';

export const metadata = {
  title: 'VIT Admissions 2026 | Vellore Institute of Technology',
  description: 'Get expert guidance and secure your B.Tech admission at VIT Vellore, Chennai, AP, or Bhopal campuses.',
};

export default function VITAdmissions() {
  return (
    <main className="min-h-screen bg-[#FEFCF4] text-[#2D241E] font-sans selection:bg-[#D6FF00] selection:text-black">
      

      {/* 1. VIT HERO SECTION */}
      <section className="pt-24 pb-16 max-w-7xl mx-auto px-4 text-center">
        <div className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-2 text-sm font-semibold mb-8 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-[#3B63F6]"></span>
          VITEEE 2026 Admissions Open
        </div>
        
        <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-[1.1] mb-6">
          Secure Your Seat at <br />
          <span className="text-[#3B63F6]">VIT Vellore</span>
        </h1>
        
        <p className="text-lg text-gray-600 max-w-2xl mx-auto font-medium mb-10">
          Ranked among India's top private engineering institutions. We provide complete, end-to-end guidance for VIT applications, counseling, and direct admission procedures.
        </p>

        <div className="flex justify-center items-center gap-4">
          <Link 
            href="/contact" 
            className="bg-[#D6FF00] text-black font-bold py-4 px-8 rounded-full shadow-lg hover:bg-[#c4eb00] transition flex items-center gap-2 text-lg"
          >
            Apply for VIT Now <span>→</span>
          </Link>
        </div>
      </section>

      {/* 2. WHY VIT? (Dark Premium Cards) */}
      <section className="py-16 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1 */}
          <div className="bg-[#1C1713] rounded-3xl p-10 text-white shadow-2xl relative overflow-hidden group hover:-translate-y-2 transition duration-300">
            <div className="absolute -right-10 -top-10 w-32 h-32 bg-[#3B63F6] rounded-full opacity-20 blur-2xl group-hover:opacity-40 transition"></div>
            <div className="text-4xl mb-6">💰</div>
            <h3 className="text-2xl font-bold mb-3 text-white">Record Placements</h3>
            <p className="text-gray-400 font-medium leading-relaxed">
              With the highest package hitting <strong className="text-[#D6FF00]">₹1.02 Crores</strong>, VIT hosts top recruiters like Microsoft, Amazon, and DE Shaw every year.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#1C1713] rounded-3xl p-10 text-white shadow-2xl relative overflow-hidden group hover:-translate-y-2 transition duration-300">
            <div className="absolute -right-10 -top-10 w-32 h-32 bg-[#3B63F6] rounded-full opacity-20 blur-2xl group-hover:opacity-40 transition"></div>
            <div className="text-4xl mb-6">⚙️</div>
            <h3 className="text-2xl font-bold mb-3 text-white">FFCS System</h3>
            <p className="text-gray-400 font-medium leading-relaxed">
              The <strong className="text-white">Fully Flexible Credit System</strong> lets you design your own degree, choose your professors, and set your own timetable.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#1C1713] rounded-3xl p-10 text-white shadow-2xl relative overflow-hidden group hover:-translate-y-2 transition duration-300">
            <div className="absolute -right-10 -top-10 w-32 h-32 bg-[#3B63F6] rounded-full opacity-20 blur-2xl group-hover:opacity-40 transition"></div>
            <div className="text-4xl mb-6">🌍</div>
            <h3 className="text-2xl font-bold mb-3 text-white">Global Exposure</h3>
            <p className="text-gray-400 font-medium leading-relaxed">
              Through the Semester Abroad Program (SAP), study at over <strong className="text-white">300+ partner universities</strong> across the USA, UK, and Europe.
            </p>
          </div>

        </div>
      </section>

      {/* 3. CAMPUSES & ELIGIBILITY (Split Layout) */}
      <section className="py-24 bg-white border-y border-gray-100 mt-10">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Campuses */}
          <div>
            <h2 className="text-4xl font-extrabold mb-8">Four World-Class <span className="text-[#3B63F6]">Campuses</span></h2>
            <div className="space-y-6">
              <div className="p-6 bg-gray-50 border border-gray-200 rounded-2xl hover:border-[#3B63F6] transition">
                <h4 className="text-xl font-bold text-[#2D241E]">1. VIT Vellore (Main Campus)</h4>
                <p className="text-gray-600 mt-2">The flagship 372-acre campus known for its massive infrastructure, tech fests (gravitas), and premium placements.</p>
              </div>
              <div className="p-6 bg-gray-50 border border-gray-200 rounded-2xl hover:border-[#3B63F6] transition">
                <h4 className="text-xl font-bold text-[#2D241E]">2. VIT Chennai</h4>
                <p className="text-gray-600 mt-2">A fast-growing, highly competitive campus offering excellent industry exposure in a major IT hub.</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-5 bg-gray-50 border border-gray-200 rounded-2xl">
                  <h4 className="font-bold text-[#2D241E]">3. VIT-AP</h4>
                  <p className="text-sm text-gray-500 mt-1">Amaravati</p>
                </div>
                <div className="p-5 bg-gray-50 border border-gray-200 rounded-2xl">
                  <h4 className="font-bold text-[#2D241E]">4. VIT Bhopal</h4>
                  <p className="text-sm text-gray-500 mt-1">Madhya Pradesh</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Eligibility info */}
          <div className="bg-[#eef2ff] rounded-3xl p-10 border-2 border-[#3B63F6]/20 h-full flex flex-col justify-center">
            <h3 className="text-3xl font-bold mb-6 text-[#2D241E]">Admission Criteria</h3>
            <ul className="space-y-5 text-lg text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-[#3B63F6] font-bold mt-1">✓</span> 
                <div>
                  <strong>Academic Requirement:</strong> Minimum 60% aggregate in Physics, Chemistry, and Mathematics/Biology in 12th standard (50% for SC/ST and North Eastern states).
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#3B63F6] font-bold mt-1">✓</span> 
                <div>
                  <strong>Entrance Exam:</strong> Admission is primarily based on the VIT Engineering Entrance Examination (VITEEE) ranking.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#3B63F6] font-bold mt-1">✓</span> 
                <div>
                  <strong>Counseling:</strong> Seats are allotted purely based on merit during the VITEEE counseling phases.
                </div>
              </li>
            </ul>
            
            <div className="mt-8 p-4 bg-white rounded-xl border border-gray-200 shadow-sm flex items-center gap-4">
              <div className="text-2xl">💡</div>
              <p className="text-sm font-semibold text-gray-800">Need help cracking the process? Our experts can guide you through form filling, exam strategy, and choice filling.</p>
            </div>
          </div>

        </div>
      </section>

      {/* 4. BOTTOM CTA */}
      <section className="py-24 text-center max-w-4xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-black mb-6">Don't leave your admission to chance.</h2>
        <p className="text-xl text-gray-600 mb-10">
          Connect with our counselors today to evaluate your profile and map out your journey to VIT.
        </p>
        <Link 
          href="/contact" 
          className="inline-flex bg-[#1C1713] text-white font-bold py-4 px-10 rounded-full shadow-lg hover:bg-gray-800 transition items-center gap-2 text-xl"
        >
          Book a Free VIT Counseling Session <span>→</span>
        </Link>
      </section>

    </main>
  );
}