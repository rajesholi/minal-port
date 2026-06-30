function Footer() {
  return (
    <footer className="bg-[#24262b] px-4 pb-8 pt-16 text-white md:px-8">
      <div className="mx-auto flex flex-col items-center justify-center gap-8 md:flex-row md:items-start md:justify-between">
        <div className="text-center md:text-left">
          <h2 className="font-['Franklin_Gothic_Medium'] text-2xl font-black uppercase tracking-[0.2em]">
            Minal
          </h2>
          <ul className="mt-4 flex flex-wrap justify-center gap-4 md:justify-start">
            <li><a className="text-sm text-slate-300 transition hover:text-white" href="#">home</a></li>
            <li><a className="text-sm text-slate-300 transition hover:text-white" href="#">About Us</a></li>
            <li><a className="text-sm text-slate-300 transition hover:text-white" href="#">contact</a></li>
          </ul>
        </div>

        <div className="text-center md:text-left">
          <h4 className="mb-4 text-lg font-semibold uppercase tracking-[0.2em]">follow me</h4>
          <div className="flex items-center justify-center gap-3 md:justify-start">
            <a className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white hover:text-[#24262b]" href="https://www.facebook.com/minal.paudel.3" aria-label="Facebook"><i className="fab fa-facebook-f" /></a>
            <a className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white hover:text-[#24262b]" href="https://www.instagram.com/theunknown_137/" aria-label="Instagram"><i className="fab fa-instagram" /></a>
            <a className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white hover:text-[#24262b]" href="http://www.linkedin.com/in/minal-poudel-happy137" aria-label="LinkedIn"><i className="fab fa-linkedin-in" /></a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
