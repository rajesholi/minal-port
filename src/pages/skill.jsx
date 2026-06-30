import { useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { localSkills } from './fav'

function Skill() {
  const [isVisible, setIsVisible] = useState(false)
  const [skills] = useState(localSkills)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div className="px-4 py-10 md:px-8">
      <h1 className="mb-6 text-center text-3xl font-bold text-white md:text-4xl">Tools & Skills</h1>
      <div className="mx-auto grid max-w-4xl gap-8" ref={sectionRef}>
        <div className="text-center leading-8 text-slate-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab veniam
          voluptatibus enim unde, tenetur, sapiente blanditiis eligendi illum
          similique eaque, veritatis consequuntur debitis ut aperiam fuga alias
          numquam obcaecati perferendis?
        </div>
        <div className="grid gap-5">
          {skills.map((skill, index) => (
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 shadow-lg" key={skill.id || skill.name}>
              <div className="mb-3 flex items-center gap-3 font-semibold text-white">
                
                {/* Gold Gradient Icon Badge wrapper to avoid browser SVG clipping issues */}
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-[#d38b05] to-[#fff200] shadow-md shadow-amber-500/10">
                  <FontAwesomeIcon icon={skill.icon} className="text-xs text-black" />
                </div>

                <span>{skill.name}</span>
              </div>
              <div className="mb-2 h-2.5 overflow-hidden rounded-full bg-white/10">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-[#d38b05] to-[#fff200] transition-all duration-700"
                  style={{
                    width: isVisible ? `${skill.progress}%` : '0%',
                    transitionDelay: `${index * 0.2}s`,
                  }}
                />
              </div>
              <div className="text-sm text-slate-400">{skill.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skill