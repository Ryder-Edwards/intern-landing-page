import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Download, Calendar, FileText, Users } from "lucide-react"

export default function WhitepapersPage() {
  const whitepapers = [
    {
      title: "The Economics of AI-Powered Power Line Inspection",
      description:
        "Comprehensive analysis of cost savings, ROI, and operational benefits of transitioning from traditional to AI-driven inspection methods.",
      pages: "24 pages",
      date: "December 2024",
      downloads: "1,247",
      category: "Business Analysis",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Computer Vision for Infrastructure: Technical Deep Dive",
      description:
        "Technical whitepaper exploring machine learning algorithms, neural network architectures, and accuracy metrics for power line inspection.",
      pages: "32 pages",
      date: "November 2024",
      downloads: "892",
      category: "Technology",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Regulatory Compliance Guide: Drone Operations for Utilities",
      description:
        "Complete guide to FAA regulations, NERC standards, and compliance requirements for commercial drone operations in the utility sector.",
      pages: "18 pages",
      date: "October 2024",
      downloads: "1,456",
      category: "Regulatory",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Vegetation Management Best Practices",
      description:
        "Industry best practices for vegetation management along power line corridors, including predictive growth modeling and maintenance scheduling.",
      pages: "28 pages",
      date: "September 2024",
      downloads: "2,103",
      category: "Operations",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Storm Preparedness: Proactive Infrastructure Monitoring",
      description:
        "Strategies for using AI-powered inspection to prepare power systems for severe weather events and minimize storm-related outages.",
      pages: "22 pages",
      date: "August 2024",
      downloads: "1,678",
      category: "Risk Management",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Future of Utility Inspection: 2025-2030 Outlook",
      description:
        "Industry forecast examining emerging technologies, market trends, and the evolution of power line inspection over the next five years.",
      pages: "36 pages",
      date: "July 2024",
      downloads: "3,241",
      category: "Industry Trends",
      image: "/placeholder.svg?height=300&width=400",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950 text-white">
      <Navbar />

      <section className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Industry <span className="text-teal-400">Whitepapers</span>
            </h1>
            <p className="text-xl text-gray-300">
              In-depth research and analysis on AI-powered infrastructure inspection, regulatory compliance, and
              industry best practices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whitepapers.map((paper, index) => (
              <div
                key={index}
                className="bg-gray-800/50 rounded-lg border border-gray-700 overflow-hidden hover:border-teal-500/50 transition-all duration-300 group"
              >
                <div className="aspect-[4/3] bg-gray-700 relative overflow-hidden">
                  <img
                    src={paper.image || "/placeholder.svg"}
                    alt={paper.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-teal-500 text-gray-900 text-xs font-medium rounded-full">
                      {paper.category}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center justify-between text-xs text-gray-300">
                      <span className="flex items-center">
                        <FileText className="w-3 h-3 mr-1" />
                        {paper.pages}
                      </span>
                      <span className="flex items-center">
                        <Users className="w-3 h-3 mr-1" />
                        {paper.downloads} downloads
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-3 group-hover:text-teal-400 transition-colors">
                    {paper.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">{paper.description}</p>

                  <div className="flex items-center justify-between text-xs text-gray-400 mb-4">
                    <span className="flex items-center">
                      <Calendar className="w-3 h-3 mr-1" />
                      {paper.date}
                    </span>
                  </div>

                  <button className="w-full flex items-center justify-center px-4 py-2 bg-teal-500 hover:bg-teal-400 text-gray-900 font-medium rounded-md transition-all duration-200 text-sm">
                    <Download className="w-4 h-4 mr-2" />
                    Download PDF
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Newsletter Signup */}
          <div className="mt-16 bg-gray-800/50 rounded-lg border border-gray-700 p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
            <p className="text-gray-300 mb-6">Get notified when we publish new research and industry insights.</p>
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
