

const ExperienceTimeline = () => {
  const experiences = [
    {
      role: "Head Graphic Designer",
      company: "Aarawan",
      period: "2026 - Present",
      bullets: [
        "Lead creative direction for social media and brand identity, producing custom logos, event posters, and banners.",
        "Spearhead visual branding to ensure a cohesive and consistent aesthetic across all client deliverables.",
        "Manage end-to-end workflows independently during evening hours, ensuring precise and timely project delivery."
      ]
    },
    {
      role: "Freelance Graphic Designer",
      company: "Remote",
      period: "2024 - 2026",
      bullets: [
        "Created diverse digital assets, including social media posts, promotional visuals, and custom brand illustrations.",
        "Translated client briefs into eye-catching designs while consistently meeting strict project deadlines.",
        "Maintained independent workflows, balancing multi-client communication with high-quality execution."
      ]
    },
    {
      role: "Graphic Designer",
      company: "Aroma Hospitality",
      period: "2022 - 2024",
      bullets: [
        "Captured and edited professional photos of food and interiors for targeted advertisements and print flyers.",
        "Designed marketing materials, including high-conversion promotional posters, digital ads, and menus.",
        "Partnered with the marketing team to execute cohesive, visually compelling campaigns."
      ]
    }
  ];

  return (
    <div className="bg-black text-zinc-100 min-h-screen py-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-3xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-xs font-semibold tracking-widest text-zinc-500 uppercase">History</h2>
          <h3 className="text-3xl font-bold tracking-tight text-white mt-1">Work Experience</h3>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l border-zinc-800 ml-4 md:ml-6 space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 group">
              
              {/* Timeline Node Dot */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-black border-2 border-zinc-700 group-hover:border-white transition-colors duration-300" />

              {/* Card Container */}
              <div className="bg-zinc-950 border border-zinc-900 rounded-xl p-6 transition-all duration-300 hover:border-zinc-800 hover:bg-gradient-to-br hover:from-zinc-950 hover:to-zinc-900/50 shadow-xl">
                
                {/* Header Info */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                  <div>
                    <h4 className="text-lg font-bold text-white tracking-wide">{exp.role}</h4>
                    <p className="text-sm font-medium text-zinc-400">{exp.company}</p>
                  </div>
                  <span className="inline-flex items-center self-start sm:self-center px-3 py-1 rounded-full text-xs font-medium bg-zinc-900 text-zinc-400 border border-zinc-800">
                    {exp.period}
                  </span>
                </div>

                {/* Bullet Points */}
                <ul className="space-y-3">
                  {exp.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start text-sm text-zinc-400 leading-relaxed">
                      <span className="text-zinc-600 mr-2 mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-zinc-500" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default ExperienceTimeline;