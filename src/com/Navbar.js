import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="w-full bg-[#FEFCF4] sticky top-0 z-50">
      <div className="flex justify-between items-center py-6 px-8 max-w-7xl mx-auto">
        {/* Logo */}
        <div className="text-2xl font-extrabold tracking-tight text-[#2D241E]">
          BTech<span className="text-[#F96D24]">Admissions</span>
        </div>
        
        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8 font-semibold text-gray-800">
          <Link href="/" className="text-[#3B63F6] border-b-2 border-[#3B63F6] pb-1">
            Home
          </Link>
          <Link href="/vit" className="hover:text-[#F96D24] transition">
            VIT Admissions
          </Link>
          <Link href="/srm" className="hover:text-[#F96D24] transition">
            SRM Admissions
          </Link>
          <Link href="/contact" className="hover:text-[#F96D24] transition">
            Contact
          </Link>
          <Link href="/about" className="hover:text-[#F96D24] transition">
            About Us
          </Link>
        </div>

        {/* CTA Button */}
        <Link 
          href="#apply" 
          className="bg-[#D6FF00] text-black font-bold py-3 px-6 rounded-md shadow-[0_4px_14px_0_rgba(214,255,0,0.39)] hover:bg-[#c4eb00] transition flex items-center gap-2"
        >
          Let's talk <span className="text-xl">→</span>
        </Link>
      </div>
    </nav>
  );
}