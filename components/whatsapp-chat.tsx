"use client"

import { X } from "lucide-react"
import { useState } from "react"

// WhatsApp Logo SVG Component
const WhatsAppIcon = ({ size = 28, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488" />
  </svg>
)

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
        <div className="mb-4 bg-white rounded-2xl shadow-2xl border border-gray-100 p-0 max-w-sm animate-fade-in overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-green-500 to-green-600 p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mr-3 border-2 border-white/30">
                  <WhatsAppIcon size={20} className="text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-white text-lg">M.S Video</h4>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-300 rounded-full mr-2 animate-pulse"></div>
                    <p className="text-xs text-green-100">Online now</p>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white hover:bg-white/20 p-2 rounded-full transition-all duration-200"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="p-4 space-y-3 bg-gray-50">
            <div className="flex items-start space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-xs">MS</span>
              </div>
              <div className="bg-white rounded-2xl rounded-tl-md p-3 shadow-sm max-w-[200px]">
                <p className="text-sm text-gray-700">👋 Hi there! Ready to capture your special moments?</p>
                <p className="text-xs text-gray-400 mt-1">Just now</p>
              </div>
            </div>

            <div className="flex items-start space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-xs">MS</span>
              </div>
              <div className="bg-white rounded-2xl rounded-tl-md p-3 shadow-sm max-w-[200px]">
                <p className="text-sm text-gray-700">🎥 Let's discuss your videography needs!</p>
                <p className="text-xs text-gray-400 mt-1">Just now</p>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="p-4 bg-white border-t border-gray-100">
            <button
              onClick={handleWhatsAppClick}
              className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-3 px-4 rounded-xl font-semibold transition-all duration-300 hover:scale-[1.02] hover:shadow-lg flex items-center justify-center space-x-2"
            >
              <WhatsAppIcon size={20} />
              <span>Continue on WhatsApp</span>
            </button>
          </div>
        </div>
      )}

      {/* Main WhatsApp Button */}
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 group relative overflow-hidden"
          aria-label="Chat on WhatsApp"
        >
          {/* Background pulse effect */}
          <div className="absolute inset-0 bg-white/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>

          <WhatsAppIcon size={32} className="relative z-10 group-hover:scale-110 transition-transform duration-300" />
        </button>

        {/* Notification Badge */}
        <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold animate-pulse shadow-lg">
          1
        </div>

        {/* Ripple Effects */}
        <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20"></div>
        <div className="absolute inset-0 bg-green-400 rounded-full animate-ping opacity-10 animation-delay-75"></div>
      </div>

      {/* Floating Text */}
      {!isOpen && (
        <div className="absolute bottom-full right-0 mb-2 bg-gray-800 text-white text-sm px-3 py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          💬 Need help? Chat with us!
          <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
        </div>
      )}

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.3s ease-out forwards;
        }
        
        .animation-delay-75 {
          animation-delay: 75ms;
        }
        
        @keyframes bounce-gentle {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-2px);
          }
        }
        
        .group:hover .group-hover\\:animate-bounce-gentle {
          animation: bounce-gentle 0.6s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}
