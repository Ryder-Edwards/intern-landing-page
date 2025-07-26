"use client"

import { useState, useEffect } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import {
  BarChart3,
  MapPin,
  AlertTriangle,
  Users,
  Calendar,
  TrendingUp,
  Cloud,
  MessageSquare,
  Settings,
  Bell,
  Search,
  Filter,
  Download,
  Plus,
  Eye,
  CheckCircle,
  Clock,
  Thermometer,
  Wind,
  CloudRain,
  Sun,
  Leaf,
  Activity,
  DollarSign,
  Target,
  Shield,
  Smartphone,
  FileText,
  Camera,
  Mic,
  Navigation,
  Layers,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  Play,
  Pause,
  ExternalLink,
  RefreshCw,
  Database,
  Wifi,
  Battery,
  Signal,
} from "lucide-react"

// Mock data for the dashboard
const mockData = {
  riskOverview: {
    high: 47,
    medium: 128,
    low: 892,
    total: 1067,
  },
  systemStatus: {
    operational: true,
    lastUpdate: "2 minutes ago",
    dataQuality: 98.7,
    connectivity: "Strong",
  },
  kpis: {
    budgetUtilization: 67.3,
    crewProductivity: 94.2,
    riskReduction: 31.8,
    predictiveAccuracy: 94.1,
  },
  activeThreats: [
    {
      id: "T-2024-001",
      location: "Line 345-A, Mile 23.7",
      riskLevel: "High",
      percentage: 87,
      estimatedContact: "3-5 days",
      status: "New",
      priority: 1,
      coordinates: { lat: 35.2271, lng: -80.8431 },
      species: "Oak",
      lastInspection: "2024-01-15",
    },
    {
      id: "T-2024-002",
      location: "Line 138-B, Mile 45.2",
      riskLevel: "High",
      percentage: 82,
      estimatedContact: "5-7 days",
      status: "Acknowledged",
      priority: 2,
      coordinates: { lat: 35.2891, lng: -80.7234 },
      species: "Pine",
      lastInspection: "2024-01-12",
    },
    {
      id: "T-2024-003",
      location: "Line 267-C, Mile 12.1",
      riskLevel: "Medium",
      percentage: 74,
      estimatedContact: "10-14 days",
      status: "In Progress",
      priority: 3,
      coordinates: { lat: 35.1987, lng: -80.9123 },
      species: "Maple",
      lastInspection: "2024-01-18",
    },
    {
      id: "T-2024-004",
      location: "Line 456-D, Mile 67.8",
      riskLevel: "Medium",
      percentage: 69,
      estimatedContact: "14-21 days",
      status: "New",
      priority: 4,
      coordinates: { lat: 35.3456, lng: -80.6789 },
      species: "Willow",
      lastInspection: "2024-01-10",
    },
  ],
  weatherData: {
    current: {
      temperature: 72,
      humidity: 68,
      windSpeed: 8,
      precipitation: 0,
      conditions: "Partly Cloudy",
    },
    forecast: [
      { day: "Today", high: 75, low: 62, precipitation: 10, growth: "Normal" },
      { day: "Tomorrow", high: 78, low: 65, precipitation: 30, growth: "Accelerated" },
      { day: "Wed", high: 73, low: 59, precipitation: 60, growth: "High" },
      { day: "Thu", high: 69, low: 55, precipitation: 20, growth: "Normal" },
      { day: "Fri", high: 71, low: 58, precipitation: 0, growth: "Slow" },
    ],
  },
  recentActivity: [
    {
      id: 1,
      type: "threat_detected",
      message: "New high-risk vegetation detected on Line 345-A",
      timestamp: "5 minutes ago",
      severity: "high",
    },
    {
      id: 2,
      type: "crew_assigned",
      message: "Crew Alpha-7 assigned to threat T-2024-002",
      timestamp: "12 minutes ago",
      severity: "medium",
    },
    {
      id: 3,
      type: "inspection_completed",
      message: "Mobile inspection completed for Line 267-C",
      timestamp: "1 hour ago",
      severity: "low",
    },
    {
      id: 4,
      type: "weather_alert",
      message: "Storm system approaching - accelerated growth expected",
      timestamp: "2 hours ago",
      severity: "medium",
    },
  ],
}

export default function IntelliGridPro() {
  const [activeView, setActiveView] = useState("dashboard")
  const [selectedThreat, setSelectedThreat] = useState(null)
  const [aiQuery, setAiQuery] = useState("")
  const [aiResponse, setAiResponse] = useState("")
  const [isAiLoading, setIsAiLoading] = useState(false)
  const [mapView, setMapView] = useState("risk")
  const [timeRange, setTimeRange] = useState("7d")
  const [isOnline, setIsOnline] = useState(true)

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      // Simulate data updates
      console.log("Updating real-time data...")
    }, 30000) // Update every 30 seconds

    return () => clearInterval(interval)
  }, [])

  const handleAiQuery = async () => {
    if (!aiQuery.trim()) return

    setIsAiLoading(true)
    // Simulate AI processing
    setTimeout(() => {
      const responses = {
        "what areas need attention":
          "Based on current risk analysis, I recommend prioritizing Line 345-A (87% risk, 3-5 days to contact) and Line 138-B (82% risk, 5-7 days to contact). Both locations have oak and pine species showing accelerated growth due to recent weather conditions.",
        "crew recommendations":
          "I suggest dispatching Crew Alpha-7 to handle the high-priority threats on Line 345-A and 138-B. They have the specialized equipment for tall tree removal and are currently 15 minutes from the first location.",
        "budget analysis":
          "Current vegetation management spending is at 67.3% of annual budget. Based on predictive models, you're on track to achieve 30% cost savings compared to reactive maintenance. I recommend allocating additional resources to the high-risk zones to prevent costly emergency responses.",
        "weather impact":
          "The approaching storm system will accelerate vegetation growth by 40-60% over the next 72 hours. I recommend expediting maintenance on medium-risk areas (40-80%) as they may escalate to high-risk status within 5-7 days.",
      }

      const query = aiQuery.toLowerCase()
      let response = "I understand you're asking about vegetation management. "

      if (query.includes("attention") || query.includes("priority")) {
        response = responses["what areas need attention"]
      } else if (query.includes("crew") || query.includes("team")) {
        response = responses["crew recommendations"]
      } else if (query.includes("budget") || query.includes("cost")) {
        response = responses["budget analysis"]
      } else if (query.includes("weather") || query.includes("storm")) {
        response = responses["weather impact"]
      } else {
        response +=
          "I can help you with risk prioritization, crew deployment, budget analysis, and weather impact assessments. What specific area would you like to explore?"
      }

      setAiResponse(response)
      setIsAiLoading(false)
    }, 2000)
  }

  const getRiskColor = (level) => {
    switch (level) {
      case "High":
        return "text-red-400 bg-red-500/20"
      case "Medium":
        return "text-orange-400 bg-orange-500/20"
      case "Low":
        return "text-green-400 bg-green-500/20"
      default:
        return "text-gray-400 bg-gray-500/20"
    }
  }

  const getStatusColor = (status) => {
    switch (status) {
      case "New":
        return "text-blue-400 bg-blue-500/20"
      case "Acknowledged":
        return "text-yellow-400 bg-yellow-500/20"
      case "In Progress":
        return "text-purple-400 bg-purple-500/20"
      case "Resolved":
        return "text-green-400 bg-green-500/20"
      default:
        return "text-gray-400 bg-gray-500/20"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950 text-white">
      <Navbar />

      <div className="pt-20">
        {/* Header */}
        <div className="bg-gray-900/50 border-b border-gray-800">
          <div className="container mx-auto px-4 py-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold mb-2">
                  IntelliGrid <span className="text-teal-400">Pro</span>
                </h1>
                <p className="text-gray-300">AI-Powered Vegetation Management Platform</p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2 text-sm">
                  <div className={`w-2 h-2 rounded-full ${isOnline ? "bg-green-400" : "bg-red-400"}`}></div>
                  <span className="text-gray-300">
                    {isOnline ? "Online" : "Offline"} • Last update: {mockData.systemStatus.lastUpdate}
                  </span>
                </div>
                <button className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors">
                  <Bell className="w-5 h-5" />
                </button>
                <button className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors">
                  <Settings className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar Navigation */}
            <div className="lg:col-span-1">
              <div className="bg-gray-800/50 rounded-lg border border-gray-700 p-6 sticky top-28">
                <h3 className="text-lg font-semibold mb-4">Navigation</h3>
                <nav className="space-y-2">
                  {[
                    { id: "dashboard", label: "Dashboard", icon: <BarChart3 className="w-4 h-4" /> },
                    { id: "risk-map", label: "Risk Mapping", icon: <MapPin className="w-4 h-4" /> },
                    { id: "threats", label: "Active Threats", icon: <AlertTriangle className="w-4 h-4" /> },
                    { id: "ai-assistant", label: "AI Assistant", icon: <MessageSquare className="w-4 h-4" /> },
                    { id: "weather", label: "Environmental Intel", icon: <Cloud className="w-4 h-4" /> },
                    { id: "mobile", label: "Mobile Inspection", icon: <Smartphone className="w-4 h-4" /> },
                    { id: "tickets", label: "Service Tickets", icon: <FileText className="w-4 h-4" /> },
                    { id: "analytics", label: "Growth Analytics", icon: <TrendingUp className="w-4 h-4" /> },
                    { id: "budget", label: "Budget Planning", icon: <DollarSign className="w-4 h-4" /> },
                  ].map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setActiveView(item.id)}
                      className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors text-left ${
                        activeView === item.id
                          ? "bg-teal-500/20 text-teal-400 border border-teal-500/30"
                          : "text-gray-300 hover:bg-gray-700/50 hover:text-white"
                      }`}
                    >
                      {item.icon}
                      <span className="text-sm font-medium">{item.label}</span>
                    </button>
                  ))}
                </nav>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              {activeView === "dashboard" && (
                <div className="space-y-8">
                  {/* KPI Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="bg-gray-800/50 rounded-lg border border-gray-700 p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="p-2 bg-red-500/20 rounded-lg">
                          <AlertTriangle className="w-6 h-6 text-red-400" />
                        </div>
                        <span className="text-2xl font-bold text-red-400">{mockData.riskOverview.high}</span>
                      </div>
                      <h3 className="text-sm font-medium text-gray-300 mb-1">High Risk Areas</h3>
                      <p className="text-xs text-gray-400">Requires immediate attention</p>
                    </div>

                    <div className="bg-gray-800/50 rounded-lg border border-gray-700 p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="p-2 bg-orange-500/20 rounded-lg">
                          <Clock className="w-6 h-6 text-orange-400" />
                        </div>
                        <span className="text-2xl font-bold text-orange-400">{mockData.riskOverview.medium}</span>
                      </div>
                      <h3 className="text-sm font-medium text-gray-300 mb-1">Medium Risk Areas</h3>
                      <p className="text-xs text-gray-400">Monitor closely</p>
                    </div>

                    <div className="bg-gray-800/50 rounded-lg border border-gray-700 p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="p-2 bg-green-500/20 rounded-lg">
                          <CheckCircle className="w-6 h-6 text-green-400" />
                        </div>
                        <span className="text-2xl font-bold text-green-400">{mockData.riskOverview.low}</span>
                      </div>
                      <h3 className="text-sm font-medium text-gray-300 mb-1">Low Risk Areas</h3>
                      <p className="text-xs text-gray-400">Routine monitoring</p>
                    </div>

                    <div className="bg-gray-800/50 rounded-lg border border-gray-700 p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="p-2 bg-teal-500/20 rounded-lg">
                          <Target className="w-6 h-6 text-teal-400" />
                        </div>
                        <span className="text-2xl font-bold text-teal-400">{mockData.kpis.predictiveAccuracy}%</span>
                      </div>
                      <h3 className="text-sm font-medium text-gray-300 mb-1">Prediction Accuracy</h3>
                      <p className="text-xs text-gray-400">AI model performance</p>
                    </div>
                  </div>

                  {/* System Status */}
                  <div className="bg-gray-800/50 rounded-lg border border-gray-700 p-6">
                    <h3 className="text-lg font-semibold mb-4 flex items-center">
                      <Activity className="w-5 h-5 mr-2 text-teal-400" />
                      System Status
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                      <div className="text-center">
                        <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-2">
                          <Shield className="w-6 h-6 text-green-400" />
                        </div>
                        <div className="text-sm font-medium text-green-400">Operational</div>
                        <div className="text-xs text-gray-400">All systems running</div>
                      </div>
                      <div className="text-center">
                        <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-2">
                          <Database className="w-6 h-6 text-blue-400" />
                        </div>
                        <div className="text-sm font-medium text-blue-400">{mockData.systemStatus.dataQuality}%</div>
                        <div className="text-xs text-gray-400">Data Quality</div>
                      </div>
                      <div className="text-center">
                        <div className="w-12 h-12 bg-teal-500/20 rounded-full flex items-center justify-center mx-auto mb-2">
                          <Wifi className="w-6 h-6 text-teal-400" />
                        </div>
                        <div className="text-sm font-medium text-teal-400">Strong</div>
                        <div className="text-xs text-gray-400">Connectivity</div>
                      </div>
                      <div className="text-center">
                        <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-2">
                          <RefreshCw className="w-6 h-6 text-purple-400" />
                        </div>
                        <div className="text-sm font-medium text-purple-400">2 min ago</div>
                        <div className="text-xs text-gray-400">Last Update</div>
                      </div>
                    </div>
                  </div>

                  {/* Performance Metrics */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-gray-800/50 rounded-lg border border-gray-700 p-6">
                      <h4 className="text-sm font-medium text-gray-300 mb-3">Budget Utilization</h4>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-2xl font-bold text-blue-400">{mockData.kpis.budgetUtilization}%</span>
                        <DollarSign className="w-5 h-5 text-blue-400" />
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div
                          className="bg-blue-400 h-2 rounded-full"
                          style={{ width: `${mockData.kpis.budgetUtilization}%` }}
                        ></div>
                      </div>
                      <p className="text-xs text-gray-400 mt-2">On track for 30% savings</p>
                    </div>

                    <div className="bg-gray-800/50 rounded-lg border border-gray-700 p-6">
                      <h4 className="text-sm font-medium text-gray-300 mb-3">Crew Productivity</h4>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-2xl font-bold text-green-400">{mockData.kpis.crewProductivity}%</span>
                        <Users className="w-5 h-5 text-green-400" />
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div
                          className="bg-green-400 h-2 rounded-full"
                          style={{ width: `${mockData.kpis.crewProductivity}%` }}
                        ></div>
                      </div>
                      <p className="text-xs text-gray-400 mt-2">40% improvement vs baseline</p>
                    </div>

                    <div className="bg-gray-800/50 rounded-lg border border-gray-700 p-6">
                      <h4 className="text-sm font-medium text-gray-300 mb-3">Risk Reduction</h4>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-2xl font-bold text-teal-400">{mockData.kpis.riskReduction}%</span>
                        <TrendingUp className="w-5 h-5 text-teal-400" />
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div
                          className="bg-teal-400 h-2 rounded-full"
                          style={{ width: `${mockData.kpis.riskReduction}%` }}
                        ></div>
                      </div>
                      <p className="text-xs text-gray-400 mt-2">25% decrease in outages</p>
                    </div>
                  </div>

                  {/* Recent Activity */}
                  <div className="bg-gray-800/50 rounded-lg border border-gray-700 p-6">
                    <h3 className="text-lg font-semibold mb-4 flex items-center">
                      <Activity className="w-5 h-5 mr-2 text-teal-400" />
                      Recent Activity
                    </h3>
                    <div className="space-y-4">
                      {mockData.recentActivity.map((activity) => (
                        <div key={activity.id} className="flex items-start space-x-3 p-3 bg-gray-700/30 rounded-lg">
                          <div
                            className={`w-2 h-2 rounded-full mt-2 ${
                              activity.severity === "high"
                                ? "bg-red-400"
                                : activity.severity === "medium"
                                  ? "bg-orange-400"
                                  : "bg-green-400"
                            }`}
                          ></div>
                          <div className="flex-1">
                            <p className="text-sm text-gray-200">{activity.message}</p>
                            <p className="text-xs text-gray-400 mt-1">{activity.timestamp}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeView === "risk-map" && (
                <div className="space-y-6">
                  <div className="bg-gray-800/50 rounded-lg border border-gray-700 p-6">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-lg font-semibold flex items-center">
                        <MapPin className="w-5 h-5 mr-2 text-teal-400" />
                        Risk Mapping Interface
                      </h3>
                      <div className="flex items-center space-x-4">
                        <select
                          value={mapView}
                          onChange={(e) => setMapView(e.target.value)}
                          className="bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-sm"
                        >
                          <option value="risk">Risk Heatmap</option>
                          <option value="infrastructure">Infrastructure</option>
                          <option value="weather">Weather Overlay</option>
                          <option value="historical">Historical Trends</option>
                        </select>
                        <select
                          value={timeRange}
                          onChange={(e) => setTimeRange(e.target.value)}
                          className="bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-sm"
                        >
                          <option value="1d">Last 24 Hours</option>
                          <option value="7d">Last 7 Days</option>
                          <option value="30d">Last 30 Days</option>
                          <option value="90d">Last 90 Days</option>
                        </select>
                      </div>
                    </div>

                    {/* Map Controls */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <button className="p-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors">
                          <ZoomIn className="w-4 h-4" />
                        </button>
                        <button className="p-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors">
                          <ZoomOut className="w-4 h-4" />
                        </button>
                        <button className="p-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors">
                          <RotateCcw className="w-4 h-4" />
                        </button>
                        <button className="p-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors">
                          <Layers className="w-4 h-4" />
                        </button>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-2 text-sm">
                          <div className="w-3 h-3 bg-red-500 rounded"></div>
                          <span>High Risk (&gt;80%)</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm">
                          <div className="w-3 h-3 bg-orange-500 rounded"></div>
                          <span>Medium Risk (40-80%)</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm">
                          <div className="w-3 h-3 bg-green-500 rounded"></div>
                          <span>Low Risk (&lt;40%)</span>
                        </div>
                      </div>
                    </div>

                    {/* Map Placeholder */}
                    <div className="bg-gray-700/50 rounded-lg border border-gray-600 h-96 flex items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 via-orange-500/20 to-green-500/20"></div>
                      <div className="relative z-10 text-center">
                        <MapPin className="w-16 h-16 text-teal-400 mx-auto mb-4" />
                        <h4 className="text-lg font-semibold mb-2">Interactive Risk Map</h4>
                        <p className="text-gray-300 mb-4">
                          WMTS-integrated vegetation risk heatmap showing {mockData.riskOverview.total} monitored line
                          segments
                        </p>
                        <div className="grid grid-cols-3 gap-4 text-sm">
                          <div className="bg-red-500/20 p-3 rounded-lg">
                            <div className="text-red-400 font-bold text-lg">{mockData.riskOverview.high}</div>
                            <div>High Risk Zones</div>
                          </div>
                          <div className="bg-orange-500/20 p-3 rounded-lg">
                            <div className="text-orange-400 font-bold text-lg">{mockData.riskOverview.medium}</div>
                            <div>Medium Risk Zones</div>
                          </div>
                          <div className="bg-green-500/20 p-3 rounded-lg">
                            <div className="text-green-400 font-bold text-lg">{mockData.riskOverview.low}</div>
                            <div>Low Risk Zones</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Location Search */}
                    <div className="mt-4 flex items-center space-x-4">
                      <div className="flex-1 relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input
                          type="text"
                          placeholder="Search line segments, substations, or coordinates..."
                          className="w-full pl-10 pr-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
                        />
                      </div>
                      <button className="px-4 py-2 bg-teal-500 hover:bg-teal-400 text-gray-900 font-medium rounded-lg transition-colors">
                        Search
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {activeView === "threats" && (
                <div className="space-y-6">
                  <div className="bg-gray-800/50 rounded-lg border border-gray-700 p-6">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-lg font-semibold flex items-center">
                        <AlertTriangle className="w-5 h-5 mr-2 text-red-400" />
                        Active Threats Panel
                      </h3>
                      <div className="flex items-center space-x-4">
                        <button className="px-4 py-2 bg-teal-500 hover:bg-teal-400 text-gray-900 font-medium rounded-lg transition-colors flex items-center">
                          <Plus className="w-4 h-4 mr-2" />
                          Create Alert
                        </button>
                        <button className="p-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors">
                          <Filter className="w-4 h-4" />
                        </button>
                        <button className="p-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors">
                          <Download className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    <div className="space-y-4">
                      {mockData.activeThreats.map((threat) => (
                        <div
                          key={threat.id}
                          className="bg-gray-700/50 rounded-lg border border-gray-600 p-4 hover:border-teal-500/50 transition-colors cursor-pointer"
                          onClick={() => setSelectedThreat(threat)}
                        >
                          <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center space-x-3">
                              <div
                                className={`px-2 py-1 rounded-full text-xs font-medium ${getRiskColor(threat.riskLevel)}`}
                              >
                                {threat.riskLevel} Risk
                              </div>
                              <div
                                className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(threat.status)}`}
                              >
                                {threat.status}
                              </div>
                              <span className="text-sm text-gray-400">Priority #{threat.priority}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <span className="text-lg font-bold text-white">{threat.percentage}%</span>
                              <button className="p-1 bg-gray-600 hover:bg-gray-500 rounded transition-colors">
                                <Eye className="w-4 h-4" />
                              </button>
                            </div>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div>
                              <h4 className="text-sm font-medium text-gray-300 mb-1">Location</h4>
                              <p className="text-sm text-white">{threat.location}</p>
                              <p className="text-xs text-gray-400">
                                {threat.coordinates.lat.toFixed(4)}, {threat.coordinates.lng.toFixed(4)}
                              </p>
                            </div>
                            <div>
                              <h4 className="text-sm font-medium text-gray-300 mb-1">Estimated Contact</h4>
                              <p className="text-sm text-white">{threat.estimatedContact}</p>
                              <p className="text-xs text-gray-400">Species: {threat.species}</p>
                            </div>
                            <div>
                              <h4 className="text-sm font-medium text-gray-300 mb-1">Last Inspection</h4>
                              <p className="text-sm text-white">{threat.lastInspection}</p>
                              <p className="text-xs text-gray-400">ID: {threat.id}</p>
                            </div>
                          </div>

                          <div className="mt-4 flex items-center justify-between">
                            <div className="w-full bg-gray-600 rounded-full h-2 mr-4">
                              <div
                                className={`h-2 rounded-full ${
                                  threat.percentage >= 80
                                    ? "bg-red-500"
                                    : threat.percentage >= 40
                                      ? "bg-orange-500"
                                      : "bg-green-500"
                                }`}
                                style={{ width: `${threat.percentage}%` }}
                              ></div>
                            </div>
                            <div className="flex items-center space-x-2">
                              <button className="px-3 py-1 bg-blue-500 hover:bg-blue-400 text-white text-xs rounded transition-colors">
                                Assign Crew
                              </button>
                              <button className="px-3 py-1 bg-gray-600 hover:bg-gray-500 text-white text-xs rounded transition-colors">
                                View Details
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeView === "ai-assistant" && (
                <div className="space-y-6">
                  <div className="bg-gray-800/50 rounded-lg border border-gray-700 p-6">
                    <h3 className="text-lg font-semibold mb-4 flex items-center">
                      <MessageSquare className="w-5 h-5 mr-2 text-teal-400" />
                      IntelliGrid Intelligence
                    </h3>

                    <div className="bg-gray-700/50 rounded-lg p-4 mb-6 min-h-[200px]">
                      {aiResponse ? (
                        <div className="space-y-4">
                          <div className="flex items-start space-x-3">
                            <div className="w-8 h-8 bg-teal-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                              <MessageSquare className="w-4 h-4 text-teal-400" />
                            </div>
                            <div className="flex-1">
                              <p className="text-sm text-gray-200">{aiResponse}</p>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="text-center text-gray-400 py-8">
                          <MessageSquare className="w-12 h-12 mx-auto mb-4 opacity-50" />
                          <p className="text-sm">Ask me anything about vegetation management...</p>
                          <p className="text-xs mt-2">
                            Try: "What areas need attention?" or "Show me crew recommendations"
                          </p>
                        </div>
                      )}
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="flex-1 relative">
                        <input
                          type="text"
                          value={aiQuery}
                          onChange={(e) => setAiQuery(e.target.value)}
                          onKeyPress={(e) => e.key === "Enter" && handleAiQuery()}
                          placeholder="Ask about risk areas, crew deployment, budget analysis..."
                          className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
                          disabled={isAiLoading}
                        />
                        <button className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 text-gray-400 hover:text-white transition-colors">
                          <Mic className="w-4 h-4" />
                        </button>
                      </div>
                      <button
                        onClick={handleAiQuery}
                        disabled={isAiLoading || !aiQuery.trim()}
                        className="px-6 py-3 bg-teal-500 hover:bg-teal-400 disabled:bg-gray-600 disabled:cursor-not-allowed text-gray-900 font-medium rounded-lg transition-colors flex items-center"
                      >
                        {isAiLoading ? (
                          <RefreshCw className="w-4 h-4 animate-spin" />
                        ) : (
                          <>
                            <MessageSquare className="w-4 h-4 mr-2" />
                            Ask AI
                          </>
                        )}
                      </button>
                    </div>

                    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-gray-700/30 rounded-lg p-4">
                        <h4 className="text-sm font-medium text-gray-300 mb-2">Quick Questions</h4>
                        <div className="space-y-2">
                          {[
                            "What areas need attention this week?",
                            "Show me crew recommendations",
                            "Analyze budget performance",
                            "Weather impact on growth rates",
                          ].map((question, index) => (
                            <button
                              key={index}
                              onClick={() => {
                                setAiQuery(question)
                                handleAiQuery()
                              }}
                              className="w-full text-left px-3 py-2 bg-gray-600/50 hover:bg-gray-600 rounded text-sm text-gray-200 transition-colors"
                            >
                              {question}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="bg-gray-700/30 rounded-lg p-4">
                        <h4 className="text-sm font-medium text-gray-300 mb-2">AI Capabilities</h4>
                        <div className="space-y-2 text-sm text-gray-400">
                          <div className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-400" />
                            <span>Risk prioritization analysis</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-400" />
                            <span>Crew deployment optimization</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-400" />
                            <span>Budget forecasting & analysis</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-400" />
                            <span>Weather impact assessment</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeView === "weather" && (
                <div className="space-y-6">
                  <div className="bg-gray-800/50 rounded-lg border border-gray-700 p-6">
                    <h3 className="text-lg font-semibold mb-6 flex items-center">
                      <Cloud className="w-5 h-5 mr-2 text-teal-400" />
                      Environmental Intelligence
                    </h3>

                    {/* Current Conditions */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                      <div className="bg-gray-700/50 rounded-lg p-4 text-center">
                        <Thermometer className="w-8 h-8 text-orange-400 mx-auto mb-2" />
                        <div className="text-2xl font-bold text-white">
                          {mockData.weatherData.current.temperature}°F
                        </div>
                        <div className="text-sm text-gray-400">Temperature</div>
                      </div>
                      <div className="bg-gray-700/50 rounded-lg p-4 text-center">
                        <CloudRain className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                        <div className="text-2xl font-bold text-white">{mockData.weatherData.current.humidity}%</div>
                        <div className="text-sm text-gray-400">Humidity</div>
                      </div>
                      <div className="bg-gray-700/50 rounded-lg p-4 text-center">
                        <Wind className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                        <div className="text-2xl font-bold text-white">
                          {mockData.weatherData.current.windSpeed} mph
                        </div>
                        <div className="text-sm text-gray-400">Wind Speed</div>
                      </div>
                      <div className="bg-gray-700/50 rounded-lg p-4 text-center">
                        <Sun className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                        <div className="text-sm font-bold text-white">{mockData.weatherData.current.conditions}</div>
                        <div className="text-sm text-gray-400">Conditions</div>
                      </div>
                    </div>

                    {/* 5-Day Forecast */}
                    <div className="bg-gray-700/30 rounded-lg p-6">
                      <h4 className="text-lg font-semibold mb-4">Growth Impact Forecast</h4>
                      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                        {mockData.weatherData.forecast.map((day, index) => (
                          <div key={index} className="bg-gray-600/50 rounded-lg p-4 text-center">
                            <div className="text-sm font-medium text-gray-300 mb-2">{day.day}</div>
                            <div className="text-lg font-bold text-white mb-1">
                              {day.high}° / {day.low}°
                            </div>
                            <div className="text-sm text-blue-400 mb-2">{day.precipitation}% rain</div>
                            <div
                              className={`text-xs px-2 py-1 rounded-full ${
                                day.growth === "High"
                                  ? "bg-red-500/20 text-red-400"
                                  : day.growth === "Accelerated"
                                    ? "bg-orange-500/20 text-orange-400"
                                    : day.growth === "Normal"
                                      ? "bg-yellow-500/20 text-yellow-400"
                                      : "bg-green-500/20 text-green-400"
                              }`}
                            >
                              {day.growth} Growth
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Growth Analysis */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                      <div className="bg-gray-700/30 rounded-lg p-6">
                        <h4 className="text-lg font-semibold mb-4 flex items-center">
                          <Leaf className="w-5 h-5 mr-2 text-green-400" />
                          Growth Impact Analysis
                        </h4>
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-300">Current Growth Rate</span>
                            <span className="text-sm font-medium text-orange-400">Accelerated (+40%)</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-300">Seasonal Factor</span>
                            <span className="text-sm font-medium text-green-400">Spring Peak</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-300">Moisture Index</span>
                            <span className="text-sm font-medium text-blue-400">High (85%)</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-300">Risk Escalation</span>
                            <span className="text-sm font-medium text-red-400">5-7 days</span>
                          </div>
                        </div>
                      </div>

                      <div className="bg-gray-700/30 rounded-lg p-6">
                        <h4 className="text-lg font-semibold mb-4 flex items-center">
                          <Calendar className="w-5 h-5 mr-2 text-teal-400" />
                          Maintenance Windows
                        </h4>
                        <div className="space-y-4">
                          <div className="bg-green-500/20 rounded-lg p-3">
                            <div className="text-sm font-medium text-green-400">Optimal Window</div>
                            <div className="text-xs text-gray-300">Tomorrow 8AM - 4PM</div>
                            <div className="text-xs text-gray-400">Clear skies, low wind</div>
                          </div>
                          <div className="bg-yellow-500/20 rounded-lg p-3">
                            <div className="text-sm font-medium text-yellow-400">Acceptable Window</div>
                            <div className="text-xs text-gray-300">Thursday 10AM - 2PM</div>
                            <div className="text-xs text-gray-400">Partly cloudy, moderate wind</div>
                          </div>
                          <div className="bg-red-500/20 rounded-lg p-3">
                            <div className="text-sm font-medium text-red-400">Avoid</div>
                            <div className="text-xs text-gray-300">Wednesday All Day</div>
                            <div className="text-xs text-gray-400">Storm system, high winds</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeView === "mobile" && (
                <div className="space-y-6">
                  <div className="bg-gray-800/50 rounded-lg border border-gray-700 p-6">
                    <h3 className="text-lg font-semibold mb-6 flex items-center">
                      <Smartphone className="w-5 h-5 mr-2 text-teal-400" />
                      Mobile Inspection Interface
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {/* Mobile App Features */}
                      <div className="space-y-6">
                        <div className="bg-gray-700/50 rounded-lg p-6">
                          <h4 className="text-lg font-semibold mb-4 flex items-center">
                            <Camera className="w-5 h-5 mr-2 text-blue-400" />
                            Photo Capture & Analysis
                          </h4>
                          <div className="space-y-4">
                            <div className="flex items-center space-x-3">
                              <CheckCircle className="w-5 h-5 text-green-400" />
                              <span className="text-sm text-gray-300">Geotagged photo capture</span>
                            </div>
                            <div className="flex items-center space-x-3">
                              <CheckCircle className="w-5 h-5 text-green-400" />
                              <span className="text-sm text-gray-300">AI-powered vegetation detection</span>
                            </div>
                            <div className="flex items-center space-x-3">
                              <CheckCircle className="w-5 h-5 text-green-400" />
                              <span className="text-sm text-gray-300">Automatic risk assessment</span>
                            </div>
                            <div className="flex items-center space-x-3">
                              <CheckCircle className="w-5 h-5 text-green-400" />
                              <span className="text-sm text-gray-300">Offline capability</span>
                            </div>
                          </div>
                        </div>

                        <div className="bg-gray-700/50 rounded-lg p-6">
                          <h4 className="text-lg font-semibold mb-4 flex items-center">
                            <FileText className="w-5 h-5 mr-2 text-purple-400" />
                            Inspection Forms
                          </h4>
                          <div className="space-y-3">
                            <button className="w-full text-left p-3 bg-gray-600/50 hover:bg-gray-600 rounded-lg transition-colors">
                              <div className="text-sm font-medium text-white">Vegetation Encroachment</div>
                              <div className="text-xs text-gray-400">Standard vegetation assessment form</div>
                            </button>
                            <button className="w-full text-left p-3 bg-gray-600/50 hover:bg-gray-600 rounded-lg transition-colors">
                              <div className="text-sm font-medium text-white">Structural Inspection</div>
                              <div className="text-xs text-gray-400">Pole and hardware condition check</div>
                            </button>
                            <button className="w-full text-left p-3 bg-gray-600/50 hover:bg-gray-600 rounded-lg transition-colors">
                              <div className="text-sm font-medium text-white">Emergency Assessment</div>
                              <div className="text-xs text-gray-400">Rapid damage evaluation form</div>
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* Mobile Device Status */}
                      <div className="space-y-6">
                        <div className="bg-gray-700/50 rounded-lg p-6">
                          <h4 className="text-lg font-semibold mb-4 flex items-center">
                            <Smartphone className="w-5 h-5 mr-2 text-teal-400" />
                            Device Status
                          </h4>
                          <div className="space-y-4">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-2">
                                <Signal className="w-4 h-4 text-green-400" />
                                <span className="text-sm text-gray-300">Network Signal</span>
                              </div>
                              <span className="text-sm font-medium text-green-400">Strong (4 bars)</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-2">
                                <Battery className="w-4 h-4 text-green-400" />
                                <span className="text-sm text-gray-300">Battery Level</span>
                              </div>
                              <span className="text-sm font-medium text-green-400">87%</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-2">
                                <Navigation className="w-4 h-4 text-blue-400" />
                                <span className="text-sm text-gray-300">GPS Accuracy</span>
                              </div>
                              <span className="text-sm font-medium text-blue-400">±3 meters</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-2">
                                <Database className="w-4 h-4 text-purple-400" />
                                <span className="text-sm text-gray-300">Sync Status</span>
                              </div>
                              <span className="text-sm font-medium text-purple-400">Up to date</span>
                            </div>
                          </div>
                        </div>

                        <div className="bg-gray-700/50 rounded-lg p-6">
                          <h4 className="text-lg font-semibold mb-4 flex items-center">
                            <Mic className="w-5 h-5 mr-2 text-orange-400" />
                            Voice Notes
                          </h4>
                          <div className="space-y-3">
                            <div className="flex items-center justify-between p-3 bg-gray-600/50 rounded-lg">
                              <div>
                                <div className="text-sm font-medium text-white">Line 345-A Inspection</div>
                                <div className="text-xs text-gray-400">2:34 PM • 1:23 duration</div>
                              </div>
                              <button className="p-2 bg-teal-500 hover:bg-teal-400 rounded-lg transition-colors">
                                <Play className="w-4 h-4 text-gray-900" />
                              </button>
                            </div>
                            <div className="flex items-center justify-between p-3 bg-gray-600/50 rounded-lg">
                              <div>
                                <div className="text-sm font-medium text-white">Weather Conditions</div>
                                <div className="text-xs text-gray-400">1:45 PM • 0:45 duration</div>
                              </div>
                              <button className="p-2 bg-gray-500 hover:bg-gray-400 rounded-lg transition-colors">
                                <Pause className="w-4 h-4 text-white" />
                              </button>
                            </div>
                          </div>
                          <button className="w-full mt-4 px-4 py-2 bg-orange-500 hover:bg-orange-400 text-gray-900 font-medium rounded-lg transition-colors flex items-center justify-center">
                            <Mic className="w-4 h-4 mr-2" />
                            Record New Note
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Recent Inspections */}
                    <div className="mt-8 bg-gray-700/30 rounded-lg p-6">
                      <h4 className="text-lg font-semibold mb-4">Recent Mobile Inspections</h4>
                      <div className="space-y-3">
                        {[
                          {
                            id: "MI-2024-001",
                            location: "Line 267-C, Mile 12.1",
                            inspector: "John Smith",
                            timestamp: "2 hours ago",
                            status: "Completed",
                            risk: "Medium",
                          },
                          {
                            id: "MI-2024-002",
                            location: "Line 456-D, Mile 67.8",
                            inspector: "Sarah Johnson",
                            timestamp: "4 hours ago",
                            status: "In Progress",
                            risk: "Low",
                          },
                          {
                            id: "MI-2024-003",
                            location: "Line 138-B, Mile 45.2",
                            inspector: "Mike Davis",
                            timestamp: "6 hours ago",
                            status: "Completed",
                            risk: "High",
                          },
                        ].map((inspection) => (
                          <div
                            key={inspection.id}
                            className="flex items-center justify-between p-3 bg-gray-600/50 rounded-lg"
                          >
                            <div className="flex-1">
                              <div className="flex items-center space-x-3 mb-1">
                                <span className="text-sm font-medium text-white">{inspection.location}</span>
                                <span className={`text-xs px-2 py-1 rounded-full ${getRiskColor(inspection.risk)}`}>
                                  {inspection.risk}
                                </span>
                                <span className={`text-xs px-2 py-1 rounded-full ${getStatusColor(inspection.status)}`}>
                                  {inspection.status}
                                </span>
                              </div>
                              <div className="text-xs text-gray-400">
                                {inspection.inspector} • {inspection.timestamp} • {inspection.id}
                              </div>
                            </div>
                            <button className="p-2 bg-gray-500 hover:bg-gray-400 rounded-lg transition-colors">
                              <ExternalLink className="w-4 h-4" />
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeView === "tickets" && (
                <div className="space-y-6">
                  <div className="bg-gray-800/50 rounded-lg border border-gray-700 p-6">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-lg font-semibold flex items-center">
                        <FileText className="w-5 h-5 mr-2 text-teal-400" />
                        Service Ticket Management
                      </h3>
                      <div className="flex items-center space-x-4">
                        <button className="px-4 py-2 bg-teal-500 hover:bg-teal-400 text-gray-900 font-medium rounded-lg transition-colors flex items-center">
                          <Plus className="w-4 h-4 mr-2" />
                          Create Ticket
                        </button>
                        <select className="bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-sm">
                          <option>All Tickets</option>
                          <option>Open</option>
                          <option>In Progress</option>
                          <option>Completed</option>
                          <option>Overdue</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                      <div className="bg-blue-500/20 rounded-lg p-4 text-center">
                        <div className="text-2xl font-bold text-blue-400">23</div>
                        <div className="text-sm text-gray-300">Open Tickets</div>
                      </div>
                      <div className="bg-orange-500/20 rounded-lg p-4 text-center">
                        <div className="text-2xl font-bold text-orange-400">8</div>
                        <div className="text-sm text-gray-300">In Progress</div>
                      </div>
                      <div className="bg-green-500/20 rounded-lg p-4 text-center">
                        <div className="text-2xl font-bold text-green-400">47</div>
                        <div className="text-sm text-gray-300">Completed Today</div>
                      </div>
                      <div className="bg-red-500/20 rounded-lg p-4 text-center">
                        <div className="text-2xl font-bold text-red-400">3</div>
                        <div className="text-sm text-gray-300">Overdue</div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      {[
                        {
                          id: "WO-2024-001",
                          title: "Vegetation Clearing - Line 345-A",
                          priority: "High",
                          status: "Open",
                          assignedTo: "Crew Alpha-7",
                          created: "2 hours ago",
                          dueDate: "Tomorrow 5:00 PM",
                          location: "Mile 23.7",
                          estimatedHours: 6,
                        },
                        {
                          id: "WO-2024-002",
                          title: "Tree Removal - Line 138-B",
                          priority: "High",
                          status: "In Progress",
                          assignedTo: "Crew Beta-3",
                          created: "4 hours ago",
                          dueDate: "Today 6:00 PM",
                          location: "Mile 45.2",
                          estimatedHours: 8,
                        },
                        {
                          id: "WO-2024-003",
                          title: "Routine Trimming - Line 267-C",
                          priority: "Medium",
                          status: "Open",
                          assignedTo: "Unassigned",
                          created: "1 day ago",
                          dueDate: "Friday 3:00 PM",
                          location: "Mile 12.1",
                          estimatedHours: 4,
                        },
                        {
                          id: "WO-2024-004",
                          title: "Emergency Response - Storm Damage",
                          priority: "Critical",
                          status: "Overdue",
                          assignedTo: "Crew Gamma-1",
                          created: "3 days ago",
                          dueDate: "Yesterday 2:00 PM",
                          location: "Multiple locations",
                          estimatedHours: 12,
                        },
                      ].map((ticket) => (
                        <div key={ticket.id} className="bg-gray-700/50 rounded-lg border border-gray-600 p-4">
                          <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center space-x-3">
                              <span
                                className={`px-2 py-1 rounded-full text-xs font-medium ${
                                  ticket.priority === "Critical"
                                    ? "bg-red-500/20 text-red-400"
                                    : ticket.priority === "High"
                                      ? "bg-orange-500/20 text-orange-400"
                                      : ticket.priority === "Medium"
                                        ? "bg-yellow-500/20 text-yellow-400"
                                        : "bg-green-500/20 text-green-400"
                                }`}
                              >
                                {ticket.priority}
                              </span>
                              <span
                                className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(ticket.status)}`}
                              >
                                {ticket.status}
                              </span>
                              <span className="text-sm text-gray-400">{ticket.id}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <button className="p-1 bg-gray-600 hover:bg-gray-500 rounded transition-colors">
                                <Eye className="w-4 h-4" />
                              </button>
                              <button className="p-1 bg-gray-600 hover:bg-gray-500 rounded transition-colors">
                                <Settings className="w-4 h-4" />
                              </button>
                            </div>
                          </div>

                          <h4 className="text-lg font-semibold text-white mb-2">{ticket.title}</h4>

                          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
                            <div>
                              <span className="text-gray-400">Assigned To:</span>
                              <div className="text-white font-medium">{ticket.assignedTo}</div>
                            </div>
                            <div>
                              <span className="text-gray-400">Location:</span>
                              <div className="text-white font-medium">{ticket.location}</div>
                            </div>
                            <div>
                              <span className="text-gray-400">Due Date:</span>
                              <div className="text-white font-medium">{ticket.dueDate}</div>
                            </div>
                            <div>
                              <span className="text-gray-400">Est. Hours:</span>
                              <div className="text-white font-medium">{ticket.estimatedHours}h</div>
                            </div>
                          </div>

                          <div className="mt-4 flex items-center justify-between">
                            <span className="text-xs text-gray-400">Created {ticket.created}</span>
                            <div className="flex items-center space-x-2">
                              <button className="px-3 py-1 bg-blue-500 hover:bg-blue-400 text-white text-xs rounded transition-colors">
                                Assign Crew
                              </button>
                              <button className="px-3 py-1 bg-teal-500 hover:bg-teal-400 text-gray-900 text-xs rounded transition-colors">
                                Update Status
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeView === "analytics" && (
                <div className="space-y-6">
                  <div className="bg-gray-800/50 rounded-lg border border-gray-700 p-6">
                    <h3 className="text-lg font-semibold mb-6 flex items-center">
                      <TrendingUp className="w-5 h-5 mr-2 text-teal-400" />
                      Growth Analytics & Trends
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {/* Timeline Visualization */}
                      <div className="bg-gray-700/50 rounded-lg p-6">
                        <h4 className="text-lg font-semibold mb-4">Vegetation Growth Timeline</h4>
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-300">January 2024</span>
                            <div className="flex-1 mx-4 bg-gray-600 rounded-full h-2">
                              <div className="bg-green-400 h-2 rounded-full" style={{ width: "20%" }}></div>
                            </div>
                            <span className="text-sm text-green-400">Low Growth</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-300">February 2024</span>
                            <div className="flex-1 mx-4 bg-gray-600 rounded-full h-2">
                              <div className="bg-yellow-400 h-2 rounded-full" style={{ width: "35%" }}></div>
                            </div>
                            <span className="text-sm text-yellow-400">Moderate</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-300">March 2024</span>
                            <div className="flex-1 mx-4 bg-gray-600 rounded-full h-2">
                              <div className="bg-orange-400 h-2 rounded-full" style={{ width: "65%" }}></div>
                            </div>
                            <span className="text-sm text-orange-400">Accelerated</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-300">April 2024</span>
                            <div className="flex-1 mx-4 bg-gray-600 rounded-full h-2">
                              <div className="bg-red-400 h-2 rounded-full" style={{ width: "85%" }}></div>
                            </div>
                            <span className="text-sm text-red-400">Peak Growth</span>
                          </div>
                        </div>
                      </div>

                      {/* Species Analysis */}
                      <div className="bg-gray-700/50 rounded-lg p-6">
                        <h4 className="text-lg font-semibold mb-4">Species-Specific Growth Rates</h4>
                        <div className="space-y-4">
                          {[
                            { species: "Oak", rate: "2.3 ft/month", risk: "High", color: "text-red-400" },
                            { species: "Pine", rate: "1.8 ft/month", risk: "Medium", color: "text-orange-400" },
                            { species: "Maple", rate: "2.1 ft/month", risk: "High", color: "text-red-400" },
                            { species: "Willow", rate: "3.2 ft/month", risk: "Critical", color: "text-red-500" },
                          ].map((item, index) => (
                            <div
                              key={index}
                              className="flex items-center justify-between p-3 bg-gray-600/50 rounded-lg"
                            >
                              <div className="flex items-center space-x-3">
                                <Leaf className="w-4 h-4 text-green-400" />
                                <span className="text-sm font-medium text-white">{item.species}</span>
                              </div>
                              <div className="text-right">
                                <div className="text-sm text-white">{item.rate}</div>
                                <div className={`text-xs ${item.color}`}>{item.risk} Risk</div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Predictive Modeling */}
                    <div className="mt-8 bg-gray-700/30 rounded-lg p-6">
                      <h4 className="text-lg font-semibold mb-4">Predictive Growth Modeling</h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="text-center">
                          <div className="text-3xl font-bold text-orange-400 mb-2">127</div>
                          <div className="text-sm text-gray-300">Areas at Risk</div>
                          <div className="text-xs text-gray-400">Next 30 days</div>
                        </div>
                        <div className="text-center">
                          <div className="text-3xl font-bold text-red-400 mb-2">34</div>
                          <div className="text-sm text-gray-300">Critical Zones</div>
                          <div className="text-xs text-gray-400">Next 14 days</div>
                        </div>
                        <div className="text-center">
                          <div className="text-3xl font-bold text-teal-400 mb-2">94.1%</div>
                          <div className="text-sm text-gray-300">Model Accuracy</div>
                          <div className="text-xs text-gray-400">Historical validation</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeView === "budget" && (
                <div className="space-y-6">
                  <div className="bg-gray-800/50 rounded-lg border border-gray-700 p-6">
                    <h3 className="text-lg font-semibold mb-6 flex items-center">
                      <DollarSign className="w-5 h-5 mr-2 text-teal-400" />
                      Budget Planning & Analytics
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                      <div className="bg-blue-500/20 rounded-lg p-4 text-center">
                        <div className="text-2xl font-bold text-blue-400">$2.1M</div>
                        <div className="text-sm text-gray-300">Annual Budget</div>
                        <div className="text-xs text-gray-400">Vegetation management</div>
                      </div>
                      <div className="bg-green-500/20 rounded-lg p-4 text-center">
                        <div className="text-2xl font-bold text-green-400">$1.4M</div>
                        <div className="text-sm text-gray-300">Spent to Date</div>
                        <div className="text-xs text-gray-400">67.3% utilized</div>
                      </div>
                      <div className="bg-teal-500/20 rounded-lg p-4 text-center">
                        <div className="text-2xl font-bold text-teal-400">$630K</div>
                        <div className="text-sm text-gray-300">Projected Savings</div>
                        <div className="text-xs text-gray-400">30% vs reactive</div>
                      </div>
                      <div className="bg-purple-500/20 rounded-lg p-4 text-center">
                        <div className="text-2xl font-bold text-purple-400">$700K</div>
                        <div className="text-sm text-gray-300">Remaining Budget</div>
                        <div className="text-xs text-gray-400">5 months left</div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {/* Cost Forecasting */}
                      <div className="bg-gray-700/50 rounded-lg p-6">
                        <h4 className="text-lg font-semibold mb-4">Monthly Cost Forecast</h4>
                        <div className="space-y-4">
                          {[
                            { month: "May 2024", projected: "$180K", actual: "$165K", variance: "-8.3%" },
                            { month: "Jun 2024", projected: "$195K", actual: "$201K", variance: "+3.1%" },
                            { month: "Jul 2024", projected: "$220K", actual: "TBD", variance: "N/A" },
                            { month: "Aug 2024", projected: "$205K", actual: "TBD", variance: "N/A" },
                          ].map((item, index) => (
                            <div
                              key={index}
                              className="flex items-center justify-between p-3 bg-gray-600/50 rounded-lg"
                            >
                              <span className="text-sm font-medium text-white">{item.month}</span>
                              <div className="text-right">
                                <div className="text-sm text-white">{item.projected}</div>
                                <div className="text-xs text-gray-400">
                                  Actual: {item.actual} ({item.variance})
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* ROI Analysis */}
                      <div className="bg-gray-700/50 rounded-lg p-6">
                        <h4 className="text-lg font-semibold mb-4">ROI Analysis</h4>
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-300">Proactive vs Reactive</span>
                            <span className="text-sm font-medium text-green-400">+30% savings</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-300">Outage Prevention</span>
                            <span className="text-sm font-medium text-teal-400">$1.2M avoided</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-300">Crew Efficiency</span>
                            <span className="text-sm font-medium text-blue-400">+40% productivity</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-300">Emergency Response</span>
                            <span className="text-sm font-medium text-purple-400">-65% incidents</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Resource Allocation */}
                    <div className="mt-8 bg-gray-700/30 rounded-lg p-6">
                      <h4 className="text-lg font-semibold mb-4">Resource Allocation by Risk Zone</h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-red-500/20 rounded-lg p-4">
                          <h5 className="text-sm font-medium text-red-400 mb-2">High Risk Zones</h5>
                          <div className="text-2xl font-bold text-white mb-1">$850K</div>
                          <div className="text-xs text-gray-400">60% of budget allocation</div>
                          <div className="mt-2 w-full bg-gray-600 rounded-full h-2">
                            <div className="bg-red-400 h-2 rounded-full" style={{ width: "60%" }}></div>
                          </div>
                        </div>
                        <div className="bg-orange-500/20 rounded-lg p-4">
                          <h5 className="text-sm font-medium text-orange-400 mb-2">Medium Risk Zones</h5>
                          <div className="text-2xl font-bold text-white mb-1">$420K</div>
                          <div className="text-xs text-gray-400">30% of budget allocation</div>
                          <div className="mt-2 w-full bg-gray-600 rounded-full h-2">
                            <div className="bg-orange-400 h-2 rounded-full" style={{ width: "30%" }}></div>
                          </div>
                        </div>
                        <div className="bg-green-500/20 rounded-lg p-4">
                          <h5 className="text-sm font-medium text-green-400 mb-2">Low Risk Zones</h5>
                          <div className="text-2xl font-bold text-white mb-1">$140K</div>
                          <div className="text-xs text-gray-400">10% of budget allocation</div>
                          <div className="mt-2 w-full bg-gray-600 rounded-full h-2">
                            <div className="bg-green-400 h-2 rounded-full" style={{ width: "10%" }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
