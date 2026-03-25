import { useState } from 'react'
import { projects } from '../data/siteData'

export default function Portfolio() {
  const categories = ['Tất cả', ...new Set(projects.map((p) => p.category))]
  const [activeCategory, setActiveCategory] = useState('Tất cả')

  const filtered =
    activeCategory === 'Tất cả'
      ? projects
      : projects.filter((p) => p.category === activeCategory)

  return (
    <section id="portfolio" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center px-4 py-1.5 bg-secondary/10 text-secondary rounded-full text-sm font-medium mb-6">
            Dự án tiêu biểu
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Các dự án đã thực hiện
          </h2>
          <p className="text-gray-600">
            Tự hào đồng hành cùng các tập đoàn hàng đầu trong và ngoài nước.
          </p>
        </div>

        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat
                  ? 'bg-primary text-white shadow-lg shadow-primary/25'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((project) => (
            <div
              key={project.id}
              className="group rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 bg-white border border-gray-100"
            >
              <div className="relative overflow-hidden h-56">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/40 transition-all duration-300 flex items-center justify-center">
                  <span className="text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    Xem chi tiết
                  </span>
                </div>
                <span className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-primary">
                  {project.category}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
