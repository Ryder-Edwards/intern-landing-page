import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Linkedin, Mail, Award } from "lucide-react"

export default function LeadershipPage() {
  const leaders = [
    {
      name: "Matthew Kirk",
      role: "CMO & Co-Founder",
      bio: "Matthew Kirk has been a tree care professional for over 20 years and achieved his ISA certification almost 15 years ago. Starting his career in the mountains of Virginia as a climber on a ROW crew, Matt has held a variety of positions such as Safety trainer, Supervisor and Manager. Currently he works with Meriwether Lewis Electrical Cooperative in Tennessee as the ROW coordinator. This affords him the opportunity to do what he enjoys, educating the public about trees and powerlines as well as managing a world class Right of Way program.",
      education: "ISA Certified Arborist, 20+ years ROW experience",
      image: "/matthew-kirk-photo.png",
      linkedin: "#",
      email: "matthew@lineintel.com",
      hasTransparentBg: true,
      isCertified: true,
    },
    {
      name: "Barry Hammond",
      role: "CEO & Co-Founder",
      bio: "Barry Hammond commissioned in the US Air Force in May 2006 from the Virginia Military Institute in Lexington, VA where he graduated with a degree in Electrical and Computer Engineering. Following his first assignment as a developmental test engineer, he attended the Air Force Institute of Technology, graduating with a Master's degree in Electrical Engineering. Barry spent his remaining career as a developmental engineer managing air and space system technology programs, leading teams at MIT/Lincoln Laboratory, DARPA, and the National Reconnaissance Office. He is currently a Program Manager within US Special Operations Command where he manages a portfolio of over $150M per year delivering small robotics and space system technology to Special Operations Forces. He is a Part 107 licensed small unmanned systems pilot and is an avid robotics and computer programming hobbyist.",
      education: "MS Electrical Engineering - AFIT, BS Electrical & Computer Engineering - VMI",
      image: "/barry-hammond-photo.jpg",
      linkedin: "#",
      email: "barry@lineintel.com",
      hasTransparentBg: false,
      isCertified: false,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950 text-white">
      <Navbar />

      <section className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="text-teal-400">Team</span>
            </h1>
            <p className="text-xl text-gray-300 mb-6">
              Our leadership team combines decades of experience in utility vegetation management, electrical
              engineering, and advanced technology development to revolutionize power line inspection. Our unique
              advantage: certified arborist expertise for regulatory-compliant vegetation reports.
            </p>
            <a
              href="/#contact"
              className="inline-block px-8 py-3 bg-teal-500 hover:bg-teal-400 text-gray-900 font-medium rounded-md transition-all duration-200"
            >
              Get in Touch
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {leaders.map((leader, index) => (
              <div
                key={index}
                className="bg-gray-800/50 rounded-lg border border-gray-700 overflow-hidden hover:border-teal-500/50 transition-all duration-300 relative"
              >
                {leader.isCertified && (
                  <div className="absolute top-4 right-4 z-10">
                    <div className="bg-teal-500 text-gray-900 px-3 py-1 rounded-full text-xs font-medium flex items-center">
                      <Award className="w-3 h-3 mr-1" />
                      ISA Certified
                    </div>
                  </div>
                )}
                <div
                  className={`h-64 flex items-center justify-center p-4 ${
                    leader.hasTransparentBg ? "bg-gradient-to-br from-gray-800/30 to-gray-900/30" : ""
                  }`}
                >
                  <Image
                    src={leader.image || "/placeholder.svg"}
                    alt={leader.name}
                    width={400}
                    height={400}
                    className="max-w-full max-h-full object-contain rounded-lg"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{leader.name}</h3>
                  <p className="text-teal-400 mb-4 font-medium">{leader.role}</p>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">{leader.bio}</p>
                  <p className="text-gray-400 text-xs mb-4">{leader.education}</p>
                  <div className="flex space-x-3">
                    <a href={leader.linkedin} className="text-gray-400 hover:text-teal-400 transition-colors">
                      <Linkedin size={18} />
                    </a>
                    <a href={`mailto:${leader.email}`} className="text-gray-400 hover:text-teal-400 transition-colors">
                      <Mail size={18} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
