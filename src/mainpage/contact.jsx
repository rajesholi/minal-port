import React, { useState } from 'react';

function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    service: '',
    email: '',
    subscribe: false,
    projectDescription: ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    // Add your email handling logic or backend API request here
  };

  return (
    <div className="bg-black text-white min-h-screen font-sans antialiased px-6 py-16 md:py-24 selection:bg-zinc-800">
      <div className="max-w-5xl mx-auto">
        
        {/* ================= MASSIVE HERO HEADER ================= */}
        <div className="mb-16 md:mb-20">
          <h1 className="text-[14vw] sm:text-[12vw] md:text-[11vw] font-bold tracking-tighter leading-none text-white lowercase">
            Contact me<span className="text-zinc-600">.</span>
          </h1>
        </div>

        {/* ================= SPLIT CONTENT LAYOUT ================= */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pt-8 border-t border-zinc-900">
          
          {/* Left Side: Metadata Info */}
          <div className="md:col-span-4 space-y-8 text-xs md:text-sm tracking-wide text-zinc-400">
            <div>
              <p className="text-white font-medium">Kathmandu, Nepal</p>
              <p className="text-zinc-600 mt-0.5">2026</p>
            </div>

            <div className="space-y-1">
              <p className="text-zinc-500 font-semibold uppercase tracking-wider text-[10px]">Office hours</p>
              <p className="text-white font-medium">Monday – Friday</p>
              <p className="text-zinc-400">11 AM – 5 PM</p>
            </div>
          </div>

          {/* Right Side: Interactive Input Form */}
          <form onSubmit={handleSubmit} className="md:col-span-8 space-y-10">
            
            {/* Row 1: Name Splitting Inputs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="relative group">
                <label className="block text-xs font-medium text-zinc-500 uppercase tracking-wider mb-2">
                  First Name <span className="text-zinc-600">(required)</span>
                </label>
                <input 
                  type="text" 
                  name="firstName"
                  required
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-zinc-800 py-2 text-white focus:outline-none focus:border-zinc-400 transition-colors duration-200" 
                />
              </div>
              <div className="relative group">
                <label className="block text-xs font-medium text-zinc-500 uppercase tracking-wider mb-2">
                  Last Name
                </label>
                <input 
                  type="text" 
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-zinc-800 py-2 text-white focus:outline-none focus:border-zinc-400 transition-colors duration-200" 
                />
              </div>
            </div>

            {/* Row 2: Service Selection Dropdown */}
            <div className="relative">
              <label className="block text-xs font-medium text-zinc-500 uppercase tracking-wider mb-2">
                Service
              </label>
              <select 
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full bg-zinc-950 border-b border-zinc-800 py-3 text-zinc-300 focus:outline-none focus:border-zinc-400 transition-colors duration-200 appearance-none cursor-pointer"
              >
                <option value="" disabled>Select a creative service...</option>
                <option value="brand-identity">Brand Identity & Logo Design</option>
                <option value="social-media">Social Media Asset Creation</option>
                <option value="frontend-dev">Front-End UI Development</option>
                <option value="full-campaign">Full Creative Campaign</option>
              </select>
              {/* Custom Dropdown Chevron Icon Indicator */}
              <div className="absolute right-2 bottom-3 pointer-events-none text-zinc-600 text-xs">▼</div>
            </div>

            {/* Row 3: Email Input */}
            <div className="relative">
              <label className="block text-xs font-medium text-zinc-500 uppercase tracking-wider mb-2">
                Email Address <span className="text-zinc-600">(required)</span>
              </label>
              <input 
                type="email" 
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-zinc-800 py-2 text-white focus:outline-none focus:border-zinc-400 transition-colors duration-200" 
              />
            </div>

            {/* Row 4: Custom Circular Newsletter Checkbox */}
            <div className="flex items-center space-x-3 group cursor-pointer select-none">
              <input 
                type="checkbox" 
                id="subscribe"
                name="subscribe"
                checked={formData.subscribe}
                onChange={handleChange}
                className="w-4 h-4 rounded-full appearance-none bg-transparent border border-zinc-700 checked:bg-white checked:border-white focus:outline-none transition-all duration-200 cursor-pointer"
              />
              <label htmlFor="subscribe" className="text-xs text-zinc-400 group-hover:text-zinc-300 transition-colors cursor-pointer">
                Sign up for project updates and design logs
              </label>
            </div>

            {/* Row 5: Large Text Area Input */}
            <div className="relative">
              <label className="block text-xs font-medium text-zinc-500 uppercase tracking-wider mb-2">
                Project Description
              </label>
              <textarea 
                name="projectDescription"
                rows="4"
                value={formData.projectDescription}
                onChange={handleChange}
                placeholder="Tell me about your vision, timelines, or requirements..."
                className="w-full bg-transparent border-b border-zinc-800 py-2 text-white placeholder-zinc-700 focus:outline-none focus:border-zinc-400 transition-colors duration-200 resize-none"
              />
            </div>

            {/* Row 6: Submit Button with Gold Gradient Fill Styling */}
            <div className="pt-4 flex justify-start sm:justify-end">
              <button 
                type="submit" 
                className="w-full sm:w-auto px-8 py-3.5 rounded-full text-black font-bold tracking-wide text-sm bg-gradient-to-r from-[#d38b05] to-[#fff200] hover:opacity-90 shadow-xl shadow-amber-500/5 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
              >
                Submit Request
              </button>
            </div>

          </form>

        </div>

      </div>
    </div>
  );
}

export default ContactSection;