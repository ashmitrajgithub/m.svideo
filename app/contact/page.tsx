import Header from "@/components/header"
import Footer from "@/components/footer"
import WhatsAppChat from "@/components/whatsapp-chat"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, MapPin, Clock, Send, Calendar, Award } from "lucide-react"

export default function ContactPage() {
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
              Get In Touch
            </span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black mb-8">
            <span className="block bg-gradient-to-r from-white via-gray-100 to-red-400 bg-clip-text text-transparent">
              Let's Create
            </span>
            <span className="block bg-gradient-to-r from-red-600 via-red-500 to-red-400 bg-clip-text text-transparent">
              Together
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Ready to transform your vision into stunning visual stories? Let's discuss your project and create something
            extraordinary together.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <div className="mb-8">
                <h2 className="text-4xl font-bold text-white mb-4">Send Us a Message</h2>
                <p className="text-gray-300 text-lg">
                  Fill out the form below and we'll get back to you within 24 hours with a custom quote for your
                  project.
                </p>
              </div>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white mb-3 font-medium">First Name *</label>
                    <input
                      type="text"
                      className="w-full p-4 bg-black border border-red-900/30 rounded-lg text-white focus:border-red-500 focus:outline-none transition-colors"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-white mb-3 font-medium">Last Name *</label>
                    <input
                      type="text"
                      className="w-full p-4 bg-black border border-red-900/30 rounded-lg text-white focus:border-red-500 focus:outline-none transition-colors"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white mb-3 font-medium">Email Address *</label>
                  <input
                    type="email"
                    className="w-full p-4 bg-black border border-red-900/30 rounded-lg text-white focus:border-red-500 focus:outline-none transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-white mb-3 font-medium">Phone Number</label>
                  <input
                    type="tel"
                    className="w-full p-4 bg-black border border-red-900/30 rounded-lg text-white focus:border-red-500 focus:outline-none transition-colors"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                <div>
                  <label className="block text-white mb-3 font-medium">Service Interested In *</label>
                  <select className="w-full p-4 bg-black border border-red-900/30 rounded-lg text-white focus:border-red-500 focus:outline-none transition-colors">
                    <option value="">Select a service...</option>
                    <option value="wedding">Wedding Videography</option>
                    <option value="portrait">Portrait Photography</option>
                    <option value="corporate">Corporate Videos</option>
                    <option value="event">Event Coverage</option>
                    <option value="music">Music Videos</option>
                    <option value="commercial">Commercial Films</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-white mb-3 font-medium">Event Date</label>
                  <input
                    type="date"
                    className="w-full p-4 bg-black border border-red-900/30 rounded-lg text-white focus:border-red-500 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-white mb-3 font-medium">Budget Range</label>
                  <select className="w-full p-4 bg-black border border-red-900/30 rounded-lg text-white focus:border-red-500 focus:outline-none transition-colors">
                    <option value="">Select budget range...</option>
                    <option value="under-1000">Under $1,000</option>
                    <option value="1000-2500">$1,000 - $2,500</option>
                    <option value="2500-5000">$2,500 - $5,000</option>
                    <option value="5000-10000">$5,000 - $10,000</option>
                    <option value="over-10000">Over $10,000</option>
                  </select>
                </div>

                <div>
                  <label className="block text-white mb-3 font-medium">Project Details *</label>
                  <textarea
                    rows={6}
                    className="w-full p-4 bg-black border border-red-900/30 rounded-lg text-white focus:border-red-500 focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your project, vision, and any specific requirements..."
                  ></textarea>
                </div>

                <Button
                  size="lg"
                  className="w-full bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white py-4 text-lg font-semibold transition-all duration-300 hover:scale-105"
                >
                  <Send className="mr-3" size={20} />
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="mb-8">
                <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
                <p className="text-gray-300 text-lg">
                  We're here to help bring your vision to life. Reach out through any of these channels.
                </p>
              </div>

              <div className="space-y-6">
                <Card className="bg-gradient-to-br from-black via-gray-900 to-black border border-red-900/20 hover:border-red-500/50 transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <div className="p-4 bg-red-600 rounded-full mr-6">
                        <Phone className="text-white" size={28} />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold text-xl mb-1">Phone</h3>
                        <p className="text-gray-400">Call us directly</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <p className="text-white text-lg font-medium">+1 (555) 123-4567</p>
                      <p className="text-gray-400">Available Mon-Fri 9AM-6PM EST</p>
                      <p className="text-gray-400">Emergency bookings: +1 (555) 987-6543</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-black via-gray-900 to-black border border-red-900/20 hover:border-red-500/50 transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <div className="p-4 bg-red-600 rounded-full mr-6">
                        <Mail className="text-white" size={28} />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold text-xl mb-1">Email</h3>
                        <p className="text-gray-400">Send us a message</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <p className="text-white text-lg font-medium">info@msvideo.com</p>
                      <p className="text-gray-400">We respond within 24 hours</p>
                      <p className="text-gray-400">Bookings: bookings@msvideo.com</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-black via-gray-900 to-black border border-red-900/20 hover:border-red-500/50 transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <div className="p-4 bg-red-600 rounded-full mr-6">
                        <MapPin className="text-white" size={28} />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold text-xl mb-1">Studio Location</h3>
                        <p className="text-gray-400">Visit our studio</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <p className="text-white text-lg font-medium">123 Creative Street</p>
                      <p className="text-white">New York, NY 10001</p>
                      <p className="text-gray-400">By appointment only</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-black via-gray-900 to-black border border-red-900/20 hover:border-red-500/50 transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <div className="p-4 bg-red-600 rounded-full mr-6">
                        <Clock className="text-white" size={28} />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold text-xl mb-1">Business Hours</h3>
                        <p className="text-gray-400">When we're available</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <p className="text-white">Monday - Friday: 9AM - 6PM</p>
                      <p className="text-white">Saturday: 10AM - 4PM</p>
                      <p className="text-white">Sunday: By Appointment</p>
                      <p className="text-gray-400">Emergency services available 24/7</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 mt-12">
                <div className="text-center p-6 bg-gradient-to-br from-red-600/10 to-red-800/10 rounded-lg border border-red-900/20">
                  <Calendar className="text-red-400 mx-auto mb-2" size={32} />
                  <div className="text-2xl font-bold text-white">24hr</div>
                  <div className="text-gray-400 text-sm">Response Time</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-red-600/10 to-red-800/10 rounded-lg border border-red-900/20">
                  <Award className="text-red-400 mx-auto mb-2" size={32} />
                  <div className="text-2xl font-bold text-white">500+</div>
                  <div className="text-gray-400 text-sm">Happy Clients</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-red-600/10 to-red-800/10 rounded-lg border border-red-900/20">
                  <Phone className="text-red-400 mx-auto mb-2" size={32} />
                  <div className="text-2xl font-bold text-white">24/7</div>
                  <div className="text-gray-400 text-sm">Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Frequently Asked <span className="text-red-600">Questions</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get quick answers to common questions about our services and booking process.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                question: "How far in advance should I book?",
                answer:
                  "We recommend booking 3-6 months in advance for weddings and major events. However, we can often accommodate shorter notice bookings depending on availability.",
              },
              {
                question: "Do you travel for destination events?",
                answer:
                  "Yes! We love destination weddings and events. Travel fees may apply depending on the location. Contact us for a custom quote.",
              },
              {
                question: "What's included in your packages?",
                answer:
                  "Each package includes professional equipment, editing, and delivery. Specific inclusions vary by service - check our Services page for detailed breakdowns.",
              },
              {
                question: "How long does editing take?",
                answer:
                  "Typical turnaround is 2-4 weeks for weddings, 1-2 weeks for portraits, and 3-6 weeks for commercial projects. Rush delivery is available for an additional fee.",
              },
              {
                question: "Can we customize a package?",
                answer:
                  "We create custom packages tailored to your specific needs and budget. Contact us to discuss your requirements.",
              },
            ].map((faq, index) => (
              <Card
                key={index}
                className="bg-gray-900 border border-red-900/20 hover:border-red-500/50 transition-all duration-300"
              >
                <CardContent className="p-8">
                  <h3 className="text-white font-semibold text-xl mb-4">{faq.question}</h3>
                  <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppChat />
    </div>
  )
}
