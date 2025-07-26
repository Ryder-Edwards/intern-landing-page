import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import HowItWorks from "@/components/how-it-works"
import { Shield, Search, AlertTriangle, Wrench } from "lucide-react"

export default function StructuralInspectionPage() {
  const benefits = [
    {
      icon: <Search className="w-8 h-8 text-teal-400" />,
      title: "Detailed Analysis",
      description:
        "High-resolution imaging and thermal analysis detect corrosion, cracks, and structural weaknesses invisible to the naked eye.",
    },
    {
      icon: <AlertTriangle className="w-8 h-8 text-teal-400" />,
      title: "Early Detection",
      description:
        "Identify structural issues before they become critical failures, preventing costly emergency repairs and outages.",
    },
    {
      icon: <Wrench className="w-8 h-8 text-teal-400" />,
      title: "Maintenance Planning",
      description: "Prioritized maintenance recommendations based on severity, risk assessment, and asset criticality.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950 text-white">
      <Navbar />

      <section className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-teal-500/20 mb-6">
              <Shield className="w-8 h-8 text-teal-400" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Structural <span className="text-teal-400">Inspection</span>
            </h1>
            <p className="text-xl text-gray-300">
              Comprehensive analysis of poles, towers, and hardware using advanced imaging and AI to detect damage,
              wear, and potential failures.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">The Challenge</h2>
              <p className="text-gray-300 mb-6">
                Power infrastructure components are subject to constant stress from weather, age, and electrical loads.
                Traditional visual inspections often miss critical structural issues that can lead to catastrophic
                failures and extended outages.
              </p>
              <ul className="space-y-3">
                {[
                  "Hidden corrosion and metal fatigue",
                  "Difficult-to-access tower components",
                  "Inconsistent inspection quality",
                  "Limited documentation and tracking",
                  "Reactive maintenance approach",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-red-400 mr-2">•</span>
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <img
                src="/placeholder.svg?height=400&width=600"
                alt="Power line tower structural inspection"
                className="rounded-lg w-full"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-gray-800/50 rounded-lg border border-gray-700 p-6 text-center">
                <div className="mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>

          {/* How It Works Section */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                How <span className="text-teal-400">It Works</span>
              </h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Our structural inspection solution uses advanced sensors and AI analysis to provide comprehensive asset
                health monitoring.
              </p>
            </div>
            <HowItWorks />
          </div>

          <div className="bg-gray-800/50 rounded-lg border border-gray-700 p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Enhance Your Infrastructure Reliability</h2>
            <p className="text-gray-300 mb-6">
              Discover how LineIntel's structural inspection can prevent failures and extend asset life.
            </p>
            <a
              href="/#contact"
              className="inline-block px-8 py-3 bg-teal-500 hover:bg-teal-400 text-gray-900 font-medium rounded-md transition-all duration-200"
            >
              Get Started
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
