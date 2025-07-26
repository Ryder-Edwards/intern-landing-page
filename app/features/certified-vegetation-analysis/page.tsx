import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Leaf, Award, FileCheck, Users, Shield, BookOpen } from "lucide-react"

export default function CertifiedVegetationAnalysisPage() {
  const certifications = [
    {
      title: "ISA Certified Arborist",
      description: "International Society of Arboriculture certification ensures expert tree care knowledge",
      icon: <Award className="w-8 h-8 text-teal-400" />,
    },
    {
      title: "Utility Arborist",
      description: "Specialized training in utility vegetation management and power line clearance",
      icon: <Shield className="w-8 h-8 text-teal-400" />,
    },
    {
      title: "Tree Risk Assessment",
      description: "Qualified to assess tree health and failure risk near critical infrastructure",
      icon: <FileCheck className="w-8 h-8 text-teal-400" />,
    },
  ]

  const services = [
    {
      title: "Species Identification",
      description: "Accurate identification of tree and plant species for targeted management strategies",
    },
    {
      title: "Growth Rate Analysis",
      description: "Predictive modeling of vegetation growth patterns and maintenance scheduling",
    },
    {
      title: "Health Assessment",
      description: "Evaluation of tree health, disease, and structural integrity",
    },
    {
      title: "Risk Prioritization",
      description: "Professional assessment of vegetation-related risks to power infrastructure",
    },
    {
      title: "Regulatory Compliance",
      description: "Reports that meet NERC, state, and local vegetation management requirements",
    },
    {
      title: "Treatment Recommendations",
      description: "Expert recommendations for pruning, removal, and vegetation control methods",
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
              Certified Vegetation <span className="text-teal-400">Analysis</span>
            </h1>
            <p className="text-xl text-gray-300">
              LineIntel is the only drone inspection company with an ISA Certified Arborist on staff. Every vegetation
              report is backed by certified expertise, ensuring regulatory compliance and providing the botanical
              analysis that utilities require for proper vegetation management decisions.
            </p>
          </div>

          {/* Unique Advantage */}
          <div className="bg-gradient-to-r from-teal-500/10 to-blue-500/10 rounded-lg border border-teal-500/30 p-8 mb-16 text-center">
            <div className="flex items-center justify-center mb-4">
              <Award className="w-12 h-12 text-teal-400 mr-4" />
              <h2 className="text-3xl font-bold">Our Unique Advantage</h2>
            </div>
            <p className="text-gray-300 max-w-4xl mx-auto text-lg">
              While other drone companies provide basic imagery, LineIntel delivers certified botanical expertise. Our
              ISA Certified Arborist ensures every vegetation assessment meets professional standards and regulatory
              requirements, giving you confidence in your vegetation management decisions.
            </p>
          </div>

          {/* Certifications */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Professional Certifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-gray-800/50 rounded-lg border border-gray-700 p-6 text-center">
                  <div className="mb-4">{cert.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{cert.title}</h3>
                  <p className="text-gray-300">{cert.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Certified Analysis Services</h2>
              <div className="space-y-4">
                {services.map((service, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="bg-teal-500 rounded-full w-2 h-2 mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold mb-1">{service.title}</h3>
                      <p className="text-gray-300 text-sm">{service.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">Report Features</h2>
              <div className="bg-gray-800/50 rounded-lg border border-gray-700 p-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <FileCheck className="w-5 h-5 text-teal-400" />
                    <span>ISA Certified Arborist signature and seal</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <BookOpen className="w-5 h-5 text-teal-400" />
                    <span>Detailed species identification and characteristics</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Shield className="w-5 h-5 text-teal-400" />
                    <span>Risk assessment and priority rankings</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="w-5 h-5 text-teal-400" />
                    <span>Treatment recommendations and timing</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Award className="w-5 h-5 text-teal-400" />
                    <span>Regulatory compliance documentation</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-teal-500/10 rounded-lg border border-teal-500/30">
                <h3 className="font-semibold text-teal-400 mb-2">Regulatory Compliance</h3>
                <p className="text-gray-300 text-sm">
                  Our certified reports meet NERC vegetation management standards, state utility commission
                  requirements, and local environmental regulations.
                </p>
              </div>
            </div>
          </div>

          {/* Comparison */}
          <div className="bg-gray-800/50 rounded-lg border border-gray-700 p-8 mb-16">
            <h2 className="text-2xl font-bold mb-6 text-center">LineIntel vs. Traditional Drone Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-red-400 mb-4">Traditional Drone Services</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-red-400 mr-2">✗</span>
                    <span className="text-gray-300">Basic imagery only</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-400 mr-2">✗</span>
                    <span className="text-gray-300">No certified botanical expertise</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-400 mr-2">✗</span>
                    <span className="text-gray-300">Generic vegetation identification</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-400 mr-2">✗</span>
                    <span className="text-gray-300">Limited regulatory compliance</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-teal-400 mb-4">LineIntel Certified Analysis</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-teal-400 mr-2">✓</span>
                    <span className="text-gray-300">High-resolution imagery + expert analysis</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-400 mr-2">✓</span>
                    <span className="text-gray-300">ISA Certified Arborist on staff</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-400 mr-2">✓</span>
                    <span className="text-gray-300">Precise species identification</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-400 mr-2">✓</span>
                    <span className="text-gray-300">Full regulatory compliance</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gray-800/50 rounded-lg border border-gray-700 p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Get Certified Vegetation Analysis</h2>
            <p className="text-gray-300 mb-6">
              Experience the difference that certified arborist expertise makes in your vegetation management program.
            </p>
            <a
              href="/#contact"
              className="inline-block px-8 py-3 bg-teal-500 hover:bg-teal-400 text-gray-900 font-medium rounded-md transition-all duration-200"
            >
              Request Certified Analysis
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
