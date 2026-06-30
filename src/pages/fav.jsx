import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faPalette, 
  faFont, 
  faFilm, 
  faMusic, 
  faCompass, 
  faGem, 
  faLayerGroup
} from '@fortawesome/free-solid-svg-icons';
import { faReact } from '@fortawesome/free-brands-svg-icons';

const FavoritesCardLoop = () => {
  const favoriteItems = [
    { 
      label: "Favorite Color", 
      value: "Pure Black & Gold", 
      detail: "Deep minimalist backgrounds accented with warm premium metallic tones.",
      icon: faPalette 
    },
    { 
      label: "Go-To Font", 
      value: "Geometric Sans-Serif", 
      detail: "Clean, crisp, high-readability typefaces built for modern layouts.",
      icon: faFont 
    },
    { 
      label: "Cinematic Style", 
      value: "Psychological Thrillers", 
      detail: "Complex narrative structures, high contrast lighting, and tense framing.",
      icon: faFilm 
    },
    { 
      label: "Vibe / Song", 
      value: "Deep Ambient Electronic", 
      detail: "Atmospheric, focus-inducing rhythms perfect for late-night design pipelines.",
      icon: faMusic 
    },
    { 
      label: "Design Vision", 
      value: "Minimalist Dark UI", 
      detail: "Fluid interfaces built with absolute clarity, sharp borders, and rich blacks.",
      icon: faGem 
    },
    { 
      label: "Creative Focus", 
      value: "Brand Architecture", 
      detail: "Transforming abstract visions into scalable, concrete digital product identities.",
      icon: faCompass 
    },
  ];

  // Tripled to ensure an unbroken sequence of wide cards
  const duplicatedItems = [...favoriteItems, ...favoriteItems, ...favoriteItems];

  return (
    <div className="bg-black text-zinc-100 py-20 overflow-hidden font-sans">
      
      {/* Section Header */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <h2 className="text-xs font-semibold tracking-widest text-zinc-500 uppercase">Curated Preferences</h2>
        <h3 className="text-3xl font-bold tracking-tight mt-1 bg-gradient-to-r from-[#d38b05] to-[#fff200] bg-clip-text text-transparent">
          Favorite Things
        </h3>
      </div>

      {/* Infinite Card Carousel Wrapper */}
      <div className="relative w-full flex overflow-x-hidden border-y border-zinc-900 bg-zinc-950/20 py-8 before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-32 before:bg-gradient-to-r before:from-black before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-32 after:bg-gradient-to-l after:from-black after:to-transparent">
        
        {/* Continuous Track */}
        <div className="flex space-x-6 whitespace-nowrap animate-infinite-scroll actions-none will-change-transform">
          {duplicatedItems.map((item, index) => (
            <div 
              key={index} 
              className="inline-block w-80 shrink-0 bg-zinc-950 border border-zinc-900 rounded-2xl p-6 transition-all duration-300 hover:border-zinc-800 shadow-xl"
            >
              {/* Card Top Row */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-bold tracking-wider uppercase text-zinc-500">
                  {item.label}
                </span>
                
                {/* Fixed High-Contrast Icon Node */}
                <div className="w-8 h-8 rounded-xl flex items-center justify-center bg-gradient-to-br from-[#d38b05] to-[#fff200] shadow-md shadow-amber-500/5">
                  <FontAwesomeIcon icon={item.icon} className="text-black text-xs" />
                </div>
              </div>

              {/* Card Information */}
              <h4 className="text-base font-bold text-white tracking-wide mb-1 whitespace-normal">
                {item.value}
              </h4>
              <p className="text-xs text-zinc-400 whitespace-normal leading-relaxed">
                {item.detail}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default FavoritesCardLoop;
export const localSkills = [
  {
    id: 1,
    name: 'React',
    progress: 92,
    icon: faReact,
    desc: 'Building modern, component-driven web experiences.',
  },
  {
    id: 2,
    name: 'UI/UX',
    progress: 88,
    icon: faLayerGroup,
    desc: 'Designing interfaces with clear visual hierarchy and interactions.',
  },
  {
    id: 3,
    name: 'Graphic Design',
    progress: 95,
    icon: faPalette,
    desc: 'Creating polished brand assets and digital artwork.',
  },
  {
    id: 4,
    name: 'Graphic Design',
    progress: 95,
    icon: faPalette,
    desc: 'Creating polished brand assets and digital artwork.',
  },
]
