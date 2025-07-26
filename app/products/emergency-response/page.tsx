import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import HowItWorks from "@/components/how-it-works"
import { Zap, Clock, MapPin, AlertCircle } from "lucide-react"

export default function EmergencyResponsePage() {
  const benefits = [
    {
      icon: <Clock className="w-8 h-8 text-teal-400" />,
      title: "Rapid Deployment",
      description:
        "Deploy drone teams within hours of storm events for immediate damage assessment and priority identification.",
    },
    {
      icon: <MapPin className="w-8 h-8 text-teal-400" />,
      title: "Real-time Mapping",
      description: "Live damage mapping and GPS coordinates help crews prioritize repairs and restore power faster.",
    },
    {
      icon: <AlertCircle className="w-8 h-8 text-teal-400" />,
      title: "Safety Assessment",
      description:
        "Identify hazardous conditions and safety risks before sending crews into potentially dangerous areas.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950 text-white">
      <Navbar />

      <section className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-teal-500/20 mb-6">
              <Zap className="w-8 h-8 text-teal-400" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Emergency <span className="text-teal-400">Response</span>
            </h1>
            <p className="text-xl text-gray-300">
              Rapid deployment for storm damage assessment and emergency inspections to accelerate power restoration.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">The Challenge</h2>
              <p className="text-gray-300 mb-6">
                After severe weather events, utilities need to quickly assess damage across their entire network to
                prioritize repairs and restore power. Traditional methods are slow and can put personnel at risk in
                dangerous conditions.
              </p>
              <ul className="space-y-3">
                {[
                  "Time-critical damage assessment",
                  "Dangerous post-storm conditions",
                  "Limited visibility of system-wide damage",
                  "Inefficient crew deployment",
                  "Customer communication challenges",
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
                alt="Emergency response storm damage assessment"
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
                Our emergency response solution provides rapid damage assessment and prioritized repair recommendations.
              </p>
            </div>
            <HowItWorks />
          </div>

          <div className="bg-gray-800/50 rounded-lg border border-gray-700 p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Accelerate Your Storm Recovery</h2>
            <p className="text-gray-300 mb-6">
              Contact us to learn how LineIntel can reduce your power restoration time by up to 50%.
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
