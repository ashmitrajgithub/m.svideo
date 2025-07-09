"use client"

import { useState } from "react"
import { Heart, Camera, Users, Calendar } from "lucide-react"

export default function Memories() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  const categories = [
    { id: "all", name: "All Memories", icon: Camera },
    { id: "weddings", name: "Weddings", icon: Heart },
    { id: "portraits", name: "Portraits", icon: Users },
    { id: "events", name: "Events", icon: Calendar },
  ]

  const memories = [
    {
      id: 1,
      image: "/placeholder.svg?height=500&width=500&text=Wedding+Memory+1",
      category: "weddings",
      title: "Sarah & Michael's Wedding",
      location: "Central Park, NYC",
      date: "June 2024",
    },
    {
      id: 2,
      image: "/placeholder.svg?height=500&width=500&text=Portrait+Memory+1",
      category: "portraits",
      title: "Executive Portrait Session",
      location: "Manhattan Studio",
      date: "May 2024",
    },
    {
      id: 3,
      image: "/placeholder.svg?height=500&width=500&text=Event+Memory+1",
      category: "events",
      title: "Corporate Gala",
      location: "Grand Ballroom",
      date: "April 2024",
    },
    {
      id: 4,
      image: "/placeholder.svg?height=500&width=500&text=Wedding+Memory+2",
      category: "weddings",
      title: "Beach Wedding Ceremony",
      location: "Hamptons, NY",
      date: "July 2024",
    },
    {
      id: 5,
      image: "/placeholder.svg?height=500&width=500&text=Portrait+Memory+2",
      category: "portraits",
      title: "Fashion Portrait Shoot",
      location: "Brooklyn Studio",
      date: "March 2024",
    },
    {
      id: 6,
      image: "/placeholder.svg?height=500&width=500&text=Event+Memory+2",
      category: "events",
      title: "Product Launch Event",
      location: "SoHo Gallery",
      date: "February 2024",
    },
    {
      id: 7,
      image: "/placeholder.svg?height=500&width=500&text=Wedding+Memory+3",
      category: "weddings",
      title: "Garden Wedding",
      location: "Long Island",
      date: "August 2024",
    },
    {
      id: 8,
      image: "/placeholder.svg?height=500&width=500&text=Portrait+Memory+3",
      category: "portraits",
      title: "Family Portrait Session",
      location: "Prospect Park",
      date: "September 2024",
    },
    {
      id: 9,
      image: "/placeholder.svg?height=500&width=500&text=Event+Memory+3",
      category: "events",
      title: "Charity Fundraiser",
      location: "Metropolitan Museum",
      date: "October 2024",
    },
    {
      id: 10,
      image: "/placeholder.svg?height=500&width=500&text=Wedding+Memory+4",
      category: "weddings",
      title: "Rooftop Wedding",
      location: "Brooklyn Heights",
      date: "September 2024",
    },
    {
      id: 11,
      image: "/placeholder.svg?height=500&width=500&text=Portrait+Memory+4",
      category: "portraits",
      title: "Maternity Shoot",
      location: "Central Park",
      date: "August 2024",
    },
    {
      id: 12,
      image: "/placeholder.svg?height=500&width=500&text=Event+Memory+4",
      category: "events",
      title: "Conference Coverage",
      location: "Javits Center",
      date: "November 2024",
    },
  ]

  const filteredMemories =
    selectedCategory === "all" ? memories : memories.filter((memory) => memory.category === selectedCategory)

  return (
    <section className="py-32 bg-gradient-to-b from-gray-900 via-black to-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-red-600/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-red-800/5 rounded-full blur-2xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <span className="bg-gradient-to-r from-red-600 to-red-400 text-white px-6 py-3 rounded-full text-sm font-semibold uppercase tracking-wider">
              Our Gallery
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black mb-8">
            <span className="bg-gradient-to-r from-white via-gray-100 to-red-400 bg-clip-text text-transparent">
              Captured
            </span>
            <br />
            <span className="bg-gradient-to-r from-red-600 via-red-500 to-red-400 bg-clip-text text-transparent">
              Memories
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Every photograph tells a story, every frame captures an emotion. Browse through some of our favorite moments
            we've had the privilege to preserve forever.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category.id
                  ? "bg-gradient-to-r from-red-600 to-red-800 text-white shadow-lg shadow-red-500/25"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white"
              }`}
            >
              <category.icon className="mr-2" size={20} />
              {category.name}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          {filteredMemories.map((memory, index) => (
            <div
              key={memory.id}
              className="group relative overflow-hidden rounded-2xl cursor-pointer break-inside-avoid"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <img
                src={memory.image || "/placeholder.svg"}
                alt={memory.title}
                className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="mb-2">
                    <span className="bg-red-600 text-white px-3 py-1 rounded-full text-xs font-semibold uppercase">
                      {memory.category}
                    </span>
                  </div>
                  <h3 className="text-white font-bold text-lg mb-2">{memory.title}</h3>
                  <div className="flex items-center justify-between text-gray-300 text-sm">
                    <span>{memory.location}</span>
                    <span>{memory.date}</span>
                  </div>
                </div>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-red-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Corner Accent */}
              <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white px-12 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/25">
            Load More Memories
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-20 border-t border-red-900/20">
          <div className="text-center">
            <div className="text-4xl font-black text-white mb-2">10K+</div>
            <div className="text-gray-400">Photos Captured</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-black text-white mb-2">500+</div>
            <div className="text-gray-400">Events Covered</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-black text-white mb-2">200+</div>
            <div className="text-gray-400">Happy Couples</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-black text-white mb-2">50+</div>
            <div className="text-gray-400">Corporate Clients</div>
          </div>
        </div>
      </div>
    </section>
  )
}
