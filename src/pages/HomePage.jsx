import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import Partners from '../components/Partners'
import WhyChooseUs from '../components/WhyChooseUs'
import Blog from '../components/Blog'
import { useLang } from '../context/LanguageContext'
import { projects, blogPosts } from '../data/siteData'

// Featured projects on home
function FeaturedProjects() {
  const { lang } = useLang()
  const featured = projects.slice(0, 3)
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
            {lang === 'vi' ? 'Dự án tiêu biểu' : 'Featured Projects'}
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {lang === 'vi' ? 'Dự án nổi bật' : 'Highlighted Projects'}
          </h2>
          <p className="text-gray-600">
            {lang === 'vi'
              ? 'Một số dự án tiêu biểu mà Alpha NDT đã thực hiện cho các tập đoàn hàng đầu.'
              : 'Some notable projects that Alpha NDT has completed for leading corporations.'}
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {featured.map((project) => (
            <div key={project.id} className="group rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 bg-white border border-gray-100">
              <div className="relative overflow-hidden h-56">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
                <span className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-primary">{project.category}</span>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-gray-600 text-sm">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link to="/portfolio" className="inline-flex items-center px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors">
            {lang === 'vi' ? 'Xem tất cả dự án' : 'View All Projects'}
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}

// CTA Banner
function CTABanner() {
  const { lang } = useLang()
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-gradient-to-r from-primary to-primary-light rounded-3xl overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '30px 30px' }} />
          </div>
          <div className="relative px-8 py-16 md:px-16 md:py-20 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                {lang === 'vi' ? 'Bạn cần tư vấn dịch vụ NDT?' : 'Need NDT consultation?'}
              </h2>
              <p className="text-white/80 max-w-xl text-lg">
                {lang === 'vi'
                  ? 'Liên hệ ngay để được đội ngũ chuyên gia Alpha NDT tư vấn giải pháp kiểm tra phù hợp nhất cho dự án của bạn.'
                  : 'Contact us now for expert consultation on the most suitable inspection solutions for your project.'}
              </p>
            </div>
            <Link to="/contact" className="inline-flex items-center px-8 py-4 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors shrink-0">
              {lang === 'vi' ? 'Liên hệ tư vấn miễn phí' : 'Free Consultation'}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

// Certifications strip
function Certifications() {
  const { lang } = useLang()
  const certs = ['ISO 9001', 'ISO/IEC 17025', 'ASNT', 'PCN', 'CSWIP', 'ISO 9712']
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h3 className="text-lg font-semibold text-gray-500 mb-8 uppercase tracking-wider">
          {lang === 'vi' ? 'Chứng nhận & Tiêu chuẩn' : 'Certifications & Standards'}
        </h3>
        <div className="flex flex-wrap justify-center gap-6">
          {certs.map((cert) => (
            <div key={cert} className="px-6 py-3 bg-gray-50 rounded-xl border border-gray-100 font-semibold text-primary text-sm">
              {cert}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Certifications />
      <FeaturedProjects />
      <Partners />
      <WhyChooseUs />
      <CTABanner />
      <Blog />
    </>
  )
}
