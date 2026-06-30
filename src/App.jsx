import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar'
import HomePage from './mainpage/homepage'
import Footer from './components/footer'
import About from './mainpage/about'
import ContactSection from './mainpage/contact'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactSection/>} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
