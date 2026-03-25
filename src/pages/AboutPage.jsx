import { stats } from '../data/siteData'

export default function AboutPage() {
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
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">Về Alpha NDT</h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Đối tác tin cậy hàng đầu trong lĩnh vực kiểm tra không phá hủy tại Việt Nam
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-1.5 bg-secondary/10 text-secondary rounded-full text-sm font-medium mb-6">
                Câu chuyện của chúng tôi
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                Hơn 15 năm đồng hành cùng{' '}
                <span className="text-primary">ngành công nghiệp Việt Nam</span>
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Được thành lập từ năm 2010, Alpha NDT đã trở thành đơn vị hàng đầu trong lĩnh vực
                  kiểm tra không phá hủy (NDT) tại Việt Nam. Với xuất phát điểm là một nhóm kỹ sư
                  đam mê và giàu kinh nghiệm, chúng tôi đã không ngừng phát triển và mở rộng.
                </p>
                <p>
                  Qua hơn 15 năm hoạt động, Alpha NDT đã phục vụ hơn 500 dự án lớn nhỏ trong các
                  ngành dầu khí, năng lượng, hạ tầng giao thông và công nghiệp nặng. Đội ngũ chuyên
                  gia của chúng tôi được đào tạo bài bản, sở hữu các chứng chỉ quốc tế ASNT Level II,
                  Level III và PCN.
                </p>
                <p>
                  Chúng tôi tin rằng chất lượng kiểm tra chính xác là nền tảng của an toàn công nghiệp.
                  Mỗi báo cáo từ Alpha NDT đều được kiểm duyệt nghiêm ngặt, đảm bảo khách hàng nhận
                  được kết quả đáng tin cậy nhất.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=500&fit=crop"
                alt="Alpha NDT team"
                className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
                loading="lazy"
              />
              <div className="absolute -bottom-6 -left-6 bg-secondary text-white p-6 rounded-xl shadow-xl hidden md:block">
                <div className="text-3xl font-bold">500+</div>
                <div className="text-sm text-white/80">Dự án hoàn thành</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-white/60">{stat.label}</div>
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
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Sứ mệnh</h3>
              <p className="text-gray-600 leading-relaxed">
                Cung cấp dịch vụ kiểm tra không phá hủy chất lượng cao nhất, góp phần đảm bảo
                an toàn vận hành cho các công trình công nghiệp trọng điểm tại Việt Nam và khu vực.
              </p>
            </div>
            <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100">
              <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Tầm nhìn</h3>
              <p className="text-gray-600 leading-relaxed">
                Trở thành đơn vị kiểm định NDT hàng đầu Đông Nam Á, tiên phong ứng dụng
                công nghệ AI và tự động hóa trong kiểm tra chất lượng công nghiệp.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Giá trị cốt lõi</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Những nguyên tắc định hướng mọi hoạt động của chúng tôi</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Chính xác', desc: 'Kết quả kiểm tra tin cậy, không thỏa hiệp về chất lượng.', icon: '🎯' },
              { title: 'An toàn', desc: 'Tuân thủ quy trình an toàn nghiêm ngặt trong mọi dự án.', icon: '🛡️' },
              { title: 'Chuyên nghiệp', desc: 'Đội ngũ được đào tạo bài bản, làm việc có hệ thống.', icon: '⭐' },
              { title: 'Đổi mới', desc: 'Không ngừng cập nhật công nghệ và phương pháp kiểm tra mới.', icon: '💡' },
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
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Chứng nhận & Chứng chỉ</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {['ISO 9001:2015', 'ASNT Level III', 'PCN Certified', 'ASME Authorized', 'API Qualified', 'AWS CWI'].map((cert) => (
              <div key={cert} className="px-8 py-4 bg-white rounded-xl shadow-sm border border-gray-100 font-semibold text-primary">
                {cert}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
