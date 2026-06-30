import hero2 from '../assets/hero2.png'
import me2 from '../assets/me2.png'
import me from '../assets/me.png'

export const worksData = [
  {
    id: 1,
    title: 'Creative Web UI',
    category: 'Frontend',
    description: 'A responsive React website built with animation and clean UI.',
    images: [{ image_url: hero2 }],
  },
  {
    id: 2,
    title: 'Portfolio Branding',
    category: 'Poster Design',
    description: 'A brand identity and poster design project with modern visuals.',
    images: [{ image_url: me2 }],
  },
  {
    id: 3,
    title: 'UX UI Case Study',
    category: 'UI/UX',
    description: 'A product design showcase combining art direction and usability.',
    images: [{ image_url: me }],
  },
]

export const skillsData = [
  {
    id: 1,
    name: 'React',
    progress: 92,
    icon: '/src/assets/hero2.png',
    desc: 'Building modern, component-driven web experiences.',
  },
  {
    id: 2,
    name: 'UI/UX',
    progress: 88,
    icon: '/src/assets/me2.png',
    desc: 'Designing interfaces with clear visual hierarchy and interactions.',
  },
  {
    id: 3,
    name: 'Graphic Design',
    progress: 95,
    icon: '/src/assets/myeye.jpg',
    desc: 'Creating polished brand assets and digital artwork.',
  },
]
