import { services } from '../data/siteData'
import { translations } from '../data/translations'
import { useLang, t } from '../context/LanguageContext'

export default function Services() {
  const { lang } = useLang()
  const s = translations.services

  return (
    <section id="services" className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
            {t(s.tag, lang)}
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {t(s.title, lang)}
          </h2>
          <p className="text-gray-600">
            {t(s.subtitle, lang)}
          </p>
        </div>

        {/* Service Cards with Images */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary/20 hover:-translate-y-1"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <span className="absolute bottom-3 left-3 px-3 py-1 bg-primary text-white text-xs font-bold rounded-full uppercase">
                  {service.icon}
                </span>
              </div>
              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
