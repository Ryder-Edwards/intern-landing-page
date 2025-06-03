import Image from "next/image"
import { CircuitBoard, Zap, Shield, BarChartIcon as ChartBar, DrillIcon as Drone, Leaf } from "lucide-react"
import ContactForm from "@/components/contact-form"
import FeatureCard from "@/components/feature-card"
import HowItWorks from "@/components/how-it-works"
import InteractiveDemo from "@/components/interactive-demo"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950 text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute inset-0 bg-[url('/circuit-pattern.png')] bg-repeat opacity-10"></div>
        </div>
        <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-teal-500/10 text-teal-400 text-sm font-medium mb-2">
                <span className="mr-1">•</span> Launching Soon
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-teal-200">
                  AI-Powered
                </span>{" "}
                Power Line Inspection
              </h1>
              <p className="text-xl text-gray-300">
                Advanced drone technology and artificial intelligence to detect vegetation hazards, structural issues,
                and compliance risks before they become problems.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#contact"
                  className="px-8 py-3 bg-teal-500 hover:bg-teal-400 text-gray-900 font-medium rounded-md transition-all duration-200 text-center"
                >
                  Contact Us
                </a>
                <a
                  href="#how-it-works"
                  className="px-8 py-3 bg-gray-800 hover:bg-gray-700 text-white font-medium rounded-md border border-gray-700 transition-all duration-200 text-center"
                >
                  Learn More
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-500 to-blue-500 rounded-lg blur opacity-30 animate-pulse"></div>
              <div className="relative bg-gray-800 rounded-lg overflow-hidden border border-gray-700">
                <Image
                  src="/drone-inspection.jpg"
                  alt="Drone inspecting power lines"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover rounded-lg"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900 to-transparent p-6">
                  <div className="flex items-center space-x-2 text-teal-400">
                    <Zap size={18} />
                    <span className="text-sm font-medium">AI Detection Active</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="py-20 bg-gray-900/50" id="solution">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              The LineIntel <span className="text-teal-400">Advantage</span>
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Traditional power line inspection is costly, time-consuming, and dangerous. LineIntel transforms this
              critical infrastructure maintenance with cutting-edge technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 space-y-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-red-400 flex items-center">
                  <span className="mr-2">⚠️</span> Traditional Approach
                </h3>
                <ul className="space-y-3">
                  {[
                    "Manual helicopter or ground inspections",
                    "High risk to personnel safety",
                    "Expensive and time-consuming",
                    "Inconsistent data collection",
                    "Reactive maintenance approach",
                    "Limited data analysis capabilities",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-red-400 mr-2">✕</span>
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 space-y-6 relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-500/20 to-blue-500/20 rounded-lg blur-sm"></div>
              <div className="relative space-y-4">
                <h3 className="text-xl font-semibold text-teal-400 flex items-center">
                  <span className="mr-2">✓</span> The LineIntel Solution
                </h3>
                <ul className="space-y-3">
                  {[
                    "Autonomous drone fleet deployment",
                    "Zero risk to personnel",
                    "80% cost reduction",
                    "Standardized high-resolution data",
                    "Predictive maintenance with AI",
                    "Advanced analytics and reporting",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-teal-400 mr-2">✓</span>
                      <span className="text-gray-200">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 relative" id="how-it-works">
        <div className="absolute inset-0 bg-[url('/circuit-pattern.png')] bg-repeat opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How <span className="text-teal-400">LineIntel</span> Works
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Our end-to-end solution combines autonomous drones, AI-powered analysis, and actionable insights to
              revolutionize power line inspection and maintenance.
            </p>
          </div>

          <HowItWorks />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-900/50" id="features">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Advanced <span className="text-teal-400">Features</span>
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              LineIntel combines cutting-edge hardware and software to deliver comprehensive power line inspection
              solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Drone className="w-10 h-10 text-teal-400" />}
              title="Autonomous Drones"
              description="Custom-built drones with specialized sensors for power line inspection that operate autonomously along predefined routes."
            />
            <FeatureCard
              icon={<Zap className="w-10 h-10 text-teal-400" />}
              title="Real-time Detection"
              description="AI algorithms identify issues in real-time, flagging critical problems for immediate attention."
            />
            <FeatureCard
              icon={<Leaf className="w-10 h-10 text-teal-400" />}
              title="Vegetation Management"
              description="Precise identification of encroaching vegetation with growth prediction models to prevent outages."
            />
            <FeatureCard
              icon={<Shield className="w-10 h-10 text-teal-400" />}
              title="Structural Analysis"
              description="Detailed inspection of towers, poles, and hardware to detect corrosion, damage, and other structural issues."
            />
            <FeatureCard
              icon={<ChartBar className="w-10 h-10 text-teal-400" />}
              title="Analytics Dashboard"
              description="Comprehensive reporting with prioritized maintenance recommendations and historical comparison."
            />
            <FeatureCard
              icon={<CircuitBoard className="w-10 h-10 text-teal-400" />}
              title="Integration API"
              description="Seamless integration with existing asset management and maintenance planning systems."
            />
          </div>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              See <span className="text-teal-400">AI Detection</span> in Action
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Hover over the image to see how our AI identifies and categorizes potential issues in real-time.
            </p>
          </div>

          <InteractiveDemo />
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-900/50" id="contact">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to <span className="text-teal-400">Transform</span> Your Power Line Inspections?
              </h2>
              <p className="text-gray-300 mb-6">
                Contact us today to learn how LineIntel can help your utility company improve safety, reduce costs, and
                enhance reliability through AI-powered inspection technology.
              </p>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-gray-800 p-3 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-teal-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white">Email</h3>
                    <p className="text-gray-300">info@lineintel.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-gray-800 p-3 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-teal-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white">Phone</h3>
                    <p className="text-gray-300">(555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-gray-800 p-3 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-teal-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white">Location</h3>
                    <p className="text-gray-300">San Francisco, CA</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700 relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-500/20 to-blue-500/20 rounded-lg blur-sm"></div>
              <div className="relative">
                <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
