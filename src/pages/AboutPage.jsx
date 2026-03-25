import { translations } from '../data/translations'
import { useLang, t } from '../context/LanguageContext'

const statsData = [
  { number: '500+', vi: 'Dự án hoàn thành', en: 'Projects Completed' },
  { number: '20+', vi: 'Năm kinh nghiệm', en: 'Years Experience' },
  { number: '50+', vi: 'Chuyên gia NDT', en: 'NDT Experts' },
  { number: '99%', vi: 'Khách hàng hài lòng', en: 'Client Satisfaction' },
]

export default function AboutPage() {
  const { lang } = useLang()
  const a = translations.about

  return (
    <>
      {/* Page Banner */}
      <section className="relative pt-32 pb-20 bg-primary">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            {lang === 'vi' ? 'Về Alpha NDT' : 'About Alpha NDT'}
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            {lang === 'vi'
              ? 'Nhà cung cấp dịch vụ NDT hàng đầu tại Việt Nam từ năm 2002'
              : 'Leading NDT service provider in Vietnam since 2002'}
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
                {lang === 'vi' ? 'Câu chuyện của chúng tôi' : 'Our Story'}
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                {lang === 'vi' ? (
                  <>Hơn 20 năm đồng hành cùng <span className="text-primary">ngành công nghiệp Việt Nam</span></>
                ) : (
                  <>Over 20 years serving <span className="text-primary">Vietnam&apos;s industries</span></>
                )}
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>{t(a.description, lang)}</p>
                <p>{t(a.mission, lang)}</p>
                <p>{t(a.certBody, lang)}</p>
                <p>{t(a.recognition, lang)}</p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=500&fit=crop"
                alt="Alpha NDT team"
                className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
                loading="lazy"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary text-white p-6 rounded-xl shadow-xl hidden md:block">
                <div className="text-3xl font-bold">2002</div>
                <div className="text-sm text-white/80">{lang === 'vi' ? 'Năm thành lập' : 'Established'}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {statsData.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-white/60">{stat[lang]}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {lang === 'vi' ? 'Sứ mệnh' : 'Mission'}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {t(a.mission, lang)}
              </p>
            </div>
            <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {lang === 'vi' ? 'Tầm nhìn' : 'Vision'}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {lang === 'vi'
                  ? 'Trở thành đơn vị kiểm định NDT hàng đầu Đông Nam Á, tiên phong ứng dụng công nghệ tiên tiến và không ngừng nâng cao chất lượng dịch vụ.'
                  : 'To become the leading NDT inspection company in Southeast Asia, pioneering the application of advanced technologies and continuously improving service quality.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {lang === 'vi' ? 'Giá trị cốt lõi' : 'Core Values'}
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: lang === 'vi' ? 'Chính xác' : 'Accuracy', desc: lang === 'vi' ? 'Kết quả kiểm tra tin cậy, không thỏa hiệp về chất lượng.' : 'Reliable inspection results, no compromise on quality.', icon: '🎯' },
              { title: lang === 'vi' ? 'An toàn' : 'Safety', desc: lang === 'vi' ? 'Tuân thủ quy trình an toàn nghiêm ngặt trong mọi dự án.' : 'Strict safety procedures in every project.', icon: '🛡️' },
              { title: lang === 'vi' ? 'Chuyên nghiệp' : 'Professional', desc: lang === 'vi' ? 'Đội ngũ được đào tạo bài bản, làm việc có hệ thống.' : 'Well-trained team with systematic workflows.', icon: '⭐' },
              { title: lang === 'vi' ? 'Đổi mới' : 'Innovation', desc: lang === 'vi' ? 'Không ngừng cập nhật công nghệ và phương pháp kiểm tra mới.' : 'Continuously updating technologies and methods.', icon: '💡' },
            ].map((val, i) => (
              <div key={i} className="text-center p-8 rounded-2xl hover:bg-gray-50 transition-colors">
                <div className="text-4xl mb-4">{val.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{val.title}</h3>
                <p className="text-gray-600">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">
            {lang === 'vi' ? 'Chứng nhận & Chứng chỉ' : 'Certifications & Accreditations'}
          </h2>
          <div className="flex flex-wrap justify-center gap-8">
            {['ISO 9001', 'ISO/IEC 17025', 'ASNT', 'PCN', 'CSWIP', 'ISO 9712'].map((cert) => (
              <div key={cert} className="px-8 py-4 bg-white rounded-xl shadow-sm border border-gray-100 font-semibold text-primary">
                {cert}
              </div>
            ))}
          </div>
          <div className="mt-12">
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              {lang === 'vi' ? 'Được công nhận bởi' : 'Approved by'}
            </h3>
            <div className="flex flex-wrap justify-center gap-6">
              {['ABS', 'Bureau Veritas (BV)', 'ClassNK', 'DNV', 'Korean Register (KR)', 'Vietnam Register (VR)'].map((org) => (
                <div key={org} className="px-6 py-3 bg-primary/5 rounded-lg text-primary font-medium text-sm">
                  {org}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
