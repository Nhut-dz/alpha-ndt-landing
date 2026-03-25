import { Link } from 'react-router-dom'

const openPositions = [
  {
    id: 1,
    title: 'Kỹ sư NDT Level II (UT/RT)',
    department: 'Kỹ thuật',
    location: 'Đồng Nai / Công trường',
    type: 'Toàn thời gian',
    description: 'Thực hiện kiểm tra NDT tại công trường, lập báo cáo kỹ thuật theo tiêu chuẩn quốc tế.',
  },
  {
    id: 2,
    title: 'Kỹ sư NDT Level II (MT/PT)',
    department: 'Kỹ thuật',
    location: 'Đồng Nai / Công trường',
    type: 'Toàn thời gian',
    description: 'Kiểm tra bề mặt bằng phương pháp từ tính và thẩm thấu, đánh giá khuyết tật theo tiêu chuẩn.',
  },
  {
    id: 3,
    title: 'Chuyên viên QA/QC',
    department: 'Chất lượng',
    location: 'Đồng Nai',
    type: 'Toàn thời gian',
    description: 'Quản lý hệ thống chất lượng, kiểm soát quy trình kiểm tra, audit nội bộ.',
  },
  {
    id: 4,
    title: 'Nhân viên kinh doanh kỹ thuật',
    department: 'Kinh doanh',
    location: 'TP. Hồ Chí Minh',
    type: 'Toàn thời gian',
    description: 'Phát triển khách hàng mới, tư vấn giải pháp NDT cho doanh nghiệp công nghiệp.',
  },
]

export default function CareersPage() {
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
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">Tuyển dụng</h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Gia nhập đội ngũ Alpha NDT — Nơi phát triển sự nghiệp kiểm định
          </p>
        </div>
      </section>

      {/* Why Join */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Tại sao chọn Alpha NDT?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Chúng tôi đầu tư vào con người — bởi đội ngũ chính là tài sản quý giá nhất</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Đào tạo chuyên sâu', desc: 'Chương trình đào tạo NDT Level I → III bài bản, hỗ trợ thi chứng chỉ quốc tế.' },
              { title: 'Thu nhập hấp dẫn', desc: 'Lương cạnh tranh, thưởng dự án, phụ cấp công trường và bảo hiểm đầy đủ.' },
              { title: 'Phát triển sự nghiệp', desc: 'Lộ trình thăng tiến rõ ràng, cơ hội làm việc với công nghệ tiên tiến nhất.' },
              { title: 'Môi trường chuyên nghiệp', desc: 'Làm việc cùng các chuyên gia giàu kinh nghiệm, văn hóa cầu thị và hỗ trợ.' },
            ].map((item, i) => (
              <div key={i} className="p-8 bg-gray-50 rounded-2xl hover:bg-primary/5 transition-colors">
                <h3 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Vị trí đang tuyển</h2>
          </div>
          <div className="space-y-6 max-w-4xl mx-auto">
            {openPositions.map((pos) => (
              <div key={pos.id} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{pos.title}</h3>
                    <p className="text-gray-600 text-sm mb-3">{pos.description}</p>
                    <div className="flex flex-wrap gap-3">
                      <span className="px-3 py-1 bg-primary/5 text-primary text-xs rounded-full font-medium">{pos.department}</span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">{pos.location}</span>
                      <span className="px-3 py-1 bg-green-50 text-green-700 text-xs rounded-full">{pos.type}</span>
                    </div>
                  </div>
                  <a
                    href={`mailto:hr@alpha-ndt.com?subject=Ứng tuyển: ${pos.title}`}
                    className="inline-flex items-center justify-center px-6 py-3 bg-secondary text-white font-medium rounded-lg hover:bg-blue-600 transition-colors shrink-0"
                  >
                    Ứng tuyển
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Không tìm thấy vị trí phù hợp?</h2>
          <p className="text-gray-600 mb-8">Gửi CV của bạn, chúng tôi sẽ liên hệ khi có vị trí phù hợp.</p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary-light transition-all"
          >
            Liên hệ HR
          </Link>
        </div>
      </section>
    </>
  )
}
