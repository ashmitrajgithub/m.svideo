import { Button } from "@/components/ui/button"
import { Play, Clock, Calendar, ArrowRight, Star, Award } from "lucide-react"
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
      rating: 5.0,
      views: "2.5K",
    },
    {
      title: "Corporate Vision: TechCorp",
      duration: "8:45",
      date: "2024",
      thumbnail: "/placeholder.svg?height=400&width=600&text=Corporate+Film",
      description: "Professional corporate film showcasing innovation and company culture.",
      category: "Corporate Film",
      featured: false,
      rating: 4.8,
      views: "1.8K",
    },
    {
      title: "Rhythm & Soul Music Video",
      duration: "4:20",
      date: "2024",
      thumbnail: "/placeholder.svg?height=400&width=600&text=Music+Video",
      description: "Creative music video with stunning visuals and artistic cinematography.",
      category: "Music Video",
      featured: false,
      rating: 4.9,
      views: "3.2K",
    },
  ]

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-72 h-72 bg-red-50 rounded-full blur-3xl opacity-60" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-red-100/40 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-red-50/30 to-orange-50/30 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 mb-6">
            <Award className="text-red-600" size={24} />
            <span className="bg-gradient-to-r from-red-600 to-red-500 text-white px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider shadow-lg">
              Award-Winning Films
            </span>
          </div>
          <h2 className="text-6xl md:text-8xl font-black mb-8 leading-tight">
            <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-red-600 bg-clip-text text-transparent">
              Featured
            </span>
            <br />
            <span className="bg-gradient-to-r from-red-600 via-red-500 to-red-400 bg-clip-text text-transparent">
              Films
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-medium">
            Discover our latest cinematic masterpieces that have captivated audiences and earned recognition for their
            exceptional storytelling and visual excellence.
          </p>
        </div>

        {/* Featured Film */}
        <div className="mb-24">
          <div className="relative overflow-hidden rounded-3xl bg-white shadow-2xl border border-gray-100 hover:shadow-3xl transition-all duration-700 group">
            <div className="relative">
              <img
                src={films[0].thumbnail || "/placeholder.svg"}
                alt={films[0].title}
                className="w-full h-96 lg:h-[600px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Featured Badge */}
              <div className="absolute top-6 left-6">
                <div className="flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-500 text-white px-4 py-2 rounded-full shadow-lg">
                  <Star className="fill-current" size={16} />
                  <span className="text-sm font-bold">FEATURED FILM</span>
                </div>
              </div>

              {/* Rating */}
              <div className="absolute top-6 right-6">
                <div className="flex items-center gap-1 bg-white/90 backdrop-blur-sm text-gray-900 px-3 py-2 rounded-full shadow-lg">
                  <Star className="fill-yellow-400 text-yellow-400" size={16} />
                  <span className="text-sm font-bold">{films[0].rating}</span>
                </div>
              </div>

              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="group/play cursor-pointer">
                  <div className="relative">
                    <div className="absolute inset-0 bg-red-600 rounded-full blur-2xl opacity-40 group-hover/play:opacity-60 transition-opacity animate-pulse" />
                    <div className="relative p-10 bg-gradient-to-r from-red-600 to-red-500 rounded-full hover:from-red-700 hover:to-red-600 transition-all duration-300 group-hover/play:scale-110 shadow-2xl">
                      <Play className="text-white fill-current" size={48} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Film Info Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12">
                <div className="flex flex-wrap items-center gap-4 mb-6">
                  <span className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold border border-white/20">
                    {films[0].category}
                  </span>
                  <div className="flex items-center text-white/80 text-sm">
                    <Clock size={16} className="mr-2" />
                    <span>{films[0].duration}</span>
                  </div>
                  <div className="flex items-center text-white/80 text-sm">
                    <Calendar size={16} className="mr-2" />
                    <span>{films[0].date}</span>
                  </div>
                  <div className="text-white/80 text-sm">{films[0].views} views</div>
                </div>
                <h3 className="text-4xl lg:text-6xl font-black text-white mb-4 leading-tight">{films[0].title}</h3>
                <p className="text-xl text-white/90 mb-6 max-w-4xl leading-relaxed font-medium">
                  {films[0].description}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Other Films Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20">
          {films.slice(1).map((film, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]"
            >
              <div className="relative overflow-hidden">
                <img
                  src={film.thumbnail || "/placeholder.svg"}
                  alt={film.title}
                  className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Rating */}
                <div className="absolute top-4 right-4">
                  <div className="flex items-center gap-1 bg-white/90 backdrop-blur-sm text-gray-900 px-3 py-1 rounded-full shadow-lg">
                    <Star className="fill-yellow-400 text-yellow-400" size={14} />
                    <span className="text-sm font-bold">{film.rating}</span>
                  </div>
                </div>

                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="p-6 bg-red-600/95 backdrop-blur-sm rounded-full hover:bg-red-700/95 transition-colors shadow-2xl">
                    <Play className="text-white fill-current" size={32} />
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-gradient-to-r from-red-600 to-red-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                    {film.category}
                  </span>
                </div>

                {/* Duration & Views */}
                <div className="absolute bottom-4 right-4 flex items-center gap-3">
                  <div className="flex items-center text-white text-sm bg-black/70 backdrop-blur-sm px-3 py-1 rounded-full">
                    <Clock size={14} className="mr-1" />
                    <span>{film.duration}</span>
                  </div>
                  <div className="text-white text-sm bg-black/70 backdrop-blur-sm px-3 py-1 rounded-full">
                    {film.views} views
                  </div>
                </div>
              </div>

              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-gray-900 font-black text-2xl group-hover:text-red-600 transition-colors leading-tight">
                    {film.title}
                  </h3>
                  <div className="flex items-center text-gray-500 text-sm ml-4">
                    <Calendar size={16} className="mr-1" />
                    {film.date}
                  </div>
                </div>
                <p className="text-gray-600 mb-8 leading-relaxed font-medium text-lg">{film.description}</p>
                <Button className="w-full bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white font-bold py-4 rounded-xl transition-all duration-300 hover:scale-[1.02] shadow-lg hover:shadow-xl">
                  <Play className="mr-3 fill-current" size={18} />
                  Watch Film
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="inline-block p-1 bg-gradient-to-r from-red-600 to-red-500 rounded-full shadow-2xl">
            <Link href="/films">
              <Button
                size="lg"
                className="bg-white hover:bg-gray-50 text-red-600 hover:text-red-700 px-12 py-6 text-xl font-black rounded-full transition-all duration-300 hover:scale-105 shadow-lg border-0"
              >
                View All Films
                <ArrowRight className="ml-4" size={24} />
              </Button>
            </Link>
          </div>
          <p className="text-gray-500 mt-6 text-lg font-medium">
            Explore our complete collection of award-winning films
          </p>
        </div>
      </div>
    </section>
  )
}
