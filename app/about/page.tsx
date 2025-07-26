import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Users, Target, Award, Zap } from "lucide-react"

export default function AboutPage() {
  const values = [
    {
      icon: <Target className="w-8 h-8 text-teal-400" />,
      title: "Innovation",
      description: "Pushing the boundaries of what's possible with AI and drone technology.",
    },
    {
      icon: <Users className="w-8 h-8 text-teal-400" />,
      title: "Safety First",
      description: "Eliminating human risk while improving inspection accuracy and reliability.",
    },
    {
      icon: <Award className="w-8 h-8 text-teal-400" />,
      title: "Certified Excellence",
      description: "ISA Certified Arborist on staff ensures regulatory compliance and expert vegetation analysis.",
    },
    {
      icon: <Zap className="w-8 h-8 text-teal-400" />,
      title: "Efficiency",
      description: "Transforming costly, time-consuming processes into streamlined operations.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950 text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="text-teal-400">LineIntel</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              We're revolutionizing power line inspection with cutting-edge drone technology and artificial
              intelligence, making critical infrastructure maintenance safer, more efficient, and more reliable. Our
              unique advantage: certified arborist expertise for regulatory-compliant vegetation reports.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-gray-300 mb-6">
                To revolutionize utility vegetation management by providing cutting-edge drone and AI-based solutions
                that enhance safety, reliability, and operational efficiency for utility companies and electric
                cooperatives.
              </p>
              <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
                <h3 className="text-xl font-semibold text-teal-400 mb-3">Our Operational Base</h3>
                <p className="text-gray-300">
                  Based out of Tennessee and Florida, LineIntel is uniquely positioned with an ISA Certified Arborist on
                  our team, ensuring that all vegetation management reports meet regulatory standards and provide the
                  botanical analysis that utilities require for proper vegetation management decisions.
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/istockphoto-525343076-612x612.jpg-mchciKVVM0oSerpedjKiRHE7AoLgPI.jpeg"
                alt="LineIntel drone technology for vegetation management"
                width={600}
                height={400}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              These core principles guide everything we do at LineIntel.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 text-center">
                <div className="mb-4 bg-gray-900/50 p-4 rounded-lg inline-block">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="bg-gray-800/50 rounded-lg border border-gray-700 p-8 max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Ready to Learn More?</h2>
            <p className="text-gray-300 mb-6">
              Contact our team to discover how LineIntel's certified arborist expertise can transform your power line
              inspection operations.
            </p>
            <a
              href="/#contact"
              className="inline-block px-8 py-3 bg-teal-500 hover:bg-teal-400 text-gray-900 font-medium rounded-md transition-all duration-200"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
