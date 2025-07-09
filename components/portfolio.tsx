import { Button } from "@/components/ui/button"
import { Play, ExternalLink } from "lucide-react"

export default function Portfolio() {
  const portfolioItems = [
    {
      title: "Sarah & John Wedding",
      category: "Wedding",
      image: "/placeholder.svg?height=400&width=600",
      description: "A beautiful outdoor wedding ceremony captured with cinematic excellence.",
    },
    {
      title: "Tech Corp Launch",
      category: "Corporate",
      image: "/placeholder.svg?height=400&width=600",
      description: "Product launch event coverage with professional multi-camera setup.",
    },
    {
      title: "Artist Music Video",
      category: "Music Video",
      image: "/placeholder.svg?height=400&width=600",
      description: "Creative music video with artistic lighting and dynamic camera work.",
    },
    {
      title: "Family Portrait Session",
      category: "Portrait",
      image: "/placeholder.svg?height=400&width=600",
      description: "Intimate family portraits capturing genuine emotions and connections.",
    },
    {
      title: "Annual Gala Event",
      category: "Event",
      image: "/placeholder.svg?height=400&width=600",
      description: "Luxury gala event documentation with highlight reel production.",
    },
    {
      title: "Brand Commercial",
      category: "Commercial",
      image: "/placeholder.svg?height=400&width=600",
      description: "High-end commercial production for luxury brand campaign.",
    },
  ]

  return (
    <section id="portfolio" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our <span className="text-red-600">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our diverse portfolio showcasing the breadth and quality of our videography and photography work.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg bg-black border border-red-900/20 hover:border-red-600/50 transition-all duration-300"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Button size="sm" className="bg-red-600 hover:bg-red-700">
                      <Play className="mr-2" size={16} />
                      View
                    </Button>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-red-600 text-sm font-medium">{item.category}</span>
                  <ExternalLink className="text-gray-400 hover:text-white transition-colors cursor-pointer" size={16} />
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
            View Full Portfolio
          </Button>
        </div>
      </div>
    </section>
  )
}
