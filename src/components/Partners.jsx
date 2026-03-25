import { partners } from '../data/siteData'

export default function Partners() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Đối tác & Khách hàng</h2>
          <p className="text-gray-500">Tin tưởng bởi các tập đoàn hàng đầu</p>
        </div>

        {/* Logo slider - simple CSS animation */}
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll gap-12 items-center">
            {[...partners, ...partners].map((partner, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-32 h-20 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center hover:shadow-md transition-shadow"
              >
                <span className="text-xl font-bold text-gray-400 hover:text-primary transition-colors">
                  {partner.logo}
                </span>
              </div>
            ))}
          </div>
        </div>

        <style>{`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-scroll {
            animation: scroll 25s linear infinite;
          }
          .animate-scroll:hover {
            animation-play-state: paused;
          }
        `}</style>
      </div>
    </section>
  )
}
