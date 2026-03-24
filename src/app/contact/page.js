
export const metadata = {
  title: 'Contact Us | B.Tech Admissions',
  description: 'Get in touch to start your B.Tech admission process for VIT, SRM, and other top engineering universities.',
};

export default function Contact() {
  return (
    <main className="min-h-screen bg-[#FEFCF4] text-[#2D241E] font-sans selection:bg-[#D6FF00] selection:text-black">
     

      {/* 1. CONTACT HERO SECTION */}
      <section className="pt-24 pb-12 max-w-7xl mx-auto px-4 text-center">
        <div className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-2 text-sm font-semibold mb-8 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-[#3B63F6]"></span>
          Let's Build Your Future
        </div>
        
        <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-[1.1] mb-6">
          Start Your Admission <br />
          <span className="text-[#3B63F6]">Process Today</span>
        </h1>
        
        <p className="text-lg text-gray-600 max-w-2xl mx-auto font-medium">
          Fill out the form below to schedule a free counseling session. Our experts will guide you through the admission process for top colleges.
        </p>
      </section>

      {/* 2. CONTACT LAYOUT (Split Form & Info) */}
      <section className="py-12 pb-24 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          
          {/* Left Side: Contact Information Card (Dark Theme) */}
          <div className="lg:col-span-2 bg-[#1C1713] rounded-3xl p-10 text-white shadow-2xl relative overflow-hidden h-full flex flex-col justify-between">
            {/* Decorative Glow */}
            <div className="absolute top-[-50px] right-[-50px] w-40 h-40 bg-[#3B63F6] rounded-full opacity-20 blur-3xl"></div>
            
            <div className="relative z-10">
              <h2 className="text-3xl font-extrabold mb-8">Get in Touch</h2>
              
              <div className="space-y-8">
                <div>
                  <h4 className="text-sm text-gray-400 uppercase tracking-wider font-bold mb-2">Call Us Directly</h4>
                  <p className="text-xl font-semibold flex items-center gap-3">
                    <span className="bg-white/10 p-2 rounded-lg">📞</span> +91 98765 43210
                  </p>
                </div>
                
                <div>
                  <h4 className="text-sm text-gray-400 uppercase tracking-wider font-bold mb-2">Email Us</h4>
                  <p className="text-lg font-semibold flex items-center gap-3">
                    <span className="bg-white/10 p-2 rounded-lg">✉️</span> help@btechuniversityadmission.com
                  </p>
                </div>

                <div>
                  <h4 className="text-sm text-gray-400 uppercase tracking-wider font-bold mb-2">Our Office</h4>
                  <p className="text-lg font-semibold flex items-start gap-3 leading-relaxed">
                    <span className="bg-white/10 p-2 rounded-lg">📍</span> 
                    Raipur, Chhattisgarh,<br />India
                  </p>
                </div>
              </div>
            </div>

            <div className="relative z-10 mt-12">
              <p className="text-sm text-gray-400 mb-4">Need instant replies?</p>
              <a 
                href="https://wa.me/919876543210" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex w-full bg-[#25D366] text-white font-bold py-4 px-6 rounded-xl hover:bg-[#20bd5a] transition items-center justify-center gap-2 text-lg shadow-lg"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Right Side: Lead Capture Form */}
          <div className="lg:col-span-3 bg-white rounded-3xl p-10 shadow-xl border border-gray-100">
            <h3 className="text-3xl font-bold mb-8 text-[#2D241E]">Application Form</h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Full Name */}
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-bold text-gray-700">Full Name *</label>
                  <input 
                    type="text" 
                    id="name" 
                    placeholder="John Doe"
                    className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#3B63F6] focus:border-transparent transition"
                    required
                  />
                </div>

                {/* Phone Number */}
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-bold text-gray-700">Phone Number *</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    placeholder="+91 98765 00000"
                    className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#3B63F6] focus:border-transparent transition"
                    required
                  />
                </div>
              </div>

              {/* Email Address */}
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-bold text-gray-700">Email Address *</label>
                <input 
                  type="email" 
                  id="email" 
                  placeholder="john@example.com"
                  className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#3B63F6] focus:border-transparent transition"
                  required
                />
              </div>

              {/* Target College Selection */}
              <div className="space-y-2">
                <label htmlFor="college" className="text-sm font-bold text-gray-700">Target College *</label>
                <select 
                  id="college"
                  className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#3B63F6] focus:border-transparent transition text-gray-700 appearance-none"
                  required
                >
                  <option value="" disabled selected>Select an institution...</option>
                  <option value="vit">VIT Vellore / Chennai</option>
                  <option value="srm">SRM Institute (Kattankulathur / Ramapuram)</option>
                  <option value="both">Interested in Both (VIT & SRM)</option>
                  <option value="other">Other Top Engineering Colleges</option>
                </select>
              </div>

              {/* Message / Query */}
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-bold text-gray-700">Your Query / Message</label>
                <textarea 
                  id="message" 
                  rows="4" 
                  placeholder="Tell us about your academic background or specific queries..."
                  className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#3B63F6] focus:border-transparent transition resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button 
                type="button" 
                className="w-full bg-[#D6FF00] text-black font-bold py-5 px-8 rounded-xl shadow-lg hover:bg-[#c4eb00] transition flex items-center justify-center gap-2 text-xl mt-4"
              >
                Submit Application <span>→</span>
              </button>
            </form>
          </div>
          
        </div>
      </section>

      
    </main>
  );
}