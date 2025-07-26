import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { MessageCircle, Phone, Mail, Clock, HelpCircle, Book } from "lucide-react"

export default function SupportPage() {
  const supportOptions = [
    {
      title: "Live Chat",
      description: "Get instant help from our technical support team",
      icon: <MessageCircle className="w-8 h-8" />,
      availability: "24/7",
      responseTime: "< 5 minutes",
      action: "Start Chat",
    },
    {
      title: "Phone Support",
      description: "Speak directly with our engineers",
      icon: <Phone className="w-8 h-8" />,
      availability: "Mon-Fri 8AM-6PM EST",
      responseTime: "Immediate",
      action: "Call Now",
    },
    {
      title: "Email Support",
      description: "Detailed technical assistance via email",
      icon: <Mail className="w-8 h-8" />,
      availability: "24/7",
      responseTime: "< 4 hours",
      action: "Send Email",
    },
  ]

  const faq = [
    {
      question: "How accurate is LineIntel's vegetation detection?",
      answer:
        "Our AI models achieve 99.2% accuracy in vegetation encroachment detection, with continuous improvements through machine learning updates.",
    },
    {
      question: "What drone certifications do I need?",
      answer:
        "LineIntel handles all drone operations. Our pilots are FAA Part 107 certified and we have Beyond Visual Line of Sight (BVLOS) approvals.",
    },
    {
      question: "How does data integration work?",
      answer:
        "We provide REST APIs and can integrate with most asset management systems including GIS platforms, SCADA systems, and maintenance databases.",
    },
    {
      question: "What's included in inspection reports?",
      answer:
        "Reports include high-resolution imagery, AI detection results, GPS coordinates, priority rankings, and maintenance recommendations.",
    },
    {
      question: "How quickly can inspections be completed?",
      answer:
        "Typical inspection speeds are 50-100 miles per day depending on terrain and weather conditions, with results available within 24 hours.",
    },
    {
      question: "Is my data secure?",
      answer:
        "Yes, we use enterprise-grade encryption, secure cloud storage, and comply with utility industry security standards including NERC CIP.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950 text-white">
      <Navbar />

      <section className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-teal-400">Support</span> Center
            </h1>
            <p className="text-xl text-gray-300">
              Get the help you need from our expert technical support team. We're here to ensure your success with
              LineIntel.
            </p>
          </div>

          {/* Contact Options */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {supportOptions.map((option, index) => (
              <div
                key={index}
                className="bg-gray-800/50 rounded-lg border border-gray-700 p-6 text-center hover:border-teal-500/50 transition-all duration-300"
              >
                <div className="bg-teal-500/20 p-4 rounded-full inline-block mb-4">
                  <div className="text-teal-400">{option.icon}</div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{option.title}</h3>
                <p className="text-gray-300 mb-4">{option.description}</p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center justify-center text-sm text-gray-400">
                    <Clock className="w-4 h-4 mr-2" />
                    {option.availability}
                  </div>
                  <div className="text-sm text-teal-400">Response: {option.responseTime}</div>
                </div>
                <button className="w-full px-4 py-2 bg-teal-500 hover:bg-teal-400 text-gray-900 font-medium rounded-md transition-all duration-200">
                  {option.action}
                </button>
              </div>
            ))}
          </div>

          {/* Emergency Support */}
          <div className="bg-red-900/20 border border-red-500/50 rounded-lg p-6 mb-16 text-center">
            <h2 className="text-xl font-semibold mb-2 text-red-400">Emergency Support</h2>
            <p className="text-gray-300 mb-4">
              For critical issues affecting active power line inspections or safety concerns. Our support team operates
              from Tennessee and Florida.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+1-555-363-7436"
                className="px-6 py-2 bg-red-500 hover:bg-red-400 text-white font-medium rounded-md transition-all duration-200"
              >
                Emergency Hotline: (555) 363-7436
              </a>
              <span className="text-gray-400 text-sm self-center">Available 24/7/365</span>
            </div>
            <div className="mt-4">
              <p className="text-gray-400 text-sm mb-2">For general inquiries:</p>
              <a href="/#contact" className="text-teal-400 hover:text-teal-300 transition-colors">
                Contact Our Team
              </a>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">
                Frequently Asked <span className="text-teal-400">Questions</span>
              </h2>
              <p className="text-gray-300">
                Quick answers to common questions about LineIntel's platform and services.
              </p>
            </div>

            <div className="space-y-4">
              {faq.map((item, index) => (
                <div key={index} className="bg-gray-800/50 rounded-lg border border-gray-700 p-6">
                  <div className="flex items-start">
                    <HelpCircle className="w-5 h-5 text-teal-400 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-2">{item.question}</h3>
                      <p className="text-gray-300 text-sm">{item.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Resources */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-800/50 rounded-lg border border-gray-700 p-6">
              <div className="flex items-center mb-4">
                <Book className="w-6 h-6 text-teal-400 mr-3" />
                <h3 className="text-xl font-semibold">Documentation</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Access our complete technical documentation, API references, and integration guides.
              </p>
              <a
                href="/documentation"
                className="inline-block px-4 py-2 bg-teal-500 hover:bg-teal-400 text-gray-900 font-medium rounded-md transition-all duration-200"
              >
                View Documentation
              </a>
            </div>

            <div className="bg-gray-800/50 rounded-lg border border-gray-700 p-6">
              <div className="flex items-center mb-4">
                <MessageCircle className="w-6 h-6 text-teal-400 mr-3" />
                <h3 className="text-xl font-semibold">Community Forum</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Connect with other LineIntel users, share best practices, and get community support.
              </p>
              <a
                href="#"
                className="inline-block px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white font-medium rounded-md transition-all duration-200"
              >
                Join Community
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
