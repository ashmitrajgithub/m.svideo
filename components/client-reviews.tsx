import { Star, Quote, Play, Heart, CheckCircle, Award, Users, Calendar, MapPin, Camera, Video } from "lucide-react"

export default function ClientReviews() {
  const reviews = [
    {
      name: "Sarah & Michael Johnson",
      event: "Wedding Videography",
      rating: 5,
      shortReview:
        "M.s Video captured our wedding day with such artistry and emotion. The cinematic quality brought tears to our eyes.",
      fullReview:
        "I was looking for a wedding videographer who could capture not just the events, but the emotions of our special day. M.s Video exceeded every expectation. The team was professional, unobtrusive, and incredibly talented. The final wedding film was a masterpiece - every moment perfectly preserved with cinematic quality that brought tears to our eyes. We've watched it countless times and it never gets old. Worth every penny and more!",
      image: "/placeholder.svg?height=60&width=60&text=SM",
      location: "New York",
      date: "June 2024",
      videoThumbnail: "/placeholder.svg?height=300&width=400&text=Wedding+Video",
      category: "wedding",
      duration: "3:45",
      projectValue: "$5,000",
      size: "large",
      color: "red",
      mobileSize: "medium",
    },
    {
      name: "David Chen",
      event: "Corporate Video Production",
      rating: 5,
      shortReview: "The team was very professional and delivered exceptional results",
      fullReview:
        "I started as a small business owner with virtually no video marketing experience. I knew I needed professional help to showcase my company properly. This was one of the best investments I've made in my business.",
      image: "/placeholder.svg?height=60&width=60&text=DC",
      location: "San Francisco",
      date: "May 2024",
      videoThumbnail: "/placeholder.svg?height=300&width=400&text=Corporate+Video",
      category: "corporate",
      duration: "2:30",
      projectValue: "$8,000",
      size: "medium",
      color: "black",
      mobileSize: "small",
    },
    {
      name: "Emily Rodriguez",
      event: "Portrait Photography",
      rating: 5,
      shortReview: "Such a life-changing experience. Highly recommended!",
      fullReview:
        "Before this photoshoot, I've never felt truly confident in front of a camera. I needed some guidance from professionals who could help me feel comfortable and natural. The entire team was incredibly supportive and patient. They were very hands-on and I never felt rushed or uncomfortable. The final images exceeded all my expectations - they captured not just how I looked, but who I am. The experience was transformative and I now have professional photos I'm truly proud of. 100% recommend!",
      image: "/placeholder.svg?height=60&width=60&text=ER",
      location: "Los Angeles",
      date: "April 2024",
      videoThumbnail: "/placeholder.svg?height=300&width=400&text=Portrait+Session",
      category: "portrait",
      duration: "1:20",
      projectValue: "$2,500",
      size: "large",
      color: "white",
      mobileSize: "medium",
    },
    {
      name: "James Wilson",
      event: "Engagement Shoot",
      rating: 5,
      shortReview: "An overall wonderful and rewarding experience",
      fullReview:
        "Thank you for the wonderful experience! We now have engagement photos we absolutely love, and the process was enjoyable from start to finish.",
      image: "/placeholder.svg?height=60&width=60&text=JW",
      location: "Chicago",
      date: "March 2024",
      videoThumbnail: "/placeholder.svg?height=300&width=400&text=Engagement+Video",
      category: "engagement",
      duration: "4:15",
      projectValue: "$3,500",
      size: "small",
      color: "white",
      mobileSize: "small",
    },
    {
      name: "Alexandra Thompson",
      event: "Music Video Production",
      rating: 5,
      shortReview:
        "Awesome creative support from the team who understood my vision perfectly. Getting guidance from them and learning from their experiences was incredible.",
      fullReview:
        "The team seemed genuinely invested in bringing my artistic vision to life, which I found really refreshing. The production gave me the confidence to present myself as a serious music artist. The quality is above the rest. You will get the personal attention you need from an incredible team of creative professionals.",
      image: "/placeholder.svg?height=60&width=60&text=AT",
      location: "Nashville",
      date: "February 2024",
      videoThumbnail: "/placeholder.svg?height=300&width=400&text=Music+Video",
      category: "music",
      duration: "3:20",
      projectValue: "$6,000",
      size: "large",
      color: "black",
      mobileSize: "small",
    },
    {
      name: "Robert Martinez",
      event: "Commercial Production",
      rating: 5,
      shortReview: "The commercial they produced was phenomenal and captured our brand perfectly",
      fullReview: "",
      image: "/placeholder.svg?height=60&width=60&text=RM",
      location: "Miami",
      date: "January 2024",
      videoThumbnail: "/placeholder.svg?height=300&width=400&text=Commercial",
      category: "commercial",
      duration: "1:45",
      projectValue: "$12,000",
      size: "medium",
      color: "red",
      mobileSize: "small",
    },
  ]

  const getCardStyles = (color: string, size: string, isMobile = false) => {
    const baseStyles =
      "rounded-2xl md:rounded-3xl p-4 md:p-8 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl relative overflow-hidden"

    const colorStyles = {
      red: "bg-gradient-to-br from-red-600 via-red-700 to-red-800 text-white shadow-red-500/20",
      black: "bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white shadow-gray-900/30",
      white:
        "bg-gradient-to-br from-white via-gray-50 to-white text-gray-900 border border-gray-200 shadow-gray-200/50",
    }

    const desktopSizeStyles = {
      small: "row-span-1",
      medium: "row-span-2",
      large: "row-span-3",
    }

    const mobileSizeStyles = {
      small: "row-span-1",
      medium: "row-span-1",
      large: "row-span-1",
    }

    const sizeStyles = isMobile ? mobileSizeStyles : desktopSizeStyles

    return `${baseStyles} ${colorStyles[color as keyof typeof colorStyles]} ${sizeStyles[size as keyof typeof sizeStyles]}`
  }

  const getCategoryIcon = (category: string, cardColor: string) => {
    const iconColor = cardColor === "white" ? "text-red-600" : "text-red-400"
    const iconSize = 14

    switch (category) {
      case "wedding":
      case "engagement":
        return <Heart size={iconSize} className={iconColor} />
      case "corporate":
      case "commercial":
        return <Video size={iconSize} className={iconColor} />
      case "portrait":
        return <Camera size={iconSize} className={iconColor} />
      case "music":
        return <Play size={iconSize} className={iconColor} />
      default:
        return <Video size={iconSize} className={iconColor} />
    }
  }

  const getQuoteColor = (cardColor: string) => {
    switch (cardColor) {
      case "red":
        return "text-red-300/20"
      case "black":
        return "text-gray-600/20"
      case "white":
        return "text-red-600/10"
      default:
        return "text-red-300/20"
    }
  }

  const getBorderColor = (cardColor: string) => {
    switch (cardColor) {
      case "red":
        return "border-red-400/20"
      case "black":
        return "border-gray-600/20"
      case "white":
        return "border-red-200/30"
      default:
        return "border-red-400/20"
    }
  }

  const getVerifiedBadgeStyle = (cardColor: string) => {
    switch (cardColor) {
      case "red":
        return "bg-white/20 text-white backdrop-blur-sm"
      case "black":
        return "bg-red-600/20 text-red-400 backdrop-blur-sm border border-red-600/30"
      case "white":
        return "bg-red-100 text-red-700 border border-red-200"
      default:
        return "bg-white/20 text-white backdrop-blur-sm"
    }
  }

  // Show only first 4 reviews on mobile for shorter page
  const displayReviews = reviews.slice(0, 4)

  return (
    <section className="py-12 md:py-24 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-48 md:w-96 h-48 md:h-96 bg-red-100/40 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-40 md:w-80 h-40 md:h-80 bg-red-200/30 rounded-full blur-2xl animate-pulse delay-1000" />
        <div className="absolute top-3/4 left-3/4 w-32 md:w-64 h-32 md:h-64 bg-red-50/50 rounded-full blur-xl animate-pulse delay-2000" />

        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgb(0,0,0) 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          />
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-20">
          <div className="inline-flex items-center justify-center mb-6 md:mb-8">
            <div className="flex items-center space-x-2 md:space-x-3 bg-gradient-to-r from-red-600 to-red-500 text-white px-4 md:px-8 py-2 md:py-4 rounded-full shadow-lg">
              <Award className="text-white" size={16} />
              <span className="font-bold text-xs md:text-sm uppercase tracking-wider">Client Stories</span>
            </div>
          </div>

          <h2 className="text-3xl md:text-5xl lg:text-7xl font-black mb-6 md:mb-8 leading-tight">
            <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 bg-clip-text text-transparent block mb-1 md:mb-2">
              Real Stories From
            </span>
            <span className="bg-gradient-to-r from-red-600 via-red-500 to-red-400 bg-clip-text text-transparent block">
              Real Clients
            </span>
          </h2>

          <p className="text-base md:text-xl text-gray-600 max-w-2xl md:max-w-4xl mx-auto leading-relaxed mb-8 md:mb-12 px-4">
            Discover how we've helped clients capture their most precious moments with professional excellence
          </p>

          {/* Stats */}
          <div className="flex items-center justify-center space-x-6 md:space-x-12 text-gray-700">
            <div className="text-center">
              <div className="text-xl md:text-3xl font-black text-red-600 mb-1 md:mb-2">5.0</div>
              <div className="flex justify-center mb-1 md:mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-yellow-500 fill-current" size={12} />
                ))}
              </div>
              <p className="text-xs md:text-sm font-semibold text-gray-600">Rating</p>
            </div>
            <div className="text-center">
              <div className="text-xl md:text-3xl font-black text-red-600 mb-1 md:mb-2">200+</div>
              <Users className="mx-auto mb-1 md:mb-2 text-red-600" size={16} />
              <p className="text-xs md:text-sm font-semibold text-gray-600">Clients</p>
            </div>
            <div className="text-center">
              <div className="text-xl md:text-3xl font-black text-red-600 mb-1 md:mb-2">100%</div>
              <CheckCircle className="mx-auto mb-1 md:mb-2 text-red-600" size={16} />
              <p className="text-xs md:text-sm font-semibold text-gray-600">Satisfaction</p>
            </div>
          </div>
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 auto-rows-min">
          {displayReviews.map((review, index) => {
            // Use mobile size for mobile screens, desktop size for larger screens
            const isMobile = typeof window !== "undefined" && window.innerWidth < 768
            const currentSize = isMobile ? review.mobileSize : review.size

            return (
              <div key={index} className={getCardStyles(review.color, currentSize, isMobile)}>
                {/* Background Quote */}
                <div className="absolute top-2 md:top-4 right-2 md:right-4 opacity-10">
                  <Quote size={40} className={`md:w-[60px] md:h-[60px] ${getQuoteColor(review.color)}`} />
                </div>

                {/* Client Header */}
                <div className="flex items-center space-x-3 md:space-x-4 mb-4 md:mb-6 relative z-10">
                  <div className="relative">
                    <img
                      src={review.image || "/placeholder.svg"}
                      alt={review.name}
                      className="w-10 md:w-12 h-10 md:h-12 rounded-full object-cover border-2 border-red-500/30"
                    />
                    <div className="absolute -bottom-1 -right-1 bg-red-500 w-3 md:w-4 h-3 md:h-4 rounded-full border-2 border-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-sm md:text-lg truncate">{review.name}</h3>
                    <div className="flex items-center space-x-1 md:space-x-2 text-xs md:text-sm opacity-80">
                      <div className="flex items-center space-x-1">
                        {getCategoryIcon(review.category, review.color)}
                        <span className="truncate">{review.event}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1 md:space-x-2 text-xs opacity-60 mt-1">
                      <MapPin size={10} />
                      <span className="truncate">{review.location}</span>
                      <span>•</span>
                      <Calendar size={10} />
                      <span>{review.date}</span>
                    </div>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-2 mb-3 md:mb-4 relative z-10">
                  <div className="flex">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="text-yellow-400 fill-current" size={14} />
                    ))}
                  </div>
                  <span className="text-xs md:text-sm font-semibold opacity-80">({review.rating}.0)</span>
                </div>

                {/* Review Content - Simplified for mobile */}
                <div className="relative z-10">
                  <div className="space-y-2 md:space-y-4">
                    <h4 className="text-sm md:text-xl font-bold leading-tight line-clamp-3 md:line-clamp-none">
                      {review.shortReview}
                    </h4>
                    {/* Hide full review on mobile to keep cards compact */}
                    {review.fullReview && (
                      <p className="hidden md:block text-sm leading-relaxed opacity-90 line-clamp-4">
                        "{review.fullReview}"
                      </p>
                    )}
                  </div>
                </div>

                {/* Footer */}
                <div
                  className={`flex items-center justify-between mt-4 md:mt-6 pt-3 md:pt-4 border-t ${getBorderColor(review.color)} relative z-10`}
                >
                  <div className="flex items-center space-x-2 md:space-x-3">
                    <div
                      className={`px-2 md:px-3 py-1 rounded-full text-xs font-semibold ${getVerifiedBadgeStyle(review.color)}`}
                    >
                      ✓ Verified
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs md:text-sm font-bold">{review.projectValue}</div>
                    <div className="text-xs opacity-60">{review.duration}</div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Show More Button for Mobile */}
        <div className="text-center mt-8 md:hidden">
          <button className="bg-gradient-to-r from-red-600 to-red-500 text-white px-6 py-3 rounded-full font-bold text-sm shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
            View More Reviews
          </button>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 md:mt-20">
          <div className="relative inline-block w-full max-w-4xl">
            <div className="absolute inset-0 bg-gradient-to-r from-red-100/50 to-red-200/50 blur-2xl rounded-2xl md:rounded-3xl" />
            <div className="relative bg-gradient-to-br from-white via-gray-50 to-white border-2 border-gray-200 rounded-2xl md:rounded-3xl p-6 md:p-12 shadow-2xl">
              <h3 className="text-xl md:text-3xl font-black text-gray-900 mb-3 md:mb-4">
                Ready to Join Our Success Stories?
              </h3>
              <p className="text-sm md:text-lg text-gray-600 mb-6 md:mb-8 max-w-xl md:max-w-2xl mx-auto">
                Let us capture your precious moments with the same professionalism and artistry that our clients love.
              </p>
              <button className="bg-gradient-to-r from-red-600 to-red-500 text-white px-6 md:px-10 py-3 md:py-4 rounded-full font-bold text-sm md:text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 hover:from-red-500 hover:to-red-400">
                Start Your Project Today
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
