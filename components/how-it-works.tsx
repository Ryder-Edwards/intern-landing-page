import { DrillIcon as Drone, Cpu, BarChart3, Wrench } from "lucide-react"

export default function HowItWorks() {
  const steps = [
    {
      icon: <Drone className="w-8 h-8 text-teal-400" />,
      title: "Data Collection",
      description: "Autonomous drones capture high-resolution imagery and sensor data along power line corridors.",
    },
    {
      icon: <Cpu className="w-8 h-8 text-teal-400" />,
      title: "AI Analysis",
      description:
        "Our proprietary algorithms process the data to identify vegetation encroachment, structural issues, and compliance risks.",
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-teal-400" />,
      title: "Insights Generation",
      description:
        "The system generates detailed reports with prioritized maintenance recommendations and risk assessments.",
    },
    {
      icon: <Wrench className="w-8 h-8 text-teal-400" />,
      title: "Action Planning",
      description:
        "Maintenance teams receive actionable insights to efficiently address identified issues before they cause outages.",
    },
  ]

  return (
    <div className="relative">
      {/* Connecting Line */}
      <div className="absolute left-1/2 top-12 bottom-12 w-0.5 bg-gradient-to-b from-teal-500 to-teal-500/0 hidden md:block"></div>

      <div className="space-y-16 md:space-y-0 relative">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`md:flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} relative`}
          >
            {/* Step Number */}
            <div className="absolute left-1/2 transform -translate-x-1/2 -top-4 md:static md:transform-none md:flex-none md:w-1/2 md:flex md:justify-center z-10">
              <div className="w-16 h-16 rounded-full bg-gray-800 border-2 border-teal-500 flex items-center justify-center text-xl font-bold text-teal-400 shadow-lg shadow-teal-500/20">
                {index + 1}
              </div>
            </div>

            {/* Content Box */}
            <div
              className={`bg-gray-800/50 rounded-lg p-6 border border-gray-700 md:w-1/2 relative z-0 mt-8 md:mt-0 ${
                index % 2 === 0 ? "md:mr-8" : "md:ml-8"
              }`}
            >
              <div className="flex items-center mb-4">
                <div className="mr-3 bg-gray-900/50 p-2 rounded-lg">{step.icon}</div>
                <h3 className="text-xl font-semibold text-white">{step.title}</h3>
              </div>
              <p className="text-gray-300">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
