import { Link } from 'react-router-dom'
import { companyInfo, navLinks } from '../data/siteData'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">α</span>
              </div>
              <span className="font-bold text-xl">Alpha NDT</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              {companyInfo.fullName} — Đối tác tin cậy trong kiểm tra không phá hủy và kiểm định công nghiệp.
            </p>
            {/* Social Icons */}
            <div className="flex gap-3">
              {['facebook', 'linkedin', 'youtube'].map((social) => (
                <a
                  key={social}
                  href={companyInfo.socials[social]}
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-secondary transition-colors"
                  aria-label={social}
                >
                  <span className="text-xs font-medium uppercase">{social[0]}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Menu</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-gray-400 hover:text-white transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Dịch vụ</h4>
            <ul className="space-y-3">
              {['Kiểm tra siêu âm (UT)', 'Chụp phóng xạ (RT)', 'Kiểm tra từ tính (MT)', 'Kiểm tra thẩm thấu (PT)', 'Phân tích vật liệu (PMI)'].map((s) => (
                <li key={s}>
                  <Link to="/services" className="text-gray-400 hover:text-white transition-colors text-sm">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Liên hệ</h4>
            <div className="space-y-4 text-sm text-gray-400">
              <p>{companyInfo.address}</p>
              <p>{companyInfo.phone}</p>
              <p>{companyInfo.email}</p>
              <p>Thứ Hai - Thứ Bảy: 7:30 - 17:00</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © 2026 {companyInfo.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Chính sách bảo mật</a>
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Điều khoản sử dụng</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
