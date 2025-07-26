import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Zap, Eye, AlertTriangle, Clock, Brain, Target } from "lucide-react"

export default function RealTimeDetectionPage() {
  const detectionTypes = [
    {
      icon: <AlertTriangle className="w-8 h-8 text-yellow-400" />,
      title: "Vegetation Encroachment",
      description: "Identifies trees and vegetation within critical clearance zones",
      accuracy: "99.2%",
      responseTime: "< 2 seconds",
    },
    {
      icon: <Target className="w-8 h-8 text-red-400" />,
      title: "Structural Damage",
      description: "Detects corrosion, cracks, and hardware failures",
      accuracy: "97.8%",
      responseTime: "< 3 seconds",
    },
    {
      icon: <Eye className="w-8 h-8 text-blue-400" />,
      title: "Thermal Anomalies",
      description: "Identifies hot spots and electrical issues",
      accuracy: "98.5%",
      responseTime: "< 1 second",
    },
  ]

  const features = [
    {
      icon: <Brain className="w-6 h-6 text-teal-400" />,
      title: "Machine Learning Models",
      description: "Continuously trained on millions of power line images for improved accuracy",
    },
    {
      icon: <Clock className="w-6 h-6 text-teal-400" />,
      title: "Instant Alerts",
      description: "Critical issues flagged immediately for rapid response",
    },
    {
      icon: <Zap className="w-6 h-6 text-teal-400" />,
      title: "Edge Computing",
      description: "On-board processing eliminates latency and ensures real-time analysis",
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
              Real-time <span className="text-teal-400">Detection</span>
            </h1>
            <p className="text-xl text-gray-300">
              Advanced AI algorithms analyze power line imagery in real-time, instantly identifying critical issues and
              flagging them for immediate attention. Our edge computing technology ensures zero latency in threat
              detection.
            </p>
          </div>

          {/* Detection Capabilities */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Detection Capabilities</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {detectionTypes.map((detection, index) => (
                <div key={index} className="bg-gray-800/50 rounded-lg border border-gray-700 p-6 text-center">
                  <div className="mb-4">{detection.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{detection.title}</h3>
                  <p className="text-gray-300 mb-4">{detection.description}</p>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-400">Accuracy:</span>
                      <span className="text-teal-400 font-medium">{detection.accuracy}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-400">Response Time:</span>
                      <span className="text-teal-400 font-medium">{detection.responseTime}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* How It Works */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">How It Works</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-teal-500 text-gray-900 rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Image Capture</h3>
                    <p className="text-gray-300">
                      High-resolution cameras capture detailed imagery of power line infrastructure
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-teal-500 text-gray-900 rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">AI Analysis</h3>
                    <p className="text-gray-300">
                      Machine learning models analyze images for anomalies and potential issues
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-teal-500 text-gray-900 rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Instant Classification</h3>
                    <p className="text-gray-300">Issues are classified by type, severity, and priority level</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-teal-500 text-gray-900 rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Alert Generation</h3>
                    <p className="text-gray-300">Critical issues trigger immediate alerts to maintenance teams</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">Key Features</h2>
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="bg-gray-800/50 rounded-lg border border-gray-700 p-4">
                    <div className="flex items-start space-x-3">
                      <div className="bg-teal-500/20 p-2 rounded-lg flex-shrink-0">{feature.icon}</div>
                      <div>
                        <h3 className="font-semibold mb-1">{feature.title}</h3>
                        <p className="text-gray-300 text-sm">{feature.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Performance Metrics */}
          <div className="bg-gray-800/50 rounded-lg border border-gray-700 p-8 mb-16">
            <h2 className="text-2xl font-bold mb-6 text-center">Performance Metrics</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-teal-400 mb-2">99.2%</div>
                <div className="text-gray-300 text-sm">Detection Accuracy</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-teal-400 mb-2">&lt;2s</div>
                <div className="text-gray-300 text-sm">Average Response Time</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-teal-400 mb-2">24/7</div>
                <div className="text-gray-300 text-sm">Continuous Monitoring</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-teal-400 mb-2">0.1%</div>
                <div className="text-gray-300 text-sm">False Positive Rate</div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gray-800/50 rounded-lg border border-gray-700 p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Experience Real-time Detection</h2>
            <p className="text-gray-300 mb-6">
              See how our AI-powered real-time detection can identify critical issues before they become problems.
            </p>
            <a
              href="/#contact"
              className="inline-block px-8 py-3 bg-teal-500 hover:bg-teal-400 text-gray-900 font-medium rounded-md transition-all duration-200"
            >
              Request a Demo
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
