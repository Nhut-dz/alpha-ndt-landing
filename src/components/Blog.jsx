import { blogPosts } from '../data/siteData'

export default function Blog() {
  return (
    <section id="blog" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center px-4 py-1.5 bg-secondary/10 text-secondary rounded-full text-sm font-medium mb-6">
            Tin tức & Blog
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Cập nhật từ Alpha NDT
          </h2>
          <p className="text-gray-600">
            Tin tức mới nhất về công nghệ NDT, tiêu chuẩn và hoạt động công ty.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <span className="absolute top-4 left-4 px-3 py-1 bg-secondary text-white rounded-full text-xs font-medium">
                  {post.category}
                </span>
              </div>
              <div className="p-6">
                <time className="text-sm text-gray-400">{post.date}</time>
                <h3 className="text-lg font-bold text-gray-900 mt-2 mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">{post.excerpt}</p>
                <a href="#" className="inline-flex items-center text-secondary text-sm font-medium mt-4 hover:text-blue-700 transition-colors">
                  Đọc thêm
                  <svg className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
