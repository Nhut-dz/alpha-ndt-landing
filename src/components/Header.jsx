import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { companyInfo } from '../data/siteData'
import { translations } from '../data/translations'
import { useLang, t } from '../context/LanguageContext'

const navItems = [
  { path: '/', key: 'home' },
  { path: '/about', key: 'about' },
  { path: '/services', key: 'services' },
  { path: '/portfolio', key: 'portfolio' },
  { path: '/blog', key: 'blog' },
  { path: '/careers', key: 'careers' },
  { path: '/contact', key: 'contact' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()
  const { lang, toggle } = useLang()

  const isHome = location.pathname === '/'

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const showSolid = isScrolled || !isHome

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        showSolid ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src={companyInfo.logo}
              alt="Alpha NDT Logo"
              className={`h-12 w-auto transition-all ${!showSolid ? 'brightness-0 invert' : ''}`}
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors ${
                    isActive
                      ? showSolid ? 'text-primary' : 'text-white'
                      : showSolid ? 'text-gray-700 hover:text-primary' : 'text-white/80 hover:text-white'
                  }`
                }
              >
                {t(translations.nav[item.key], lang)}
              </NavLink>
            ))}
          </nav>

          {/* Right side: lang toggle + CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={toggle}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border transition-colors ${
                showSolid
                  ? 'border-gray-300 text-gray-600 hover:border-primary hover:text-primary'
                  : 'border-white/30 text-white/80 hover:border-white hover:text-white'
              }`}
            >
              {lang === 'vi' ? '🇻🇳 VI' : '🇬🇧 EN'}
            </button>
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-2.5 bg-primary text-white text-sm font-semibold rounded-lg hover:bg-primary-dark transition-colors"
            >
              {t(translations.nav.cta, lang)}
            </Link>
          </div>

          {/* Mobile: lang + hamburger */}
          <div className="lg:hidden flex items-center gap-3">
            <button
              onClick={toggle}
              className={`px-2 py-1 rounded text-xs font-semibold ${showSolid ? 'text-gray-600' : 'text-white'}`}
            >
              {lang === 'vi' ? 'EN' : 'VI'}
            </button>
            <button
              className="p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <div className="space-y-1.5">
                <span className={`block w-6 h-0.5 transition-all ${showSolid ? 'bg-gray-800' : 'bg-white'} ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                <span className={`block w-6 h-0.5 transition-all ${showSolid ? 'bg-gray-800' : 'bg-white'} ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
                <span className={`block w-6 h-0.5 transition-all ${showSolid ? 'bg-gray-800' : 'bg-white'} ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden bg-white shadow-lg transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-screen' : 'max-h-0'
        }`}
      >
        <nav className="px-4 py-4 space-y-2">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `block px-4 py-3 rounded-lg transition-colors ${
                  isActive ? 'bg-primary/10 text-primary font-medium' : 'text-gray-700 hover:bg-gray-50'
                }`
              }
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t(translations.nav[item.key], lang)}
            </NavLink>
          ))}
          <Link
            to="/contact"
            className="block mx-4 mt-4 px-6 py-3 bg-primary text-white text-center font-semibold rounded-lg"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {t(translations.nav.cta, lang)}
          </Link>
        </nav>
      </div>
    </header>
  )
}
