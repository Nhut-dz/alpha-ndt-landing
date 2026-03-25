import { services } from '../data/siteData'
import { Link } from 'react-router-dom'

const ServiceIcon = ({ type }) => {
  const icons = {
    ut: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    rt: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    mt: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    pt: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    vi: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
    pmi: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  }
  return icons[type] || icons.ut
}

// Extended service details for full page
const serviceDetails = {
  1: {
    standards: ['ASME V', 'API 570', 'EN 17640', 'AWS D1.1'],
    applications: ['Đo chiều dày thành ống/bồn', 'Phát hiện khuyết tật hàn', 'Kiểm tra composite', 'TOFD & Phased Array'],
  },
  2: {
    standards: ['ASME V', 'EN ISO 17636', 'API 650', 'AWS D1.1'],
    applications: ['Chụp phim mối hàn', 'Digital Radiography', 'Kiểm tra vật đúc', 'Computed Tomography'],
  },
  3: {
    standards: ['ASTM E1444', 'EN ISO 9934', 'ASME V Art.7'],
    applications: ['Kiểm tra mối hàn', 'Kiểm tra trục, bánh răng', 'Phát hiện nứt mỏi', 'Kiểm tra sau sửa chữa'],
  },
  4: {
    standards: ['ASTM E165', 'EN ISO 3452', 'ASME V Art.6'],
    applications: ['Kiểm tra mối hàn inox', 'Kiểm tra bề mặt nhôm', 'Phát hiện rò rỉ', 'Kiểm tra sau gia công'],
  },
  5: {
    standards: ['AWS D1.1', 'API 650', 'ASME IX', 'EN ISO 17637'],
    applications: ['Kiểm tra mối hàn tại công trường', 'Đánh giá bề mặt kết cấu', 'Kiểm tra trước & sau hàn', 'Báo cáo theo tiêu chuẩn'],
  },
  6: {
    standards: ['ASTM E1476', 'API 578', 'ASME II Part A'],
    applications: ['Xác định mác thép', 'Kiểm tra vật liệu nhập kho', 'Phân biệt hợp kim', 'Kiểm tra Carbon Equivalent'],
  },
}

export default function ServicesPage() {
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
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">Dịch vụ NDT</h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Đầy đủ các phương pháp kiểm tra không phá hủy theo tiêu chuẩn quốc tế
          </p>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="w-20 h-20 bg-primary/5 rounded-2xl flex items-center justify-center mb-6 text-primary">
                    <ServiceIcon type={service.icon} />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">{service.title}</h2>
                  <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>

                  {/* Standards */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Tiêu chuẩn áp dụng:</h4>
                    <div className="flex flex-wrap gap-2">
                      {serviceDetails[service.id]?.standards.map((std) => (
                        <span key={std} className="px-3 py-1 bg-primary/5 text-primary text-sm rounded-full font-medium">
                          {std}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Applications */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Ứng dụng:</h4>
                    <ul className="space-y-2">
                      {serviceDetails[service.id]?.applications.map((app) => (
                        <li key={app} className="flex items-center gap-2 text-gray-600">
                          <svg className="w-5 h-5 text-green-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {app}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className={`bg-gray-50 rounded-2xl p-12 flex items-center justify-center min-h-[300px] ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="text-center">
                    <div className="w-24 h-24 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 text-primary">
                      <ServiceIcon type={service.icon} />
                    </div>
                    <p className="text-gray-500 font-medium">{service.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Cần tư vấn dịch vụ NDT?</h2>
          <p className="text-gray-600 mb-8">Liên hệ ngay để được đội ngũ chuyên gia Alpha NDT tư vấn giải pháp phù hợp nhất.</p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-secondary text-white font-semibold rounded-lg hover:bg-blue-600 transition-all hover:shadow-lg"
          >
            Liên hệ tư vấn miễn phí
          </Link>
        </div>
      </section>
    </>
  )
}
