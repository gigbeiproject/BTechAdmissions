import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative pt-20 pb-32 max-w-7xl mx-auto px-4 text-center">
      {/* Floating Pills */}
      <div className="absolute top-10 left-10 bg-white/60 backdrop-blur-md border border-gray-200 p-4 rounded-2xl shadow-sm hidden lg:block text-[#2D241E]">
        <div className="text-2xl mb-1">🚀</div>
        <div className="font-bold text-lg">2026</div>
        <div className="text-xs text-gray-500">Admissions Open</div>
      </div>
      
      <div className="absolute top-32 right-10 bg-white/60 backdrop-blur-md border border-gray-200 p-4 rounded-2xl shadow-sm hidden lg:block text-[#2D241E]">
        <div className="text-2xl mb-1">🎓</div>
        <div className="font-bold text-lg">100%</div>
        <div className="text-xs text-gray-500">Guidance</div>
      </div>

      {/* Small Top Badge */}
      <div className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-2 text-sm font-semibold mb-8 shadow-sm text-[#2D241E]">
        <span className="w-2 h-2 rounded-full bg-[#D6FF00]"></span>
        Direct Admissions for Top Universities
      </div>

      {/* Giant Headline */}
      <h1 className="text-6xl md:text-8xl font-black tracking-tight leading-[1.1] mb-6 text-[#2D241E]">
        Your Career Deserves <br />
        <span className="text-[#3B63F6]">Top Colleges</span>
      </h1>
      
      <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10 font-medium">
        We combine expert counseling with streamlined application processes to help you secure your seat in prestigious institutions like VIT and SRM.
      </p>

      {/* Buttons */}
      <div className="flex justify-center items-center gap-4">
        <Link 
          href="#apply" 
          className="bg-[#D6FF00] text-black font-bold py-4 px-8 rounded-full shadow-lg hover:bg-[#c4eb00] transition flex items-center gap-2 text-lg"
        >
          Start Your Application <span>→</span>
        </Link>
        <Link 
          href="#consult" 
          className="bg-white border border-gray-300 text-black font-bold py-4 px-8 rounded-full shadow-sm hover:bg-gray-50 transition flex items-center gap-2 text-lg"
        >
          Book a Strategy Call <span>→</span>
        </Link>
      </div>
    </section>
  );
}