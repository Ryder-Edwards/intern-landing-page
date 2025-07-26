import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Book, Code, Settings, Zap, Shield, Database } from "lucide-react"

export default function DocumentationPage() {
  const sections = [
    {
      title: "Getting Started",
      icon: <Book className="w-6 h-6" />,
      description: "Quick start guide and initial setup instructions",
      items: ["Platform Overview", "Account Setup", "First Inspection Mission", "Understanding Reports"],
    },
    {
      title: "API Reference",
      icon: <Code className="w-6 h-6" />,
      description: "Complete API documentation and integration guides",
      items: ["Authentication", "Mission Management", "Data Retrieval", "Webhook Integration"],
    },
    {
      title: "Configuration",
      icon: <Settings className="w-6 h-6" />,
      description: "System configuration and customization options",
      items: ["Drone Settings", "AI Model Parameters", "Alert Thresholds", "Report Templates"],
    },
    {
      title: "AI Models",
      icon: <Zap className="w-6 h-6" />,
      description: "Understanding AI detection capabilities and accuracy",
      items: ["Vegetation Detection", "Structural Analysis", "Thermal Imaging", "Model Performance"],
    },
    {
      title: "Security",
      icon: <Shield className="w-6 h-6" />,
      description: "Security protocols and compliance information",
      items: ["Data Encryption", "Access Controls", "Compliance Standards", "Privacy Policy"],
    },
    {
      title: "Data Management",
      icon: <Database className="w-6 h-6" />,
      description: "Data storage, export, and integration options",
      items: ["Data Formats", "Export Options", "Storage Policies", "Integration APIs"],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950 text-white">
      <Navbar />

      <section className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-teal-400">Documentation</span>
            </h1>
            <p className="text-xl text-gray-300">
              Complete guides, API references, and technical documentation for LineIntel's AI-powered inspection
              platform.
            </p>
          </div>

          {/* Quick Links */}
          <div className="bg-gray-800/50 rounded-lg border border-gray-700 p-6 mb-12">
            <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <a
                href="#"
                className="flex items-center p-3 bg-gray-700/50 rounded-lg hover:bg-teal-500/20 transition-colors"
              >
                <Book className="w-4 h-4 mr-2 text-teal-400" />
                <span className="text-sm">Quick Start</span>
              </a>
              <a
                href="#"
                className="flex items-center p-3 bg-gray-700/50 rounded-lg hover:bg-teal-500/20 transition-colors"
              >
                <Code className="w-4 h-4 mr-2 text-teal-400" />
                <span className="text-sm">API Docs</span>
              </a>
              <a
                href="#"
                className="flex items-center p-3 bg-gray-700/50 rounded-lg hover:bg-teal-500/20 transition-colors"
              >
                <Zap className="w-4 h-4 mr-2 text-teal-400" />
                <span className="text-sm">AI Models</span>
              </a>
              <a
                href="#"
                className="flex items-center p-3 bg-gray-700/50 rounded-lg hover:bg-teal-500/20 transition-colors"
              >
                <Shield className="w-4 h-4 mr-2 text-teal-400" />
                <span className="text-sm">Security</span>
              </a>
            </div>
          </div>

          {/* Documentation Sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sections.map((section, index) => (
              <div
                key={index}
                className="bg-gray-800/50 rounded-lg border border-gray-700 p-6 hover:border-teal-500/50 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-teal-500/20 p-3 rounded-lg mr-4">
                    <div className="text-teal-400">{section.icon}</div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{section.title}</h3>
                  </div>
                </div>
                <p className="text-gray-300 text-sm mb-4">{section.description}</p>
                <ul className="space-y-2">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      <a href="#" className="text-teal-400 hover:text-teal-300 transition-colors text-sm">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Code Example */}
          <div className="mt-16 bg-gray-800/50 rounded-lg border border-gray-700 p-6">
            <h2 className="text-xl font-semibold mb-4">API Example</h2>
            <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
              <pre className="text-sm text-gray-300">
                <code>{`// Initialize LineIntel API client
const lineIntel = new LineIntelAPI({
  apiKey: 'your-api-key',
  environment: 'production'
});

// Create a new inspection mission
const mission = await lineIntel.missions.create({
  name: 'Quarterly Inspection - Sector 7',
  coordinates: [
    { lat: 36.1627, lng: -86.7816 },
    { lat: 36.1650, lng: -86.7800 }
  ],
  inspectionType: 'vegetation_structural',
  priority: 'high'
});

// Get mission results
const results = await lineIntel.missions.getResults(mission.id);
console.log('Detected issues:', results.detections);`}</code>
              </pre>
            </div>
          </div>

          {/* Support CTA */}
          <div className="mt-16 bg-gray-800/50 rounded-lg border border-gray-700 p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Need Help?</h2>
            <p className="text-gray-300 mb-6">
              Our technical support team is here to help you get the most out of LineIntel.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/#contact"
                className="px-6 py-3 bg-teal-500 hover:bg-teal-400 text-gray-900 font-medium rounded-md transition-all duration-200"
              >
                Contact Support
              </a>
              <a
                href="#"
                className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white font-medium rounded-md transition-all duration-200"
              >
                Schedule Demo
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
