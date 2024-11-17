import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed w-full z-10 bg-gray-900 bg-opacity-90 backdrop-filter backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">DataViz Pro</h1>
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2">
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
          <ul className={`md:flex space-x-6 ${isMenuOpen ? 'block' : 'hidden'} md:block`}>
            <li><a href="#hero" className="hover:text-blue-400 transition-colors">Home</a></li>
            <li><a href="#about" className="hover:text-blue-400 transition-colors">About</a></li>
            <li><a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a></li>
            <li><a href="#skills" className="hover:text-blue-400 transition-colors">Skills</a></li>
            <li><a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
