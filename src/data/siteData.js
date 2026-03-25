// Dummy data for Alpha NDT Landing Page

export const companyInfo = {
  name: 'Alpha NDT',
  fullName: 'Alpha NDT Joint Stock Company',
  logo: 'http://www.alpha-ndt.com/App_Themes/Images/logo_ndt.png',
  phone: '+84 28 66877778',
  fax: '+84 28 66877788',
  email: 'info@alpha-ndt.com',
  address: 'No. 37/7, Road C18, Bay Hien Ward, Ho Chi Minh City, S. R. Vietnam',
  website: 'www.alpha-ndt.com',
  socials: {
    facebook: '#',
    linkedin: '#',
    youtube: '#',
    zalo: '#',
  },
}

export const navLinks = [
  { label: 'Trang chủ', path: '/' },
  { label: 'Giới thiệu', path: '/about' },
  { label: 'Dịch vụ', path: '/services' },
  { label: 'Dự án', path: '/portfolio' },
  { label: 'Tin tức', path: '/blog' },
  { label: 'Tuyển dụng', path: '/careers' },
  { label: 'Liên hệ', path: '/contact' },
]

export const services = [
  {
    id: 1,
    icon: 'ut',
    title: 'Kiểm tra siêu âm (UT)',
    description: 'Phát hiện khuyết tật bên trong vật liệu bằng sóng siêu âm tần số cao, đo chiều dày thành ống và bồn chứa.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/4/49/Ultrasonidos.jpg',
  },
  {
    id: 2,
    icon: 'rt',
    title: 'Chụp ảnh phóng xạ (RT)',
    description: 'Sử dụng tia X hoặc tia Gamma để phát hiện khuyết tật hàn, rỗ khí, nứt bên trong kết cấu kim loại.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/4/42/Cologne_Germany_Examination-of-fitting-xray-01.jpg',
  },
  {
    id: 3,
    icon: 'mt',
    title: 'Kiểm tra từ tính (MT)',
    description: 'Phát hiện các khuyết tật bề mặt và gần bề mặt trên vật liệu sắt từ bằng phương pháp từ hóa.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/e/ec/MPI_crack_indication.png',
  },
  {
    id: 4,
    icon: 'pt',
    title: 'Kiểm tra thẩm thấu (PT)',
    description: 'Phát hiện khuyết tật bề mặt mở trên mọi loại vật liệu bằng chất lỏng thẩm thấu và chất hiện.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/22/ENSAYO_DE_LIQUIDOS_PENETRANTES.jpg',
  },
  {
    id: 5,
    icon: 'vi',
    title: 'Kiểm tra bằng mắt (VT)',
    description: 'Kiểm tra trực quan bề mặt mối hàn, kết cấu theo tiêu chuẩn AWS, ASME, API.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/5/5f/US_Navy_101220-N-7981E-121_Aviation_Structural_Mechanic_1st_Class_Charles_Martens%2C_a_non-destructive_inspection_%28NDI%29_technician.jpg',
  },
  {
    id: 6,
    icon: 'pmi',
    title: 'Phân tích vật liệu (PMI)',
    description: 'Xác định thành phần hóa học vật liệu tại hiện trường bằng thiết bị XRF/OES.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/4/41/Handheld_RXF_analyzer_gun.jpg',
  },
]

export const projects = [
  {
    id: 1,
    title: 'Nhà máy Lọc dầu Nghi Sơn',
    description: 'Kiểm tra NDT toàn bộ hệ thống đường ống áp lực cao, bồn chứa và thiết bị trao đổi nhiệt.',
    category: 'Dầu khí',
    image: 'https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?w=600&h=400&fit=crop',
  },
  {
    id: 2,
    title: 'Nhiệt điện Vĩnh Tân',
    description: 'Kiểm tra mối hàn đường ống hơi nước siêu tới hạn, đánh giá tuổi thọ còn lại thiết bị.',
    category: 'Năng lượng',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&h=400&fit=crop',
  },
  {
    id: 3,
    title: 'Cầu Mỹ Thuận 2',
    description: 'Kiểm tra NDT kết cấu thép cầu dây văng, kiểm soát chất lượng mối hàn tại công trường.',
    category: 'Hạ tầng',
    image: 'https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=600&h=400&fit=crop',
  },
  {
    id: 4,
    title: 'Nhà máy Phân bón Cà Mau',
    description: 'Kiểm tra định kỳ bồn chứa ammonia, hệ thống đường ống công nghệ và thiết bị áp lực.',
    category: 'Hóa chất',
    image: 'https://images.unsplash.com/photo-1581093458791-9d42e3c2fd45?w=600&h=400&fit=crop',
  },
  {
    id: 5,
    title: 'Kho cảng LNG Thị Vải',
    description: 'Kiểm tra toàn diện bồn chứa LNG, hệ thống ống dẫn khí và các van an toàn.',
    category: 'Dầu khí',
    image: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=600&h=400&fit=crop',
  },
  {
    id: 6,
    title: 'Nhà máy Xi măng Hà Tiên',
    description: 'Kiểm tra NDT lò quay, hệ thống nghiền và các thiết bị chịu nhiệt độ cao.',
    category: 'Công nghiệp',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop',
  },
]

export const partners = [
  { name: 'ABS', logo: 'https://ww2.eagle.org/content/dam/eagle/logos/abs_logo@1x.png' },
  { name: 'Bureau Veritas', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/bb/Bureau_Veritas.svg/250px-Bureau_Veritas.svg.png' },
  { name: 'ClassNK', logo: 'https://cdn.brandfetch.io/idmcwFVOPS/theme/dark/logo.svg' },
  { name: 'DNV', logo: 'https://www.dnv.com/assets/images/DNV_logo_RGB_tcm8-197625.png' },
  { name: 'Korean Register', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Korean_Register.png' },
  { name: 'Vietnam Register', logo: 'https://www.vr.org.vn/Publishing_Resources/web/images/logo_EN.png' },
]

export const whyChooseUs = [
  {
    icon: 'accuracy',
    title: 'Chính xác cao',
    description: 'Kết quả kiểm tra đạt độ chính xác >99%, được đối chiếu và xác nhận bởi chuyên gia Level III.',
  },
  {
    icon: 'standard',
    title: 'Đạt chuẩn quốc tế',
    description: 'Tuân thủ nghiêm ngặt các tiêu chuẩn ASME, API, AWS, EN, ISO trong mọi quy trình kiểm tra.',
  },
  {
    icon: 'equipment',
    title: 'Thiết bị hiện đại',
    description: 'Đầu tư hệ thống thiết bị NDT thế hệ mới nhất từ Olympus, GE, Zetec với độ nhạy vượt trội.',
  },
  {
    icon: 'experience',
    title: 'Kinh nghiệm thực tế',
    description: 'Hơn 15 năm kinh nghiệm với 500+ dự án lớn nhỏ trong các ngành dầu khí, năng lượng, hạ tầng.',
  },
]

export const blogPosts = [
  {
    id: 1,
    title: 'Ứng dụng Phased Array trong kiểm tra mối hàn ống áp lực',
    excerpt: 'Công nghệ Phased Array (PAUT) đang dần thay thế phương pháp RT truyền thống nhờ tốc độ nhanh, không sử dụng nguồn phóng xạ.',
    date: '2026-03-15',
    category: 'Công nghệ',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=250&fit=crop',
  },
  {
    id: 2,
    title: 'Tiêu chuẩn ASME VIII Div.1 cập nhật 2026 — Điểm mới cần lưu ý',
    excerpt: 'Phiên bản ASME mới bổ sung yêu cầu về kiểm tra NDT cho các mối hàn tự động và vật liệu composite.',
    date: '2026-03-10',
    category: 'Tiêu chuẩn',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=250&fit=crop',
  },
  {
    id: 3,
    title: 'Alpha NDT hoàn thành dự án kiểm tra Nhà máy Nhiệt điện Vĩnh Tân',
    excerpt: 'Sau 3 tháng triển khai, đội ngũ Alpha NDT đã hoàn tất kiểm tra toàn bộ hệ thống đường ống hơi nước.',
    date: '2026-03-01',
    category: 'Dự án',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=250&fit=crop',
  },
]

export const stats = [
  { number: '500+', label: 'Dự án hoàn thành' },
  { number: '20+', label: 'Năm kinh nghiệm' },
  { number: '50+', label: 'Chuyên gia NDT' },
  { number: '99%', label: 'Khách hàng hài lòng' },
]
