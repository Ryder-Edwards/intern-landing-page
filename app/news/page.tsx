import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Calendar, User, ArrowRight } from "lucide-react"

export default function NewsPage() {
  const news = [
    {
      title: "LineIntel Raises $15M Series A to Accelerate AI-Powered Infrastructure Inspection",
      excerpt:
        "Funding round led by Energy Impact Partners will fuel expansion of autonomous drone inspection services across North America.",
      date: "December 15, 2024",
      author: "LineIntel Team",
      category: "Company News",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      title: "Partnership with Tennessee Valley Authority Demonstrates 80% Cost Reduction",
      excerpt:
        "Six-month pilot program shows significant improvements in inspection efficiency and safety compared to traditional helicopter methods.",
      date: "November 28, 2024",
      author: "Sarah Chen",
      category: "Case Study",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      title: "LineIntel Receives FAA Approval for Beyond Visual Line of Sight Operations",
      excerpt:
        "Regulatory milestone enables fully autonomous long-distance power line inspections across multiple states.",
      date: "October 22, 2024",
      author: "Emily Johnson",
      category: "Regulatory",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      title: "AI Model Achieves 99.2% Accuracy in Vegetation Encroachment Detection",
      excerpt:
        "Latest computer vision breakthrough significantly reduces false positives while identifying critical maintenance needs.",
      date: "September 18, 2024",
      author: "Dr. Lisa Wang",
      category: "Technology",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      title: "LineIntel Named to Fast Company's Most Innovative Companies List",
      excerpt: "Recognition highlights company's impact on critical infrastructure safety and maintenance efficiency.",
      date: "August 30, 2024",
      author: "LineIntel Team",
      category: "Awards",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      title: "Expanding Operations: New Regional Hub Opens in Atlanta",
      excerpt: "Strategic location will serve growing customer base across the Southeast power utility market.",
      date: "July 15, 2024",
      author: "David Park",
      category: "Company News",
      image: "/placeholder.svg?height=300&width=500",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950 text-white">
      <Navbar />

      <section className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Latest <span className="text-teal-400">News</span>
            </h1>
            <p className="text-xl text-gray-300">
              Stay updated with LineIntel's latest developments, partnerships, and industry insights.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {news.map((article, index) => (
              <article
                key={index}
                className="bg-gray-800/50 rounded-lg border border-gray-700 overflow-hidden hover:border-teal-500/50 transition-all duration-300 group"
              >
                <div className="aspect-video bg-gray-700 relative overflow-hidden">
                  <img
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-teal-500 text-gray-900 text-xs font-medium rounded-full">
                      {article.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-3 group-hover:text-teal-400 transition-colors">
                    {article.title}
                  </h2>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">{article.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-gray-400 mb-4">
                    <div className="flex items-center space-x-4">
                      <span className="flex items-center">
                        <Calendar className="w-3 h-3 mr-1" />
                        {article.date}
                      </span>
                      <span className="flex items-center">
                        <User className="w-3 h-3 mr-1" />
                        {article.author}
                      </span>
                    </div>
                  </div>
                  <button className="flex items-center text-teal-400 hover:text-teal-300 transition-colors text-sm font-medium">
                    Read More <ArrowRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </article>
            ))}
          </div>

          {/* Newsletter Signup */}
          <div className="mt-16 bg-gray-800/50 rounded-lg border border-gray-700 p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Stay Informed</h2>
            <p className="text-gray-300 mb-6">
              Subscribe to our newsletter for the latest updates and industry insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-teal-500"
              />
              <button className="px-6 py-2 bg-teal-500 hover:bg-teal-400 text-gray-900 font-medium rounded-md transition-all duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
