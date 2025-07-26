"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Search, X, FileText, Users, Wrench, Zap, MapPin, Phone } from "lucide-react"
import { useRouter } from "next/navigation"

interface SearchResult {
  id: string
  title: string
  description: string
  url: string
  category: string
  icon: React.ReactNode
}

const searchData: SearchResult[] = [
  // Products
  {
    id: "vegetation-management",
    title: "Vegetation Management",
    description: "AI-powered vegetation analysis and management solutions",
    url: "/products/vegetation-management",
    category: "Products",
    icon: <Wrench className="w-4 h-4" />,
  },
  {
    id: "structural-inspection",
    title: "Structural Inspection",
    description: "Comprehensive infrastructure inspection services",
    url: "/products/structural-inspection",
    category: "Products",
    icon: <Wrench className="w-4 h-4" />,
  },
  {
    id: "compliance-monitoring",
    title: "Compliance Monitoring",
    description: "Regulatory compliance and monitoring solutions",
    url: "/products/compliance-monitoring",
    category: "Products",
    icon: <Wrench className="w-4 h-4" />,
  },
  {
    id: "predictive-maintenance",
    title: "Predictive Maintenance",
    description: "AI-driven predictive maintenance solutions",
    url: "/products/predictive-maintenance",
    category: "Products",
    icon: <Wrench className="w-4 h-4" />,
  },
  {
    id: "emergency-response",
    title: "Emergency Response",
    description: "Rapid response and damage assessment services",
    url: "/products/emergency-response",
    category: "Products",
    icon: <Wrench className="w-4 h-4" />,
  },
  // Features
  {
    id: "autonomous-drones",
    title: "Autonomous Drones",
    description: "Advanced autonomous drone technology for inspections",
    url: "/features/autonomous-drones",
    category: "Features",
    icon: <Zap className="w-4 h-4" />,
  },
  {
    id: "real-time-detection",
    title: "Real-time Detection",
    description: "Instant AI-powered threat and anomaly detection",
    url: "/features/real-time-detection",
    category: "Features",
    icon: <Zap className="w-4 h-4" />,
  },
  {
    id: "certified-vegetation-analysis",
    title: "Certified Vegetation Analysis",
    description: "ISA certified arborist-validated vegetation analysis",
    url: "/features/certified-vegetation-analysis",
    category: "Features",
    icon: <Zap className="w-4 h-4" />,
  },
  {
    id: "structural-analysis",
    title: "Structural Analysis",
    description: "Comprehensive structural integrity assessment",
    url: "/features/structural-analysis",
    category: "Features",
    icon: <Zap className="w-4 h-4" />,
  },
  // Technology
  {
    id: "drone-analysis",
    title: "Drone Video Analysis",
    description: "Advanced drone video processing and analysis technology",
    url: "/technology/drone-analysis",
    category: "Technology",
    icon: <MapPin className="w-4 h-4" />,
  },
  {
    id: "mobile-workflow",
    title: "Mobile App Workflow",
    description: "End-to-end mobile application workflow and process",
    url: "/mobile-app/workflow",
    category: "Technology",
    icon: <MapPin className="w-4 h-4" />,
  },
  // Company
  {
    id: "about",
    title: "About LineIntel",
    description: "Learn about our company, mission, and values",
    url: "/about",
    category: "Company",
    icon: <Users className="w-4 h-4" />,
  },
  {
    id: "leadership",
    title: "Leadership Team",
    description: "Meet our executive leadership team",
    url: "/leadership",
    category: "Company",
    icon: <Users className="w-4 h-4" />,
  },
  {
    id: "careers",
    title: "Careers",
    description: "Join our team and build the future of utility management",
    url: "/careers",
    category: "Company",
    icon: <Users className="w-4 h-4" />,
  },
  // Resources
  {
    id: "case-studies",
    title: "Case Studies",
    description: "Real-world success stories and implementation examples",
    url: "/case-studies",
    category: "Resources",
    icon: <FileText className="w-4 h-4" />,
  },
  {
    id: "whitepapers",
    title: "Whitepapers",
    description: "Technical documentation and research papers",
    url: "/whitepapers",
    category: "Resources",
    icon: <FileText className="w-4 h-4" />,
  },
  {
    id: "blog",
    title: "Blog",
    description: "Latest insights and industry updates",
    url: "/blog",
    category: "Resources",
    icon: <FileText className="w-4 h-4" />,
  },
  {
    id: "documentation",
    title: "Documentation",
    description: "Technical documentation and user guides",
    url: "/documentation",
    category: "Resources",
    icon: <FileText className="w-4 h-4" />,
  },
  // Contact
  {
    id: "support",
    title: "Support",
    description: "Get help and technical support",
    url: "/support",
    category: "Support",
    icon: <Phone className="w-4 h-4" />,
  },
  {
    id: "mobile-app",
    title: "Mobile App",
    description: "Download our mobile application",
    url: "/mobile-app",
    category: "Products",
    icon: <Wrench className="w-4 h-4" />,
  },
]

export default function GlobalSearch() {
  const [isOpen, setIsOpen] = useState(false)
  const [query, setQuery] = useState("")
  const [results, setResults] = useState<SearchResult[]>([])
  const [selectedIndex, setSelectedIndex] = useState(-1)
  const searchRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const router = useRouter()

  // Filter results based on query
  useEffect(() => {
    if (query.trim() === "") {
      setResults([])
      setSelectedIndex(-1)
      return
    }

    const filtered = searchData.filter(
      (item) =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.description.toLowerCase().includes(query.toLowerCase()) ||
        item.category.toLowerCase().includes(query.toLowerCase()),
    )

    setResults(filtered.slice(0, 8)) // Limit to 8 results
    setSelectedIndex(-1)
  }, [query])

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return

      switch (e.key) {
        case "ArrowDown":
          e.preventDefault()
          setSelectedIndex((prev) => (prev < results.length - 1 ? prev + 1 : prev))
          break
        case "ArrowUp":
          e.preventDefault()
          setSelectedIndex((prev) => (prev > 0 ? prev - 1 : -1))
          break
        case "Enter":
          e.preventDefault()
          if (selectedIndex >= 0 && results[selectedIndex]) {
            handleResultClick(results[selectedIndex])
          } else if (results.length > 0) {
            handleResultClick(results[0])
          }
          break
        case "Escape":
          setIsOpen(false)
          setQuery("")
          break
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [isOpen, results, selectedIndex])

  // Handle clicks outside search
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  // Handle global search shortcut (Ctrl/Cmd + K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault()
        setIsOpen(true)
        setTimeout(() => inputRef.current?.focus(), 100)
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [])

  const handleResultClick = (result: SearchResult) => {
    router.push(result.url)
    setIsOpen(false)
    setQuery("")
  }

  const handleInputFocus = () => {
    setIsOpen(true)
  }

  const clearSearch = () => {
    setQuery("")
    setResults([])
    inputRef.current?.focus()
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Products":
        return "text-blue-400"
      case "Features":
        return "text-green-400"
      case "Technology":
        return "text-purple-400"
      case "Company":
        return "text-orange-400"
      case "Resources":
        return "text-yellow-400"
      case "Support":
        return "text-red-400"
      default:
        return "text-gray-400"
    }
  }

  return (
    <div ref={searchRef} className="relative">
      {/* Search Input */}
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-4 w-4 text-gray-400" />
        </div>
        <input
          ref={inputRef}
          type="text"
          placeholder="Search... (⌘K)"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={handleInputFocus}
          className="w-full pl-10 pr-10 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
        />
        {query && (
          <button
            onClick={clearSearch}
            className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-white transition-colors duration-200"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>

      {/* Search Results Dropdown */}
      {isOpen && (query || results.length > 0) && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-gray-800 border border-gray-700 rounded-lg shadow-xl z-50 max-h-96 overflow-y-auto">
          {results.length > 0 ? (
            <>
              <div className="px-4 py-2 text-xs text-gray-400 border-b border-gray-700">
                {results.length} result{results.length !== 1 ? "s" : ""} found
              </div>
              {results.map((result, index) => (
                <button
                  key={result.id}
                  onClick={() => handleResultClick(result)}
                  className={`w-full px-4 py-3 text-left hover:bg-gray-700 transition-colors duration-200 border-b border-gray-700 last:border-b-0 ${
                    index === selectedIndex ? "bg-gray-700" : ""
                  }`}
                >
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 mt-1">{result.icon}</div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-2">
                        <h4 className="text-sm font-medium text-white truncate">{result.title}</h4>
                        <span
                          className={`text-xs px-2 py-1 rounded-full bg-gray-700 ${getCategoryColor(result.category)}`}
                        >
                          {result.category}
                        </span>
                      </div>
                      <p className="text-xs text-gray-400 mt-1 line-clamp-2">{result.description}</p>
                    </div>
                  </div>
                </button>
              ))}
            </>
          ) : query ? (
            <div className="px-4 py-8 text-center text-gray-400">
              <Search className="h-8 w-8 mx-auto mb-2 opacity-50" />
              <p className="text-sm">No results found for "{query}"</p>
              <p className="text-xs mt-1">Try different keywords or browse our sections</p>
            </div>
          ) : (
            <div className="px-4 py-6 text-center text-gray-400">
              <Search className="h-8 w-8 mx-auto mb-2 opacity-50" />
              <p className="text-sm">Start typing to search...</p>
              <p className="text-xs mt-1">Search products, features, documentation, and more</p>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
