import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { TrendingUp, Clock, MapPin, Users } from "lucide-react"

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      title: "Tennessee Valley Authority: 80% Cost Reduction in Power Line Inspection",
      client: "Tennessee Valley Authority",
      industry: "Public Utility",
      location: "Tennessee, USA",
      duration: "6 months",
      teamSize: "12 people",
      challenge:
        "TVA needed to inspect 17,000 miles of transmission lines across seven states. Traditional helicopter inspections were expensive, dangerous, and time-consuming.",
      solution:
        "Deployed autonomous drone fleet with AI-powered vegetation and structural analysis. Integrated with TVA's existing asset management systems.",
      results: [
        "80% reduction in inspection costs",
        "95% faster data collection",
        "99.2% accuracy in vegetation detection",
        "Zero safety incidents",
        "Identified 340 critical maintenance issues",
      ],
      image: "/placeholder.svg?height=400&width=600",
      featured: true,
    },
    {
      title: "Duke Energy: Predictive Maintenance Program Success",
      client: "Duke Energy",
      industry: "Investor-Owned Utility",
      location: "North Carolina, USA",
      duration: "12 months",
      teamSize: "8 people",
      challenge:
        "Reactive maintenance approach led to unexpected outages and high emergency repair costs. Need for proactive identification of equipment issues.",
      solution:
        "Implemented AI-driven predictive maintenance using thermal imaging and structural analysis. Monthly automated inspections of critical corridors.",
      results: [
        "60% reduction in unplanned outages",
        "45% decrease in emergency maintenance costs",
        "Improved customer satisfaction scores",
        "Extended equipment lifespan by 15%",
      ],
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "Georgia Power: Storm Preparedness Enhancement",
      client: "Georgia Power",
      industry: "Investor-Owned Utility",
      location: "Georgia, USA",
      duration: "4 months",
      teamSize: "6 people",
      challenge:
        "Hurricane season preparations required rapid assessment of vegetation risks across thousands of miles of power lines.",
      solution:
        "Rapid deployment of drone inspection teams with real-time AI analysis. Priority-based vegetation management recommendations.",
      results: [
        "Completed 5,000 miles of inspection in 30 days",
        "Identified 1,200 high-risk vegetation areas",
        "Prevented estimated 50+ storm-related outages",
        "Saved $2.3M in potential outage costs",
      ],
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "Entergy: Compliance Monitoring Automation",
      client: "Entergy Corporation",
      industry: "Public Utility",
      location: "Louisiana, USA",
      duration: "8 months",
      teamSize: "10 people",
      challenge:
        "Manual compliance documentation for NERC standards was labor-intensive and prone to errors. Needed automated reporting system.",
      solution:
        "Developed automated compliance monitoring with AI-generated reports. Integration with regulatory reporting systems.",
      results: [
        "90% reduction in compliance documentation time",
        "100% accuracy in regulatory reporting",
        "Streamlined audit processes",
        "Improved regulatory relationships",
      ],
      image: "/placeholder.svg?height=400&width=600",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950 text-white">
      <Navbar />

      <section className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Success <span className="text-teal-400">Stories</span>
            </h1>
            <p className="text-xl text-gray-300">
              Real-world results from utility companies using LineIntel's AI-powered inspection technology.
            </p>
          </div>

          {/* Featured Case Study */}
          {caseStudies
            .filter((study) => study.featured)
            .map((study, index) => (
              <div
                key={index}
                className="bg-gray-800/50 rounded-lg border border-gray-700 overflow-hidden mb-16 hover:border-teal-500/50 transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  <div className="aspect-video lg:aspect-auto bg-gray-700 relative overflow-hidden">
                    <img
                      src={study.image || "/placeholder.svg"}
                      alt={study.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-teal-500 text-gray-900 text-xs font-medium rounded-full">
                        Featured Case Study
                      </span>
                    </div>
                  </div>
                  <div className="p-8">
                    <h2 className="text-2xl font-bold mb-4">{study.title}</h2>

                    <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                      <div className="flex items-center text-gray-400">
                        <MapPin className="w-4 h-4 mr-2" />
                        {study.location}
                      </div>
                      <div className="flex items-center text-gray-400">
                        <Clock className="w-4 h-4 mr-2" />
                        {study.duration}
                      </div>
                      <div className="flex items-center text-gray-400">
                        <Users className="w-4 h-4 mr-2" />
                        {study.teamSize}
                      </div>
                      <div className="flex items-center text-gray-400">
                        <TrendingUp className="w-4 h-4 mr-2" />
                        {study.industry}
                      </div>
                    </div>

                    <div className="mb-6">
                      <h3 className="font-semibold text-teal-400 mb-2">Challenge</h3>
                      <p className="text-gray-300 text-sm mb-4">{study.challenge}</p>

                      <h3 className="font-semibold text-teal-400 mb-2">Solution</h3>
                      <p className="text-gray-300 text-sm">{study.solution}</p>
                    </div>

                    <div>
                      <h3 className="font-semibold text-teal-400 mb-3">Key Results</h3>
                      <ul className="space-y-2">
                        {study.results.map((result, resultIndex) => (
                          <li key={resultIndex} className="flex items-start">
                            <span className="text-teal-400 mr-2">✓</span>
                            <span className="text-gray-300 text-sm">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}

          {/* Other Case Studies */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies
              .filter((study) => !study.featured)
              .map((study, index) => (
                <div
                  key={index}
                  className="bg-gray-800/50 rounded-lg border border-gray-700 overflow-hidden hover:border-teal-500/50 transition-all duration-300"
                >
                  <div className="aspect-video bg-gray-700 relative overflow-hidden">
                    <img
                      src={study.image || "/placeholder.svg"}
                      alt={study.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-4">{study.title}</h3>

                    <div className="grid grid-cols-2 gap-3 mb-4 text-xs">
                      <div className="flex items-center text-gray-400">
                        <MapPin className="w-3 h-3 mr-1" />
                        {study.location}
                      </div>
                      <div className="flex items-center text-gray-400">
                        <Clock className="w-3 h-3 mr-1" />
                        {study.duration}
                      </div>
                    </div>

                    <p className="text-gray-300 text-sm mb-4 line-clamp-3">{study.challenge}</p>

                    <div className="mb-4">
                      <h4 className="font-semibold text-teal-400 mb-2 text-sm">Key Results</h4>
                      <ul className="space-y-1">
                        {study.results.slice(0, 3).map((result, resultIndex) => (
                          <li key={resultIndex} className="flex items-start">
                            <span className="text-teal-400 mr-2 text-xs">✓</span>
                            <span className="text-gray-300 text-xs">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <button className="text-teal-400 hover:text-teal-300 transition-colors text-sm font-medium">
                      Read Full Case Study →
                    </button>
                  </div>
                </div>
              ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 bg-gray-800/50 rounded-lg border border-gray-700 p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Transform Your Operations?</h2>
            <p className="text-gray-300 mb-6">
              Join these leading utilities in revolutionizing power line inspection with AI technology.
            </p>
            <a
              href="/#contact"
              className="inline-block px-8 py-3 bg-teal-500 hover:bg-teal-400 text-gray-900 font-medium rounded-md transition-all duration-200"
            >
              Start Your Success Story
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
