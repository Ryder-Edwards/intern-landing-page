import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import HowItWorks from "@/components/how-it-works"
import { CircuitBoard, FileCheck, Clock, Shield } from "lucide-react"

export default function ComplianceMonitoringPage() {
  const benefits = [
    {
      icon: <FileCheck className="w-8 h-8 text-teal-400" />,
      title: "Automated Reporting",
      description:
        "Generate compliance reports automatically with standardized documentation and regulatory-ready formats.",
    },
    {
      icon: <Clock className="w-8 h-8 text-teal-400" />,
      title: "Real-time Monitoring",
      description: "Continuous monitoring ensures compliance violations are detected and addressed immediately.",
    },
    {
      icon: <Shield className="w-8 h-8 text-teal-400" />,
      title: "Risk Mitigation",
      description: "Proactive identification of compliance risks helps avoid penalties and regulatory issues.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950 text-white">
      <Navbar />

      <section className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-teal-500/20 mb-6">
              <CircuitBoard className="w-8 h-8 text-teal-400" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Compliance <span className="text-teal-400">Monitoring</span>
            </h1>
            <p className="text-xl text-gray-300">
              Automated compliance checking and regulatory reporting to ensure adherence to utility standards and
              regulations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">The Challenge</h2>
              <p className="text-gray-300 mb-6">
                Utility companies must comply with numerous regulations including NERC standards, state requirements,
                and environmental regulations. Manual compliance monitoring is time-consuming, error-prone, and often
                reactive.
              </p>
              <ul className="space-y-3">
                {[
                  "Complex regulatory requirements",
                  "Manual documentation processes",
                  "Risk of compliance violations",
                  "Time-consuming audit preparation",
                  "Inconsistent monitoring practices",
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
                alt="Compliance monitoring dashboard"
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
                Our compliance monitoring solution automates regulatory tracking and reporting for seamless compliance
                management.
              </p>
            </div>
            <HowItWorks />
          </div>

          <div className="bg-gray-800/50 rounded-lg border border-gray-700 p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Streamline Your Compliance Process</h2>
            <p className="text-gray-300 mb-6">
              Learn how LineIntel can automate your compliance monitoring and reduce regulatory risk.
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
