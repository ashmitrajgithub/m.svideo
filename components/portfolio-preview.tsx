"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Heart, Eye, Camera } from "lucide-react"
import Link from "next/link"
import CloudinaryImage from "@/components/cloudinary-image"

export default function PortfolioPreview() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const portfolioItems = [
    {
      id: 1,
      title: "Sarah & Michael",
      category: "Wedding Photography",
      location: "Tuscany, Italy",
      image: "memo70_xiofna",
      likes: 234,
      views: 1200,
    },
    {
      id: 2,
      title: "Emma & James",
      category: "Engagement Session",
      location: "Central Park, NYC",
      image: "memo63_ksveii",
      likes: 189,
      views: 890,
    },
    {
      id: 3,
      title: "Lisa & David",
      category: "Wedding Videography",
      location: "Malibu Beach, CA",
      image: "memo62_rj4z34",
      likes: 312,
      views: 1500,
    },
    {
      id: 4,
      title: "Anna & Robert",
      category: "Destination Wedding",
      location: "Santorini, Greece",
      image: "memo61_dqcizs",
      likes: 278,
      views: 1100,
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px bg-gradient-to-r from-transparent to-red-500 w-12"></div>
            <Camera className="text-red-400" size={24} />
            <div className="h-px bg-gradient-to-r from-red-500 to-transparent w-12"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Latest <span className="text-red-400">Work</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Every couple has a unique story. Here are some of our recent captures that showcase the beauty, emotion, and
            joy of love.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {portfolioItems.map((item, index) => (
            <Card
              key={item.id}
              className="group bg-gray-800/50 border-gray-700 overflow-hidden hover:border-red-500/50 transition-all duration-300"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden aspect-[4/5]">
                  <CloudinaryImage
                    src={item.image}
                    alt={item.title}
                    width={400}
                    height={500}
                    className="w-full h-full transition-transform duration-500 group-hover:scale-110"
                    crop={{ type: "fill", gravity: "auto" }}
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Stats */}
                  <div className="absolute top-4 right-4 flex gap-2">
                    <div className="bg-black/50 backdrop-blur-sm rounded-full px-2 py-1 flex items-center gap-1">
                      <Heart className="w-3 h-3 text-red-400" />
                      <span className="text-white text-xs">{item.likes}</span>
                    </div>
                    <div className="bg-black/50 backdrop-blur-sm rounded-full px-2 py-1 flex items-center gap-1">
                      <Eye className="w-3 h-3 text-blue-400" />
                      <span className="text-white text-xs">{item.views}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-white font-semibold text-lg mb-1">{item.title}</h3>
                    <p className="text-red-400 text-sm mb-1">{item.category}</p>
                    <p className="text-gray-300 text-xs">{item.location}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Link href="/portfolio">
            <Button
              size="lg"
              className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold rounded-full shadow-lg hover:shadow-red-500/25 transition-all duration-300 hover:scale-105"
            >
              View Full Portfolio
              <ArrowRight className="ml-2" size={18} />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
