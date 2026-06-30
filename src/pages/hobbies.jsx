import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCamera, 
  faLightbulb, 
  faLayerGroup, 
  faSliders, 
  faFont 
} from '@fortawesome/free-solid-svg-icons';

const HobbiesSection = () => {
  const hobbies = [
    {
      name: "Photography & Framing",
      description: "Capturing visual stories, lighting balances, and geometry.",
      icon: faCamera
    },
    {
      name: "Brand Strategy",
      description: "Deconstructing corporate identities and mapping market placement.",
      icon: faLightbulb
    },
    {
      name: "UI/UX Experimentation",
      description: "Designing seamless, highly intuitive digital product layouts.",
      icon: faLayerGroup
    },
    {
      name: "System Performance",
      description: "Optimizing memory setups, hardware configurations, and clear rigs.",
      icon: faSliders
    },
    {
      name: "Typography & Fonts",
      description: "Exploring unique font pairings, geometric weights, and editorial design.",
      icon: faFont
    }
  ];

  return (
    <div className="bg-black text-zinc-100 py-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-3xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-xs font-semibold tracking-widest text-zinc-500 uppercase">Beyond the Code</h2>
          <h3 className="text-3xl font-bold tracking-tight mt-1 bg-gradient-to-r from-[#d38b05] to-[#fff200] bg-clip-text text-transparent">
            Hobbies & Interests
          </h3>
        </div>

        {/* Hobbies Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {hobbies.map((hobby, index) => (
            <div 
              key={index} 
              className="bg-zinc-950 border border-zinc-900 rounded-xl p-5 flex items-start gap-4 transition-all duration-300 hover:border-zinc-800/80 group"
            >
              {/* BUG FIX: The icon container now holds the gold-to-yellow gradient directly. 
                The icon itself is set to pure absolute black, cutting out clearly over the top.
              */}
              <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-gradient-to-br from-[#d38b05] to-[#fff200] flex-shrink-0 shadow-lg shadow-amber-500/10 group-hover:scale-105 transition-all duration-300">
                <FontAwesomeIcon icon={hobby.icon} className="text-black text-base" />
              </div>
              
              {/* Context */}
              <div>
                <h4 className="text-sm font-semibold text-white tracking-wide mb-1 group-hover:text-zinc-200 transition-colors">
                  {hobby.name}
                </h4>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {hobby.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default HobbiesSection;