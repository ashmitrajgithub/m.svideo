import { Button } from "@/components/ui/button"
import { Play, Clock, Calendar } from "lucide-react"

export default function Films() {
  const films = [
    {
      title: "Love Stories: Sarah & Michael",
      duration: "12:30",
      date: "2024",
      thumbnail: "/placeholder.svg?height=300&width=500",
      description: "A cinematic wedding film capturing the beautiful love story of Sarah and Michael.",
      category: "Wedding Film",
    },
    {
      title: "Corporate Vision: TechCorp",
      duration: "8:45",
      date: "2024",
      thumbnail: "/placeholder.svg?height=300&width=500",
      description: "Professional corporate film showcasing TechCorp's innovative solutions and company culture.",
      category: "Corporate Film",
    },
    {
      title: "Rhythm & Soul Music Video",
      duration: "4:20",
      date: "2024",
      thumbnail: "/placeholder.svg?height=300&width=500",
      description: "Creative music video with stunning visuals and artistic cinematography.",
      category: "Music Video",
    },
    {
      title: "Family Bonds Documentary",
      duration: "15:00",
      date: "2023",
      thumbnail: "/placeholder.svg?height=300&width=500",
      description: "Heartwarming documentary exploring the bonds that keep families together.",
      category: "Documentary",
    },
    {
      title: "Brand Story: Luxury Collection",
      duration: "6:15",
      date: "2023",
      thumbnail: "/placeholder.svg?height=300&width=500",
      description: "High-end commercial showcasing the elegance and craftsmanship of luxury products.",
      category: "Commercial",
    },
    {
      title: "Event Highlights: Annual Gala",
      duration: "10:30",
      date: "2023",
      thumbnail: "/placeholder.svg?height=300&width=500",
      description: "Spectacular highlights from an exclusive annual gala event.",
      category: "Event Film",
    },
  ]

  return (
    <section id="films" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="text-red-600">Films</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Watch our latest film productions and see why clients choose M.s Video for their most important moments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {films.map((film, index) => (
            <div
              key={index}
              className="group bg-gray-900 rounded-lg overflow-hidden border border-red-900/20 hover:border-red-600/50 transition-all duration-300"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={film.thumbnail || "/placeholder.svg"}
                  alt={film.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Button size="lg" className="bg-red-600 hover:bg-red-700 rounded-full p-4">
                      <Play className="text-white" size={24} />
                    </Button>
                  </div>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-red-600 text-white px-2 py-1 rounded text-sm font-medium">{film.category}</span>
                </div>
                <div className="absolute bottom-4 right-4 flex items-center space-x-2 text-white text-sm">
                  <Clock size={16} />
                  <span>{film.duration}</span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-white font-semibold text-lg">{film.title}</h3>
                  <div className="flex items-center text-gray-400 text-sm">
                    <Calendar size={14} className="mr-1" />
                    {film.date}
                  </div>
                </div>
                <p className="text-gray-400 text-sm">{film.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
            View All Films
          </Button>
        </div>
      </div>
    </section>
  )
}
