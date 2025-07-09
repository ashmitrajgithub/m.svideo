import Header from "@/components/header"
import Hero from "@/components/hero"
import ServicesPreview from "@/components/services-preview"
import About from "@/components/about"
import ClientReviews from "@/components/client-reviews"
import Memories from "@/components/memories"
import PortfolioPreview from "@/components/portfolio-preview"
import FilmsPreview from "@/components/films-preview"
import Footer from "@/components/footer"
import WhatsAppChat from "@/components/whatsapp-chat"

export default function Home() {
  return (
    <div className="min-h-screen bg-black overflow-x-hidden">
      <Header />
      <Hero />
      <ServicesPreview />
      <About />
      <ClientReviews />
      <Memories />
      <PortfolioPreview />
      <FilmsPreview />
      <Footer />
      <WhatsAppChat />
    </div>
  )
}
