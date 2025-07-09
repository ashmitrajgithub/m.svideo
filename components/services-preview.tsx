"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Star, Heart, Briefcase } from "lucide-react"
import Link from "next/link"

export default function ServicesPreview() {
  const [scrollY, setScrollY] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const [isReducedMotion, setIsReducedMotion] = useState(false)
  const [isClient, setIsClient] = useState(false)
  const [imagesLoaded, setImagesLoaded] = useState(false)
  const [loadingProgress, setLoadingProgress] = useState(0)
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([])
  const [visibleSections, setVisibleSections] = useState<boolean[]>([])
  const [hoveredService, setHoveredService] = useState<number | null>(null)

  useEffect(() => {
    setIsClient(true)

    const checkMobile = () => {
      if (typeof window !== "undefined") {
        setIsMobile(window.innerWidth < 1024)
      }
    }

    const checkReducedMotion = () => {
      if (typeof window !== "undefined") {
        setIsReducedMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches)
      }
    }

    checkMobile()
    checkReducedMotion()

    if (typeof window !== "undefined") {
      window.addEventListener("resize", checkMobile)

      let ticking = false
      const handleScroll = () => {
        if (!ticking) {
          requestAnimationFrame(() => {
            setScrollY(window.scrollY)
            ticking = false
          })
          ticking = true
        }
      }

      if (!isReducedMotion) {
        window.addEventListener("scroll", handleScroll, { passive: true })
      }

      return () => {
        window.removeEventListener("scroll", handleScroll)
        window.removeEventListener("resize", checkMobile)
      }
    }
  }, [isReducedMotion])

  // Preload images
  useEffect(() => {
    const imageUrls = [
      "/home/home01.JPG",
      "/placeholder.svg?height=1200&width=800&text=Elegant+Wedding+Cinematography",
      "/placeholder.svg?height=1200&width=800&text=Corporate+Excellence+Portrait",
    ]

    let loadedCount = 0
    const totalImages = imageUrls.length

    const preloadImage = (src: string) => {
      return new Promise<void>((resolve) => {
        const img = new Image()
        img.crossOrigin = "anonymous"
        img.onload = () => {
          loadedCount++
          setLoadingProgress((loadedCount / totalImages) * 100)
          resolve()
        }
        img.onerror = () => {
          loadedCount++
          setLoadingProgress((loadedCount / totalImages) * 100)
          resolve()
        }
        img.src = src
      })
    }

    Promise.all(imageUrls.map(preloadImage)).then(() => {
      setTimeout(() => {
        setImagesLoaded(true)
      }, 300)
    })
  }, [])

  // Intersection Observer
  useEffect(() => {
    if (isReducedMotion || !isClient || !imagesLoaded) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = sectionRefs.current.indexOf(entry.target as HTMLDivElement)
          if (index !== -1) {
            setVisibleSections((prev) => {
              const newVisible = [...prev]
              newVisible[index] = entry.isIntersecting
              return newVisible
            })
          }
        })
      },
      {
        threshold: 0.2,
        rootMargin: "100px 0px",
      },
    )

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [isReducedMotion, isClient, imagesLoaded])

  const services = [
    {
      title: "TRANSFORM",
      subtitle: "THE WAY YOU",
      highlight: "SEE YOURSELF.",
      description:
        "Magazine Style Portraits for the everyday woman. Discover and explore your beauty in a way you've never experienced before.",
      image: "/home/0124.jpg",
      category: "Portrait Photography",
      accent: "Elegance",
      icon: Star,
      stats: { projects: "500+", rating: "5.0", experience: "8 Years" },
      features: ["Professional Lighting", "Wardrobe Styling", "Retouching Included", "Same Day Preview"],
    },
    {
      title: "CAPTURE",
      subtitle: "YOUR LOVE",
      highlight: "STORY FOREVER.",
      description:
        "Cinematic wedding films that preserve your most precious moments with timeless elegance and emotional depth that lasts generations.",
      image: "/home/02.jpg?height=1200&width=800&text=Elegant+Wedding+Cinematography",
      category: "Wedding Videography",
      accent: "Romance",
      icon: Heart,
      stats: { projects: "200+", rating: "5.0", experience: "6 Years" },
      features: ["4K Cinematic Quality", "Drone Footage", "Same Day Highlights", "Full Reception Coverage"],
    },
    {
      title: "ELEVATE",
      subtitle: "YOUR BRAND",
      highlight: "PRESENCE.",
      description:
        "Professional corporate storytelling that showcases your company's vision and culture with compelling narratives and visual excellence.",
      image: "/home/022.jpg?height=1200&width=800&text=Corporate+Excellence+Portrait",
      category: "Corporate Films",
      accent: "Excellence",
      icon: Briefcase,
      stats: { projects: "150+", rating: "4.9", experience: "5 Years" },
      features: ["Brand Storytelling", "Multi-Camera Setup", "Professional Audio", "Quick Turnaround"],
    },
  ]

  const getParallaxOffset = (index: number, multiplier: number) => {
    if (isReducedMotion || !isClient) return 0

    const sectionOffset = index * (isMobile ? window.innerHeight * 0.8 : window.innerHeight)
    const rawOffset = (scrollY - sectionOffset) * multiplier
    const mobileMultiplier = isMobile ? 0.2 : 1
    const isVisible = visibleSections[index]

    return isVisible ? rawOffset * mobileMultiplier : 0
  }

  // Loading screen
  if (!imagesLoaded) {
    return (
      <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
        <div className="text-center">
          <div className="relative mb-8">
            <div className="w-16 h-16 border-4 border-gray-200 border-t-red-600 rounded-full animate-spin mx-auto"></div>
          </div>
          <div className="w-64 h-2 bg-gray-200 rounded-full overflow-hidden mb-4">
            <div
              className="h-full bg-gradient-to-r from-red-500 to-red-600 transition-all duration-300 ease-out"
              style={{ width: `${loadingProgress}%` }}
            ></div>
          </div>
          <p className="text-gray-600 font-medium">Loading Services</p>
          <p className="text-sm text-gray-400 mt-1">{Math.round(loadingProgress)}% Complete</p>
        </div>
      </div>
    )
  }

  return (
    <section className="bg-white overflow-hidden">
      {/* Section Header */}
      <div className="text-center py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto">
          <div className="w-24 h-px bg-red-600 mx-auto mb-8"></div>
          <h2 className="text-5xl lg:text-7xl font-extralight text-black mb-6 tracking-tight">
            Our <span className="italic font-light text-red-600">Services</span>
          </h2>
          <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto leading-relaxed">
            Discover our comprehensive range of visual storytelling services, each crafted to capture your unique
            essence
          </p>
          <div className="w-24 h-px bg-red-600 mx-auto mt-8"></div>
        </div>
      </div>

      {services.map((service, index) => {
        const parallaxOffset = getParallaxOffset(index, isMobile ? 0.1 : 0.2)
        const textParallaxOffset = getParallaxOffset(index, isMobile ? 0.05 : 0.08)
        const IconComponent = service.icon

        return (
          <div
            key={index}
            className="relative"
            ref={(el) => (sectionRefs.current[index] = el)}
            onMouseEnter={() => setHoveredService(index)}
            onMouseLeave={() => setHoveredService(null)}
          >
            <div className={`grid grid-cols-1 lg:grid-cols-2 min-h-screen items-center`}>
              {/* Text Side */}
              <div
                className={`relative z-10 flex items-center justify-center px-8 lg:px-20 xl:px-28 py-20 lg:py-0 ${
                  index % 2 === 1 ? "lg:order-2 bg-gray-50" : "bg-white"
                }`}
                style={{
                  transform: isReducedMotion ? "none" : `translate3d(0, ${textParallaxOffset * 0.3}px, 0)`,
                }}
              >
                <div className="max-w-xl w-full">
                  {/* Category with Icon */}
                  <div
                    className={`mb-8 transition-all duration-1000 ${
                      visibleSections[index] || isReducedMotion
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-4"
                    }`}
                    style={{ transitionDelay: isReducedMotion ? "0ms" : `${index * 100}ms` }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center">
                        <IconComponent className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-sm font-medium tracking-[0.2em] text-gray-500 uppercase">
                        {service.category}
                      </span>
                    </div>
                    <div className="w-16 h-px bg-red-600"></div>
                  </div>

                  {/* Main Headline */}
                  <h1
                    className={`text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extralight text-black leading-[0.85] mb-8 tracking-tight transition-all duration-1200 ${
                      visibleSections[index] || isReducedMotion
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-8"
                    }`}
                    style={{ transitionDelay: isReducedMotion ? "0ms" : `${index * 100 + 200}ms` }}
                  >
                    <span className="block">{service.title}</span>
                    <span className="block">{service.subtitle}</span>
                    <span className="block font-light italic text-red-600">{service.highlight}</span>
                  </h1>

                  {/* Description */}
                  <p
                    className={`text-gray-600 text-lg lg:text-xl leading-relaxed font-light mb-8 max-w-md transition-all duration-1000 ${
                      visibleSections[index] || isReducedMotion
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-4"
                    }`}
                    style={{ transitionDelay: isReducedMotion ? "0ms" : `${index * 100 + 400}ms` }}
                  >
                    {service.description}
                  </p>

                  {/* Stats */}
                  <div
                    className={`grid grid-cols-3 gap-6 mb-8 transition-all duration-1000 ${
                      visibleSections[index] || isReducedMotion ? "opacity-100" : "opacity-0"
                    }`}
                    style={{ transitionDelay: isReducedMotion ? "0ms" : `${index * 100 + 600}ms` }}
                  >
                    <div className="text-center">
                      <div className="text-2xl font-light text-black">{service.stats.projects}</div>
                      <div className="text-xs text-gray-500 uppercase tracking-wider">Projects</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-light text-black flex items-center justify-center gap-1">
                        {service.stats.rating} <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      </div>
                      <div className="text-xs text-gray-500 uppercase tracking-wider">Rating</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-light text-black">{service.stats.experience}</div>
                      <div className="text-xs text-gray-500 uppercase tracking-wider">Experience</div>
                    </div>
                  </div>

                  {/* Features */}
                  <div
                    className={`mb-8 transition-all duration-1000 ${
                      visibleSections[index] || isReducedMotion ? "opacity-100" : "opacity-0"
                    }`}
                    style={{ transitionDelay: isReducedMotion ? "0ms" : `${index * 100 + 800}ms` }}
                  >
                    <div className="grid grid-cols-2 gap-2">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-red-600 rounded-full"></div>
                          <span className="text-sm text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Accent Text */}
                  <div
                    className={`mb-8 transition-all duration-1000 ${
                      visibleSections[index] || isReducedMotion ? "opacity-100" : "opacity-0"
                    }`}
                    style={{ transitionDelay: isReducedMotion ? "0ms" : `${index * 100 + 1000}ms` }}
                  >
                    <span className="text-sm font-medium tracking-[0.15em] text-red-600 uppercase">
                      {service.accent}
                    </span>
                  </div>

                  {/* CTA Button */}
                  <div
                    className={`transition-all duration-1000 ${
                      visibleSections[index] || isReducedMotion
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-4"
                    }`}
                    style={{ transitionDelay: isReducedMotion ? "0ms" : `${index * 100 + 1200}ms` }}
                  >
                    <Link href="/services">
                      <Button
                        variant="outline"
                        className="group border-2 border-black text-black hover:bg-black hover:text-white px-10 py-4 text-sm font-medium transition-all duration-500 bg-transparent rounded-none uppercase tracking-[0.1em] relative overflow-hidden"
                      >
                        <span className="relative z-10">Discover More</span>
                        <ArrowRight
                          className="ml-3 transition-transform duration-300 group-hover:translate-x-1"
                          size={16}
                        />
                        <div className="absolute inset-0 bg-black transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Enhanced Image Side */}
              <div className={`relative ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                <div className="h-[60vh] lg:h-screen relative overflow-hidden group">
                  {/* Main Image with Enhanced Effects */}
                  <div
                    className="absolute inset-0 transition-all duration-700 ease-out"
                    style={{
                      transform: isReducedMotion
                        ? "scale(1.05)"
                        : `translate3d(0, ${parallaxOffset}px, 0) scale(${hoveredService === index ? 1.12 : 1.05})`,
                    }}
                  >
                    <img
                      src={service.image || "/placeholder.svg"}
                      alt={service.category}
                      className="w-full h-full object-cover object-center transition-all duration-700 ease-out filter brightness-90 contrast-110 saturate-110"
                      loading={index === 0 ? "eager" : "lazy"}
                      style={{
                        filter:
                          hoveredService === index
                            ? "brightness(100%) contrast(115%) saturate(120%) blur(0px)"
                            : "brightness(90%) contrast(110%) saturate(110%) blur(0px)",
                      }}
                    />

                    {/* Enhanced Multi-Layer Overlays */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/5 to-transparent"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-red-900/15 via-transparent to-transparent"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/20"></div>

                    {/* Dynamic Hover Overlay with Gradient */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent transition-all duration-700 ${
                        hoveredService === index ? "opacity-100" : "opacity-0"
                      }`}
                    ></div>

                    {/* Subtle Vignette Effect */}
                    <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-black/10"></div>
                  </div>

                  {/* Enhanced Service Number with Glow */}
                  <div
                    className="absolute top-8 right-8 lg:top-12 lg:right-12 z-10"
                    style={{
                      transform: isReducedMotion ? "none" : `translate3d(0, ${parallaxOffset * -0.3}px, 0)`,
                    }}
                  >
                    <div
                      className={`w-16 h-16 lg:w-20 lg:h-20 border-2 rounded-full flex items-center justify-center backdrop-blur-md transition-all duration-700 ${
                        hoveredService === index
                          ? "border-white/90 bg-white/20 shadow-2xl shadow-white/20"
                          : "border-white/50 bg-white/10"
                      }`}
                    >
                      <span className="text-white font-light text-xl lg:text-2xl drop-shadow-lg">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                  </div>

                  {/* Enhanced Category Badge */}
                  <div className="absolute bottom-8 left-8 z-10">
                    <div
                      className={`backdrop-blur-md px-6 py-3 rounded-full transition-all duration-500 ${
                        hoveredService === index ? "bg-white/95 shadow-xl" : "bg-white/85"
                      }`}
                    >
                      <span className="text-black text-sm font-medium tracking-wide">{service.category}</span>
                    </div>
                  </div>

                  {/* Enhanced Decorative Elements */}
                  <div
                    className="absolute bottom-8 right-8 z-10"
                    style={{
                      transform: isReducedMotion
                        ? "none"
                        : `translate3d(${parallaxOffset * 0.1}px, ${parallaxOffset * -0.2}px, 0)`,
                    }}
                  >
                    <div className="flex flex-col items-end gap-2">
                      <div
                        className={`h-px bg-white transition-all duration-500 ${
                          hoveredService === index ? "w-32 opacity-80" : "w-24 opacity-50"
                        }`}
                      ></div>
                      <div
                        className={`h-px bg-white transition-all duration-700 delay-100 ${
                          hoveredService === index ? "w-20 opacity-60" : "w-16 opacity-30"
                        }`}
                      ></div>
                    </div>
                  </div>

                  {/* Corner Accent */}
                  <div className="absolute top-8 left-8 z-10">
                    <div
                      className={`w-12 h-12 border-l-2 border-t-2 border-white transition-all duration-500 ${
                        hoveredService === index ? "opacity-60 scale-110" : "opacity-30"
                      }`}
                    ></div>
                  </div>

                  {/* Bottom Right Corner Accent */}
                  <div className="absolute bottom-20 right-20 z-10">
                    <div
                      className={`w-8 h-8 border-r-2 border-b-2 border-white transition-all duration-500 ${
                        hoveredService === index ? "opacity-50 scale-110" : "opacity-20"
                      }`}
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Section Divider */}
            {index < services.length - 1 && (
              <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
            )}
          </div>
        )
      })}

      {/* Enhanced Final CTA Section */}
      <div
        className="relative py-32 text-center px-8 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden"
        style={{
          transform: isReducedMotion ? "none" : `translate3d(0, ${scrollY * 0.03}px, 0)`,
        }}
      >
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-600 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-black rounded-full blur-2xl"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="w-32 h-px bg-red-600 mx-auto mb-12"></div>

          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-extralight text-black mb-8 leading-[0.9] tracking-tight">
            Ready to create something
            <br />
            <span className="italic font-light text-red-600">extraordinary?</span>
          </h2>

          <p className="text-xl lg:text-2xl text-gray-600 mb-16 font-light max-w-4xl mx-auto leading-relaxed">
            Let's collaborate to bring your vision to life with our comprehensive suite of visual storytelling services.
            Every project is a new opportunity to create something truly remarkable.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Link href="/contact">
              <Button
                size="lg"
                className="group bg-black text-white hover:bg-red-600 px-12 py-5 text-base font-medium transition-all duration-500 rounded-none uppercase tracking-[0.1em] relative overflow-hidden"
              >
                <span className="relative z-10">Start Your Project</span>
                <ArrowRight className="ml-3 transition-transform duration-300 group-hover:translate-x-1" size={18} />
              </Button>
            </Link>

            <Link href="/portfolio">
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-gray-400 text-gray-700 hover:border-black hover:text-black px-12 py-5 text-base font-medium transition-all duration-500 bg-transparent rounded-none uppercase tracking-[0.1em]"
              >
                View Our Work
              </Button>
            </Link>
          </div>

          <div className="w-32 h-px bg-red-600 mx-auto"></div>
        </div>
      </div>
    </section>
  )
}
