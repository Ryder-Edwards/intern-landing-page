import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import HowItWorks from "@/components/how-it-works"
import { BarChartIcon as ChartBar, TrendingUp, Calendar, Target } from "lucide-react"

export default function PredictiveMaintenancePage() {
  const benefits = [
    {
      icon: <TrendingUp className="w-8 h-8 text-teal-400" />,
      title: "Failure Prediction",
      description:
        "Advanced analytics predict equipment failures weeks or months in advance, allowing for planned maintenance.",
    },
    {
      icon: <Calendar className="w-8 h-8 text-teal-400" />,
      title: "Optimized Scheduling",
      description:
        "Data-driven maintenance scheduling reduces costs and maximizes equipment lifespan through optimal timing.",
    },
    {
      icon: <Target className="w-8 h-8 text-teal-400" />,
      title: "Resource Optimization",
      description:
        "Prioritize maintenance activities based on risk, criticality, and resource availability for maximum efficiency.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950 text-white">
      <Navbar />

      <section className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-teal-500/20 mb-6">
              <ChartBar className="w-8 h-8 text-teal-400" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Predictive <span className="text-teal-400">Maintenance</span>
            </h1>
            <p className="text-xl text-gray-300">
              Data-driven insights to predict and prevent equipment failures before they occur, optimizing maintenance
              schedules and costs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">The Challenge</h2>
              <p className="text-gray-300 mb-6">
                Traditional maintenance approaches are either reactive (fixing after failure) or time-based (scheduled
                regardless of condition). Both approaches are inefficient and costly, leading to unnecessary maintenance
                or unexpected failures.
              </p>
              <ul className="space-y-3">
                {[
                  "Unexpected equipment failures",
                  "Over-maintenance of healthy assets",
                  "Inefficient resource allocation",
                  "High emergency repair costs",
                  "Limited asset condition visibility",
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
                alt="Predictive maintenance analytics"
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
                Our predictive maintenance solution uses AI and machine learning to analyze asset condition and predict
                optimal maintenance timing.
              </p>
            </div>
            <HowItWorks />
          </div>

          <div className="bg-gray-800/50 rounded-lg border border-gray-700 p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Transform Your Maintenance Strategy</h2>
            <p className="text-gray-300 mb-6">
              Discover how LineIntel's predictive maintenance can reduce costs and improve reliability.
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
