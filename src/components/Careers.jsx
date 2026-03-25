export default function Careers() {
  return (
    <section id="careers" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-gradient-to-r from-primary to-primary-light rounded-3xl overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
              backgroundSize: '30px 30px',
            }} />
          </div>

          <div className="relative px-8 py-16 md:px-16 md:py-20 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Gia nhập Alpha NDT
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-8 text-lg">
              Chúng tôi luôn tìm kiếm những kỹ sư NDT tài năng, đam mê công nghệ và
              mong muốn phát triển trong ngành kiểm định công nghiệp.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Xem vị trí tuyển dụng
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="mailto:hr@alpha-ndt.com"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 text-white font-semibold rounded-lg border border-white/30 hover:bg-white/20 transition-colors"
              >
                Gửi CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
