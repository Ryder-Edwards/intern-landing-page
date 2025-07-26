import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function SearchLoading() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950 text-white">
      <Navbar />

      <div className="pt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-8">
            <div className="h-8 bg-gray-700 rounded w-64 mx-auto mb-4 animate-pulse"></div>
            <div className="h-4 bg-gray-700 rounded w-96 mx-auto animate-pulse"></div>
          </div>

          <div className="max-w-4xl mx-auto mb-8">
            <div className="h-16 bg-gray-800 rounded-lg animate-pulse"></div>
          </div>

          <div className="max-w-6xl mx-auto space-y-6">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="bg-gray-800/50 rounded-lg border border-gray-700 p-6 animate-pulse">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gray-700 rounded-lg"></div>
                    <div>
                      <div className="h-6 bg-gray-700 rounded w-48 mb-2"></div>
                      <div className="h-4 bg-gray-700 rounded w-32"></div>
                    </div>
                  </div>
                </div>
                <div className="h-4 bg-gray-700 rounded w-full mb-2"></div>
                <div className="h-4 bg-gray-700 rounded w-3/4 mb-4"></div>
                <div className="h-4 bg-gray-700 rounded w-24"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
