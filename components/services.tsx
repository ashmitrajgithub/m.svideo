import { Card, CardContent } from "@/components/ui/card"
import { Camera, Video, Users, Heart, Briefcase, Music } from "lucide-react"

export default function Services() {
  const services = [
    {
      icon: Heart,
      title: "Wedding Videography",
      description: "Capture your special day with cinematic wedding films that tell your unique love story.",
      features: ["Pre-wedding shoots", "Ceremony coverage", "Reception highlights", "Same-day edits"],
    },
    {
      icon: Camera,
      title: "Portrait Photography",
      description: "Transform the way you see yourself with professional portrait sessions.",
      features: ["Studio sessions", "Outdoor shoots", "Family portraits", "Professional headshots"],
    },
    {
      icon: Briefcase,
      title: "Corporate Videos",
      description: "Professional corporate videography for your business needs and brand storytelling.",
      features: ["Company profiles", "Product launches", "Training videos", "Event coverage"],
    },
    {
      icon: Users,
      title: "Event Coverage",
      description: "Complete event documentation with multiple camera angles and professional editing.",
      features: ["Live streaming", "Multi-cam setup", "Highlight reels", "Full event coverage"],
    },
    {
      icon: Music,
      title: "Music Videos",
      description: "Creative music video production with artistic vision and technical excellence.",
      features: ["Concept development", "Location scouting", "Professional lighting", "Post-production"],
    },
    {
      icon: Video,
      title: "Commercial Films",
      description: "High-quality commercial video production for advertising and marketing campaigns.",
      features: ["Script development", "Professional crew", "Equipment rental", "Full production"],
    },
  ]

  return (
    <section id="services" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our <span className="text-red-600">Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We offer comprehensive videography and photography services to capture your most important moments with
            professional excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-black border-red-900/20 hover:border-red-600/50 transition-all duration-300 group"
            >
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-red-600 rounded-lg mr-4 group-hover:bg-red-700 transition-colors">
                    <service.icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white">{service.title}</h3>
                </div>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-gray-400 flex items-center">
                      <div className="w-2 h-2 bg-red-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
