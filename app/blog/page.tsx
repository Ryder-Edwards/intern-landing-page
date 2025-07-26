import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Calendar, User, Clock, ArrowRight } from "lucide-react"

export default function BlogPage() {
  const posts = [
    {
      title: "The Future of Power Line Inspection: How AI is Transforming Utility Maintenance",
      excerpt:
        "Explore how artificial intelligence and computer vision are revolutionizing the way utilities monitor and maintain their critical infrastructure.",
      date: "December 10, 2024",
      author: "Dr. Michael Rodriguez",
      readTime: "8 min read",
      category: "Technology",
      image: "/placeholder.svg?height=300&width=500",
      featured: true,
    },
    {
      title: "Vegetation Management Best Practices for Power Line Corridors",
      excerpt:
        "Learn proven strategies for managing vegetation growth near power lines to prevent outages and maintain system reliability.",
      date: "November 25, 2024",
      author: "Emily Johnson",
      readTime: "6 min read",
      category: "Best Practices",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      title: "Drone Regulations and Compliance: What Utilities Need to Know",
      excerpt:
        "Navigate the complex regulatory landscape of commercial drone operations for power line inspection and maintenance.",
      date: "November 12, 2024",
      author: "James Mitchell",
      readTime: "5 min read",
      category: "Regulatory",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      title: "ROI Analysis: Traditional vs. AI-Powered Power Line Inspection",
      excerpt:
        "A comprehensive cost-benefit analysis comparing traditional helicopter inspections with modern drone-based AI solutions.",
      date: "October 28, 2024",
      author: "David Park",
      readTime: "7 min read",
      category: "Business",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      title: "Computer Vision in Infrastructure: Detecting Structural Anomalies",
      excerpt:
        "Deep dive into how machine learning algorithms identify corrosion, damage, and wear in power transmission equipment.",
      date: "October 15, 2024",
      author: "Dr. Lisa Wang",
      readTime: "9 min read",
      category: "Technology",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      title: "Storm Season Preparedness: Proactive Power Line Monitoring",
      excerpt:
        "How predictive maintenance and AI-powered inspections help utilities prepare for severe weather events.",
      date: "September 30, 2024",
      author: "Sarah Chen",
      readTime: "6 min read",
      category: "Operations",
      image: "/placeholder.svg?height=300&width=500",
    },
  ]

  const categories = ["All", "Technology", "Best Practices", "Regulatory", "Business", "Operations"]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950 text-white">
      <Navbar />

      <section className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Industry <span className="text-teal-400">Insights</span>
            </h1>
            <p className="text-xl text-gray-300">
              Expert perspectives on power line inspection, AI technology, and utility industry trends.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 bg-gray-800 hover:bg-teal-500 text-gray-300 hover:text-gray-900 rounded-full transition-all duration-200 text-sm"
              >
                {category}
              </button>
            ))}
          </div>

          {/* Featured Post */}
          {posts
            .filter((post) => post.featured)
            .map((post, index) => (
              <article
                key={index}
                className="bg-gray-800/50 rounded-lg border border-gray-700 overflow-hidden mb-12 hover:border-teal-500/50 transition-all duration-300 group"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  <div className="aspect-video lg:aspect-auto bg-gray-700 relative overflow-hidden">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-teal-500 text-gray-900 text-xs font-medium rounded-full">
                        Featured
                      </span>
                    </div>
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <div className="mb-4">
                      <span className="px-3 py-1 bg-gray-700 text-teal-400 text-xs font-medium rounded-full">
                        {post.category}
                      </span>
                    </div>
                    <h2 className="text-2xl font-bold mb-4 group-hover:text-teal-400 transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-gray-300 mb-6 leading-relaxed">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-sm text-gray-400 mb-6">
                      <div className="flex items-center space-x-4">
                        <span className="flex items-center">
                          <User className="w-4 h-4 mr-1" />
                          {post.author}
                        </span>
                        <span className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {post.date}
                        </span>
                        <span className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {post.readTime}
                        </span>
                      </div>
                    </div>
                    <button className="flex items-center text-teal-400 hover:text-teal-300 transition-colors font-medium">
                      Read Full Article <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                </div>
              </article>
            ))}

          {/* Regular Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts
              .filter((post) => !post.featured)
              .map((post, index) => (
                <article
                  key={index}
                  className="bg-gray-800/50 rounded-lg border border-gray-700 overflow-hidden hover:border-teal-500/50 transition-all duration-300 group"
                >
                  <div className="aspect-video bg-gray-700 relative overflow-hidden">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-gray-700 text-teal-400 text-xs font-medium rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold mb-3 group-hover:text-teal-400 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-300 mb-4 text-sm leading-relaxed line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-xs text-gray-400 mb-4">
                      <span className="flex items-center">
                        <User className="w-3 h-3 mr-1" />
                        {post.author}
                      </span>
                      <span className="flex items-center">
                        <Clock className="w-3 h-3 mr-1" />
                        {post.readTime}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-400">{post.date}</span>
                      <button className="flex items-center text-teal-400 hover:text-teal-300 transition-colors text-sm">
                        Read More <ArrowRight className="w-3 h-3 ml-1" />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
