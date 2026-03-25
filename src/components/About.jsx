import { Link } from 'react-router-dom'
import { translations } from '../data/translations'
import { useLang, t } from '../context/LanguageContext'

export default function About() {
  const { lang } = useLang()
  const a = translations.about

  return (
    <section id="about" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=500&fit=crop"
                alt="Alpha NDT team at work"
                className="w-full h-[400px] lg:h-[500px] object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary text-white p-6 rounded-xl shadow-xl hidden md:block">
              <div className="text-3xl font-bold">20+</div>
              <div className="text-sm text-white/80">{lang === 'vi' ? 'Năm kinh nghiệm' : 'Years Experience'}</div>
            </div>
          </div>

          {/* Text Content */}
          <div>
            <div className="inline-flex items-center px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              {t(a.tag, lang)}
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              {t(a.title1, lang)}{' '}
              <span className="text-primary">{t(a.titleHighlight, lang)}</span>
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              {t(a.description, lang)}
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              {t(a.mission, lang)}
            </p>

            <div className="space-y-4 mb-8">
              {t(a.bullets, lang).map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-0.5 shrink-0">
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>

            <Link
              to="/services"
              className="inline-flex items-center text-primary font-semibold hover:text-primary-dark transition-colors"
            >
              {t(a.learnMore, lang)}
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
