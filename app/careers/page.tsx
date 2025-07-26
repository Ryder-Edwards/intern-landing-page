import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { MapPin, Clock, DollarSign, Users } from "lucide-react"

export default function CareersPage() {
  const jobs = [
    {
      title: "Senior AI Engineer",
      department: "Engineering",
      location: "Tennessee/Florida / Remote",
      type: "Full-time",
      salary: "$140k - $180k",
      description: "Lead development of computer vision algorithms for power line inspection and vegetation detection.",
      requirements: [
        "PhD/MS in Computer Science or related field",
        "5+ years ML/AI experience",
        "Python, TensorFlow/PyTorch",
        "Computer vision expertise",
      ],
    },
    {
      title: "Drone Systems Engineer",
      department: "Hardware",
      location: "Tennessee/Florida",
      type: "Full-time",
      salary: "$120k - $150k",
      description: "Design and optimize autonomous drone systems for power line inspection missions.",
      requirements: [
        "MS in Aerospace/Electrical Engineering",
        "Drone/UAV development experience",
        "Flight control systems",
        "FAA Part 107 certification preferred",
      ],
    },
    {
      title: "Utility Sales Manager",
      department: "Sales",
      location: "Remote",
      type: "Full-time",
      salary: "$100k - $130k + Commission",
      description: "Drive sales growth by building relationships with utility companies across North America.",
      requirements: [
        "5+ years utility industry sales",
        "Existing utility relationships",
        "Technical product knowledge",
        "Travel 50%+",
      ],
    },
    {
      title: "DevOps Engineer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      salary: "$110k - $140k",
      description: "Build and maintain cloud infrastructure for AI model training and deployment.",
      requirements: ["AWS/Azure expertise", "Kubernetes, Docker", "CI/CD pipelines", "Infrastructure as Code"],
    },
    {
      title: "Field Operations Specialist",
      department: "Operations",
      location: "Tennessee/Florida/Southeast US",
      type: "Full-time",
      salary: "$70k - $90k",
      description: "Coordinate drone inspection missions and provide on-site technical support to utility clients.",
      requirements: [
        "Technical background preferred",
        "Drone operation experience",
        "Valid driver's license",
        "Travel 75%+",
      ],
    },
  ]

  const benefits = [
    "Competitive salary and equity package",
    "Comprehensive health, dental, and vision insurance",
    "401(k) with company matching",
    "Flexible PTO and remote work options",
    "Professional development budget",
    "Cutting-edge technology and equipment",
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950 text-white">
      <Navbar />

      <section className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Join Our <span className="text-teal-400">Team</span>
            </h1>
            <p className="text-xl text-gray-300">
              Help us revolutionize power line inspection with cutting-edge AI and drone technology. We're looking for
              passionate innovators to join our mission.
            </p>
          </div>

          {/* Company Culture */}
          <div className="bg-gray-800/50 rounded-lg border border-gray-700 p-8 mb-16">
            <h2 className="text-2xl font-bold mb-6 text-center">Why LineIntel?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4 text-teal-400">Our Mission</h3>
                <p className="text-gray-300 mb-4">
                  Based out of Tennessee and Florida, LineIntel revolutionizes utility vegetation management by
                  providing cutting-edge drone and AI-based solutions that enhance safety, reliability, and operational
                  efficiency for utility companies and electric cooperatives.
                </p>
                <h3 className="text-lg font-semibold mb-4 text-teal-400">Our Culture</h3>
                <p className="text-gray-300">
                  Innovation-driven, collaborative environment where every team member contributes to solving real-world
                  vegetation management challenges that impact millions of people.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 text-teal-400">Benefits & Perks</h3>
                <ul className="space-y-2">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-teal-400 mr-2">✓</span>
                      <span className="text-gray-300 text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Job Listings */}
          <div>
            <h2 className="text-3xl font-bold mb-8 text-center">Open Positions</h2>
            <div className="space-y-6">
              {jobs.map((job, index) => (
                <div
                  key={index}
                  className="bg-gray-800/50 rounded-lg border border-gray-700 p-6 hover:border-teal-500/50 transition-all duration-300"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                        <span className="flex items-center">
                          <Users className="w-4 h-4 mr-1" />
                          {job.department}
                        </span>
                        <span className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {job.location}
                        </span>
                        <span className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {job.type}
                        </span>
                        <span className="flex items-center">
                          <DollarSign className="w-4 h-4 mr-1" />
                          {job.salary}
                        </span>
                      </div>
                    </div>
                    <button className="mt-4 lg:mt-0 px-6 py-2 bg-teal-500 hover:bg-teal-400 text-gray-900 font-medium rounded-md transition-all duration-200">
                      Apply Now
                    </button>
                  </div>
                  <p className="text-gray-300 mb-4">{job.description}</p>
                  <div>
                    <h4 className="font-semibold mb-2 text-teal-400">Requirements:</h4>
                    <ul className="space-y-1">
                      {job.requirements.map((req, reqIndex) => (
                        <li key={reqIndex} className="flex items-start">
                          <span className="text-teal-400 mr-2">•</span>
                          <span className="text-gray-300 text-sm">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact for General Inquiries */}
          <div className="mt-16 bg-gray-800/50 rounded-lg border border-gray-700 p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Questions About These Positions?</h2>
            <p className="text-gray-300 mb-6">
              Contact our HR team for more information about career opportunities at LineIntel.
            </p>
            <a
              href="/#contact"
              className="inline-block px-8 py-3 bg-teal-500 hover:bg-teal-400 text-gray-900 font-medium rounded-md transition-all duration-200"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
