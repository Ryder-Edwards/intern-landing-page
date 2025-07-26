import Image from "next/image"
import { Linkedin, Twitter, Facebook } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-gray-800 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="relative w-10 h-10">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-03%20095436-gGUrB8NchoGWNiohRvWpxPoGz0AdaE.png"
                  alt="LineIntel Logo"
                  width={40}
                  height={40}
                  className="w-full h-full rounded-full"
                />
              </div>
              <span className="text-xl font-bold text-white">
                Line<span className="text-teal-400">Intel</span>
              </span>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Solutions</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/products/vegetation-management"
                  className="text-gray-400 hover:text-teal-400 transition-colors text-sm"
                >
                  Vegetation Management
                </a>
              </li>
              <li>
                <a
                  href="/products/structural-inspection"
                  className="text-gray-400 hover:text-teal-400 transition-colors text-sm"
                >
                  Structural Inspection
                </a>
              </li>
              <li>
                <a
                  href="/products/compliance-monitoring"
                  className="text-gray-400 hover:text-teal-400 transition-colors text-sm"
                >
                  Compliance Monitoring
                </a>
              </li>
              <li>
                <a
                  href="/products/emergency-response"
                  className="text-gray-400 hover:text-teal-400 transition-colors text-sm"
                >
                  Emergency Response
                </a>
              </li>
              <li>
                <a
                  href="/products/predictive-maintenance"
                  className="text-gray-400 hover:text-teal-400 transition-colors text-sm"
                >
                  Predictive Maintenance
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="text-gray-400 hover:text-teal-400 transition-colors text-sm">
                  About Us
                </a>
              </li>
              <li>
                <a href="/leadership" className="text-gray-400 hover:text-teal-400 transition-colors text-sm">
                  Our Team
                </a>
              </li>
              <li>
                <a
                  href="/technology/drone-analysis"
                  className="text-gray-400 hover:text-teal-400 transition-colors text-sm"
                >
                  Technology
                </a>
              </li>
              <li>
                <a href="/careers" className="text-gray-400 hover:text-teal-400 transition-colors text-sm">
                  Careers
                </a>
              </li>
              <li>
                <a href="/news" className="text-gray-400 hover:text-teal-400 transition-colors text-sm">
                  News
                </a>
              </li>
              <li>
                <a href="/#contact" className="text-gray-400 hover:text-teal-400 transition-colors text-sm">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="/blog" className="text-gray-400 hover:text-teal-400 transition-colors text-sm">
                  Blog
                </a>
              </li>
              <li>
                <a href="/case-studies" className="text-gray-400 hover:text-teal-400 transition-colors text-sm">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="/whitepapers" className="text-gray-400 hover:text-teal-400 transition-colors text-sm">
                  Whitepapers
                </a>
              </li>
              <li>
                <a href="/documentation" className="text-gray-400 hover:text-teal-400 transition-colors text-sm">
                  Documentation
                </a>
              </li>
              <li>
                <a href="/support" className="text-gray-400 hover:text-teal-400 transition-colors text-sm">
                  Support
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} LineIntel. All rights reserved. | Based out of Tennessee and Florida
          </p>
        </div>
      </div>
    </footer>
  )
}
