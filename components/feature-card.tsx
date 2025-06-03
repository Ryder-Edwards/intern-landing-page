import type { ReactNode } from "react"

interface FeatureCardProps {
  icon: ReactNode
  title: string
  description: string
}

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700 transition-all duration-300 hover:border-teal-500/50 hover:bg-gray-800/80 group">
      <div className="mb-4 bg-gray-900/50 p-4 rounded-lg inline-block group-hover:bg-teal-500/10 transition-colors duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  )
}
