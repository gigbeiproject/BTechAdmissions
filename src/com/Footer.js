import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1C1713] text-gray-300 pt-24 pb-12 mt-20 relative font-sans">
      {/* Floating Green Call to Action over Footer */}
      <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-full max-w-[280px] sm:max-w-xs text-center">
        <Link 
          href="#apply" 
          className="bg-[#D6FF00] text-black font-bold py-5 px-8 rounded-lg shadow-xl hover:bg-[#c4eb00] transition flex items-center justify-center gap-2 text-lg whitespace-nowrap"
        >
          Start Admission Process <span>→</span>
        </Link>
      </div>

      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12 mt-10">
        {/* Brand Col */}
        <div>
          <div className="text-2xl font-extrabold tracking-tight text-white mb-6">
            BTech<span className="text-[#F96D24]">Admissions</span>
          </div>
          <p className="text-sm text-gray-400">
            Your Career Deserves More Than Just Luck. It Deserves The Right College.
          </p>
        </div>
        
        {/* Quick Links */}
        <div>
          <h4 className="text-white font-bold mb-6">Quick Links</h4>
          <ul className="space-y-3 text-sm">
            <li><Link href="/" className="hover:text-[#F96D24] transition">Home</Link></li>
            <li><Link href="#about" className="hover:text-[#F96D24] transition">About Us</Link></li>
            <li><Link href="#colleges" className="hover:text-[#F96D24] transition">Top Colleges</Link></li>
          </ul>
        </div>

        {/* Services / Colleges */}
        <div>
          <h4 className="text-white font-bold mb-6">Colleges</h4>
          <ul className="space-y-3 text-sm">
            <li><Link href="#vit" className="hover:text-[#F96D24] transition">VIT Vellore Admissions</Link></li>
            <li><Link href="#srm" className="hover:text-[#F96D24] transition">SRM IST Admissions</Link></li>
            <li><Link href="#form" className="hover:text-[#F96D24] transition">Application Form</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-white font-bold mb-6">Contact Us</h4>
          <ul className="space-y-3 text-sm">
            <li>📍 Raipur, Chhattisgarh, India</li>
            <li>📞 +91 98765 43210</li>
            <li>✉️ help@btechuniversityadmission.com</li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="max-w-7xl mx-auto px-4 mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-4">
        <p>© {currentYear} btechuniversityadmission.com. All rights reserved.</p>
        <div className="space-x-4">
          <Link href="/privacy" className="hover:text-white transition">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-white transition">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}