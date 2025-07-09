"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Camera } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Our Services", href: "/services" },
    { name: "Contact", href: "/contact" },
    { name: "About Us", href: "/about" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Films", href: "/films" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-black/95 backdrop-blur-xl border-b border-red-500/20 shadow-2xl shadow-red-500/10"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-800 rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
              <div className="relative bg-gradient-to-r from-red-600 to-red-800 p-2 rounded-full">
                <Camera className="text-white" size={24} />
              </div>
            </div>
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-white via-gray-100 to-red-400 bg-clip-text text-transparent">
                M.s Video
              </h1>
              <p className="text-xs text-gray-400 tracking-widest uppercase">Cinematic Excellence</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <Link key={item.name} href={item.href} className="relative group py-2 px-4">
                <span className="text-white font-medium tracking-wide transition-all duration-300 group-hover:text-red-400">
                  {item.name}
                </span>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-red-600 to-red-400 transition-all duration-300 group-hover:w-full"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-red-600/0 via-red-600/5 to-red-600/0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link href="/contact">
              <button className="relative overflow-hidden bg-gradient-to-r from-red-600 to-red-800 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/25">
                <span className="relative z-10">Get Quote</span>
                <div className="absolute inset-0 bg-gradient-to-r from-red-800 to-red-600 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white p-2 rounded-lg hover:bg-red-600/20 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border-b border-red-500/20">
            <nav className="container mx-auto px-6 py-6">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block py-3 text-white hover:text-red-400 transition-colors border-b border-gray-800 last:border-b-0"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link href="/contact" className="block mt-4">
                <button className="w-full bg-gradient-to-r from-red-600 to-red-800 text-white py-3 rounded-full font-semibold">
                  Get Quote
                </button>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
