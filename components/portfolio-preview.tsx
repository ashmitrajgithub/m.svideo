import { Button } from "@/components/ui/button"
import { Play, ExternalLink, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function PortfolioPreview() {
  const portfolioItems = [
    {
      title: "Sarah & John's Cinematic Wedding",
      category: "Wedding Videography",
      image: "/placeholder.svg?height=600&width=800&text=Wedding+Portfolio",
      description: "A breathtaking outdoor wedding ceremony captured with multiple cameras and drone footage.",
      duration: "12:30",
      featured: true,
    },
    {
      title: "TechCorp Brand Story",
      category: "Corporate Film",
      image: "/placeholder.svg?height=600&width=800&text=Corporate+Portfolio",
      description: "Professional corporate storytelling showcasing innovation and company culture.",
      duration: "8:45",
      featured: false,
    },
    {
      title: "Executive Portrait Series",
      category: "Portrait Photography",
      image: "/placeholder.svg?height=600&width=800&text=Portrait+Portfolio",
      description: "High-end executive portraits with dramatic lighting and professional styling.",
      duration: "Photo Series",
      featured: false,
    },
  ]

  return (
    <section className="py-32 bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-600/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-red-800/5 rounded-full blur-2xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <span className="bg-gradient-to-r from-red-600 to-red-400 text-white px-6 py-3 rounded-full text-sm font-semibold uppercase tracking-wider">
              Featured Work
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black mb-8">
            <span className="bg-gradient-to-r from-white via-gray-100 to-red-400 bg-clip-text text-transparent">
              Our
            </span>
            <br />
            <span className="bg-gradient-to-r from-red-600 via-red-500 to-red-400 bg-clip-text text-transparent">
              Portfolio
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Explore our diverse portfolio showcasing the breadth and quality of our videography and photography work
            across different industries and occasions.
          </p>
        </div>

        {/* Featured Project */}
        <div className="mb-20">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900 via-black to-gray-900 border border-red-900/20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="relative overflow-hidden">
                <img
                  src={portfolioItems[0].image || "/placeholder.svg"}
                  alt={portfolioItems[0].title}
                  className="w-full h-96 lg:h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent lg:from-transparent lg:to-black/60" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="p-6 bg-red-600/90 backdrop-blur-sm rounded-full hover:bg-red-700/90 transition-colors cursor-pointer">
                    <Play className="text-white" size={32} />
                  </div>
                </div>
                <div className="absolute top-6 left-6">
                  <span className="bg-gradient-to-r from-red-600 to-red-800 text-white px-4 py-2 rounded-full text-sm font-bold">
                    FEATURED
                  </span>
                </div>
                <div className="absolute bottom-6 right-6">
                  <span className="bg-black/70 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                    {portfolioItems[0].duration}
                  </span>
                </div>
              </div>

              <div className="p-12 flex flex-col justify-center">
                <div className="mb-4">
                  <span className="text-red-400 font-semibold text-lg">{portfolioItems[0].category}</span>
                </div>
                <h3 className="text-4xl font-bold text-white mb-6">{portfolioItems[0].title}</h3>
                <p className="text-gray-300 text-lg leading-relaxed mb-8">{portfolioItems[0].description}</p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white px-8 py-3">
                    <Play className="mr-2" size={20} />
                    Watch Film
                  </Button>
                  <Button
                    variant="outline"
                    className="border-red-600/50 text-red-400 hover:bg-red-600 hover:text-white px-8 py-3 bg-transparent"
                  >
                    <ExternalLink className="mr-2" size={20} />
                    View Details
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Other Portfolio Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {portfolioItems.slice(1).map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 via-black to-gray-900 border border-red-900/20 hover:border-red-500/50 transition-all duration-500 hover:scale-105"
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="p-4 bg-red-600/90 backdrop-blur-sm rounded-full">
                    <Play className="text-white" size={24} />
                  </div>
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
                <p className="text-gray-300 mb-6 leading-relaxed">{item.description}</p>
                <Button
                  variant="outline"
                  className="w-full border-red-600/50 text-red-400 hover:bg-red-600 hover:text-white transition-all duration-300 bg-transparent"
                >
                  View Project
                  <ArrowRight className="ml-2" size={16} />
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/portfolio">
            <Button
              size="lg"
              className="bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white px-12 py-6 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/25"
            >
              View Complete Portfolio
              <ArrowRight className="ml-3" size={20} />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
