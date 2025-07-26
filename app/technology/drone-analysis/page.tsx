"use client"

import { useState } from "react"
import Image from "next/image"
import { Play, CheckCircle, ArrowRight, Zap, Eye, Brain, Map, BarChart3 } from "lucide-react"

const processSteps = [
  {
    id: 1,
    title: "Video Capture & Frame Extraction",
    description: "High-resolution 4K video capture at 60fps with GPS metadata",
    details: [
      "4K resolution at 60fps for maximum detail capture",
      "GPS metadata embedded in every frame",
      "Automated frame extraction every 0.5 seconds",
      "Quality assessment and blur detection",
      "Redundant capture for critical inspection points",
    ],
    metrics: {
      resolution: "4K (3840×2160)",
      frameRate: "60fps",
      accuracy: "±1m GPS accuracy",
      storage: "~2GB per flight hour",
    },
  },
  {
    id: 2,
    title: "Photogrammetry & 3D Reconstruction",
    description: "Advanced photogrammetry creates detailed 3D models from video frames",
    details: [
      "Structure-from-Motion (SfM) algorithms",
      "Dense point cloud generation with 1M+ points per kilometer",
      "Bundle adjustment for precise camera pose estimation",
      "Multi-view stereo reconstruction",
      "Ground control point integration for absolute accuracy",
    ],
    metrics: {
      pointDensity: "1M+ points/km",
      accuracy: "±2cm horizontal",
      verticalAccuracy: "±3cm vertical",
      processingTime: "~30min per km",
    },
  },
  {
    id: 3,
    title: "Object Detection & Classification",
    description: "AI models identify and classify infrastructure and vegetation elements",
    details: [
      "YOLOv8 and Mask R-CNN for object detection",
      "50+ object categories including conductors, poles, vegetation",
      "Real-time edge processing capabilities",
      "Confidence scoring for each detection",
      "Custom models trained on utility-specific datasets",
    ],
    metrics: {
      accuracy: "99.2% vegetation detection",
      categories: "50+ object types",
      processingSpeed: "Real-time on edge devices",
      confidence: "95%+ average confidence",
    },
  },
  {
    id: 4,
    title: "Distance Measurement & Analysis",
    description: "Precise 3D measurements using calibrated photogrammetric models",
    details: [
      "Line-to-vegetation clearance calculations",
      "Conductor sag measurements",
      "Pole lean and structural deformation analysis",
      "Automated measurement validation",
      "Historical comparison and trend analysis",
    ],
    metrics: {
      precision: "±1cm for distances <50m",
      clearanceAccuracy: "±2cm for vegetation clearances",
      sagMeasurement: "±0.5cm conductor sag",
      validationRate: "99.8% measurement validation",
    },
  },
  {
    id: 5,
    title: "AI Contextual Analysis",
    description: "Machine learning models assess risk and predict future conditions",
    details: [
      "Vegetation growth rate prediction",
      "Weather impact analysis and modeling",
      "Risk assessment based on 200+ environmental variables",
      "Seasonal growth pattern recognition",
      "Regulatory compliance verification",
    ],
    metrics: {
      variables: "200+ environmental factors",
      growthPrediction: "±15% accuracy over 12 months",
      riskAssessment: "5-tier priority classification",
      compliance: "100% regulatory standard adherence",
    },
  },
  {
    id: 6,
    title: "Automated Report Generation",
    description: "Comprehensive reports with ISA certified arborist validation",
    details: [
      "ISA Certified Arborist review and validation",
      "Priority-based work recommendations",
      "Regulatory compliance documentation",
      "Interactive maps with flagged areas",
      "Automated delivery and notifications",
    ],
    metrics: {
      turnaround: "<24 hours",
      certification: "ISA Certified Arborist validated",
      accuracy: "99.5% report accuracy",
      formats: "PDF, Interactive Web, API",
    },
  },
]

export default function DroneAnalysisPage() {
  const [activeStep, setActiveStep] = useState(1)

  return (
    <div className="min-h-screen bg-gray-900 pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Drone Video Analysis
                <span className="block text-teal-400">Technology</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Advanced 6-step process transforming drone video into actionable intelligence through photogrammetry, AI
                analysis, and automated reporting.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center space-x-2 text-teal-400">
                  <CheckCircle className="w-5 h-5" />
                  <span>±2cm Accuracy</span>
                </div>
                <div className="flex items-center space-x-2 text-teal-400">
                  <CheckCircle className="w-5 h-5" />
                  <span>1M+ Points/km</span>
                </div>
                <div className="flex items-center space-x-2 text-teal-400">
                  <CheckCircle className="w-5 h-5" />
                  <span>{"<24hr Turnaround"}</span>
                </div>
              </div>
              <button className="bg-teal-500 hover:bg-teal-400 text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center space-x-2">
                <Play className="w-5 h-5" />
                <span>Watch Demo</span>
              </button>
            </div>
            <div className="relative">
              <div className="relative rounded-lg overflow-hidden border-2 border-teal-500/30 shadow-2xl">
                <Image
                  src="/drone-mapping-example.png"
                  alt="3D Drone Mapping Visualization showing topographical analysis with elevation data"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-gray-900/80 backdrop-blur-sm rounded-lg p-4">
                    <h3 className="text-white font-semibold mb-1">3D Photogrammetric Analysis</h3>
                    <p className="text-gray-300 text-sm">
                      Real-time 3D mapping with elevation visualization and precise measurements
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Process Steps */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">6-Step Analysis Process</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From raw drone video to actionable intelligence through advanced AI and photogrammetry
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Step Navigation */}
            <div className="lg:col-span-1">
              <div className="space-y-4">
                {processSteps.map((step) => (
                  <button
                    key={step.id}
                    onClick={() => setActiveStep(step.id)}
                    className={`w-full text-left p-4 rounded-lg border transition-all duration-200 ${
                      activeStep === step.id
                        ? "bg-teal-500/10 border-teal-500 text-white"
                        : "bg-gray-800 border-gray-700 text-gray-300 hover:border-gray-600"
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                          activeStep === step.id ? "bg-teal-500 text-gray-900" : "bg-gray-700 text-gray-300"
                        }`}
                      >
                        {step.id}
                      </div>
                      <div>
                        <h3 className="font-semibold">{step.title}</h3>
                        <p className="text-sm text-gray-400">{step.description}</p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step Details */}
            <div className="lg:col-span-2">
              {processSteps.map((step) => (
                <div key={step.id} className={`${activeStep === step.id ? "block" : "hidden"}`}>
                  <div className="bg-gray-800 rounded-lg p-8 border border-gray-700">
                    <div className="flex items-center space-x-3 mb-6">
                      <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center">
                        <span className="text-gray-900 font-bold text-lg">{step.id}</span>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">{step.title}</h3>
                        <p className="text-gray-300">{step.description}</p>
                      </div>
                    </div>

                    {/* Show mapping image for Step 2 */}
                    {step.id === 2 && (
                      <div className="mb-8">
                        <div className="relative rounded-lg overflow-hidden border border-gray-600">
                          <Image
                            src="/drone-mapping-example.png"
                            alt="Photogrammetry 3D reconstruction example showing elevation mapping"
                            width={600}
                            height={300}
                            className="w-full h-auto"
                          />
                          <div className="absolute bottom-2 left-2 bg-gray-900/80 backdrop-blur-sm rounded px-3 py-1">
                            <span className="text-white text-sm font-medium">Live Photogrammetry Output</span>
                          </div>
                        </div>
                      </div>
                    )}

                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Process Details</h4>
                        <ul className="space-y-3">
                          {step.details.map((detail, index) => (
                            <li key={index} className="flex items-start space-x-3">
                              <CheckCircle className="w-5 h-5 text-teal-400 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-300">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Technical Specifications</h4>
                        <div className="space-y-3">
                          {Object.entries(step.metrics).map(([key, value]) => (
                            <div key={key} className="flex justify-between items-center py-2 border-b border-gray-700">
                              <span className="text-gray-400 capitalize">{key.replace(/([A-Z])/g, " $1")}</span>
                              <span className="text-white font-medium">{value}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3D Mapping Showcase */}
      <section className="py-20 bg-gray-800/50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Advanced 3D Mapping
                <span className="block text-teal-400">Capabilities</span>
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Our photogrammetry technology creates detailed 3D models with millimeter precision, enabling accurate
                measurements and comprehensive analysis of utility infrastructure.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-teal-400 mb-2">±2cm</div>
                  <div className="text-gray-300">Horizontal Accuracy</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-teal-400 mb-2">1M+</div>
                  <div className="text-gray-300">Points per Kilometer</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-teal-400 mb-2">{"<30min"}</div>
                  <div className="text-gray-300">Processing Time/km</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-teal-400 mb-2">99.8%</div>
                  <div className="text-gray-300">Validation Rate</div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Map className="w-5 h-5 text-teal-400" />
                  <span className="text-gray-300">Real-time 3D visualization and measurement</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Eye className="w-5 h-5 text-teal-400" />
                  <span className="text-gray-300">Multi-spectral analysis capabilities</span>
                </div>
                <div className="flex items-center space-x-3">
                  <BarChart3 className="w-5 h-5 text-teal-400" />
                  <span className="text-gray-300">Historical comparison and trend analysis</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-lg overflow-hidden border-2 border-teal-500/30 shadow-2xl">
                <Image
                  src="/drone-mapping-example.png"
                  alt="Advanced 3D mapping visualization showing detailed topographical analysis"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
                <div className="absolute top-4 right-4">
                  <div className="bg-teal-500 text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
                    Live 3D Model
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Analysis Capabilities */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">AI Analysis Capabilities</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Advanced machine learning models provide comprehensive analysis across multiple domains
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800 rounded-lg p-8 border border-gray-700">
              <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Vegetation Analysis</h3>
              <ul className="space-y-3 text-gray-300">
                <li>• Species identification and classification</li>
                <li>• Growth rate prediction modeling</li>
                <li>• Health assessment and disease detection</li>
                <li>• Clearance violation prediction</li>
                <li>• Seasonal growth pattern analysis</li>
              </ul>
              <div className="mt-6 pt-6 border-t border-gray-700">
                <div className="text-2xl font-bold text-green-400 mb-1">99.2%</div>
                <div className="text-gray-400">Detection Accuracy</div>
              </div>
            </div>

            <div className="bg-gray-800 rounded-lg p-8 border border-gray-700">
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-6">
                <Eye className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Structural Analysis</h3>
              <ul className="space-y-3 text-gray-300">
                <li>• Pole lean and deformation detection</li>
                <li>• Conductor sag measurements</li>
                <li>• Insulator condition assessment</li>
                <li>• Hardware corrosion analysis</li>
                <li>• Structural integrity scoring</li>
              </ul>
              <div className="mt-6 pt-6 border-t border-gray-700">
                <div className="text-2xl font-bold text-blue-400 mb-1">±1cm</div>
                <div className="text-gray-400">Measurement Precision</div>
              </div>
            </div>

            <div className="bg-gray-800 rounded-lg p-8 border border-gray-700">
              <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-6">
                <Brain className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Environmental Analysis</h3>
              <ul className="space-y-3 text-gray-300">
                <li>• Weather impact assessment</li>
                <li>• Terrain and soil analysis</li>
                <li>• Wildlife habitat identification</li>
                <li>• Environmental compliance checking</li>
                <li>• Climate change impact modeling</li>
              </ul>
              <div className="mt-6 pt-6 border-t border-gray-700">
                <div className="text-2xl font-bold text-purple-400 mb-1">200+</div>
                <div className="text-gray-400">Variables Analyzed</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Map Output */}
      <section className="py-20 bg-gray-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Interactive Map Output</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real-time visualization with color-coded priorities and detailed inspection results
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-4 h-4 bg-red-500 rounded-full mt-2"></div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Critical Priority</h3>
                  <p className="text-gray-300">
                    Immediate attention required - clearance violations, structural damage
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-4 h-4 bg-orange-500 rounded-full mt-2"></div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">High Priority</h3>
                  <p className="text-gray-300">
                    Action needed within 30 days - potential violations, maintenance required
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-4 h-4 bg-yellow-500 rounded-full mt-2"></div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Medium Priority</h3>
                  <p className="text-gray-300">Monitor closely - trending toward violations, scheduled maintenance</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-4 h-4 bg-green-500 rounded-full mt-2"></div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Low Priority</h3>
                  <p className="text-gray-300">Routine monitoring - within acceptable parameters</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <h3 className="text-lg font-semibold text-white mb-4">Map Features</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between py-2 border-b border-gray-700">
                  <span className="text-gray-300">Real-time Updates</span>
                  <span className="text-teal-400">{"<2 seconds"}</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-gray-700">
                  <span className="text-gray-300">GPS Accuracy</span>
                  <span className="text-teal-400">±1 meter</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-gray-700">
                  <span className="text-gray-300">Zoom Levels</span>
                  <span className="text-teal-400">1:1000 to 1:50000</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-gray-700">
                  <span className="text-gray-300">Data Layers</span>
                  <span className="text-teal-400">15+ overlays</span>
                </div>
                <div className="flex items-center justify-between py-2">
                  <span className="text-gray-300">Export Formats</span>
                  <span className="text-teal-400">KML, GeoJSON, PDF</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Ready to Transform Your Inspections?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Experience the power of AI-driven drone analysis with industry-leading accuracy and speed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-teal-500 hover:bg-teal-400 text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center space-x-2">
                <span>Schedule Demo</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border border-gray-600 hover:border-gray-500 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
                View Case Studies
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
