"use client"

import { MessageCircle, X } from "lucide-react"
import { useState } from "react"

export default function WhatsAppChat() {
  const [isOpen, setIsOpen] = useState(false)

  const handleWhatsAppClick = () => {
    const phoneNumber = "9570248629" // Replace with your actual WhatsApp number
    const message = "Hi! I'm interested in your videography services. Can we discuss my project?"
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Preview */}
      {isOpen && (
        <div className="mb-4 bg-white rounded-2xl shadow-2xl p-6 max-w-sm animate-fade-in">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gradient-to-r from-red-600 to-red-800 rounded-full flex items-center justify-center mr-3">
                <span className="text-white font-bold text-sm">MS</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">M.s Video</h4>
                <p className="text-xs text-green-500">● Online</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-gray-600">
              <X size={20} />
            </button>
          </div>
          <div className="space-y-3">
            <div className="bg-gray-100 rounded-lg p-3">
              <p className="text-sm text-gray-700">👋 Hi there! Ready to capture your special moments?</p>
            </div>
            <div className="bg-gray-100 rounded-lg p-3">
              <p className="text-sm text-gray-700">Click below to start chatting with us on WhatsApp!</p>
            </div>
          </div>
          <button
            onClick={handleWhatsAppClick}
            className="w-full mt-4 bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg font-medium transition-colors"
          >
            Start Chat on WhatsApp
          </button>
        </div>
      )}

      {/* Main Button */}
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 group"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle size={28} className="group-hover:animate-bounce" />
        </button>

        {/* Notification Badge */}
        <div className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold animate-pulse">
          1
        </div>

        {/* Ripple Effect */}
        <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20"></div>
      </div>
    </div>
  )
}
