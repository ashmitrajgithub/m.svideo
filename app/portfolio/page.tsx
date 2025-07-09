import Header from "@/components/header"
import Footer from "@/components/footer"
import WhatsAppChat from "@/components/whatsapp-chat"
import { Button } from "@/components/ui/button"
import { Play, ExternalLink } from "lucide-react"

export default function PortfolioPage() {
  const portfolioItems = [
    {
      title: "Sarah & John's Cinematic Wedding",
      category: "Wedding",
      image: "/placeholder.svg?height=600&width=800&text=Wedding+1",
      description:
        "A breathtaking outdoor wedding ceremony captured with multiple cameras and drone footage in Central Park.",
      duration: "12:30",
      date: "June 2024",
      client: "Sarah & John Johnson",
      location: "Central Park, NYC",
    },
    {
      title: "TechCorp Brand Story",
      category: "Corporate",
      image: "/placeholder.svg?height=600&width=800&text=Corporate+1",
      description:
        "Professional corporate storytelling showcasing innovation and company culture for a leading tech company.",
      duration: "8:45",
      date: "May 2024",
      client: "TechCorp Industries",
      location: "Manhattan Office",
    },
    {
      title: "Executive Portrait Series",
      category: "Portrait",
      image: "/placeholder.svg?height=600&width=800&text=Portrait+1",
      description:
        "High-end executive portraits with dramatic lighting and professional styling for C-suite executives.",
      duration: "Photo Series",
      date: "April 2024",
      client: "Fortune 500 Company",
      location: "Corporate Headquarters",
    },
    {
      title: "Annual Gala Event",
      category: "Event",
      image: "/placeholder.svg?height=600&width=800&text=Event+1",
      description: "Luxury gala event documentation with highlight reel production and live streaming capabilities.",
      duration: "10:30",
      date: "March 2024",
      client: "Charity Foundation",
      location: "Grand Ballroom",
    },
    {
      title: "Artist Music Video",
      category: "Music Video",
      image: "/placeholder.svg?height=600&width=800&text=Music+1",
      description: "Creative music video with artistic lighting and dynamic camera work for emerging artist.",
      duration: "4:20",
      date: "February 2024",
      client: "Independent Artist",
      location: "Brooklyn Studio",
    },
    {
      title: "Luxury Brand Commercial",
      category: "Commercial",
      image: "/placeholder.svg?height=600&width=800&text=Commercial+1",
      description: "High-end commercial production for luxury brand campaign with international distribution.",
      duration: "6:15",
      date: "January 2024",
      client: "Luxury Fashion Brand",
      location: "Multiple Locations",
    },
  ]

  return (
    <div className="min-h-screen bg-black">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-red-800/10 rounded-full blur-2xl animate-pulse delay-1000" />
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="inline-block mb-6">
            <span className="bg-gradient-to-r from-red-600 to-red-400 text-white px-6 py-3 rounded-full text-sm font-semibold uppercase tracking-wider">
              Our Work
            </span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black mb-8">
            <span className="block bg-gradient-to-r from-white via-gray-100 to-red-400 bg-clip-text text-transparent">
              Portfolio
            </span>
            <span className="block bg-gradient-to-r from-red-600 via-red-500 to-red-400 bg-clip-text text-transparent">
              Showcase
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Explore our diverse portfolio showcasing exceptional videography and photography work across weddings,
            corporate events, portraits, and commercial productions.
          </p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-black via-gray-900 to-black border border-red-900/20 hover:border-red-500/50 transition-all duration-500 hover:scale-105"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button size="lg" className="bg-red-600 hover:bg-red-700 rounded-full p-4">
                      <Play className="text-white" size={24} />
                    </Button>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {item.category}
                    </span>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <span className="bg-black/70 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                      {item.duration}
                    </span>
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-white font-bold text-xl mb-3 group-hover:text-red-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">{item.description}</p>

                  <div className="space-y-2 mb-6 text-sm text-gray-400">
                    <div>
                      <strong>Client:</strong> {item.client}
                    </div>
                    <div>
                      <strong>Location:</strong> {item.location}
                    </div>
                    <div>
                      <strong>Date:</strong> {item.date}
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Button className="flex-1 bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white">
                      <Play className="mr-2" size={16} />
                      View
                    </Button>
                    <Button
                      variant="outline"
                      className="border-red-600/50 text-red-400 hover:bg-red-600 hover:text-white bg-transparent"
                    >
                      <ExternalLink size={16} />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppChat />
    </div>
  )
}
