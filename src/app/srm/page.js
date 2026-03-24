
import Link from 'next/link';

export const metadata = {
  title: 'SRM Admissions 2026 | SRM Institute of Science & Technology',
  description: 'Get expert guidance and secure your B.Tech admission at SRM IST Kattankulathur, Ramapuram, and other campuses.',
};

export default function SRMAdmissions() {
  return (
    <main className="min-h-screen bg-[#FEFCF4] text-[#2D241E] font-sans selection:bg-[#D6FF00] selection:text-black">
    

      {/* 1. SRM HERO SECTION */}
      <section className="pt-24 pb-16 max-w-7xl mx-auto px-4 text-center">
        <div className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-2 text-sm font-semibold mb-8 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-[#3B63F6]"></span>
          SRMJEEE 2026 Admissions Open
        </div>
        
        <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-[1.1] mb-6">
          Secure Your Seat at <br />
          <span className="text-[#3B63F6]">SRM Institute</span>
        </h1>
        
        <p className="text-lg text-gray-600 max-w-2xl mx-auto font-medium mb-10">
          A Category 1 University renowned for innovation, world-class infrastructure, and phenomenal placements. Let us handle your application and counseling process from start to finish.
        </p>

        <div className="flex justify-center items-center gap-4">
          <Link 
            href="/contact" 
            className="bg-[#D6FF00] text-black font-bold py-4 px-8 rounded-full shadow-lg hover:bg-[#c4eb00] transition flex items-center gap-2 text-lg"
          >
            Apply for SRM Now <span>→</span>
          </Link>
        </div>
      </section>

      {/* 2. WHY SRM? (Dark Premium Cards) */}
      <section className="py-16 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1 */}
          <div className="bg-[#1C1713] rounded-3xl p-10 text-white shadow-2xl relative overflow-hidden group hover:-translate-y-2 transition duration-300">
            <div className="absolute -right-10 -top-10 w-32 h-32 bg-[#3B63F6] rounded-full opacity-20 blur-2xl group-hover:opacity-40 transition"></div>
            <div className="text-4xl mb-6">🚀</div>
            <h3 className="text-2xl font-bold mb-3 text-white">Elite Placements</h3>
            <p className="text-gray-400 font-medium leading-relaxed">
              With top offers reaching <strong className="text-[#D6FF00]">₹1.1 Crores</strong>, SRM attracts thousands of recruiters annually, including global tech giants and Fortune 500 companies.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#1C1713] rounded-3xl p-10 text-white shadow-2xl relative overflow-hidden group hover:-translate-y-2 transition duration-300">
            <div className="absolute -right-10 -top-10 w-32 h-32 bg-[#3B63F6] rounded-full opacity-20 blur-2xl group-hover:opacity-40 transition"></div>
            <div className="text-4xl mb-6">🏛️</div>
            <h3 className="text-2xl font-bold mb-3 text-white">Mega Infrastructure</h3>
            <p className="text-gray-400 font-medium leading-relaxed">
              The Kattankulathur main campus spans over <strong className="text-white">250 acres</strong>, featuring cutting-edge research labs, massive libraries, and smart classrooms.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#1C1713] rounded-3xl p-10 text-white shadow-2xl relative overflow-hidden group hover:-translate-y-2 transition duration-300">
            <div className="absolute -right-10 -top-10 w-32 h-32 bg-[#3B63F6] rounded-full opacity-20 blur-2xl group-hover:opacity-40 transition"></div>
            <div className="text-4xl mb-6">🌍</div>
            <h3 className="text-2xl font-bold mb-3 text-white">Global Partnerships</h3>
            <p className="text-gray-400 font-medium leading-relaxed">
              SRM's <strong className="text-white">Semester Abroad Program (SAP)</strong> allows students to study at premier institutions like MIT, Stanford, and Oxford.
            </p>
          </div>

        </div>
      </section>

      {/* 3. CAMPUSES & ELIGIBILITY (Split Layout) */}
      <section className="py-24 bg-white border-y border-gray-100 mt-10">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Campuses */}
          <div>
            <h2 className="text-4xl font-extrabold mb-8">Choose Your <span className="text-[#3B63F6]">Campus</span></h2>
            <div className="space-y-6">
              <div className="p-6 bg-gray-50 border border-gray-200 rounded-2xl hover:border-[#3B63F6] transition">
                <h4 className="text-xl font-bold text-[#2D241E]">1. SRM Kattankulathur (Main Campus)</h4>
                <p className="text-gray-600 mt-2">The largest and most sought-after campus near Chennai, hosting over 20,000 students and state-of-the-art facilities.</p>
              </div>
              <div className="p-6 bg-gray-50 border border-gray-200 rounded-2xl hover:border-[#3B63F6] transition">
                <h4 className="text-xl font-bold text-[#2D241E]">2. SRM Ramapuram</h4>
                <p className="text-gray-600 mt-2">Located in the heart of Chennai city, known for its strict academic focus and strong IT placement records.</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-5 bg-gray-50 border border-gray-200 rounded-2xl">
                  <h4 className="font-bold text-[#2D241E]">3. SRM NCR</h4>
                  <p className="text-sm text-gray-500 mt-1">Ghaziabad, Delhi NCR</p>
                </div>
                <div className="p-5 bg-gray-50 border border-gray-200 rounded-2xl">
                  <h4 className="font-bold text-[#2D241E]">4. SRM AP</h4>
                  <p className="text-sm text-gray-500 mt-1">Amaravati, Andhra Pradesh</p>
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
                  <strong>Academic Requirement:</strong> Minimum 60% aggregate in Physics, Chemistry, and Mathematics in the 12th standard board exams.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#3B63F6] font-bold mt-1">✓</span> 
                <div>
                  <strong>Entrance Exam:</strong> Admissions to B.Tech programs are exclusively through the SRM Joint Engineering Entrance Examination (SRMJEEE).
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#3B63F6] font-bold mt-1">✓</span> 
                <div>
                  <strong>Counseling:</strong> Phase-wise counseling based on SRMJEEE rank determines campus and branch allocation.
                </div>
              </li>
            </ul>
            
            <div className="mt-8 p-4 bg-white rounded-xl border border-gray-200 shadow-sm flex items-center gap-4">
              <div className="text-2xl">🎯</div>
              <p className="text-sm font-semibold text-gray-800">Targeting Core Computer Science at the Main Campus? Competition is fierce. Let us help you plan a winning strategy.</p>
            </div>
          </div>

        </div>
      </section>

      {/* 4. BOTTOM CTA */}
      <section className="py-24 text-center max-w-4xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-black mb-6">Ready to secure your future?</h2>
        <p className="text-xl text-gray-600 mb-10">
          Connect with our counselors today to evaluate your profile and map out your journey to SRM Institute.
        </p>
        <Link 
          href="/contact" 
          className="inline-flex bg-[#1C1713] text-white font-bold py-4 px-10 rounded-full shadow-lg hover:bg-gray-800 transition items-center gap-2 text-xl"
        >
          Book a Free SRM Counseling Session <span>→</span>
        </Link>
      </section>

    
    </main>
  );
}