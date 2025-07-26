"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Search, Filter, Clock, FileText, Users, Wrench, Zap, MapPin } from "lucide-react"

interface SearchResult {
  id: string
  title: string
  description: string
  url: string
  category: string
  icon: React.ReactNode
  lastUpdated?: string
  relevanceScore?: number
}

const allSearchResults: SearchResult[] = [
  // Products
  {
    id: "vegetation-management",
    title: "Vegetation Management",
    description: "AI-powered vegetation analysis and management solutions for utility companies",
    url: "/products/vegetation-management",
    category: "Products",
    icon: <Wrench className="w-4 h-4" />,
    lastUpdated: "2024-01-20",
    relevanceScore: 95,
  },
  {
    id: "structural-inspection",
    title: "Structural Inspection",
    description: "Comprehensive infrastructure inspection services using advanced drone technology",
    url: "/products/structural-inspection",
    category: "Products",
    icon: <Wrench className="w-4 h-4" />,
    lastUpdated: "2024-01-18",
    relevanceScore: 92,
  },
  {
    id: "intelligrid-pro",
    title: "IntelliGrid Pro Platform",
    description: "AI-powered vegetation management platform with predictive analytics and real-time monitoring",
    url: "/intelligrid-pro",
    category: "Products",
    icon: <Wrench className="w-4 h-4" />,
    lastUpdated: "2024-01-22",
    relevanceScore: 98,
  },
  // Features
  {
    id: "autonomous-drones",
    title: "Autonomous Drones",
    description: "Advanced autonomous drone technology for power line inspections with specialized sensors",
    url: "/features/autonomous-drones",
    category: "Features",
    icon: <Zap className="w-4 h-4" />,
    lastUpdated: "2024-01-19",
    relevanceScore: 89,
  },
  {
    id: "real-time-detection",
    title: "Real-time Detection",
    description: "Instant AI-powered threat and anomaly detection for vegetation management",
    url: "/features/real-time-detection",
    category: "Features",
    icon: <Zap className="w-4 h-4" />,
    lastUpdated: "2024-01-17",
    relevanceScore: 87,
  },
  // Technology
  {
    id: "drone-analysis",
    title: "Drone Video Analysis",
    description: "Advanced drone video processing and analysis technology for infrastructure monitoring",
    url: "/technology/drone-analysis",
    category: "Technology",
    icon: <MapPin className="w-4 h-4" />,
    lastUpdated: "2024-01-21",
    relevanceScore: 91,
  },
  // Company
  {
    id: "about",
    title: "About LineIntel",
    description: "Learn about our company, mission, and commitment to revolutionizing utility management",
    url: "/about",
    category: "Company",
    icon: <Users className="w-4 h-4" />,
    lastUpdated: "2024-01-15",
    relevanceScore: 85,
  },
  {
    id: "leadership",
    title: "Leadership Team",
    description: "Meet our executive leadership team and their expertise in utility technology",
    url: "/leadership",
    category: "Company",
    icon: <Users className="w-4 h-4" />,
    lastUpdated: "2024-01-16",
    relevanceScore: 83,
  },
  // Resources
  {
    id: "case-studies",
    title: "Case Studies",
    description: "Real-world success stories and implementation examples from utility companies",
    url: "/case-studies",
    category: "Resources",
    icon: <FileText className="w-4 h-4" />,
    lastUpdated: "2024-01-14",
    relevanceScore: 88,
  },
  {
    id: "documentation",
    title: "Technical Documentation",
    description: "Comprehensive technical documentation and user guides for our platforms",
    url: "/documentation",
    category: "Resources",
    icon: <FileText className="w-4 h-4" />,
    lastUpdated: "2024-01-13",
    relevanceScore: 86,
  },
]

export default function SearchPage() {
  const searchParams = useSearchParams()
  const [query, setQuery] = useState(searchParams.get("q") || "")
  const [results, setResults] = useState<SearchResult[]>([])
  const [filteredResults, setFilteredResults] = useState<SearchResult[]>([])
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [sortBy, setSortBy] = useState("relevance")
  const [isLoading, setIsLoading] = useState(false)

  const categories = ["All", "Products", "Features", "Technology", "Company", "Resources", "Support"]

  useEffect(() => {
    if (query.trim()) {
      performSearch(query)
    } else {
      setResults([])
      setFilteredResults([])
    }
  }, [query])

  useEffect(() => {
    filterAndSortResults()
  }, [results, selectedCategory, sortBy])

  const performSearch = (searchQuery: string) => {
    setIsLoading(true)

    // Simulate search delay
    setTimeout(() => {
      const filtered = allSearchResults.filter(
        (item) =>
          item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.category.toLowerCase().includes(searchQuery.toLowerCase()),
      )

      setResults(filtered)
      setIsLoading(false)
    }, 500)
  }

  const filterAndSortResults = () => {
    let filtered = results

    // Filter by category
    if (selectedCategory !== "All") {
      filtered = filtered.filter((item) => item.category === selectedCategory)
    }

    // Sort results
    filtered = [...filtered].sort((a, b) => {
      switch (sortBy) {
        case "relevance":
          return (b.relevanceScore || 0) - (a.relevanceScore || 0)
        case "date":
          return new Date(b.lastUpdated || "").getTime() - new Date(a.lastUpdated || "").getTime()
        case "title":
          return a.title.localeCompare(b.title)
        default:
          return 0
      }
    })

    setFilteredResults(filtered)
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (query.trim()) {
      performSearch(query)
    }
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Products":
        return "text-blue-400 bg-blue-500/20"
      case "Features":
        return "text-green-400 bg-green-500/20"
      case "Technology":
        return "text-purple-400 bg-purple-500/20"
      case "Company":
        return "text-orange-400 bg-orange-500/20"
      case "Resources":
        return "text-yellow-400 bg-yellow-500/20"
      case "Support":
        return "text-red-400 bg-red-500/20"
      default:
        return "text-gray-400 bg-gray-500/20"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950 text-white">
      <Navbar />

      <div className="pt-20">
        <div className="container mx-auto px-4 py-8">
          {/* Search Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Search <span className="text-teal-400">Results</span>
            </h1>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Find information across our products, features, documentation, and resources
            </p>
          </div>

          {/* Search Form */}
          <form onSubmit={handleSearch} className="max-w-4xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search products, features, documentation..."
                className="w-full pl-12 pr-4 py-4 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-lg"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 px-6 py-2 bg-teal-500 hover:bg-teal-400 text-gray-900 font-medium rounded-lg transition-colors"
              >
                Search
              </button>
            </div>
          </form>

          {/* Filters and Results */}
          {(results.length > 0 || query) && (
            <div className="max-w-6xl mx-auto">
              {/* Filter Bar */}
              <div className="flex flex-col md:flex-row items-center justify-between mb-6 p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                <div className="flex items-center space-x-4 mb-4 md:mb-0">
                  <Filter className="w-5 h-5 text-gray-400" />
                  <span className="text-sm text-gray-300">Filter by:</span>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-sm"
                  >
                    {categories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex items-center space-x-4">
                  <span className="text-sm text-gray-300">Sort by:</span>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-sm"
                  >
                    <option value="relevance">Relevance</option>
                    <option value="date">Date Updated</option>
                    <option value="title">Title</option>
                  </select>
                  <span className="text-sm text-gray-400">
                    {filteredResults.length} result{filteredResults.length !== 1 ? "s" : ""}
                  </span>
                </div>
              </div>

              {/* Search Results */}
              {isLoading ? (
                <div className="text-center py-12">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-400 mx-auto mb-4"></div>
                  <p className="text-gray-300">Searching...</p>
                </div>
              ) : filteredResults.length > 0 ? (
                <div className="space-y-6">
                  {filteredResults.map((result) => (
                    <div
                      key={result.id}
                      className="bg-gray-800/50 rounded-lg border border-gray-700 p-6 hover:border-teal-500/50 transition-colors"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <div className="p-2 bg-gray-700 rounded-lg">{result.icon}</div>
                          <div>
                            <a
                              href={result.url}
                              className="text-xl font-semibold text-white hover:text-teal-400 transition-colors"
                            >
                              {result.title}
                            </a>
                            <div className="flex items-center space-x-2 mt-1">
                              <span className={`text-xs px-2 py-1 rounded-full ${getCategoryColor(result.category)}`}>
                                {result.category}
                              </span>
                              {result.lastUpdated && (
                                <span className="text-xs text-gray-400 flex items-center">
                                  <Clock className="w-3 h-3 mr-1" />
                                  Updated {result.lastUpdated}
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                        {result.relevanceScore && (
                          <div className="text-sm text-gray-400">{result.relevanceScore}% match</div>
                        )}
                      </div>
                      <p className="text-gray-300 mb-4">{result.description}</p>
                      <a
                        href={result.url}
                        className="inline-flex items-center text-teal-400 hover:text-teal-300 transition-colors text-sm font-medium"
                      >
                        View Details
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                    </div>
                  ))}
                </div>
              ) : query ? (
                <div className="text-center py-12">
                  <Search className="w-16 h-16 text-gray-400 mx-auto mb-4 opacity-50" />
                  <h3 className="text-xl font-semibold text-white mb-2">No results found</h3>
                  <p className="text-gray-300 mb-6">
                    No results found for "{query}". Try different keywords or browse our sections.
                  </p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {["vegetation management", "drone inspection", "AI analysis", "mobile app"].map((suggestion) => (
                      <button
                        key={suggestion}
                        onClick={() => setQuery(suggestion)}
                        className="px-3 py-1 bg-gray-700 hover:bg-gray-600 text-gray-300 rounded-full text-sm transition-colors"
                      >
                        {suggestion}
                      </button>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
          )}

          {/* Popular Searches */}
          {!query && (
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold mb-6 text-center">Popular Searches</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    title: "Vegetation Management",
                    description: "AI-powered vegetation analysis solutions",
                    searches: "1,234 searches",
                  },
                  {
                    title: "Drone Technology",
                    description: "Autonomous drone inspection systems",
                    searches: "987 searches",
                  },
                  {
                    title: "Mobile App",
                    description: "Field inspection mobile application",
                    searches: "756 searches",
                  },
                  {
                    title: "Case Studies",
                    description: "Real-world implementation examples",
                    searches: "543 searches",
                  },
                  {
                    title: "API Integration",
                    description: "System integration capabilities",
                    searches: "432 searches",
                  },
                  {
                    title: "Support",
                    description: "Technical support and documentation",
                    searches: "321 searches",
                  },
                ].map((item, index) => (
                  <button
                    key={index}
                    onClick={() => setQuery(item.title)}
                    className="bg-gray-800/50 rounded-lg border border-gray-700 p-4 hover:border-teal-500/50 transition-colors text-left"
                  >
                    <h3 className="font-semibold text-white mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-300 mb-2">{item.description}</p>
                    <p className="text-xs text-gray-400">{item.searches}</p>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  )
}
