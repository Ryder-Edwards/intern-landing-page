"use client"

import { useState } from "react"
import {
  Smartphone,
  Camera,
  Cloud,
  Map,
  Users,
  Wrench,
  Bell,
  CheckCircle,
  Shield,
  Zap,
  ArrowRight,
  Play,
} from "lucide-react"

const workflowSteps = [
  {
    id: 1,
    title: "Customer Login & Photo Capture",
    description: "Secure authentication with GPS-tagged photo capture",
    icon: <Smartphone className="w-6 h-6" />,
    details: [
      "Secure multi-factor authentication",
      "GPS coordinates automatically captured",
      "High-resolution photo capture (up to 12MP)",
      "Offline capability for remote areas",
      "Voice notes and text descriptions",
    ],
    metrics: {
      loginTime: "<3 seconds",
      photoQuality: "Up to 12MP",
      gpsAccuracy: "±3 meters",
      offlineCapability: "Full functionality",
    },
  },
  {
    id: 2,
    title: "Intelligent Tagging & Classification",
    description: "AI-powered automatic issue detection and categorization",
    icon: <Camera className="w-6 h-6" />,
    details: [
      "AI-powered issue detection and classification",
      "Automatic priority assignment based on severity",
      "Smart tagging with relevant metadata",
      "Integration with utility asset database",
      "Duplicate detection and prevention",
    ],
    metrics: {
      aiAccuracy: "94.7% classification accuracy",
      processingTime: "<5 seconds",
      categories: "25+ issue types",
      duplicateDetection: "99.2% accuracy",
    },
  },
  {
    id: 3,
    title: "Cloud Upload & Processing",
    description: "Secure, encrypted data transmission to cloud infrastructure",
    icon: <Cloud className="w-6 h-6" />,
    details: [
      "256-bit AES encryption during transmission",
      "Automatic retry mechanism for failed uploads",
      "Compression optimization for faster uploads",
      "Backup to multiple data centers",
      "GDPR and SOC 2 compliance",
    ],
    metrics: {
      encryption: "256-bit AES",
      uploadSpeed: "Average 2.3MB/s",
      reliability: "99.9% success rate",
      dataRedundancy: "3x backup copies",
    },
  },
  {
    id: 4,
    title: "Real-time Map Updates",
    description: "Instant visualization updates across all connected systems",
    icon: <Map className="w-6 h-6" />,
    details: [
      "Real-time map visualization updates",
      "Color-coded priority indicators",
      "Integration with GIS systems",
      "Historical data overlay capabilities",
      "Mobile-optimized map interface",
    ],
    metrics: {
      updateTime: "<2 seconds",
      mapAccuracy: "±1 meter precision",
      concurrentUsers: "1000+ simultaneous",
      uptime: "99.9% availability",
    },
  },
  {
    id: 5,
    title: "Utility Staff Assignment",
    description: "Automated routing and intelligent workload balancing",
    icon: <Users className="w-6 h-6" />,
    details: [
      "Intelligent routing based on location and expertise",
      "Automated workload balancing",
      "Skills-based assignment matching",
      "Real-time availability tracking",
      "Escalation protocols for critical issues",
    ],
    metrics: {
      routingEfficiency: "35% faster response",
      assignmentTime: "<30 seconds",
      workloadBalance: "±5% variance",
      escalationTime: "<15 minutes",
    },
  },
  {
    id: 6,
    title: "Field Response & Documentation",
    description: "Mobile work orders with comprehensive documentation tools",
    icon: <Wrench className="w-6 h-6" />,
    details: [
      "Mobile work order management",
      "Before/after photo documentation",
      "Digital signature capture",
      "Parts and materials tracking",
      "Time tracking and billing integration",
    ],
    metrics: {
      completionTime: "Average 4.2 hours",
      documentationRate: "100% photo compliance",
      mobilityScore: "Full offline capability",
      accuracyRate: "98.7% first-time fix",
    },
  },
  {
    id: 7,
    title: "Customer Notification & Closure",
    description: "Automated completion notifications with confirmation photos",
    icon: <Bell className="w-6 h-6" />,
    details: [
      "Automated SMS and email notifications",
      "Completion photos and work summary",
      "Customer satisfaction survey",
      "Follow-up scheduling if needed",
      "Integration with billing systems",
    ],
    metrics: {
      notificationTime: "<5 minutes",
      customerSatisfaction: "4.8/5 average rating",
      responseRate: "87% survey completion",
      followUpRate: "12% require follow-up",
    },
  },
]

export default function MobileAppWorkflowPage() {
  const [activeStep, setActiveStep] = useState(1)

  return (
    <div className="min-h-screen bg-gray-900 pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Mobile App
              <span className="block text-teal-400">Workflow</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              End-to-end customer experience from issue reporting to resolution with real-time updates, secure data
              handling, and seamless utility staff coordination.
            </p>
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <div className="flex items-center space-x-2 text-teal-400">
                <CheckCircle className="w-5 h-5" />
                <span>29-hour average resolution</span>
              </div>
              <div className="flex items-center space-x-2 text-teal-400">
                <CheckCircle className="w-5 h-5" />
                <span>98.5% customer satisfaction</span>
              </div>
              <div className="flex items-center space-x-2 text-teal-400">
                <CheckCircle className="w-5 h-5" />
                <span>Real-time updates</span>
              </div>
            </div>
            <button className="bg-teal-500 hover:bg-teal-400 text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center space-x-2 mx-auto">
              <Play className="w-5 h-5" />
              <span>Watch Workflow Demo</span>
            </button>
          </div>
        </div>
      </section>

      {/* Interactive Workflow Steps */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">7-Step Customer Journey</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From initial report to complete resolution with full transparency and real-time communication
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Step Navigation */}
            <div className="lg:col-span-1">
              <div className="space-y-4">
                {workflowSteps.map((step) => (
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
                        className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          activeStep === step.id ? "bg-teal-500 text-gray-900" : "bg-gray-700 text-gray-300"
                        }`}
                      >
                        {step.icon}
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
              {workflowSteps.map((step) => (
                <div key={step.id} className={`${activeStep === step.id ? "block" : "hidden"}`}>
                  <div className="bg-gray-800 rounded-lg p-8 border border-gray-700">
                    <div className="flex items-center space-x-3 mb-6">
                      <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center">
                        {step.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">{step.title}</h3>
                        <p className="text-gray-300">{step.description}</p>
                      </div>
                    </div>

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
                        <h4 className="text-lg font-semibold text-white mb-4">Performance Metrics</h4>
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

      {/* Real-World Example */}
      <section className="py-20 bg-gray-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Real-World Example</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how our workflow resolved a tree branch issue in just 29 hours
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-800 rounded-lg p-8 border border-gray-700">
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">Issue Details</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Issue Type:</span>
                      <span className="text-white">Tree branch near power line</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Priority Level:</span>
                      <span className="text-orange-400">High Priority</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Location:</span>
                      <span className="text-white">Rural County Road 45</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Reporter:</span>
                      <span className="text-white">Local Resident</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">Resolution Timeline</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Reported:</span>
                      <span className="text-white">Monday 8:15 AM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Assigned:</span>
                      <span className="text-white">Monday 8:47 AM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Work Started:</span>
                      <span className="text-white">Tuesday 10:30 AM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Completed:</span>
                      <span className="text-teal-400">Tuesday 1:20 PM</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-700 pt-8">
                <h3 className="text-xl font-bold text-white mb-4">Customer Journey</h3>
                <div className="grid md:grid-cols-7 gap-4">
                  {[
                    { step: 1, time: "8:15 AM", status: "Photo uploaded", color: "bg-green-500" },
                    { step: 2, time: "8:16 AM", status: "AI classified", color: "bg-green-500" },
                    { step: 3, time: "8:17 AM", status: "Cloud processed", color: "bg-green-500" },
                    { step: 4, time: "8:18 AM", status: "Map updated", color: "bg-green-500" },
                    { step: 5, time: "8:47 AM", status: "Crew assigned", color: "bg-green-500" },
                    { step: 6, time: "1:20 PM", status: "Work completed", color: "bg-green-500" },
                    { step: 7, time: "1:25 PM", status: "Customer notified", color: "bg-green-500" },
                  ].map((item) => (
                    <div key={item.step} className="text-center">
                      <div
                        className={`w-8 h-8 ${item.color} rounded-full flex items-center justify-center text-white text-sm font-bold mx-auto mb-2`}
                      >
                        {item.step}
                      </div>
                      <div className="text-xs text-gray-400 mb-1">{item.time}</div>
                      <div className="text-xs text-gray-300">{item.status}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-teal-500/10 border border-teal-500/30 rounded-lg p-6 mt-8">
                <div className="flex items-center space-x-3 mb-4">
                  <CheckCircle className="w-6 h-6 text-teal-400" />
                  <h4 className="text-lg font-bold text-white">Resolution Summary</h4>
                </div>
                <p className="text-gray-300 mb-4">
                  Tree branch successfully trimmed to maintain safe clearance distance. Customer received before/after
                  photos and work completion certificate. No service interruption occurred.
                </p>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-teal-400">29</div>
                    <div className="text-gray-400 text-sm">Hours to Resolution</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-teal-400">100%</div>
                    <div className="text-gray-400 text-sm">Customer Satisfaction</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-teal-400">0</div>
                    <div className="text-gray-400 text-sm">Service Interruptions</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Technical Benefits</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Enterprise-grade architecture designed for utility companies and electric cooperatives
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800 rounded-lg p-8 border border-gray-700">
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Real-time Updates</h3>
              <ul className="space-y-3 text-gray-300 mb-6">
                <li>• WebSocket connections for instant updates</li>
                <li>• {"<2 second sync time across all devices"}</li>
                <li>• Offline-first architecture with sync</li>
                <li>• Push notifications for critical updates</li>
                <li>• Real-time collaboration features</li>
              </ul>
              <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
                <div className="text-2xl font-bold text-blue-400 mb-1">{"<2s"}</div>
                <div className="text-gray-400">Average Sync Time</div>
              </div>
            </div>

            <div className="bg-gray-800 rounded-lg p-8 border border-gray-700">
              <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-6">
                <Cloud className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Scalable Architecture</h3>
              <ul className="space-y-3 text-gray-300 mb-6">
                <li>• Auto-scaling cloud infrastructure</li>
                <li>• Global CDN for fast content delivery</li>
                <li>• Load balancing across multiple regions</li>
                <li>• Microservices architecture</li>
                <li>• 99.9% uptime SLA guarantee</li>
              </ul>
              <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                <div className="text-2xl font-bold text-green-400 mb-1">99.9%</div>
                <div className="text-gray-400">Uptime Guarantee</div>
              </div>
            </div>

            <div className="bg-gray-800 rounded-lg p-8 border border-gray-700">
              <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Secure Data Handling</h3>
              <ul className="space-y-3 text-gray-300 mb-6">
                <li>• 256-bit AES encryption at rest and in transit</li>
                <li>• SOC 2 Type II compliance</li>
                <li>• GDPR and CCPA compliant</li>
                <li>• Multi-factor authentication</li>
                <li>• Regular security audits and penetration testing</li>
              </ul>
              <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-4">
                <div className="text-2xl font-bold text-purple-400 mb-1">256-bit</div>
                <div className="text-gray-400">AES Encryption</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-20 bg-gray-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Production Performance</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real metrics from our production environment serving utility companies nationwide
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-teal-400 mb-2">29hr</div>
              <div className="text-gray-300">Average Resolution Time</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-teal-400 mb-2">98.5%</div>
              <div className="text-gray-300">Customer Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-teal-400 mb-2">{"<30s"}</div>
              <div className="text-gray-300">Assignment Time</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-teal-400 mb-2">99.9%</div>
              <div className="text-gray-300">System Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-teal-400 mb-2">{"<5min"}</div>
              <div className="text-gray-300">Notification Time</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-teal-400 mb-2">87%</div>
              <div className="text-gray-300">Survey Response Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-teal-400 mb-2">35%</div>
              <div className="text-gray-300">Faster Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-teal-400 mb-2">4.8/5</div>
              <div className="text-gray-300">Average Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Ready to Streamline Your Operations?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Experience the complete mobile workflow solution designed specifically for utility companies and electric
              cooperatives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-teal-500 hover:bg-teal-400 text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center space-x-2">
                <span>Download Mobile App</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border border-gray-600 hover:border-gray-500 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
