import { useEffect, useRef, useState } from 'react'
import hero2 from '../assets/hero2.png'
import me2 from '../assets/me2.png'
import me from '../assets/me.png'

// const localWorks = [
//   {
//     id: 1,
//     title: 'Creative Web UI',
//     category: 'Frontend',
//     description: 'A responsive React website built with animation and clean UI.',
//     images: [{ image_url: hero2 }],
//   },
//   {
//     id: 2,
//     title: 'Portfolio Branding',
//     category: 'Poster Design',
//     description: 'A brand identity and poster design project with modern visuals.',
//     images: [{ image_url: me2 }],
//   },
//   {
//     id: 3,
//     title: 'UX UI Case Study',
//     category: 'UI/UX',
//     description: 'A product design showcase combining art direction and usability.',
//     images: [{ image_url: me }],
//   },
// ]
const localWorks = [
  {
    id: 1,
    title: 'Creative Web UI',
    category: 'Frontend',
    description: 'A responsive React website built with animation and clean UI.',
    images: [
      {
        image_url: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800'
      }
    ],
  },
  {
    id: 2,
    title: 'Portfolio Branding',
    category: 'Poster Design',
    description: 'A brand identity and poster design project with modern visuals.',
    images: [
      {
        image_url: 'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?w=800'
      }
    ],
  },
  {
    id: 3,
    title: 'UX UI Case Study',
    category: 'UI/UX',
    description: 'A product design showcase combining art direction and usability.',
    images: [
      {
        image_url: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800'
      }
    ],
  },
]

export default function MyWork() {
  const [works] = useState(localWorks)
  const [activeCard, setActiveCard] = useState(null)
  const [popupData, setPopupData] = useState(null)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [category, setCategory] = useState('All')
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(8)
  const wrapperRef = useRef(null)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setItemsPerPage(4)
      } else {
        setItemsPerPage(8)
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    setCurrentPage(1)
  }, [category])

  useEffect(() => {
    document.body.style.overflow = popupData ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [popupData])

  const categories = ['All', ...new Set(works.map((w) => w.category))]
  const filteredWorks = category === 'All' ? works : works.filter((w) => w.category === category)
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentWorks = filteredWorks.slice(indexOfFirstItem, indexOfLastItem)
  const totalPages = Math.ceil(filteredWorks.length / itemsPerPage)

  const nextSlide = () => {
    if (!popupData?.images?.length) return
    setCurrentSlide((prev) => (prev === popupData.images.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    if (!popupData?.images?.length) return
    setCurrentSlide((prev) => (prev === 0 ? popupData.images.length - 1 : prev - 1))
  }

  const getImageSrc = (img) => {
    if (!img) return ''
    return img.image_url || img.image_file || ''
  }

  const hasMultipleImages = popupData?.images?.length > 1

  return (
    <div className="bg-[#111] px-5 py-10 text-white md:px-8" ref={wrapperRef}>
      <h1 className="mb-6 text-center text-3xl font-bold md:text-4xl">My Works</h1>

      <div className="mb-8 flex flex-wrap justify-center gap-3">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`rounded-full border border-white/10 px-4 py-2 text-sm font-medium transition ${category === cat ? 'bg-gradient-to-r from-[#d38b05] to-[#fff200] text-black' : 'bg-[#222] text-white hover:bg-[#333]'}`}
            onClick={() => setCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <ul className="flex flex-wrap justify-center gap-5 p-0">
        {currentWorks.map((work, index) => (
          <li
            key={work.id}
            className={`group relative flex min-h-[420px] w-[300px] cursor-pointer flex-col justify-end overflow-hidden rounded-[20px] bg-cover bg-center transition-transform duration-300 hover:-translate-y-1 ${activeCard === index ? 'ring-2 ring-yellow-300' : ''}`}
            style={{ backgroundImage: `url(${getImageSrc(work.images?.[0])})` }}
            onClick={() => {
              setActiveCard(activeCard === index ? null : index)
              setPopupData(work)
              setCurrentSlide(0)
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent " />
            <div className="relative z-10 p-5">
              <h2 className="mb-2 text-xl font-semibold">{work.title}</h2>
              <p className="text-sm text-slate-300">{work.description}</p>
            </div>
          </li>
        ))}
      </ul>

      {totalPages > 1 && (
        <div className="mt-8 flex justify-center gap-3">
          <button
            className="rounded-lg bg-[#222] px-3 py-2 text-sm text-white disabled:cursor-not-allowed disabled:opacity-40"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((p) => p - 1)}
          >
            Prev
          </button>
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              className={`rounded-lg px-3 py-2 text-sm ${currentPage === i + 1 ? 'bg-white text-black' : 'bg-[#222] text-white'}`}
              onClick={() => setCurrentPage(i + 1)}
            >
              {i + 1}
            </button>
          ))}
          <button
            className="rounded-lg bg-[#222] px-3 py-2 text-sm text-white disabled:cursor-not-allowed disabled:opacity-40"
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((p) => p + 1)}
          >
            Next
          </button>
        </div>
      )}

      {popupData && popupData.images?.length > 0 && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center overflow-y-auto bg-black/90 p-5" onClick={() => setPopupData(null)}>
          <div className="relative flex w-full max-w-[980px] items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <button
              className="absolute right-3 top-3 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-black/70 text-xl text-white"
              onClick={() => setPopupData(null)}
              aria-label="Close project preview"
            >
              ×
            </button>
            {hasMultipleImages && (
              <button className="absolute left-3 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/70 px-3 py-2 text-white" onClick={prevSlide}>
                ❮
              </button>
            )}
            <img
              className="max-h-[80vh] w-full rounded-2xl object-contain shadow-[0_20px_60px_rgba(0,0,0,0.35)]"
              src={getImageSrc(hasMultipleImages ? popupData.images[currentSlide] : popupData.images[0])}
              alt={popupData.title}
            />
            {hasMultipleImages && (
              <button className="absolute right-3 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/70 px-3 py-2 text-white" onClick={nextSlide}>
                ❯
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
