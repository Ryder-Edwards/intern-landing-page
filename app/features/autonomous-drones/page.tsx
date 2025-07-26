import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Plane, Shield, Clock, Zap, CheckCircle, Settings } from "lucide-react"

export default function AutonomousDronesPage() {
  const capabilities = [
    {
      icon: <Shield className="w-8 h-8 text-teal-400" />,
      title: "Advanced Safety Systems",
      description:
        "Multiple redundant safety systems including obstacle avoidance, emergency landing protocols, and real-time monitoring.",
    },
    {
      icon: <Clock className="w-8 h-8 text-teal-400" />,
      title: "Extended Flight Time",
      description:
        "Up to 45 minutes of continuous flight time with hot-swappable battery systems for extended missions.",
    },
    {
      icon: <Zap className="w-8 h-8 text-teal-400" />,
      title: "High-Resolution Sensors",
      description: "4K cameras, thermal imaging, and LiDAR sensors capture detailed data for comprehensive analysis.",
    },
    {
      icon: <Settings className="w-8 h-8 text-teal-400" />,
      title: "Autonomous Navigation",
      description: "GPS-guided flight paths with real-time adjustments for weather conditions and obstacles.",
    },
  ]

  const specifications = [
    { label: "Flight Time", value: "45 minutes" },
    { label: "Max Speed", value: "65 mph" },
    { label: "Operating Range", value: "5 miles BVLOS" },
    { label: "Payload Capacity", value: "2.5 kg" },
    { label: "Wind Resistance", value: "25 mph gusts" },
    { label: "Operating Temperature", value: "-10°C to 50°C" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950 text-white">
      <Navbar />

      <section className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-teal-500/20 mb-6">
              <Plane className="w-8 h-8 text-teal-400" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Autonomous <span className="text-teal-400">Drones</span>
            </h1>
            <p className="text-xl text-gray-300">
              Custom-built autonomous drones equipped with specialized sensors for comprehensive power line inspection.
              Our fleet operates safely and efficiently along predefined routes, eliminating human risk while delivering
              superior data quality.
            </p>
          </div>

          {/* Hero Image */}
          <div className="mb-16">
            <div className="relative rounded-lg overflow-hidden">
              <img
                src="/drone-inspection.jpg"
                alt="LineIntel autonomous drone in flight"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <div className="flex items-center space-x-2 text-teal-400">
                  <CheckCircle className="w-5 h-5" />
                  <span className="font-medium">FAA Part 107 & BVLOS Certified</span>
                </div>
              </div>
            </div>
          </div>

          {/* Key Capabilities */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Key Capabilities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {capabilities.map((capability, index) => (
                <div key={index} className="bg-gray-800/50 rounded-lg border border-gray-700 p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-teal-500/20 p-3 rounded-lg flex-shrink-0">{capability.icon}</div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{capability.title}</h3>
                      <p className="text-gray-300">{capability.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Specifications */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Technical Specifications</h2>
              <div className="bg-gray-800/50 rounded-lg border border-gray-700 p-6">
                <div className="space-y-4">
                  {specifications.map((spec, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center py-2 border-b border-gray-700 last:border-b-0"
                    >
                      <span className="text-gray-300">{spec.label}</span>
                      <span className="text-teal-400 font-medium">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">Safety & Compliance</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-teal-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">FAA Part 107 Certified</h3>
                    <p className="text-gray-300 text-sm">All pilots are commercially licensed and regularly trained</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-teal-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">BVLOS Authorization</h3>
                    <p className="text-gray-300 text-sm">Beyond Visual Line of Sight operations approved by FAA</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-teal-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Redundant Safety Systems</h3>
                    <p className="text-gray-300 text-sm">
                      Multiple backup systems ensure safe operation in all conditions
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-teal-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Insurance Coverage</h3>
                    <p className="text-gray-300 text-sm">Comprehensive liability and equipment coverage</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gray-800/50 rounded-lg border border-gray-700 p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Experience Autonomous Drone Technology</h2>
            <p className="text-gray-300 mb-6">
              See how our autonomous drone fleet can transform your power line inspection operations with zero risk to
              personnel.
            </p>
            <a
              href="/#contact"
              className="inline-block px-8 py-3 bg-teal-500 hover:bg-teal-400 text-gray-900 font-medium rounded-md transition-all duration-200"
            >
              Schedule a Demo
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
