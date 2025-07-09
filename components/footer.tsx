import { Phone, Mail, MapPin, Facebook, Instagram, Youtube, Twitter, Camera } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black border-t border-red-900/20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-600/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-red-800/5 rounded-full blur-2xl" />
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-800 rounded-full blur-lg opacity-50" />
                <div className="relative bg-gradient-to-r from-red-600 to-red-800 p-3 rounded-full">
                  <Camera className="text-white" size={28} />
                </div>
              </div>
              <div>
                <h3 className="text-3xl font-bold bg-gradient-to-r from-white via-gray-100 to-red-400 bg-clip-text text-transparent">
                  M.s Video
                </h3>
                <p className="text-sm text-gray-400 tracking-widest uppercase">Cinematic Excellence</p>
              </div>
            </div>
            <p className="text-gray-300 mb-8 text-lg leading-relaxed max-w-md">
              Professional videography and cinematography services that capture your most precious moments with artistic
              excellence and technical perfection.
            </p>

            {/* Social Media */}
            <div className="flex space-x-4 mb-8">
              <a href="#" className="group p-3 bg-gray-800 hover:bg-red-600 rounded-full transition-all duration-300">
                <Facebook className="text-gray-400 group-hover:text-white transition-colors" size={24} />
              </a>
              <a href="#" className="group p-3 bg-gray-800 hover:bg-red-600 rounded-full transition-all duration-300">
                <Instagram className="text-gray-400 group-hover:text-white transition-colors" size={24} />
              </a>
              <a href="#" className="group p-3 bg-gray-800 hover:bg-red-600 rounded-full transition-all duration-300">
                <Youtube className="text-gray-400 group-hover:text-white transition-colors" size={24} />
              </a>
              <a href="#" className="group p-3 bg-gray-800 hover:bg-red-600 rounded-full transition-all duration-300">
                <Twitter className="text-gray-400 group-hover:text-white transition-colors" size={24} />
              </a>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-gradient-to-br from-red-600/10 to-red-800/10 rounded-lg border border-red-900/20">
                <div className="text-2xl font-bold text-white">500+</div>
                <div className="text-gray-400 text-sm">Projects</div>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-red-600/10 to-red-800/10 rounded-lg border border-red-900/20">
                <div className="text-2xl font-bold text-white">5★</div>
                <div className="text-gray-400 text-sm">Rating</div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold text-xl mb-6 relative">
              Our Services
              <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-red-600 to-red-400" />
            </h4>
            <ul className="space-y-4">
              {[
                "Wedding Videography",
                "Portrait Photography",
                "Corporate Videos",
                "Event Coverage",
                "Music Videos",
                "Commercial Films",
              ].map((service, index) => (
                <li key={index}>
                  <Link
                    href="/services"
                    className="text-gray-400 hover:text-red-400 transition-colors duration-300 flex items-center group"
                  >
                    <div className="w-2 h-2 bg-red-600 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-xl mb-6 relative">
              Quick Links
              <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-red-600 to-red-400" />
            </h4>
            <ul className="space-y-4">
              {[
                { name: "About Us", href: "/about" },
                { name: "Portfolio", href: "/portfolio" },
                { name: "Films", href: "/films" },
                { name: "Contact", href: "/contact" },
                { name: "Pricing", href: "/services" },
                { name: "Blog", href: "#" },
              ].map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-red-400 transition-colors duration-300 flex items-center group"
                  >
                    <div className="w-2 h-2 bg-red-600 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Information */}
        <div className="border-t border-red-900/20 mt-16 pt-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center group">
              <div className="p-4 bg-red-600 rounded-full mr-4 group-hover:bg-red-700 transition-colors">
                <Phone className="text-white" size={24} />
              </div>
              <div>
                <p className="text-white font-semibold text-lg">+1 (555) 123-4567</p>
                <p className="text-gray-400 text-sm">Available Mon-Fri 9AM-6PM</p>
              </div>
            </div>

            <div className="flex items-center group">
              <div className="p-4 bg-red-600 rounded-full mr-4 group-hover:bg-red-700 transition-colors">
                <Mail className="text-white" size={24} />
              </div>
              <div>
                <p className="text-white font-semibold text-lg">info@msvideo.com</p>
                <p className="text-gray-400 text-sm">24/7 Email Support</p>
              </div>
            </div>

            <div className="flex items-center group">
              <div className="p-4 bg-red-600 rounded-full mr-4 group-hover:bg-red-700 transition-colors">
                <MapPin className="text-white" size={24} />
              </div>
              <div>
                <p className="text-white font-semibold text-lg">123 Creative Street</p>
                <p className="text-gray-400 text-sm">New York, NY 10001</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-red-900/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 M.s Video. All rights reserved. | Crafted with ❤️ for visual storytelling
            </p>
            <div className="flex space-x-6">
              <Link href="#" className="text-gray-400 hover:text-red-400 text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-red-400 text-sm transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="text-gray-400 hover:text-red-400 text-sm transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
