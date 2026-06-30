import React from 'react';

function AboutTitle() {
  return (
    <div className="bg-black text-white min-h-screen font-sans antialiased selection:bg-zinc-800 px-6 py-16 md:py-24">
      <div className="max-w-5xl mx-auto">
        
        {/* ================= LARGE HERO DISPLAY HEADER ================= */}
        <div className="flex flex-col mb-16 md:mb-24">
          {/* "about" row */}
          <h1 className="text-[18vw] sm:text-[14vw] md:text-[13vw] font-serif font-normal leading-[0.8] tracking-tighter text-[#eaeaea]">
            about
          </h1>
          
          {/* "me." + Image Split Row */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mt-2">
            <h1 className="text-[24vw] sm:text-[18vw] md:text-[17vw] font-serif font-normal leading-[0.75] tracking-tighter text-[#eaeaea]">
              me<span className="text-zinc-500">.</span>
            </h1>
            
            {/* Embedded Eye Graphic Container */}
            <div className="w-full sm:w-[45%] md:w-[40%] aspect-[1.8/1] overflow-hidden rounded-3xl border border-zinc-800/80 shadow-2xl">
              <img 
                className="h-full w-full object-cover grayscale brightness-95 contrast-105" 
                src="/src/assets/myeye.jpg" 
                alt="Visual Perspective Focus" 
              />
            </div>
          </div>
        </div>

        {/* ================= LAYOUT SPLIT GRID ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-8 border-t border-zinc-900">
          
          {/* Left Column: Intro & Bio Details */}
          <div className="lg:col-span-7 space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
              nice to meet you!
            </h2>
            
            <div className="space-y-6 text-sm md:text-base text-zinc-400 font-normal leading-relaxed max-w-[580px]">
              <p>
                Hey, I'm <span className="text-white font-medium">Minal</span>. I'm a Head Graphic Designer and Front-End Developer passionate about turning complex ideas into raw, meaningful, and premium digital experiences.
              </p>
              <p>
                My creative direction spans comprehensive brand identity architectural frameworks, event posters, banners, and sleek digital assets down to lightning-fast interfaces.
              </p>
              <p>
                What excites me most is resolving architectural identity problems through deliberate design—taking highly abstract visions and organizing them into clean, structural, and visually arresting layouts.
              </p>
            </div>
          </div>

          {/* Right Column: Signature & Quick Inquiries */}
          <div className="lg:col-span-5 flex flex-col justify-between items-start lg:items-end lg:text-right gap-12 lg:pt-2">
            
            {/* Stylized Logo/Signature Substitute */}
            <div className="pt-2">
              <span className="font-serif italic text-4xl md:text-5xl tracking-wide text-zinc-200 block selection:bg-transparent select-none">
                Minal
              </span>
            </div>

            {/* Compact Direct Meta Info */}
            <div className="space-y-1.5 mt-auto">
              <p className="text-xs tracking-wider uppercase text-zinc-500 font-semibold">
                DM for projects & inquiries
              </p>
              <a 
                href="mailto:shootfx.team@gmail.com" 
                className="text-sm md:text-base font-medium text-white hover:text-zinc-300 transition-colors duration-200 block underline underline-offset-4 decoration-zinc-800 hover:decoration-zinc-500"
              >
                minalpaudel137@gmail.com
              </a>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

export default AboutTitle;