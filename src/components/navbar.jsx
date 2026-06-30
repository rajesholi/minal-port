import { useEffect, useState } from 'react'

function Navbar() {
  const [open, setOpen] = useState(false)

  const getInitialActive = () => {
    const path = window.location.pathname.toLowerCase()
    if (path.startsWith('/about')) return 'about'
    if (path.startsWith('/contact')) return 'contact'
    return 'home'
  }

  const [active, setActive] = useState(getInitialActive)

  useEffect(() => {
    document.documentElement.classList.toggle('overflow-hidden', open)
    return () => document.documentElement.classList.remove('overflow-hidden')
  }, [open])

  const linkClasses = (value) =>
    `flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 md:px-6 md:text-base ${
      active === value
        ? 'bg-yellow-300 text-black shadow-[inset_0_0_15px_5px_#d38b05]'
        : 'text-white hover:bg-yellow-300 hover:text-black'
    }`

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between bg-black/95 px-4 py-3 shadow-lg md:px-8">
      <div className="pl-0 md:pl-6">
        <a
          href="/"
          className="animate-[slideDown_1s_ease-out] font-['Franklin_Gothic_Medium'] text-xl font-black uppercase tracking-[0.3em] text-white"
        >
          MINAL
        </a>
      </div>

      <ul
        className={`fixed left-0 top-[56px] z-[100] flex w-[150px] flex-col gap-2 rounded-2xl bg-black/80 p-3 shadow-2xl md:static md:w-auto md:flex-row md:items-center md:gap-3 md:rounded-full md:bg-transparent md:p-0 md:shadow-none ${open ? 'flex' : 'hidden'} md:flex`}
      >
        <li>
          <a
            href="/"
            className={linkClasses('home')}
            onClick={() => {
              setActive('home')
              setOpen(false)
            }}
          >
            Home
          </a>
        </li>

        <li>
          <a
            href="/about"
            className={linkClasses('about')}
            onClick={() => {
              setActive('about')
              setOpen(false)
            }}
          >
            About
          </a>
        </li>

        <li>
          <a
            href="/contact"
            className={linkClasses('contact')}
            onClick={() => {
              setActive('contact')
              setOpen(false)
            }}
          >
            Contact
          </a>
        </li>
      </ul>

      <button
        type="button"
        className="relative z-[250] block cursor-pointer md:hidden"
        onClick={() => setOpen(!open)}
        aria-label="Toggle navigation"
      >
        <span className={`mb-1.5 block h-1 w-10 rounded-full bg-white transition-all ${open ? 'translate-y-[10px] rotate-45' : ''}`} />
        <span className={`mb-1.5 block h-1 w-10 rounded-full bg-white transition-all ${open ? 'opacity-0' : 'opacity-100'}`} />
        <span className={`block h-1 w-10 rounded-full bg-white transition-all ${open ? '-translate-y-[10px] -rotate-45' : ''}`} />
      </button>
    </nav>
  )
}

export default Navbar
