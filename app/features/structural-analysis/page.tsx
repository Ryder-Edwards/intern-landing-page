import Navbar from "@/components/navbar"
import { Shield, Search, Thermometer, Camera, AlertTriangle, CheckCircle } from "lucide-react"

export default function StructuralAnalysisPage() {
  const analysisTypes = [
    {
      icon: <Search className="w-8 h-8 text-blue-400" />,
      title: "Visual Inspection",
      description: "High-resolution imagery captures surface damage, corrosion, and wear patterns",
      capabilities: ["Crack detection", "Paint degradation", "Hardware loosening", "Structural deformation"],
    },
    {
      icon: <Thermometer className="w-8 h-8 text-red-400" />,
      title: "Thermal Analysis",
      description: "Infrared imaging identifies hot spots and electrical connection issues",
      capabilities: ["Connection heating", "Insulator failures", "Conductor problems", "Equipment overload"],
    },
    {
      icon: <Camera className="w-8 h-8 text-green-400" />,
      title: "3D Modeling",
      description: "LiDAR and photogrammetry create detailed 3D models for precise measurements",
      capabilities: ["Dimensional analysis", "Clearance verification", "Structural alignment", "Asset mapping"],
    },
  ]

  const detectionCapabilities = [
    "Corrosion and rust patterns",
    "Structural cracks and fractures",
    "Hardware deterioration",
    "Insulator damage",
    "Guy wire tension issues",
    "Foundation problems",
    "Conductor sag measurements",
    "Equipment mounting integrity",
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950 text-white">
      <Navbar />

      <section className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-teal-500/20 mb-6">
              <Shield className="w-8 h-8 text-teal-400" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Structural <span className="text-teal-400">Analysis</span>
            </h1>
            <p className="text-xl text-gray-300">
              Comprehensive structural inspection using advanced imaging technologies to detect damage, wear, and 
              potential failures in power line infrastructure. Our multi-sensor approach provides detailed analysis 
              of poles, towers, hardware, and conductors.
            </p>
          </div>

          {/* Analysis Types */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Analysis Technologies</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {analysisTypes.map((analysis, index) => (
                <div key={index} className="bg-gray-800/50 rounded-lg border border-gray-700 p-6">
                  <div className="mb-4 text-center">{analysis.icon}</div>
                  <h3 className="text-xl font-semibold mb-3 text-center">{analysis.title}</h3>
                  <p className="text-gray-300 mb-4 text-center">{analysis.description}</p>
                  <div className="space-y-2">
                    {analysis.capabilities.map((capability, capIndex) => (
                      <div key={capIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-teal-400 flex-shrink-0" />
                        <span className="text-sm text-gray-300">{capability}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Detection Capabilities */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">What We Detect</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {detectionCapabilities.map((capability, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <AlertTriangle className="w-5 h-5 text-teal-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">{capability}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">Analysis Process</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-teal-500 text-gray-900 rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Multi-Sensor Data Collection</h3>
                    <p className="text-gray-300">Drones capture visual, thermal, and LiDAR data of infrastructure components</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-teal-500 text-gray-900 rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">AI-Powered Analysis</h3>
                    <p className="text-gray-300">Machine learning algorithms identify anomalies and structural issues</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-teal-500 text-gray-900 rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Expert Validation</h3>
                    <p className="text-gray-300">Engineering review confirms findings and assesses severity</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-teal-500 text-gray-900 rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Prioritized Reporting</h3>
                    <p className="text-gray-300">Issues ranked by severity with maintenance recommendations</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div className="bg-gray-800/50 rounded-lg border border-gray-700 p-8 mb-16">
            <h2 className="text-2xl font-bold mb-6 text-center">Key Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-400 mb-2">95%</div>
                <div className="text-gray-300">Faster than traditional methods</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-400 mb-2">Zero</div>
                <div className="text-gray-300">Personnel safety risk</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-400 mb-2">24/7</div>
                <div className="text-gray-300">Inspection capability</div>
              </div>
            </div>
          </div>

          {/* Sample Report */}
          <div className="bg-gray-800/50 rounded-lg border border-gray-700 p-8 mb-16">
            <h2 className="text-2xl font-bold mb-6">Sample Analysis Report</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4 text-teal-400">Report Includes:</h3>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-teal-400" />
                    <span className="text-gray-300">High-resolution imagery</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-teal-400" />
                    <span className="text-gray-300">Thermal analysis results</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-teal-400" />
                    <span className="text-gray-300">3D measurements and models</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-teal-400" />
                    <span className="text-gray-300">Issue prioritization matrix</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-teal-400" />
                    <span className="text-gray-300">Maintenance recommendations</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-teal-400" />
                    <span className="text-gray-300">GPS coordinates for each issue</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-900/50 rounded-lg p-4">
                <div className="text-center text-gray-400 py-8">
                  <Camera className="w-16 h-16 mx-auto mb-4 opacity-50" />
                  <p>Sample structural analysis imagery and thermal data would be displayed here</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gray-800/50 rounded-lg border border-gray-700 p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Comprehensive Structural Analysis</h2>
            <p className="text-gray-300 mb-6">
              Protect your infrastructure with detailed structural analysis that identifies issues before they become failures.
            </p>
            <a
              href="/#contact"
              className="inline-block px-8 py-3 bg-teal-500 hover:bg-teal-400 text-gray-900 font-medium rounded-md transition-all duration-\
