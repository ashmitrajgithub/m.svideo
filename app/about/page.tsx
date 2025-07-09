import Header from "@/components/header"
import About from "@/components/about"
import Footer from "@/components/footer"
import WhatsAppChat from "@/components/whatsapp-chat"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <div className="pt-20">
        <About />
      </div>
      <Footer />
      <WhatsAppChat />
    </div>
  )
}
