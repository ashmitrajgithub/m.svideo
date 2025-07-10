


"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Camera, Video, Users, Calendar, Sparkles } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [scrollY, setScrollY] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)
  const [imagesLoaded, setImagesLoaded] = useState(false)
  const [loadingProgress, setLoadingProgress] = useState(0)
  const [typewriterText1, setTypewriterText1] = useState("")
  const [typewriterText2, setTypewriterText2] = useState("")
  const [showCursor1, setShowCursor1] = useState(true)
  const [showCursor2, setShowCursor2] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [isSmallScreen, setIsSmallScreen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const text1 = "CINEMATIC"
  const text2 = "storytelling"

  // Clean image arrays
  const column1Images = [
    "/memories/memo10.jpg",
    "/memories/memo12.jpg",
    "/memories/memo13.jpg",
    "/memories/memo21.jpg",
    "/memories/memo22.jpg",
    "/memories/memo23.jpg",
    "/memories/memo24.jpg",
    "/memories/memo30.jpg",
  ]

  const column2Images = [
    "/memories/memo31.jpg",
    "/memories/memo40.jpg",
    "/memories/memo41.jpg",
    "/memories/memo42.jpg",
    "/memories/memo50.jpg",
    "/memories/memo52.jpg",
    "/memories/memo53.jpg",
    "/memories/memo60.jpg",
  ]

  const column3Images = [
    "/memories/memo61.jpg",
    "/memories/memo62.jpg",
    "/memories/memo63.jpg",
    "/memories/memo70.jpg",
    "/memories/memo71.jpg",
    "/memories/memo72.jpg",
    "/memories/memo74.jpg",
  ]

  const allImages = [...column1Images, ...column2Images, ...column3Images]

  // Different height patterns for more variety
  const getImageHeight = (colIndex: number, imgIndex: number, setIndex: number) => {
    if (isSmallScreen) {
      // Mobile heights - more varied
      const mobileHeights = [
        [180, 220, 160, 240, 200, 190, 210, 170], // Column 1
        [200, 180, 250, 160, 230, 190, 180, 220], // Column 2
      ]
      const heights = mobileHeights[colIndex] || mobileHeights[0]
      return heights[imgIndex % heights.length] + setIndex * 10
    } else {
      // Desktop heights - much more varied
      const desktopHeights = [
        [320, 480, 280, 520, 360, 440, 300, 500], // Column 1 - varied portrait/landscape
        [400, 300, 550, 250, 450, 320, 380, 480], // Column 2 - different rhythm
        [350, 420, 280, 480, 320, 380, 460, 300], // Column 3 - another pattern
      ]
      const heights = desktopHeights[colIndex] || desktopHeights[0]
      return heights[imgIndex % heights.length] + setIndex * 15
    }
  }

  // Simple image preloading
  const preloadImages = async () => {
    const imagePromises = allImages.map((src, index) => {
      return new Promise<void>((resolve) => {
        const img = new Image()
        img.onload = () => {
          setLoadingProgress(((index + 1) / allImages.length) * 100)
          resolve()
        }
        img.onerror = () => {
          setLoadingProgress(((index + 1) / allImages.length) * 100)
          resolve()
        }
        img.src = src
      })
    })

    await Promise.all(imagePromises)
    setImagesLoaded(true)
    setTimeout(() => setIsLoaded(true), 200)
  }

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768)
      setIsSmallScreen(window.innerWidth < 640)
    }

    checkScreenSize()
    window.addEventListener("resize", checkScreenSize)
    preloadImages()

    const handleMouseMove = (e: MouseEvent) => {
      if (!isMobile) {
        setMousePosition({
          x: (e.clientX / window.innerWidth) * 2 - 1,
          y: (e.clientY / window.innerHeight) * 2 - 1,
        })
      }
    }

    const handleScroll = () => setScrollY(window.scrollY)

    if (!isMobile) {
      window.addEventListener("mousemove", handleMouseMove)
    }
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("resize", checkScreenSize)
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [isMobile])

  // Clean typewriter effect
  useEffect(() => {
    if (!isLoaded || !imagesLoaded) return

    const typeFirstWord = () => {
      let i = 0
      const timer1 = setInterval(() => {
        if (i < text1.length) {
          setTypewriterText1(text1.slice(0, i + 1))
          i++
        } else {
          clearInterval(timer1)
          setShowCursor1(false)
          setTimeout(() => {
            setShowCursor2(true)
            typeSecondWord()
          }, 300)
        }
      }, 120)
    }

    const typeSecondWord = () => {
      let i = 0
      const timer2 = setInterval(() => {
        if (i < text2.length) {
          setTypewriterText2(text2.slice(0, i + 1))
          i++
        } else {
          clearInterval(timer2)
          setTimeout(() => setShowCursor2(false), 1500)
        }
      }, 80)
    }

    setTimeout(typeFirstWord, 800)
  }, [isLoaded, imagesLoaded])

  const getParallaxOffset = (multiplier: number) => {
    return isMobile ? scrollY * multiplier * 0.1 : scrollY * multiplier * 0.3
  }

  const getMouseParallax = (multiplier: number) => {
    if (isMobile) return { x: 0, y: 0 }
    return {
      x: mousePosition.x * multiplier,
      y: mousePosition.y * multiplier,
    }
  }

  // Simple loading screen
  // const LoadingScreen = () => (
  //   <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
  //     <div className="text-center">
  //       <div className="mb-6">
  //         <div className="relative w-16 h-16 mx-auto">
  //           <div className="absolute inset-0 border-2 border-red-500/30 rounded-full"></div>
  //           <div className="absolute inset-0 border-2 border-red-500 rounded-full border-t-transparent animate-spin"></div>
  //           <Camera className="absolute inset-0 m-auto text-red-400" size={20} />
  //         </div>
  //       </div>
  //       <h2 className="text-white text-xl font-semibold mb-4">Loading Portfolio</h2>
  //       <div className="w-48 h-1 bg-gray-800 rounded-full mx-auto mb-2">
  //         <div
  //           className="h-full bg-red-500 rounded-full transition-all duration-300"
  //           style={{ width: `${loadingProgress}%` }}
  //         ></div>
  //       </div>
  //       <p className="text-gray-400 text-sm">{Math.round(loadingProgress)}%</p>
  //     </div>
  //   </div>
  // )

  // if (!imagesLoaded) {
  //   return <LoadingScreen />
  // }

  return (
    <section ref={containerRef} className="relative min-h-screen bg-black overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0">
        {isSmallScreen ? (
          // Mobile: 2 columns with varied heights
          <div className="grid grid-cols-2 gap-1 h-full p-2">
            <div className="relative overflow-hidden">
              <div className="flex flex-col gap-1" style={{ animation: "scrollUp 45s linear infinite" }}>
                {Array.from({ length: 4 }).map((_, setIndex) => (
                  <div key={setIndex} className="flex flex-col gap-1">
                    {column1Images.slice(0, 4).map((src, imgIndex) => (
                      <div key={`${setIndex}-${imgIndex}`} className="relative group">
                        <img
                          src={src || "/placeholder.svg"}
                          alt={`Portfolio ${imgIndex + 1}`}
                          className="w-full h-auto object-cover rounded border border-red-500/50 transition-all duration-300 group-hover:border-red-400"
                          style={{ height: `${getImageHeight(0, imgIndex, setIndex)}px` }}
                        />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
            <div className="relative overflow-hidden">
              <div className="flex flex-col gap-1" style={{ animation: "scrollDown 45s linear infinite" }}>
                {Array.from({ length: 4 }).map((_, setIndex) => (
                  <div key={setIndex} className="flex flex-col gap-1">
                    {column2Images.slice(0, 4).map((src, imgIndex) => (
                      <div key={`${setIndex}-${imgIndex}`} className="relative group">
                        <img
                          src={src || "/placeholder.svg"}
                          alt={`Portfolio ${imgIndex + 1}`}
                          className="w-full h-auto object-cover rounded border border-red-500/50 transition-all duration-300 group-hover:border-red-400"
                          style={{ height: `${getImageHeight(1, imgIndex, setIndex)}px` }}
                        />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          // Desktop: 3 columns with much more varied heights
          <div className="grid grid-cols-3 gap-2 md:gap-4 h-full p-4 md:p-8">
            {[column1Images, column2Images, column3Images].map((images, colIndex) => (
              <div key={colIndex} className="relative overflow-hidden">
                <div
                  className="flex flex-col gap-2 md:gap-4"
                  style={{
                    transform: `translateY(${getParallaxOffset(colIndex === 1 ? -0.1 : 0.1)}px)`,
                    animation: `${colIndex === 1 ? "scrollDown" : "scrollUp"} 60s linear infinite`,
                  }}
                >
                  {Array.from({ length: 4 }).map((_, setIndex) => (
                    <div key={setIndex} className="flex flex-col gap-2 md:gap-4">
                      {images.map((src, imgIndex) => {
                        const mouseParallax = getMouseParallax((colIndex - 1) * 5)
                        return (
                          <div
                            key={`${setIndex}-${imgIndex}`}
                            className="relative group"
                            style={{
                              transform: `translate(${mouseParallax.x}px, ${mouseParallax.y}px)`,
                            }}
                          >
                            <img
                              src={src || "/placeholder.svg"}
                              alt={`Portfolio ${imgIndex + 1}`}
                              className="w-full h-auto object-cover rounded-lg border border-red-500/60 transition-all duration-500 group-hover:scale-105 group-hover:border-red-400"
                              style={{ height: `${getImageHeight(colIndex, imgIndex, setIndex)}px` }}
                            />
                          </div>
                        )
                      })}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Clean overlay */}
        {/* <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-black/40"></div> */}
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-8">
        <div className="max-w-6xl mx-auto text-center w-full">
          {/* Main Heading */}
          <h1
            className="font-black mb-6 sm:mb-8 leading-tight tracking-tight"
            style={{
              fontSize: isSmallScreen ? "clamp(2rem, 12vw, 3.5rem)" : "clamp(3rem, 8vw, 8rem)",
              textShadow: "0 4px 20px rgba(0, 0, 0, 0.8)",
            }}
          >
            <span className="block text-white mb-2">
              {typewriterText1}
              {showCursor1 && (
                <span className="inline-block bg-red-500 ml-2 animate-pulse w-1 h-[0.8em] rounded-sm"></span>
              )}
            </span>
            <span
              className="block font-light italic"
              style={{
                background: "linear-gradient(135deg, #f87171 0%, #ef4444 50%, #dc2626 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {typewriterText2}
              {showCursor2 && (
                <span className="inline-block bg-red-500 ml-2 animate-pulse w-1 h-[0.8em] rounded-sm"></span>
              )}
            </span>
          </h1>

          {/* Subtitle */}
          <div
            className={`max-w-4xl mx-auto mb-8 sm:mb-12 transition-all duration-1000 delay-1000 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            {/* Icons */}
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px bg-gradient-to-r from-transparent to-red-500 w-8"></div>
              <div className="flex items-center gap-2">
                <Camera className="text-red-400" size={18} />
                <Sparkles className="text-red-300 animate-pulse" size={14} />
                <Video className="text-red-400" size={18} />
              </div>
              <div className="h-px bg-gradient-to-r from-red-500 to-transparent w-8"></div>
            </div>

            {/* Description */}
            <p
              className="text-gray-200 font-light leading-relaxed mb-8"
              style={{
                fontSize: isSmallScreen ? "1rem" : "1.25rem",
                textShadow: "0 2px 4px rgba(0, 0, 0, 0.6)",
              }}
            >
              <span className="block sm:inline">Capturing life's most precious moments with </span>
              <span className="text-red-400 font-semibold">artistic vision</span>
              <span className="block sm:inline"> and </span>
              <span className="text-red-400 font-semibold">cinematic excellence</span>
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
              {[
                { number: "500+", label: "Happy Couples", icon: Users },
                { number: "50+", label: "Awards Won", icon: Users },
                { number: "8+", label: "Years Experience", icon: Calendar },
              ].map((stat, index) => (
                <div key={index} className="text-center group">
                  <div
                    className="font-bold text-white mb-2 group-hover:text-red-400 transition-colors"
                    style={{ fontSize: isSmallScreen ? "1.5rem" : "2rem" }}
                  >
                    {stat.number}
                  </div>
                  <div className="text-gray-400 text-sm uppercase tracking-wide flex items-center justify-center gap-1">
                    <stat.icon className="w-3 h-3" />
                    <span>{isSmallScreen ? stat.label.split(" ")[0] : stat.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 delay-1500 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <Link href="/portfolio" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold rounded-full shadow-lg hover:shadow-red-500/25 transition-all duration-300 hover:scale-105 w-full sm:w-auto"
                style={{ padding: "16px 32px" }}
              >
                View Our Work
                <ArrowRight className="ml-2" size={18} />
              </Button>
            </Link>
            <Link href="/contact" className="w-full sm:w-auto">
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-red-500 text-red-400 hover:bg-red-500 hover:text-white font-semibold rounded-full bg-black/30 backdrop-blur-sm transition-all duration-300 hover:scale-105 w-full sm:w-auto"
                style={{ padding: "16px 32px" }}
              >
                Book Consultation
              </Button>
            </Link>
          </div>

          {/* Scroll Indicator */}
          <div
            className={`absolute left-1/2 transform -translate-x-1/2 bottom-8 transition-all duration-1000 delay-2000 ${
              isLoaded ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="flex flex-col items-center gap-2 text-red-400 animate-bounce">
              <span className="text-xs uppercase tracking-wide">Scroll to explore</span>
              <div className="w-px h-6 bg-gradient-to-b from-red-500 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes scrollUp {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-50%);
          }
        }
        @keyframes scrollDown {
          0% {
            transform: translateY(-50%);
          }
          100% {
            transform: translateY(0);
          }
        }
        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </section>
  )
}
