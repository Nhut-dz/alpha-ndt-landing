import { useState, useEffect } from 'react'
import { navLinks } from '../data/siteData'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">α</span>
            </div>
            <div>
              <span className={`font-bold text-xl tracking-tight ${isScrolled ? 'text-primary' : 'text-white'}`}>
                Alpha NDT
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-secondary ${
                  isScrolled ? 'text-gray-700' : 'text-white/90 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <a
            href="#contact"
            className="hidden lg:inline-flex items-center px-6 py-2.5 bg-secondary text-white text-sm font-semibold rounded-lg hover:bg-blue-600 transition-colors"
          >
            Liên hệ ngay
          </a>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="space-y-1.5">
              <span className={`block w-6 h-0.5 transition-all ${isScrolled ? 'bg-gray-800' : 'bg-white'} ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block w-6 h-0.5 transition-all ${isScrolled ? 'bg-gray-800' : 'bg-white'} ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-6 h-0.5 transition-all ${isScrolled ? 'bg-gray-800' : 'bg-white'} ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden bg-white shadow-lg transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-screen' : 'max-h-0'
        }`}
      >
        <nav className="px-4 py-4 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-secondary rounded-lg transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="block mx-4 mt-4 px-6 py-3 bg-secondary text-white text-center font-semibold rounded-lg"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Liên hệ ngay
          </a>
        </nav>
      </div>
    </header>
  )
}
