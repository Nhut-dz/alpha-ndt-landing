import Contact from '../components/Contact'

export default function ContactPage() {
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
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">Liên hệ</h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Hãy liên hệ để được tư vấn giải pháp NDT phù hợp nhất
          </p>
        </div>
      </section>

      {/* Reuse Contact component */}
      <Contact />

      {/* Map placeholder */}
      <section className="bg-gray-100">
        <div className="w-full h-[400px] flex items-center justify-center bg-gray-200">
          <div className="text-center text-gray-500">
            <svg className="w-16 h-16 mx-auto mb-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <p className="font-medium">Google Maps</p>
            <p className="text-sm">Lô A1, KCN Biên Hòa 2, TP. Biên Hòa, Đồng Nai</p>
          </div>
        </div>
      </section>
    </>
  )
}
