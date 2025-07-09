import { Button } from "@/components/ui/button"
import { Play, Clock, Calendar, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function FilmsPreview() {
  const films = [
    {
      title: "Love Stories: Sarah & Michael",
      duration: "12:30",
      date: "2024",
      thumbnail: "/placeholder.svg?height=400&width=600&text=Wedding+Film",
      description: "A cinematic wedding film capturing the beautiful love story with artistic excellence.",
      category: "Wedding Film",
      featured: true,
    },
    {
      title: "Corporate Vision: TechCorp",
      duration: "8:45",
      date: "2024",
      thumbnail: "/placeholder.svg?height=400&width=600&text=Corporate+Film",
      description: "Professional corporate film showcasing innovation and company culture.",
      category: "Corporate Film",
      featured: false,
    },
    {
      title: "Rhythm & Soul Music Video",
      duration: "4:20",
      date: "2024",
      thumbnail: "/placeholder.svg?height=400&width=600&text=Music+Video",
      description: "Creative music video with stunning visuals and artistic cinematography.",
      category: "Music Video",
      featured: false,
    },
  ]

  return (
    <section className="py-32 bg-gradient-to-b from-gray-900 via-black to-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-red-600/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-red-800/5 rounded-full blur-2xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <span className="bg-gradient-to-r from-red-600 to-red-400 text-white px-6 py-3 rounded-full text-sm font-semibold uppercase tracking-wider">
              Latest Films
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black mb-8">
            <span className="bg-gradient-to-r from-white via-gray-100 to-red-400 bg-clip-text text-transparent">
              Featured
            </span>
            <br />
            <span className="bg-gradient-to-r from-red-600 via-red-500 to-red-400 bg-clip-text text-transparent">
              Films
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Watch our latest film productions and see why clients choose M.s Video for their most important moments and
            brand storytelling needs.
          </p>
        </div>

        {/* Featured Film */}
        <div className="mb-20">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900 via-black to-gray-900 border border-red-900/20">
            <div className="relative">
              <img
                src={films[0].thumbnail || "/placeholder.svg"}
                alt={films[0].title}
                className="w-full h-96 lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="group cursor-pointer">
                  <div className="relative">
                    <div className="absolute inset-0 bg-red-600 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity animate-pulse" />
                    <div className="relative p-8 bg-gradient-to-r from-red-600 to-red-800 rounded-full hover:from-red-700 hover:to-red-900 transition-all duration-300 group-hover:scale-110">
                      <Play className="text-white" size={40} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Film Info Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12">
                <div className="flex items-center mb-4">
                  <span className="bg-gradient-to-r from-red-600 to-red-800 text-white px-4 py-2 rounded-full text-sm font-bold mr-4">
                    FEATURED FILM
                  </span>
                  <span className="bg-black/70 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                    {films[0].category}
                  </span>
                </div>
                <h3 className="text-4xl lg:text-5xl font-bold text-white mb-4">{films[0].title}</h3>
                <p className="text-xl text-gray-300 mb-6 max-w-3xl leading-relaxed">{films[0].description}</p>
                <div className="flex items-center space-x-6 text-gray-300">
                  <div className="flex items-center">
                    <Clock className="mr-2" size={20} />
                    <span>{films[0].duration}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="mr-2" size={20} />
                    <span>{films[0].date}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Other Films */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {films.slice(1).map((film, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 via-black to-gray-900 border border-red-900/20 hover:border-red-500/50 transition-all duration-500 hover:scale-105"
            >
              <div className="relative overflow-hidden">
                <img
                  src={film.thumbnail || "/placeholder.svg"}
                  alt={film.title}
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="p-4 bg-red-600/90 backdrop-blur-sm rounded-full hover:bg-red-700/90 transition-colors">
                    <Play className="text-white" size={24} />
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {film.category}
                  </span>
                </div>

                {/* Duration */}
                <div className="absolute bottom-4 right-4 flex items-center space-x-2 text-white text-sm bg-black/70 backdrop-blur-sm px-3 py-1 rounded-full">
                  <Clock size={14} />
                  <span>{film.duration}</span>
                </div>
              </div>

              <div className="p-8">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-white font-bold text-xl group-hover:text-red-400 transition-colors">
                    {film.title}
                  </h3>
                  <div className="flex items-center text-gray-400 text-sm">
                    <Calendar size={14} className="mr-1" />
                    {film.date}
                  </div>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">{film.description}</p>
                <Button
                  variant="outline"
                  className="w-full border-red-600/50 text-red-400 hover:bg-red-600 hover:text-white transition-all duration-300 bg-transparent"
                >
                  <Play className="mr-2" size={16} />
                  Watch Film
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/films">
            <Button
              size="lg"
              className="bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white px-12 py-6 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/25"
            >
              View All Films
              <ArrowRight className="ml-3" size={20} />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
