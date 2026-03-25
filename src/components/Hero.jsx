import { Link } from 'react-router-dom'
import { translations } from '../data/translations'
import { useLang, t } from '../context/LanguageContext'

const statsData = [
  { number: '500+', key: 'projects' },
  { number: '20+', key: 'years' },
  { number: '50+', key: 'experts' },
  { number: '99%', key: 'satisfaction' },
]

export default function Hero() {
  const { lang } = useLang()
  const h = translations.hero
  const s = translations.stats

  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Video Background */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&h=1080&fit=crop"
        >
          {/* Fallback to poster image */}
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/90 to-primary/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-3xl">
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8">
            <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse" />
            <span className="text-white/90 text-sm">{t(h.badge, lang)}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            {t(h.title1, lang)}{' '}
            <span className="text-accent">{t(h.titleHighlight, lang)}</span>{' '}
            {t(h.title2, lang)}
          </h1>

          <p className="text-lg sm:text-xl text-white/80 mb-10 max-w-2xl">
            {t(h.subtitle, lang)}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/services"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-all hover:shadow-lg"
            >
              {t(h.ctaServices, lang)}
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg border border-white/30 hover:bg-white/20 transition-all"
            >
              {t(h.ctaContact, lang)}
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {statsData.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-white mb-1">{stat.number}</div>
              <div className="text-white/60 text-sm">{t(s[stat.key], lang)}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}
