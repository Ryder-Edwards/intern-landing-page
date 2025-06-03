"use client"

import { useState } from "react"
import Image from "next/image"

export default function InteractiveDemo() {
  const [hoveredArea, setHoveredArea] = useState<string | null>(null)

  const detectionAreas = [
    {
      id: "vegetation",
      label: "Vegetation Encroachment",
      description: "Tree branches too close to power lines, creating potential for outages during storms.",
      color: "bg-yellow-500",
      position: "top-[20%] left-[30%] w-16 h-16",
    },
    {
      id: "structural",
      label: "Structural Damage",
      description: "Corrosion detected on transmission tower, requiring maintenance within 30 days.",
      color: "bg-red-500",
      position: "top-[40%] left-[60%] w-14 h-14",
    },
    {
      id: "insulator",
      label: "Insulator Degradation",
      description: "Cracked insulator identified, posing risk of flashover during wet conditions.",
      color: "bg-orange-500",
      position: "top-[60%] left-[45%] w-12 h-12",
    },
  ]

  return (
    <div className="max-w-4xl mx-auto">
      <div className="relative rounded-lg overflow-hidden border border-gray-700 group">
        <Image
          src="/powerline-inspection.jpg"
          alt="Power line inspection"
          width={1200}
          height={675}
          className="w-full h-auto object-cover"
        />

        {/* Detection Areas */}
        {detectionAreas.map((area) => (
          <div
            key={area.id}
            className={`absolute ${area.position} rounded-full ${area.color} opacity-0 group-hover:opacity-50 cursor-pointer transition-opacity duration-300`}
            style={{ mixBlendMode: "screen" }}
            onMouseEnter={() => setHoveredArea(area.id)}
            onMouseLeave={() => setHoveredArea(null)}
          />
        ))}

        {/* Detection Info */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900 to-transparent p-6">
          {hoveredArea ? (
            <div className="bg-gray-900/80 backdrop-blur-sm p-4 rounded-lg border border-gray-700 max-w-md">
              <div className="flex items-center mb-2">
                <div
                  className={`w-3 h-3 rounded-full ${detectionAreas.find((a) => a.id === hoveredArea)?.color} mr-2`}
                ></div>
                <h4 className="text-lg font-semibold text-white">
                  {detectionAreas.find((a) => a.id === hoveredArea)?.label}
                </h4>
              </div>
              <p className="text-gray-300 text-sm">{detectionAreas.find((a) => a.id === hoveredArea)?.description}</p>
            </div>
          ) : (
            <div className="text-center text-gray-400 text-sm">
              <span className="animate-pulse">Hover over highlighted areas to see AI detection results</span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
