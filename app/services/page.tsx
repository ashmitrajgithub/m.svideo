import Header from "@/components/header"
import Footer from "@/components/footer"
import WhatsAppChat from "@/components/whatsapp-chat"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Camera, Video, Users, Heart, Briefcase, Music, Check, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function ServicesPage() {
  const services = [
    {
      icon: Heart,
      title: "Wedding Videography",
      description:
        "Capture your special day with cinematic wedding films that tell your unique love story with artistic excellence.",
      image: "/placeholder.svg?height=500&width=800&text=Wedding+Cinematography",
      price: "Starting from $2,500",
      duration: "Full Day Coverage",
      features: [
        "Pre-wedding consultation & planning",
        "Ceremony & reception coverage",
        "Professional multi-camera setup",
        "Same-day highlight reel",
        "Full-length cinematic film",
        "Raw footage delivery",
        "Online gallery access",
        "Drone footage (weather permitting)",
      ],
      packages: [
        { name: "Essential", price: "$2,500", duration: "8 hours" },
        { name: "Premium", price: "$4,000", duration: "12 hours" },
        { name: "Luxury", price: "$6,500", duration: "Full weekend" },
      ],
    },
    {
      icon: Camera,
      title: "Portrait Photography",
      description:
        "Transform the way you see yourself with magazine-style portraits that capture your essence and personality.",
      image: "/placeholder.svg?height=500&width=800&text=Portrait+Photography",
      price: "Starting from $500",
      duration: "2-3 Hours",
      features: [
        "Professional studio or location shoot",
        "Wardrobe consultation",
        "Professional hair & makeup available",
        "Multiple outfit changes",
        "High-resolution edited images",
        "Print release included",
        "Online gallery delivery",
        "Retouching & color correction",
      ],
      packages: [
        { name: "Individual", price: "$500", duration: "2 hours" },
        { name: "Family", price: "$800", duration: "3 hours" },
        { name: "Corporate", price: "$1,200", duration: "Half day" },
      ],
    },
    {
      icon: Briefcase,
      title: "Corporate Videos",
      description:
        "Professional corporate videography that elevates your brand story and engages your target audience effectively.",
      image: "/placeholder.svg?height=500&width=800&text=Corporate+Video",
      price: "Starting from $1,500",
      duration: "Project Based",
      features: [
        "Brand story development",
        "Script writing & storyboarding",
        "Professional crew & equipment",
        "Multiple location shoots",
        "Interview & testimonial capture",
        "Motion graphics & animation",
        "Color grading & sound design",
        "Multiple format delivery",
      ],
      packages: [
        { name: "Basic", price: "$1,500", duration: "1-2 days" },
        { name: "Professional", price: "$3,500", duration: "3-5 days" },
        { name: "Enterprise", price: "$7,500", duration: "1-2 weeks" },
      ],
    },
    {
      icon: Users,
      title: "Event Coverage",
      description:
        "Complete event documentation with professional multi-camera coverage and same-day highlight delivery.",
      image: "/placeholder.svg?height=500&width=800&text=Event+Coverage",
      price: "Starting from $1,200",
      duration: "Event Duration",
      features: [
        "Multi-camera professional setup",
        "Live streaming capabilities",
        "Professional audio recording",
        "Same-day highlight reel",
        "Full event documentation",
        "Drone coverage available",
        "Social media ready clips",
        "Fast turnaround delivery",
      ],
      packages: [
        { name: "Standard", price: "$1,200", duration: "4 hours" },
        { name: "Extended", price: "$2,000", duration: "8 hours" },
        { name: "Premium", price: "$3,500", duration: "Full day" },
      ],
    },
    {
      icon: Music,
      title: "Music Videos",
      description:
        "Creative music video production with artistic vision, professional equipment, and innovative storytelling.",
      image: "/placeholder.svg?height=500&width=800&text=Music+Video",
      price: "Starting from $2,000",
      duration: "2-3 Days",
      features: [
        "Creative concept development",
        "Location scouting & permits",
        "Professional lighting setup",
        "Multiple camera angles",
        "Choreography coordination",
        "Post-production editing",
        "Color grading & effects",
        "Distribution ready formats",
      ],
      packages: [
        { name: "Indie", price: "$2,000", duration: "1 day" },
        { name: "Professional", price: "$5,000", duration: "2 days" },
        { name: "Premium", price: "$10,000", duration: "3 days" },
      ],
    },
    {
      icon: Video,
      title: "Commercial Films",
      description:
        "High-quality commercial video production for advertising campaigns and brand marketing initiatives.",
      image: "/placeholder.svg?height=500&width=800&text=Commercial+Film",
      price: "Starting from $3,000",
      duration: "1-2 Weeks",
      features: [
        "Campaign strategy consultation",
        "Professional casting services",
        "Location management",
        "Full production crew",
        "Equipment & gear rental",
        "Post-production suite",
        "Multiple format delivery",
        "Usage rights included",
      ],
      packages: [
        { name: "Local", price: "$3,000", duration: "3 days" },
        { name: "Regional", price: "$8,000", duration: "1 week" },
        { name: "National", price: "$15,000", duration: "2 weeks" },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-black">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-red-800/10 rounded-full blur-2xl animate-pulse delay-1000" />
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="inline-block mb-6">
            <span className="bg-gradient-to-r from-red-600 to-red-400 text-white px-6 py-3 rounded-full text-sm font-semibold uppercase tracking-wider">
              Professional Services
            </span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black mb-8">
            <span className="block bg-gradient-to-r from-white via-gray-100 to-red-400 bg-clip-text text-transparent">
              Our
            </span>
            <span className="block bg-gradient-to-r from-red-600 via-red-500 to-red-400 bg-clip-text text-transparent">
              Services
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
            Comprehensive videography and photography services designed to capture your most important moments with
            unparalleled artistry and technical excellence.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white px-12 py-6 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105"
              >
                Get Custom Quote
              </Button>
            </Link>
            <Link href="/portfolio">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white/30 text-white hover:bg-white hover:text-black px-12 py-6 text-lg font-semibold rounded-full bg-transparent"
              >
                View Our Work
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black border border-red-900/20 hover:border-red-500/50 transition-all duration-500"
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <img
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                    <div className="absolute top-6 left-6">
                      <div className="p-4 bg-red-600/90 backdrop-blur-sm rounded-full">
                        <service.icon className="text-white" size={28} />
                      </div>
                    </div>
                    <div className="absolute bottom-6 left-6">
                      <h3 className="text-3xl font-bold text-white mb-2">{service.title}</h3>
                      <div className="flex items-center space-x-4 text-sm text-gray-300">
                        <span className="bg-red-600 text-white px-3 py-1 rounded-full font-semibold">
                          {service.price}
                        </span>
                        <span>{service.duration}</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-8">
                    <p className="text-gray-300 mb-8 text-lg leading-relaxed">{service.description}</p>

                    {/* Features */}
                    <div className="mb-8">
                      <h4 className="text-white font-semibold text-lg mb-4">What's Included:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center text-gray-300">
                            <Check className="text-red-500 mr-3 flex-shrink-0" size={16} />
                            <span className="text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Packages */}
                    <div className="mb-8">
                      <h4 className="text-white font-semibold text-lg mb-4">Package Options:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {service.packages.map((pkg, idx) => (
                          <div key={idx} className="bg-gray-800/50 p-4 rounded-lg border border-red-900/20">
                            <h5 className="text-red-400 font-semibold mb-2">{pkg.name}</h5>
                            <p className="text-white text-xl font-bold mb-1">{pkg.price}</p>
                            <p className="text-gray-400 text-sm">{pkg.duration}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <Link href="/contact" className="flex-1">
                        <Button className="w-full bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white">
                          Book Now
                          <ArrowRight className="ml-2" size={16} />
                        </Button>
                      </Link>
                      <Button
                        variant="outline"
                        className="border-red-600/50 text-red-400 hover:bg-red-600 hover:text-white bg-transparent"
                      >
                        Learn More
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 via-red-700 to-red-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Ready to Create Something Amazing?</h2>
          <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto">
            Let's discuss your vision and create a custom package that perfectly fits your needs and budget.
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              className="bg-white text-red-600 hover:bg-gray-100 px-12 py-6 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105"
            >
              Get Your Free Consultation
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
      <WhatsAppChat />
    </div>
  )
}
