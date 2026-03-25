export default function About() {
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
            {/* Floating card */}
            <div className="absolute -bottom-6 -right-6 bg-primary text-white p-6 rounded-xl shadow-xl hidden md:block">
              <div className="text-3xl font-bold">15+</div>
              <div className="text-sm text-white/80">Năm kinh nghiệm</div>
            </div>
          </div>

          {/* Text Content */}
          <div>
            <div className="inline-flex items-center px-4 py-1.5 bg-secondary/10 text-secondary rounded-full text-sm font-medium mb-6">
              Về chúng tôi
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Đối tác tin cậy trong{' '}
              <span className="text-primary">kiểm định công nghiệp</span>
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Alpha NDT là đơn vị hàng đầu trong lĩnh vực kiểm tra không phá hủy (NDT) tại Việt Nam.
              Với đội ngũ chuyên gia giàu kinh nghiệm và hệ thống thiết bị hiện đại, chúng tôi cung cấp
              các giải pháp kiểm định toàn diện cho ngành dầu khí, năng lượng, hạ tầng và công nghiệp nặng.
            </p>

            <div className="space-y-4 mb-8">
              {[
                'Đội ngũ chuyên gia Level II, III được chứng nhận ASNT, PCN',
                'Công nghệ kiểm tra tiên tiến: PAUT, TOFD, Digital RT',
                'Tuân thủ tiêu chuẩn quốc tế ASME, API, AWS, EN, ISO',
                'Hệ thống quản lý chất lượng ISO 9001:2015',
              ].map((item, i) => (
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

            <a
              href="#services"
              className="inline-flex items-center text-secondary font-semibold hover:text-blue-700 transition-colors"
            >
              Tìm hiểu thêm về dịch vụ
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
