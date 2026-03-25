import { blogPosts } from '../data/siteData'

export default function BlogPage() {
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
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">Tin tức & Blog</h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Cập nhật công nghệ NDT, tiêu chuẩn mới và hoạt động công ty
          </p>
        </div>
      </section>

      {/* Blog List */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured Post */}
          <div className="mb-16">
            <div className="grid lg:grid-cols-2 gap-8 bg-gray-50 rounded-2xl overflow-hidden">
              <img
                src={blogPosts[0].image}
                alt={blogPosts[0].title}
                className="w-full h-full min-h-[300px] object-cover"
                loading="lazy"
              />
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-secondary text-white rounded-full text-xs font-medium">
                    {blogPosts[0].category}
                  </span>
                  <time className="text-sm text-gray-400">{blogPosts[0].date}</time>
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">{blogPosts[0].title}</h2>
                <p className="text-gray-600 leading-relaxed mb-6">{blogPosts[0].excerpt}</p>
                <a href="#" className="inline-flex items-center text-secondary font-semibold hover:text-blue-700">
                  Đọc bài viết
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Other Posts */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="relative overflow-hidden h-52">
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
                  <a href="#" className="inline-flex items-center text-secondary text-sm font-medium mt-4 hover:text-blue-700">
                    Đọc thêm
                    <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
