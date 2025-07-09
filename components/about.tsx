import { Button } from "@/components/ui/button"
import { Award, Users, Camera, Clock, Play, Star } from "lucide-react"
import Link from "next/link"

export default function About() {
  const stats = [
    { icon: Camera, number: "500+", label: "Projects Completed", description: "Successful deliveries" },
    { icon: Users, number: "200+", label: "Happy Clients", description: "5-star reviews" },
    { icon: Award, number: "15+", label: "Awards Won", description: "Industry recognition" },
    { icon: Clock, number: "5+", label: "Years Experience", description: "Professional expertise" },
  ]

  const team = [
    {
      name: "Pradeep Kumar",
      role: "Lead Cinematographer",
      image: "/about/about01.JPG?height=400&width=400&text=Michael",
      experience: "8+ years",
      specialty: "Wedding Films",
    },
    {
      name: "Sarah Chen",
      role: "Portrait Photographer",
      image: "/about/about02.JPG?height=400&width=400&text=Sarah",
      experience: "6+ years",
      specialty: "Fashion & Lifestyle",
    },
    {
      name: "David Thompson",
      role: "Commercial Director",
      image: "/about/about03.JPG?height=400&width=400&text=David",
      experience: "10+ years",
      specialty: "Brand Storytelling",
    },
  ]

  return (
    <section id="about" className="py-32 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-red-600/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-red-800/5 rounded-full blur-2xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Main About Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <div>
            <div className="inline-block mb-6">
              <span className="bg-gradient-to-r from-red-600 to-red-400 text-white px-6 py-3 rounded-full text-sm font-semibold uppercase tracking-wider">
                Our Story
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black mb-8">
              <span className="bg-gradient-to-r from-white via-gray-100 to-red-400 bg-clip-text text-transparent">
                Crafting Visual
              </span>
              <br />
              <span className="bg-gradient-to-r from-red-600 via-red-500 to-red-400 bg-clip-text text-transparent">
                Masterpieces
              </span>
            </h2>
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed mb-8">
              <p>
                We are passionate storytellers who believe every moment deserves to be captured with artistry and
                precision. Our team combines technical expertise with creative vision to deliver exceptional videography
                and photography services that exceed expectations.
              </p>
              <p>
                From intimate weddings to corporate campaigns, we approach each project with dedication,
                professionalism, and an eye for detail that sets us apart. Our goal is to transform your vision into
                stunning visual narratives that you'll treasure forever.
              </p>
              <p>
                With state-of-the-art equipment and years of experience, we've built a reputation for delivering
                cinematic quality that captures not just images, but emotions and memories that last a lifetime.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/portfolio">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105"
                >
                  View Our Work
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white/30 text-white hover:bg-white hover:text-black px-8 py-4 text-lg font-semibold rounded-full bg-transparent"
              >
                <Play className="mr-2" size={20} />
                Watch Our Story
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src="/home/093.jpg"
                alt="Professional portrait sample"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 bg-red-600 text-white p-4 rounded-full shadow-2xl">
              <Award size={32} />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-red-600 to-red-800 text-white p-6 rounded-lg shadow-2xl">
              <div className="text-2xl font-bold">5+ Years</div>
              <div className="text-sm opacity-90">Excellence</div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-32">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-800 rounded-full blur-lg opacity-20 group-hover:opacity-40 transition-opacity" />
                <div className="relative p-6 bg-gradient-to-br from-red-600 to-red-800 rounded-full mx-auto w-fit">
                  <stat.icon className="text-white" size={40} />
                </div>
              </div>
              <div className="text-4xl md:text-5xl font-black text-white mb-2 group-hover:text-red-400 transition-colors">
                {stat.number}
              </div>
              <div className="text-gray-300 font-semibold mb-1">{stat.label}</div>
              <div className="text-gray-500 text-sm">{stat.description}</div>
            </div>
          ))}
        </div>

        {/* Team Section */}
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <span className="bg-gradient-to-r from-red-600 to-red-400 text-white px-6 py-3 rounded-full text-sm font-semibold uppercase tracking-wider">
              Meet The Team
            </span>
          </div>
          <h3 className="text-4xl md:text-5xl font-black text-white mb-6">
            Creative <span className="text-red-600">Professionals</span>
          </h3>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our talented team of cinematographers, photographers, and creative directors bring years of experience and
            passion to every project.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 via-black to-gray-900 border border-red-900/20 hover:border-red-500/50 transition-all duration-500"
            >
              <div className="relative overflow-hidden">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <h4 className="text-white font-bold text-xl mb-1">{member.name}</h4>
                  <p className="text-red-400 font-medium mb-2">{member.role}</p>
                  <div className="flex justify-between items-center text-sm text-gray-300">
                    <span>{member.experience}</span>
                    <span>{member.specialty}</span>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-red-600/5 via-transparent to-red-800/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
