import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import {
  Smartphone,
  MapPin,
  FileText,
  MessageSquare,
  Calendar,
  CheckCircle,
  Star,
  Apple,
  Play,
  Zap,
  Shield,
  Clock,
} from "lucide-react"

export default function MobileAppPage() {
  const keyFeatures = [
    {
      icon: <FileText className="w-12 h-12 text-teal-400" />,
      title: "Instant Report Access",
      description:
        "View detailed inspection reports, high-resolution imagery, and AI analysis results instantly on your mobile device.",
      benefits: [
        "Offline report viewing",
        "High-resolution image gallery",
        "Interactive maps with GPS coordinates",
        "Export and share capabilities",
      ],
    },
    {
      icon: <MapPin className="w-12 h-12 text-teal-400" />,
      title: "Interactive Maps",
      description:
        "Navigate inspection data with interactive maps showing real-time locations of detected issues and maintenance priorities.",
      benefits: [
        "GPS-enabled navigation",
        "Layered data visualization",
        "Real-time status updates",
        "Custom filtering options",
      ],
    },
    {
      icon: <MessageSquare className="w-12 h-12 text-teal-400" />,
      title: "Communication Platform",
      description:
        "Streamlined communication and ticket resolution system for efficient team collaboration and issue tracking.",
      benefits: [
        "Real-time messaging",
        "Photo and document sharing",
        "Status notifications",
        "Team collaboration tools",
      ],
    },
    {
      icon: <Calendar className="w-12 h-12 text-teal-400" />,
      title: "Maintenance Scheduling",
      description:
        "Comprehensive task tracking and scheduling system to manage maintenance activities and team assignments.",
      benefits: ["Automated scheduling", "Task priority management", "Progress tracking", "Resource allocation"],
    },
  ]

  const appBenefits = [
    {
      icon: <Zap className="w-8 h-8 text-teal-400" />,
      title: "Instant Access",
      description: "Get immediate access to critical inspection data anywhere, anytime",
    },
    {
      icon: <Shield className="w-8 h-8 text-teal-400" />,
      title: "Secure & Reliable",
      description: "Enterprise-grade security with offline capabilities for field operations",
    },
    {
      icon: <Clock className="w-8 h-8 text-teal-400" />,
      title: "Real-time Updates",
      description: "Receive instant notifications about critical issues and maintenance updates",
    },
  ]

  const testimonials = [
    {
      name: "Mike Rodriguez",
      role: "Maintenance Supervisor, Tennessee Valley Authority",
      quote:
        "The LineIntel app has transformed how our field teams access and respond to inspection data. Everything we need is right at our fingertips.",
      rating: 5,
    },
    {
      name: "Sarah Chen",
      role: "Operations Manager, Duke Energy",
      quote:
        "The communication platform has streamlined our workflow significantly. Issues are resolved faster and nothing falls through the cracks.",
      rating: 5,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950 text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-teal-500/10 text-teal-400 text-sm font-medium mb-4">
                <Smartphone className="w-4 h-4 mr-2" />
                Now Available on Mobile
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                LineIntel <span className="text-teal-400">Mobile App</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Take the power of AI-driven power line inspection with you. Access reports, manage maintenance, and
                communicate with your team from anywhere in the field.
              </p>

              {/* Download Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a
                  href="#"
                  className="flex items-center justify-center px-6 py-3 bg-black hover:bg-gray-800 text-white rounded-lg transition-all duration-200"
                >
                  <Apple className="w-6 h-6 mr-3" />
                  <div className="text-left">
                    <div className="text-xs">Download on the</div>
                    <div className="text-lg font-semibold">App Store</div>
                  </div>
                </a>
                <a
                  href="#"
                  className="flex items-center justify-center px-6 py-3 bg-black hover:bg-gray-800 text-white rounded-lg transition-all duration-200"
                >
                  <Play className="w-6 h-6 mr-3" />
                  <div className="text-left">
                    <div className="text-xs">Get it on</div>
                    <div className="text-lg font-semibold">Google Play</div>
                  </div>
                </a>
              </div>

              <div className="flex items-center space-x-6 text-sm text-gray-400">
                <div className="flex items-center">
                  <Star className="w-4 h-4 text-yellow-400 mr-1" />
                  <span>4.8/5 Rating</span>
                </div>
                <div>10,000+ Downloads</div>
                <div>Free to Use</div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-500 to-blue-500 rounded-lg blur opacity-30"></div>
              <div className="relative bg-gray-800 rounded-lg p-8 border border-gray-700">
                <div className="text-center">
                  <Smartphone className="w-32 h-32 text-teal-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Available Now</h3>
                  <p className="text-gray-300">iOS 14+ and Android 8+</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Powerful <span className="text-teal-400">Features</span>
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Everything you need to manage power line inspections and maintenance operations from your mobile device.
            </p>
          </div>

          <div className="space-y-16">
            {keyFeatures.map((feature, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div className="flex items-center mb-4">
                    <div className="bg-teal-500/20 p-3 rounded-lg mr-4">{feature.icon}</div>
                    <h3 className="text-2xl font-bold">{feature.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-6 text-lg">{feature.description}</p>
                  <div className="space-y-3">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-teal-400 flex-shrink-0" />
                        <span className="text-gray-300">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div
                  className={`bg-gray-800/50 rounded-lg border border-gray-700 p-8 ${index % 2 === 1 ? "lg:col-start-1" : ""}`}
                >
                  <div className="text-center text-gray-400 py-12">
                    <Smartphone className="w-24 h-24 mx-auto mb-4 opacity-50" />
                    <p>App screenshot showcasing {feature.title.toLowerCase()} would be displayed here</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* App Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose LineIntel <span className="text-teal-400">Mobile</span>
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Built specifically for utility professionals who need reliable, secure access to critical infrastructure
              data.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {appBenefits.map((benefit, index) => (
              <div key={index} className="bg-gray-800/50 rounded-lg border border-gray-700 p-6 text-center">
                <div className="mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="bg-gray-800/50 rounded-lg border border-gray-700 p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-teal-400 mb-2">99.9%</div>
                <div className="text-gray-300 text-sm">Uptime</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-teal-400 mb-2">&lt;2s</div>
                <div className="text-gray-300 text-sm">Load Time</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-teal-400 mb-2">24/7</div>
                <div className="text-gray-300 text-sm">Support</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-teal-400 mb-2">256-bit</div>
                <div className="text-gray-300 text-sm">Encryption</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Our <span className="text-teal-400">Users Say</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-800/50 rounded-lg border border-gray-700 p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.quote}"</p>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-teal-500/10 to-blue-500/10 rounded-lg border border-teal-500/30 p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Get <span className="text-teal-400">Started?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Download the LineIntel mobile app today and transform how you manage power line inspections and
              maintenance operations.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a
                href="#"
                className="flex items-center justify-center px-8 py-4 bg-black hover:bg-gray-800 text-white rounded-lg transition-all duration-200"
              >
                <Apple className="w-8 h-8 mr-4" />
                <div className="text-left">
                  <div className="text-sm">Download on the</div>
                  <div className="text-xl font-semibold">App Store</div>
                </div>
              </a>
              <a
                href="#"
                className="flex items-center justify-center px-8 py-4 bg-black hover:bg-gray-800 text-white rounded-lg transition-all duration-200"
              >
                <Play className="w-8 h-8 mr-4" />
                <div className="text-left">
                  <div className="text-sm">Get it on</div>
                  <div className="text-xl font-semibold">Google Play</div>
                </div>
              </a>
            </div>

            <div className="text-sm text-gray-400">
              Free download • No subscription required • Works with existing LineIntel accounts
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked <span className="text-teal-400">Questions</span>
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "Is the LineIntel mobile app free?",
                answer:
                  "Yes, the LineIntel mobile app is completely free to download and use for existing LineIntel customers. No additional subscription fees are required.",
              },
              {
                question: "Does the app work offline?",
                answer:
                  "Yes, the app includes offline capabilities for viewing previously downloaded reports and maps. You can access critical data even without an internet connection.",
              },
              {
                question: "What devices are supported?",
                answer:
                  "The LineIntel app is available for iOS devices running iOS 14+ and Android devices running Android 8+. It's optimized for both phones and tablets.",
              },
              {
                question: "How secure is the mobile app?",
                answer:
                  "The app uses enterprise-grade 256-bit encryption and follows utility industry security standards. All data is securely synchronized with your LineIntel account.",
              },
              {
                question: "Can I share reports from the mobile app?",
                answer:
                  "Yes, you can easily export and share reports, images, and data directly from the mobile app via email, messaging, or cloud storage services.",
              },
            ].map((faq, index) => (
              <div key={index} className="bg-gray-800/50 rounded-lg border border-gray-700 p-6">
                <h3 className="font-semibold mb-2 text-teal-400">{faq.question}</h3>
                <p className="text-gray-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
