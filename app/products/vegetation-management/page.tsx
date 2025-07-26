import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import HowItWorks from "@/components/how-it-works"
import { Leaf, TrendingUp, Shield, Clock, Award } from "lucide-react"

export default function VegetationManagementPage() {
  const benefits = [
    {
      icon: <Award className="w-8 h-8 text-teal-400" />,
      title: "ISA Certified Reports",
      description:
        "Our ISA Certified Arborist provides expert vegetation analysis and regulatory-compliant reports that meet industry standards.",
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-teal-400" />,
      title: "Predictive Growth Modeling",
      description:
        "AI algorithms predict vegetation growth patterns to optimize maintenance scheduling and prevent future encroachments.",
    },
    {
      icon: <Shield className="w-8 h-8 text-teal-400" />,
      title: "Risk Assessment",
      description:
        "Automated risk scoring based on vegetation proximity, species type, growth rate, and weather conditions.",
    },
    {
      icon: <Clock className="w-8 h-8 text-teal-400" />,
      title: "Proactive Maintenance",
      description:
        "Identify and address vegetation issues before they cause outages, reducing emergency maintenance costs.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950 text-white">
      <Navbar />

      <section className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-teal-500/20 mb-6">
              <Leaf className="w-8 h-8 text-teal-400" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Vegetation <span className="text-teal-400">Management</span>
            </h1>
            <p className="text-xl text-gray-300">
              AI-powered vegetation detection and growth prediction to prevent power outages and optimize maintenance
              schedules. Backed by ISA Certified Arborist expertise for regulatory-compliant reports.
            </p>
          </div>

          {/* Competitive Advantage Callout */}
          <div className="bg-gradient-to-r from-teal-500/10 to-blue-500/10 rounded-lg border border-teal-500/30 p-6 mb-16 text-center">
            <div className="flex items-center justify-center mb-4">
              <Award className="w-8 h-8 text-teal-400 mr-3" />
              <h2 className="text-2xl font-bold">Our Unique Advantage</h2>
            </div>
            <p className="text-gray-300 max-w-3xl mx-auto">
              LineIntel is the only drone inspection company with an ISA Certified Arborist on staff. This means every
              vegetation report you receive is backed by certified expertise, ensuring regulatory compliance and
              providing the botanical analysis that utilities require for proper vegetation management decisions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">The Challenge</h2>
              <p className="text-gray-300 mb-6">
                Vegetation encroachment is the leading cause of power outages, responsible for over 40% of all
                distribution system interruptions. Traditional vegetation management relies on scheduled maintenance
                cycles that often miss fast-growing vegetation or fail to account for seasonal variations.
              </p>
              <ul className="space-y-3">
                {[
                  "Unpredictable vegetation growth patterns",
                  "Seasonal and weather-related variations",
                  "High costs of emergency tree trimming",
                  "Customer complaints about outages",
                  "Regulatory compliance requirements",
                  "Lack of certified botanical expertise",
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
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/istockphoto-525343076-612x612.jpg-mchciKVVM0oSerpedjKiRHE7AoLgPI.jpeg"
                alt="Vegetation near power lines"
                className="rounded-lg w-full"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
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
                Our vegetation management solution combines autonomous drones, AI analysis, and certified arborist
                expertise for comprehensive vegetation management.
              </p>
            </div>
            <HowItWorks />
          </div>

          <div className="bg-gray-800/50 rounded-lg border border-gray-700 p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Optimize Your Vegetation Management?</h2>
            <p className="text-gray-300 mb-6">
              Contact us to learn how LineIntel's certified arborist expertise can reduce your vegetation-related
              outages by up to 80% while ensuring regulatory compliance.
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
