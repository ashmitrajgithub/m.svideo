"use client"
import type React from "react"
import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import {
  X,
  Eye,
  Calendar,
  MapPin,
  Play,
  ArrowLeft,
  Grid3X3,
  ChevronLeft,
  ZoomIn,
  ZoomOut,
  Maximize,
  Camera,
  ChevronDown,
  Loader2,
  Video,
  Clock,
} from "lucide-react"

export default function Memories() {
  const [selectedImage, setSelectedImage] = useState<any>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showMore, setShowMore] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [showRelatedImages, setShowRelatedImages] = useState(false)
  const [relatedImageIndex, setRelatedImageIndex] = useState(0)
  const [isZoomed, setIsZoomed] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)
  const imageRef = useRef<HTMLImageElement>(null)

  const categories = [
    { id: "all", name: "All Work", count: 18, icon: Grid3X3 },
    { id: "weddings", name: "Weddings", count: 6, icon: Eye },
    { id: "portraits", name: "Portraits", count: 6, icon: Camera },
    { id: "events", name: "Corporate Events", count: 6, icon: Video },
  ]

  const memories = [
    {
      id: 1,
      src: "https://res.cloudinary.com/dwmkm9k7f/image/upload/v1752261129/memo10_va49r7.jpg",
      title: "Sarah & Michael's Wedding",
      description:
        "An intimate ceremony captured in Central Park during golden hour, showcasing natural moments and genuine emotions.",
      category: "weddings",
      type: "photo",
      date: "2024-06-15",
      location: "Central Park, NYC",
      client: "Sarah & Michael Johnson",
      equipment: {
        camera: "Canon EOS R5",
        lens: "85mm f/1.4",
        settings: "f/2.8, 1/250s, ISO 400",
      },
      tags: ["golden hour", "intimate", "natural", "romantic"],
      relatedImages: [
        {
          id: "1a",
          src: "https://res.cloudinary.com/dwmkm9k7f/image/upload/v1752261129/memo12_obj18h.jpg",
          title: "Bridal Preparation",
          description: "Getting ready moments with natural light and emotional anticipation",
          time: "10:00 AM",
          equipment: { lens: "50mm f/1.2", settings: "f/1.8, 1/125s, ISO 800" },
        },
        {
          id: "1b",
          src: "https://res.cloudinary.com/dwmkm9k7f/image/upload/v1752261129/memo13_ucmm0k.jpg",
          title: "Exchange of Vows",
          description: "The emotional moment of saying 'I do' surrounded by loved ones",
          time: "4:30 PM",
          equipment: { lens: "70-200mm f/2.8", settings: "f/2.8, 1/250s, ISO 400" },
        },
        {
          id: "1c",
          src: "https://res.cloudinary.com/dwmkm9k7f/image/upload/v1752261129/memo21_itabwh.jpg",
          title: "Reception Celebration",
          description: "Dancing and celebration with family and friends under string lights",
          time: "8:00 PM",
          equipment: { lens: "24-70mm f/2.8", settings: "f/2.8, 1/60s, ISO 1600" },
        },
        {
          id: "1d",
          src: "https://res.cloudinary.com/dwmkm9k7f/image/upload/v1752261131/memo22_fbjlgd.jpg",
          title: "Couple Portraits",
          description: "Romantic portraits in the golden hour light with natural bokeh",
          time: "6:00 PM",
          equipment: { lens: "85mm f/1.4", settings: "f/1.8, 1/200s, ISO 200" },
        },
        {
          id: "1e",
          src: "https://res.cloudinary.com/dwmkm9k7f/image/upload/v1752261131/memo23_tzvfpr.jpg",
          title: "Wedding Details",
          description: "Beautiful details of rings, flowers, and decor with macro precision",
          time: "2:00 PM",
          equipment: { lens: "100mm Macro", settings: "f/5.6, 1/125s, ISO 400" },
        },
      ],
    },
    {
      id: 2,
      src: "https://res.cloudinary.com/dwmkm9k7f/image/upload/v1752261131/memo24_w2uudg.jpg",
      title: "Executive Portrait Session",
      description: "Professional corporate headshots with clean lighting and modern aesthetics for leadership team.",
      category: "portraits",
      type: "photo",
      date: "2024-06-10",
      location: "Manhattan Studio",
      client: "TechCorp Industries",
      equipment: {
        camera: "Sony A7R V",
        lens: "85mm f/1.8",
        settings: "f/5.6, 1/160s, ISO 200",
      },
      tags: ["corporate", "professional", "studio", "executive"],
      relatedImages: [
        {
          id: "2a",
          src: "https://res.cloudinary.com/dwmkm9k7f/image/upload/v1752261131/memo30_yj1sqk.jpg",
          title: "CEO Portrait",
          description: "Professional headshot with dramatic lighting and confident pose",
          time: "10:00 AM",
          equipment: { lens: "85mm f/1.8", settings: "f/4.0, 1/160s, ISO 200" },
        },
        {
          id: "2b",
          src: "https://res.cloudinary.com/dwmkm9k7f/image/upload/v1752261131/memo31_b3czs9.jpg",
          title: "Team Portrait",
          description: "Group portrait of the executive team in modern office setting",
          time: "11:30 AM",
          equipment: { lens: "24-70mm f/2.8", settings: "f/8.0, 1/125s, ISO 400" },
        },
        {
          id: "2c",
          src: "https://res.cloudinary.com/dwmkm9k7f/image/upload/v1752261132/memo40_sgapo1.jpg",
          title: "Environmental Portrait",
          description: "Executive in their office environment showcasing leadership",
          time: "2:00 PM",
          equipment: { lens: "35mm f/1.4", settings: "f/2.8, 1/100s, ISO 800" },
        },
      ],
    },
    {
      id: 3,
      src: "https://res.cloudinary.com/dwmkm9k7f/image/upload/v1752261132/memo41_fgekmo.jpg",
      title: "Annual Corporate Gala",
      description: "Comprehensive event coverage including keynote presentations and networking moments.",
      category: "events",
      type: "video",
      date: "2024-05-28",
      location: "Grand Ballroom, NYC",
      duration: "4:32",
      client: "Fortune 500 Company",
      equipment: {
        camera: "Canon EOS R6 Mark II",
        lens: "24-105mm f/4",
        settings: "f/4.0, 1/60s, ISO 1600",
      },
      tags: ["corporate", "gala", "networking", "presentations"],
      relatedImages: [
        {
          id: "3a",
          src: "https://res.cloudinary.com/dwmkm9k7f/image/upload/v1752261132/memo42_iru12a.jpg",
          title: "Event Setup",
          description: "Beautiful ballroom setup before guests arrive with elegant lighting",
          time: "5:00 PM",
          equipment: { lens: "16-35mm f/2.8", settings: "f/8.0, 1/60s, ISO 400" },
        },
        {
          id: "3b",
          src: "https://res.cloudinary.com/dwmkm9k7f/image/upload/v1752261132/memo50_agem4b.jpg",
          title: "Keynote Presentation",
          description: "CEO delivering the opening keynote address to engaged audience",
          time: "7:30 PM",
          equipment: { lens: "70-200mm f/2.8", settings: "f/2.8, 1/125s, ISO 1600" },
        },
        {
          id: "3c",
          src: "https://res.cloudinary.com/dwmkm9k7f/image/upload/v1752261132/memo52_aewgen.jpg",
          title: "Awards Ceremony",
          description: "Recognition of outstanding achievements with emotional moments",
          time: "9:00 PM",
          equipment: { lens: "85mm f/1.4", settings: "f/2.0, 1/100s, ISO 1600" },
        },
        {
          id: "3d",
          src: "https://res.cloudinary.com/dwmkm9k7f/image/upload/v1752261132/memo53_ky2jho.jpg",
          title: "Networking Session",
          description: "Guests connecting and celebrating together in elegant atmosphere",
          time: "10:00 PM",
          equipment: { lens: "35mm f/1.4", settings: "f/2.0, 1/60s, ISO 2000" },
        },
      ],
    },
    {
      id: 4,
      src: "https://res.cloudinary.com/dwmkm9k7f/image/upload/v1752261132/memo60_zxlrev.jpg",
      title: "Oceanside Wedding",
      description: "Romantic beachside ceremony with natural lighting and candid moments.",
      category: "weddings",
      type: "video",
      date: "2024-06-01",
      location: "Hamptons, NY",
      duration: "6:45",
      client: "Emma & David Wilson",
      equipment: {
        camera: "Sony FX3",
        lens: "24-70mm f/2.8",
        settings: "f/2.8, 1/50s, ISO 800",
      },
      tags: ["beach", "sunset", "romantic", "natural"],
      relatedImages: [
        {
          id: "4a",
          src: "https://res.cloudinary.com/dwmkm9k7f/image/upload/v1752261133/memo61_dqcizs.jpg",
          title: "Beach Ceremony",
          description: "Ceremony setup on the pristine beach with ocean backdrop",
          time: "5:00 PM",
          equipment: { lens: "16-35mm f/2.8", settings: "f/8.0, 1/250s, ISO 200" },
        },
        {
          id: "4b",
          src: "https://res.cloudinary.com/dwmkm9k7f/image/upload/v1752261133/memo62_rj4z34.jpg",
          title: "Sunset Portraits",
          description: "Romantic couple portraits during golden hour with ocean waves",
          time: "7:00 PM",
          equipment: { lens: "85mm f/1.4", settings: "f/1.8, 1/200s, ISO 400" },
        },
        {
          id: "4c",
          src: "https://res.cloudinary.com/dwmkm9k7f/image/upload/v1752261133/memo63_ksveii.jpg",
          title: "Beach Reception",
          description: "Celebration under the stars by the ocean with string lights",
          time: "8:30 PM",
          equipment: { lens: "35mm f/1.4", settings: "f/2.0, 1/60s, ISO 1600" },
        },
      ],
    },
    {
      id: 5,
      src: "https://res.cloudinary.com/dwmkm9k7f/image/upload/v1752261133/memo70_xiofna.jpg",
      title: "Editorial Portrait Session",
      description: "Creative portrait work with professional lighting and contemporary styling.",
      category: "portraits",
      type: "photo",
      date: "2024-05-20",
      location: "Brooklyn Studio",
      client: "Fashion Magazine",
      equipment: {
        camera: "Fujifilm GFX 100S",
        lens: "110mm f/2",
        settings: "f/2.8, 1/125s, ISO 100",
      },
      tags: ["fashion", "editorial", "creative", "studio"],
      relatedImages: [
        {
          id: "5a",
          src: "https://res.cloudinary.com/dwmkm9k7f/image/upload/v1752261129/memo71_bauf0t.jpg",
          title: "Studio Setup",
          description: "Behind the scenes of the fashion shoot with professional lighting",
          time: "10:00 AM",
          equipment: { lens: "35mm f/1.4", settings: "f/4.0, 1/60s, ISO 400" },
        },
        {
          id: "5b",
          src: "https://res.cloudinary.com/dwmkm9k7f/image/upload/v1752261130/memo72_frtyiy.jpg",
          title: "Creative Lighting",
          description: "Dramatic lighting techniques in action with model preparation",
          time: "11:30 AM",
          equipment: { lens: "85mm f/1.4", settings: "f/2.0, 1/125s, ISO 200" },
        },
        {
          id: "5c",
          src: "https://res.cloudinary.com/dwmkm9k7f/image/upload/v1752261130/memo74_xizfav.jpg",
          title: "Final Portraits",
          description: "The stunning final portrait results with perfect styling",
          time: "2:00 PM",
          equipment: { lens: "110mm f/2", settings: "f/2.8, 1/125s, ISO 100" },
        },
      ],
    },
    {
      id: 6,
      src: "https://res.cloudinary.com/dwmkm9k7f/image/upload/v1752261129/memo10_va49r7.jpg",
      title: "Tech Product Launch",
      description: "Product reveal event with comprehensive coverage of presentations and demonstrations.",
      category: "events",
      type: "photo",
      date: "2024-06-08",
      location: "SoHo Gallery, NYC",
      client: "Tech Startup Inc.",
      equipment: {
        camera: "Nikon Z9",
        lens: "24-120mm f/4",
        settings: "f/4.0, 1/125s, ISO 800",
      },
      tags: ["tech", "product", "launch", "innovation"],
      relatedImages: [
        {
          id: "6a",
          src: "https://res.cloudinary.com/dwmkm9k7f/image/upload/v1752261129/memo12_obj18h.jpg",
          title: "Product Demonstration",
          description: "Live demonstration of the new technology with audience engagement",
          time: "7:00 PM",
          equipment: { lens: "70-200mm f/2.8", settings: "f/2.8, 1/125s, ISO 1200" },
        },
        {
          id: "6b",
          src: "https://res.cloudinary.com/dwmkm9k7f/image/upload/v1752261129/memo13_ucmm0k.jpg",
          title: "Audience Engagement",
          description: "Capturing the audience's excitement and reactions to the reveal",
          time: "7:30 PM",
          equipment: { lens: "35mm f/1.4", settings: "f/2.0, 1/100s, ISO 1600" },
        },
      ],
    },
    {
      id: 7,
      src: "https://res.cloudinary.com/dwmkm9k7f/image/upload/v1752261129/memo21_itabwh.jpg",
      title: "Garden Wedding Ceremony",
      description: "Elegant garden setting with natural elements and soft lighting throughout the day.",
      category: "weddings",
      type: "photo",
      date: "2024-05-15",
      location: "Long Island Estate",
      client: "Jessica & Robert Chen",
      equipment: {
        camera: "Canon EOS R5",
        lens: "50mm f/1.2",
        settings: "f/2.0, 1/200s, ISO 400",
      },
      tags: ["garden", "elegant", "natural", "estate"],
      relatedImages: [
        {
          id: "7a",
          src: "https://res.cloudinary.com/dwmkm9k7f/image/upload/v1752261131/memo22_fbjlgd.jpg",
          title: "Garden Ceremony Setup",
          description: "Beautiful floral arrangements in the garden with natural lighting",
          time: "3:00 PM",
          equipment: { lens: "24-70mm f/2.8", settings: "f/5.6, 1/125s, ISO 200" },
        },
        {
          id: "7b",
          src: "https://res.cloudinary.com/dwmkm9k7f/image/upload/v1752261131/memo23_tzvfpr.jpg",
          title: "Garden Vows",
          description: "Intimate vow exchange surrounded by nature and loved ones",
          time: "4:30 PM",
          equipment: { lens: "85mm f/1.4", settings: "f/2.0, 1/250s, ISO 400" },
        },
      ],
    },
    {
      id: 8,
      src: "https://res.cloudinary.com/dwmkm9k7f/image/upload/v1752261131/memo24_w2uudg.jpg",
      title: "Multi-Generation Family",
      description: "Family portrait session capturing connections across generations in natural outdoor setting.",
      category: "portraits",
      type: "photo",
      date: "2024-06-03",
      location: "Prospect Park, Brooklyn",
      client: "The Anderson Family",
      equipment: {
        camera: "Canon EOS R6",
        lens: "70-200mm f/2.8",
        settings: "f/4.0, 1/200s, ISO 400",
      },
      tags: ["family", "generations", "outdoor", "natural"],
      relatedImages: [
        {
          id: "8a",
          src: "https://res.cloudinary.com/dwmkm9k7f/image/upload/v1752261131/memo30_yj1sqk.jpg",
          title: "Grandparents Portrait",
          description: "Beautiful portrait of the grandparents with warm natural light",
          time: "10:00 AM",
          equipment: { lens: "85mm f/1.4", settings: "f/2.8, 1/160s, ISO 200" },
        },
        {
          id: "8b",
          src: "https://res.cloudinary.com/dwmkm9k7f/image/upload/v1752261131/memo31_b3czs9.jpg",
          title: "Children Playing",
          description: "Candid moments of children playing together in the park",
          time: "10:30 AM",
          equipment: { lens: "35mm f/1.4", settings: "f/2.0, 1/250s, ISO 400" },
        },
        {
          id: "8c",
          src: "https://res.cloudinary.com/dwmkm9k7f/image/upload/v1752261132/memo40_sgapo1.jpg",
          title: "Full Family Group",
          description: "Complete family portrait with all generations together",
          time: "11:00 AM",
          equipment: { lens: "24-70mm f/2.8", settings: "f/5.6, 1/125s, ISO 200" },
        },
      ],
    },
    {
      id: 9,
      src: "https://res.cloudinary.com/dwmkm9k7f/image/upload/v1752261132/memo41_fgekmo.jpg",
      title: "Charity Fundraising Gala",
      description: "Elegant fundraising event with comprehensive coverage of speeches and presentations.",
      category: "events",
      type: "video",
      date: "2024-05-25",
      location: "Metropolitan Museum",
      duration: "5:18",
      client: "Children's Foundation",
      equipment: {
        camera: "Sony A7S III",
        lens: "24-105mm f/4",
        settings: "f/4.0, 1/50s, ISO 1600",
      },
      tags: ["charity", "gala", "fundraising", "elegant"],
      relatedImages: [
        {
          id: "9a",
          src: "https://res.cloudinary.com/dwmkm9k7f/image/upload/v1752261132/memo42_iru12a.jpg",
          title: "Keynote Speech",
          description: "Inspiring speech about the charity's mission and impact",
          time: "7:00 PM",
          equipment: { lens: "70-200mm f/2.8", settings: "f/2.8, 1/100s, ISO 1600" },
        },
        {
          id: "9b",
          src: "https://res.cloudinary.com/dwmkm9k7f/image/upload/v1752261132/memo50_agem4b.jpg",
          title: "Silent Auction",
          description: "Guests participating in the fundraising auction with enthusiasm",
          time: "8:30 PM",
          equipment: { lens: "35mm f/1.4", settings: "f/2.0, 1/60s, ISO 2000" },
        },
      ],
    },
    {
      id: 10,
      src: "https://res.cloudinary.com/dwmkm9k7f/image/upload/v1752261132/memo52_aewgen.jpg",
      title: "Urban Rooftop Wedding",
      description: "City wedding with skyline backdrop, focusing on intimate moments and urban elegance.",
      category: "weddings",
      type: "photo",
      date: "2024-06-12",
      location: "Brooklyn Heights",
      client: "Alex & Maria Rodriguez",
      equipment: {
        camera: "Sony A7R V",
        lens: "35mm f/1.4",
        settings: "f/2.0, 1/160s, ISO 800",
      },
      tags: ["urban", "rooftop", "skyline", "intimate"],
      relatedImages: [
        {
          id: "10a",
          src: "https://res.cloudinary.com/dwmkm9k7f/image/upload/v1752261132/memo53_ky2jho.jpg",
          title: "Rooftop Setup",
          description: "Urban ceremony setup with city views and elegant decorations",
          time: "4:00 PM",
          equipment: { lens: "16-35mm f/2.8", settings: "f/8.0, 1/125s, ISO 200" },
        },
        {
          id: "10b",
          src: "https://res.cloudinary.com/dwmkm9k7f/image/upload/v1752261132/memo60_zxlrev.jpg",
          title: "Skyline Portraits",
          description: "Couple portraits with Manhattan skyline during blue hour",
          time: "7:00 PM",
          equipment: { lens: "85mm f/1.4", settings: "f/1.8, 1/100s, ISO 1600" },
        },
      ],
    },
    {
      id: 11,
      src: "https://res.cloudinary.com/dwmkm9k7f/image/upload/v1752261133/memo61_dqcizs.jpg",
      title: "Maternity Portrait Session",
      description: "Expecting mother portraits with soft natural lighting and elegant poses.",
      category: "portraits",
      type: "photo",
      date: "2024-05-30",
      location: "Central Park",
      client: "Jennifer & Mark Thompson",
      equipment: {
        camera: "Canon EOS R5",
        lens: "85mm f/1.4",
        settings: "f/2.0, 1/200s, ISO 400",
      },
      tags: ["maternity", "expecting", "natural", "elegant"],
      relatedImages: [
        {
          id: "11a",
          src: "https://res.cloudinary.com/dwmkm9k7f/image/upload/v1752261133/memo62_rj4z34.jpg",
          title: "Outdoor Maternity",
          description: "Natural outdoor maternity portraits with soft golden light",
          time: "5:00 PM",
          equipment: { lens: "85mm f/1.4", settings: "f/2.0, 1/200s, ISO 400" },
        },
        {
          id: "11b",
          src: "https://res.cloudinary.com/dwmkm9k7f/image/upload/v1752261133/memo63_ksveii.jpg",
          title: "Couple Maternity",
          description: "Expecting couple portraits together in beautiful park setting",
          time: "5:30 PM",
          equipment: { lens: "50mm f/1.2", settings: "f/1.8, 1/160s, ISO 200" },
        },
      ],
    },
    {
      id: 12,
      src: "https://res.cloudinary.com/dwmkm9k7f/image/upload/v1752261133/memo70_xiofna.jpg",
      title: "Industry Conference",
      description: "Professional conference coverage including keynote presentations and networking sessions.",
      category: "events",
      type: "video",
      date: "2024-06-20",
      location: "Javits Center",
      duration: "7:22",
      client: "Tech Industry Association",
      equipment: {
        camera: "Canon EOS C70",
        lens: "24-105mm f/4",
        settings: "f/4.0, 1/50s, ISO 1200",
      },
      tags: ["conference", "industry", "networking", "professional"],
      relatedImages: [
        {
          id: "12a",
          src: "https://res.cloudinary.com/dwmkm9k7f/image/upload/v1752261129/memo71_bauf0t.jpg",
          title: "Keynote Speaker",
          description: "Industry leader delivering keynote presentation to engaged audience",
          time: "9:00 AM",
          equipment: { lens: "70-200mm f/2.8", settings: "f/2.8, 1/125s, ISO 1200" },
        },
        {
          id: "12b",
          src: "https://res.cloudinary.com/dwmkm9k7f/image/upload/v1752261130/memo72_frtyiy.jpg",
          title: "Panel Discussion",
          description: "Expert panel discussing industry trends and innovations",
          time: "2:00 PM",
          equipment: { lens: "24-70mm f/2.8", settings: "f/4.0, 1/100s, ISO 800" },
        },
      ],
    },
    {
      id: 13,
      src: "https://res.cloudinary.com/dwmkm9k7f/image/upload/v1752261130/memo74_xizfav.jpg",
      title: "Brooklyn Bridge Engagement",
      description: "Romantic engagement session with iconic NYC backdrop and natural couple interactions.",
      category: "weddings",
      type: "photo",
      date: "2024-04-15",
      location: "Brooklyn Bridge, NYC",
      client: "Lisa & James Park",
      equipment: {
        camera: "Nikon Z7 II",
        lens: "50mm f/1.8",
        settings: "f/2.8, 1/200s, ISO 200",
      },
      tags: ["engagement", "brooklyn bridge", "romantic", "iconic"],
      relatedImages: [
        {
          id: "13a",
          src: "https://res.cloudinary.com/dwmkm9k7f/image/upload/v1752261129/memo10_va49r7.jpg",
          title: "Bridge Portraits",
          description: "Romantic portraits on the iconic bridge with city backdrop",
          time: "6:00 PM",
          equipment: { lens: "85mm f/1.8", settings: "f/2.0, 1/250s, ISO 200" },
        },
        {
          id: "13b",
          src: "https://res.cloudinary.com/dwmkm9k7f/image/upload/v1752261129/memo12_obj18h.jpg",
          title: "City Views",
          description: "Engagement photos with city backdrop during golden hour",
          time: "6:30 PM",
          equipment: { lens: "35mm f/1.4", settings: "f/2.0, 1/160s, ISO 400" },
        },
      ],
    },
    {
      id: 14,
      src: "https://res.cloudinary.com/dwmkm9k7f/image/upload/v1752261129/memo13_ucmm0k.jpg",
      title: "Executive Team Portraits",
      description: "Professional business portraits with consistent lighting and modern corporate aesthetic.",
      category: "portraits",
      type: "photo",
      date: "2024-05-18",
      location: "Financial District",
      client: "Financial Services Corp",
      equipment: {
        camera: "Sony A7R V",
        lens: "85mm f/1.8",
        settings: "f/4.0, 1/160s, ISO 200",
      },
      tags: ["corporate", "headshots", "professional", "business"],
      relatedImages: [
        {
          id: "14a",
          src: "https://res.cloudinary.com/dwmkm9k7f/image/upload/v1752261129/memo21_itabwh.jpg",
          title: "Team Portrait",
          description: "Professional group portrait of the executive team in modern office",
          time: "2:00 PM",
          equipment: { lens: "24-70mm f/2.8", settings: "f/8.0, 1/125s, ISO 400" },
        },
      ],
    },
    {
      id: 15,
      src: "https://res.cloudinary.com/dwmkm9k7f/image/upload/v1752261131/memo22_fbjlgd.jpg",
      title: "Industry Awards Ceremony",
      description: "Annual awards event with comprehensive coverage of presentations and celebrations.",
      category: "events",
      type: "video",
      date: "2024-06-05",
      location: "Lincoln Center",
      duration: "8:15",
      client: "Industry Excellence Awards",
      equipment: {
        camera: "Sony FX6",
        lens: "24-70mm f/2.8",
        settings: "f/2.8, 1/50s, ISO 1600",
      },
      tags: ["awards", "ceremony", "celebration", "industry"],
      relatedImages: [
        {
          id: "15a",
          src: "https://res.cloudinary.com/dwmkm9k7f/image/upload/v1752261131/memo23_tzvfpr.jpg",
          title: "Award Winner",
          description: "Emotional moment of receiving the award with genuine reactions",
          time: "8:00 PM",
          equipment: { lens: "85mm f/1.4", settings: "f/2.0, 1/100s, ISO 1600" },
        },
        {
          id: "15b",
          src: "https://res.cloudinary.com/dwmkm9k7f/image/upload/v1752261131/memo24_w2uudg.jpg",
          title: "Stage Presentation",
          description: "Professional stage setup and presentation with dramatic lighting",
          time: "7:30 PM",
          equipment: { lens: "70-200mm f/2.8", settings: "f/2.8, 1/125s, ISO 1200" },
        },
      ],
    },
    {
      id: 16,
      src: "https://res.cloudinary.com/dwmkm9k7f/image/upload/v1752261131/memo30_yj1sqk.jpg",
      title: "Mountain Wedding",
      description: "Destination wedding in Colorado with natural mountain backdrop and intimate ceremony moments.",
      category: "weddings",
      type: "photo",
      date: "2024-05-22",
      location: "Aspen, Colorado",
      client: "Rachel & Thomas Kim",
      equipment: {
        camera: "Canon EOS R5",
        lens: "24-70mm f/2.8",
        settings: "f/5.6, 1/250s, ISO 200",
      },
      tags: ["destination", "mountain", "colorado", "natural"],
      relatedImages: [
        {
          id: "16a",
          src: "https://res.cloudinary.com/dwmkm9k7f/image/upload/v1752261131/memo31_b3czs9.jpg",
          title: "Mountain Ceremony",
          description: "Ceremony with stunning mountain backdrop and natural beauty",
          time: "4:00 PM",
          equipment: { lens: "16-35mm f/2.8", settings: "f/8.0, 1/250s, ISO 100" },
        },
        {
          id: "16b",
          src: "https://res.cloudinary.com/dwmkm9k7f/image/upload/v1752261132/memo40_sgapo1.jpg",
          title: "Mountain Portraits",
          description: "Couple portraits in the mountain landscape during golden hour",
          time: "6:00 PM",
          equipment: { lens: "85mm f/1.4", settings: "f/2.0, 1/200s, ISO 400" },
        },
      ],
    },
    {
      id: 17,
      src: "https://res.cloudinary.com/dwmkm9k7f/image/upload/v1752261132/memo41_fgekmo.jpg",
      title: "Creative Professional Portraits",
      description: "Portrait series showcasing creative professionals in their work environments.",
      category: "portraits",
      type: "photo",
      date: "2024-06-18",
      location: "Art District",
      client: "Creative Collective",
      equipment: {
        camera: "Fujifilm X-T5",
        lens: "56mm f/1.2",
        settings: "f/2.0, 1/125s, ISO 400",
      },
      tags: ["creative", "artist", "professional", "environmental"],
      relatedImages: [
        {
          id: "17a",
          src: "https://res.cloudinary.com/dwmkm9k7f/image/upload/v1752261132/memo42_iru12a.jpg",
          title: "Artist in Studio",
          description: "Creative professional in their workspace with natural lighting",
          time: "2:00 PM",
          equipment: { lens: "35mm f/1.4", settings: "f/2.8, 1/100s, ISO 800" },
        },
      ],
    },
    {
      id: 18,
      src: "https://res.cloudinary.com/dwmkm9k7f/image/upload/v1752261132/memo50_agem4b.jpg",
      title: "Fashion Week Coverage",
      description: "Behind-the-scenes and runway coverage of New York Fashion Week events.",
      category: "events",
      type: "video",
      date: "2024-06-25",
      location: "Fashion Week Venues",
      duration: "9:33",
      client: "Fashion Week NYC",
      equipment: {
        camera: "Sony A7S III",
        lens: "70-200mm f/2.8",
        settings: "f/2.8, 1/50s, ISO 3200",
      },
      tags: ["fashion", "runway", "backstage", "models"],
      relatedImages: [
        {
          id: "18a",
          src: "https://res.cloudinary.com/dwmkm9k7f/image/upload/v1752261132/memo52_aewgen.jpg",
          title: "Runway Show",
          description: "Models showcasing the latest collections with dramatic lighting",
          time: "8:00 PM",
          equipment: { lens: "70-200mm f/2.8", settings: "f/2.8, 1/125s, ISO 3200" },
        },
        {
          id: "18b",
          src: "https://res.cloudinary.com/dwmkm9k7f/image/upload/v1752261132/memo53_ky2jho.jpg",
          title: "Backstage Moments",
          description: "Behind-the-scenes preparation and energy before the show",
          time: "7:00 PM",
          equipment: { lens: "35mm f/1.4", settings: "f/2.0, 1/60s, ISO 1600" },
        },
      ],
    },
  ]

  // Filter memories
  const filteredMemories = memories
    .filter((memory) => {
      const matchesCategory = selectedCategory === "all" || memory.category === selectedCategory
      return matchesCategory
    })
    .sort((a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime()
    })

  const displayedMemories = showMore ? filteredMemories : filteredMemories.slice(0, 12)

  const openLightbox = (memory: any, index: number) => {
    setIsLoading(true)
    setTimeout(() => {
      setSelectedImage(memory)
      setCurrentIndex(index)
      setShowRelatedImages(false)
      setRelatedImageIndex(0)
      setIsLoading(false)
    }, 300)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
    setShowRelatedImages(false)
    setRelatedImageIndex(0)
    setIsZoomed(false)
    setIsFullscreen(false)
  }

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % displayedMemories.length
    setCurrentIndex(nextIndex)
    setSelectedImage(displayedMemories[nextIndex])
    setShowRelatedImages(false)
    setRelatedImageIndex(0)
    setIsZoomed(false)
  }

  const prevImage = () => {
    const prevIndex = (currentIndex - 1 + displayedMemories.length) % displayedMemories.length
    setCurrentIndex(prevIndex)
    setSelectedImage(displayedMemories[prevIndex])
    setShowRelatedImages(false)
    setRelatedImageIndex(0)
    setIsZoomed(false)
  }

  const showRelatedWork = () => {
    setShowRelatedImages(true)
    setRelatedImageIndex(0)
    setIsZoomed(false)
  }

  const nextRelatedImage = () => {
    if (selectedImage?.relatedImages) {
      const nextIndex = (relatedImageIndex + 1) % selectedImage.relatedImages.length
      setRelatedImageIndex(nextIndex)
    }
  }

  const prevRelatedImage = () => {
    if (selectedImage?.relatedImages) {
      const prevIndex =
        (relatedImageIndex - 1 + selectedImage.relatedImages.length) % selectedImage.relatedImages.length
      setRelatedImageIndex(prevIndex)
    }
  }

  const backToMainImage = () => {
    setShowRelatedImages(false)
    setRelatedImageIndex(0)
    setIsZoomed(false)
  }

  const toggleZoom = () => {
    setIsZoomed(!isZoomed)
  }

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen)
  }

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    if (isLeftSwipe) {
      if (showRelatedImages) {
        nextRelatedImage()
      } else {
        nextImage()
      }
    }
    if (isRightSwipe) {
      if (showRelatedImages) {
        prevRelatedImage()
      } else {
        prevImage()
      }
    }
  }

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage) {
        if (e.key === "Escape") {
          if (showRelatedImages) {
            backToMainImage()
          } else {
            closeLightbox()
          }
        }
        if (e.key === "ArrowRight") {
          if (showRelatedImages) {
            nextRelatedImage()
          } else {
            nextImage()
          }
        }
        if (e.key === "ArrowLeft") {
          if (showRelatedImages) {
            prevRelatedImage()
          } else {
            prevImage()
          }
        }
        if (e.key === "z" || e.key === "Z") {
          toggleZoom()
        }
        if (e.key === "f" || e.key === "F") {
          toggleFullscreen()
        }
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [selectedImage, currentIndex, showRelatedImages, relatedImageIndex])

  return (
    <>
      <section className="py-6 sm:py-8 md:py-12 lg:py-16 xl:py-20 bg-black overflow-hidden">
        <div className="container mx-auto px-2 sm:px-3 md:px-4 lg:px-6 xl:px-8">
          {/* Mobile-Optimized Header */}
          <div className="text-center mb-6 sm:mb-8 md:mb-12 lg:mb-16">
            <div className="inline-flex items-center mb-2 sm:mb-3 md:mb-4 lg:mb-6">
              <div className="w-4 sm:w-6 md:w-8 lg:w-12 h-px bg-gradient-to-r from-transparent to-gray-500 mr-1.5 sm:mr-2 md:mr-3 lg:mr-4" />
              <span className="text-xs sm:text-sm font-medium text-gray-400 uppercase tracking-wider">
                Our Portfolio
              </span>
              <div className="w-4 sm:w-6 md:w-8 lg:w-12 h-px bg-gradient-to-l from-transparent to-gray-500 ml-1.5 sm:ml-2 md:ml-3 lg:ml-4" />
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-7xl font-black mb-6 md:mb-8 leading-tight">
              <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 bg-clip-text text-transparent block mb-1 md:mb-2">
                Award Wining
              </span>
              <span className="bg-gradient-to-r from-red-600 via-red-500 to-red-400 bg-clip-text text-transparent block">
                Projects
              </span>
            </h2>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-300 max-w-sm sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl mx-auto leading-relaxed px-1 sm:px-2 md:px-4">
              Explore our curated collection of professional photography and videography work, featuring award-winning
              projects that showcase our commitment to excellence and artistic vision.
            </p>
          </div>

          {/* Mobile-Optimized Categories */}
          <div className="mb-4 sm:mb-6 md:mb-8 lg:mb-12">
            <div className="flex flex-wrap justify-center gap-1 sm:gap-1.5 md:gap-2 lg:gap-3 px-1 sm:px-2 md:px-4">
              {categories.map((category) => {
                const IconComponent = category.icon
                return (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center gap-1 sm:gap-1.5 md:gap-2 px-2 sm:px-3 md:px-4 lg:px-6 py-1 sm:py-1.5 md:py-2 lg:py-3 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                      selectedCategory === category.id
                        ? "bg-gradient-to-r from-gray-600 to-gray-700 text-white shadow-lg shadow-gray-500/25"
                        : "bg-gray-800/80 backdrop-blur-sm text-gray-300 hover:bg-gray-700 hover:text-white border border-gray-700 hover:border-gray-600"
                    }`}
                  >
                    <IconComponent className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span className="hidden xs:inline sm:hidden md:inline lg:inline">{category.name}</span>
                    <span className="xs:hidden sm:inline md:hidden lg:hidden">{category.name.split(" ")[0]}</span>
                    <span className="ml-0.5 sm:ml-1 text-xs opacity-70 bg-black/20 px-1 sm:px-1.5 md:px-2 py-0.5 rounded-full">
                      {category.count}
                    </span>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Fully Mobile-Responsive Honeycomb Gallery */}
          <div className="relative w-full max-w-7xl mx-auto">
            <style jsx>{`
              .professional-honeycomb {
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 0;
                padding: 15px 0;
                width: 100%;
              }
              .honeycomb-row {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 100%;
                margin-bottom: var(--row-gap);
              }
              .honeycomb-row:nth-child(even) {
                transform: translateX(calc(var(--hex-width) * 0.5 + var(--hex-gap) * 0.5));
              }
              .professional-hexagon {
                --hex-width: 80px;
                --hex-height: 80px;
                --hex-gap: 3px;
                --row-gap: -10px;
                width: var(--hex-width);
                height: var(--hex-height);
                position: relative;
                margin: 0 var(--hex-gap);
                clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
                transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
                cursor: pointer;
                background: linear-gradient(135deg, #1f2937 0%, #111827 100%);
                border: 1px solid rgba(55, 65, 81, 0.5);
                overflow: hidden;
                box-shadow:
                  0 2px 8px rgba(0, 0, 0, 0.3),
                  inset 0 1px 0 rgba(255, 255, 255, 0.1);
              }
              .professional-hexagon:hover {
                transform: scale(1.05) translateY(-2px);
                border-color: rgba(156, 163, 175, 0.8);
                box-shadow:
                  0 8px 20px rgba(156, 163, 175, 0.3),
                  0 3px 10px rgba(0, 0, 0, 0.3),
                  inset 0 1px 0 rgba(255, 255, 255, 0.2);
                z-index: 10;
              }
              .professional-hexagon img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
                filter: brightness(0.9) contrast(1.1) saturate(0.95);
              }
              .professional-hexagon:hover img {
                transform: scale(1.08);
                filter: brightness(1.05) contrast(1.2) saturate(1.1);
              }
              /* Extra Small Mobile (320px-374px) */
              @media (min-width: 320px) and (max-width: 374px) {
                .professional-honeycomb {
                  padding: 10px 0;
                }
                .professional-hexagon {
                  --hex-width: 70px;
                  --hex-height: 70px;
                  --hex-gap: 2px;
                  --row-gap: -8px;
                }
              }
              /* Small Mobile (375px-424px) */
              @media (min-width: 375px) and (max-width: 424px) {
                .professional-honeycomb {
                  padding: 12px 0;
                }
                .professional-hexagon {
                  --hex-width: 80px;
                  --hex-height: 80px;
                  --hex-gap: 3px;
                  --row-gap: -10px;
                }
              }
              /* Medium Mobile (425px-479px) */
              @media (min-width: 425px) and (max-width: 479px) {
                .professional-honeycomb {
                  padding: 15px 0;
                }
                .professional-hexagon {
                  --hex-width: 90px;
                  --hex-height: 90px;
                  --hex-gap: 4px;
                  --row-gap: -12px;
                }
              }
              /* Large Mobile (480px-639px) */
              @media (min-width: 480px) and (max-width: 639px) {
                .professional-honeycomb {
                  padding: 18px 0;
                }
                .professional-hexagon {
                  --hex-width: 100px;
                  --hex-height: 100px;
                  --hex-gap: 5px;
                  --row-gap: -14px;
                }
              }
              /* Small Tablet Portrait (640px-767px) */
              @media (min-width: 640px) and (max-width: 767px) {
                .professional-honeycomb {
                  padding: 20px 0;
                }
                .professional-hexagon {
                  --hex-width: 120px;
                  --hex-height: 120px;
                  --hex-gap: 6px;
                  --row-gap: -16px;
                }
              }
              /* Tablet Portrait (768px-1023px) */
              @media (min-width: 768px) and (max-width: 1023px) {
                .professional-honeycomb {
                  padding: 25px 0;
                }
                .professional-hexagon {
                  --hex-width: 140px;
                  --hex-height: 140px;
                  --hex-gap: 7px;
                  --row-gap: -18px;
                }
              }
              /* Small Desktop/Laptop (1024px-1279px) - INCREASED SIZE */
              @media (min-width: 1024px) and (max-width: 1279px) {
                .professional-honeycomb {
                  padding: 35px 0;
                }
                .professional-hexagon {
                  --hex-width: 200px;
                  --hex-height: 200px;
                  --hex-gap: 10px;
                  --row-gap: -25px;
                }
              }
              /* Medium Desktop (1280px-1535px) - INCREASED SIZE */
              @media (min-width: 1280px) and (max-width: 1535px) {
                .professional-honeycomb {
                  padding: 40px 0;
                }
                .professional-hexagon {
                  --hex-width: 240px;
                  --hex-height: 240px;
                  --hex-gap: 12px;
                  --row-gap: -30px;
                }
              }
              /* Large Desktop (1536px-1919px) - INCREASED SIZE */
              @media (min-width: 1536px) and (max-width: 1919px) {
                .professional-honeycomb {
                  padding: 45px 0;
                }
                .professional-hexagon {
                  --hex-width: 280px;
                  --hex-height: 280px;
                  --hex-gap: 15px;
                  --row-gap: -35px;
                }
              }
              /* Extra Large Desktop (1920px+) - INCREASED SIZE */
              @media (min-width: 1920px) {
                .professional-honeycomb {
                  padding: 50px 0;
                }
                .professional-hexagon {
                  --hex-width: 320px;
                  --hex-height: 320px;
                  --hex-gap: 18px;
                  --row-gap: -40px;
                }
              }
              .professional-hexagon .video-badge {
                position: absolute;
                top: 4px;
                right: 4px;
                z-index: 5;
                background: rgba(0, 0, 0, 0.85);
                backdrop-filter: blur(8px);
                border: 1px solid rgba(255, 255, 255, 0.1);
                border-radius: 12px;
                padding: 2px 4px;
                display: flex;
                align-items: center;
                gap: 2px;
                font-size: 8px;
                font-weight: 600;
                color: white;
                box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
              }
              .professional-hexagon .related-badge {
                position: absolute;
                bottom: 4px;
                right: 4px;
                z-index: 5;
                background: linear-gradient(135deg, #6b7280, #4b5563);
                border-radius: 12px;
                padding: 2px 4px;
                display: flex;
                align-items: center;
                gap: 2px;
                font-size: 8px;
                font-weight: 700;
                color: white;
                box-shadow: 0 2px 8px rgba(107, 114, 128, 0.4);
              }
              /* Desktop Badge Adjustments - INCREASED SIZES */
              @media (min-width: 1024px) {
                .professional-hexagon .video-badge,
                .professional-hexagon .related-badge {
                  top: 8px;
                  right: 8px;
                  bottom: 8px;
                  padding: 6px 10px;
                  font-size: 12px;
                  border-radius: 16px;
                }
              }
              @media (min-width: 1280px) {
                .professional-hexagon .video-badge,
                .professional-hexagon .related-badge {
                  top: 10px;
                  right: 10px;
                  bottom: 10px;
                  padding: 8px 12px;
                  font-size: 14px;
                  border-radius: 18px;
                }
              }
              @media (min-width: 1536px) {
                .professional-hexagon .video-badge,
                .professional-hexagon .related-badge {
                  top: 12px;
                  right: 12px;
                  bottom: 12px;
                  padding: 10px 14px;
                  font-size: 16px;
                  border-radius: 20px;
                }
              }
              @media (min-width: 1920px) {
                .professional-hexagon .video-badge,
                .professional-hexagon .related-badge {
                  top: 14px;
                  right: 14px;
                  bottom: 14px;
                  padding: 12px 16px;
                  font-size: 18px;
                  border-radius: 22px;
                }
              }
              /* Mobile Badge Adjustments */
              @media (min-width: 480px) {
                .professional-hexagon .video-badge,
                .professional-hexagon .related-badge {
                  top: 6px;
                  right: 6px;
                  bottom: 6px;
                  padding: 3px 6px;
                  font-size: 9px;
                  border-radius: 16px;
                }
              }
              @media (min-width: 768px) {
                .professional-hexagon .video-badge,
                .professional-hexagon .related-badge {
                  top: 8px;
                  right: 8px;
                  bottom: 8px;
                  padding: 4px 8px;
                  font-size: 10px;
                  border-radius: 20px;
                }
              }
              /* Hexagon-shaped overlay that matches the clip-path */
              .professional-hexagon .overlay {
                position: absolute;
                inset: 0;
                background: linear-gradient(135deg, rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.9));
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                opacity: 0;
                transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
                backdrop-filter: blur(2px);
                clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
              }
              .professional-hexagon:hover .overlay {
                opacity: 1;
              }
              .professional-hexagon .overlay-icon {
                background: linear-gradient(135deg, #6b7280, #4b5563);
                border-radius: 50%;
                padding: 6px;
                margin-bottom: 6px;
                box-shadow: 0 4px 15px rgba(107, 114, 128, 0.4);
                transform: translateY(8px);
                transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
              }
              .professional-hexagon:hover .overlay-icon {
                transform: translateY(0);
              }
              .professional-hexagon .overlay-content {
                text-align: center;
                color: white;
                transform: translateY(10px);
                transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
              }
              .professional-hexagon:hover .overlay-content {
                transform: translateY(0);
              }
              .professional-hexagon .overlay-title {
                font-size: 8px;
                font-weight: 600;
                margin-bottom: 2px;
                padding: 0 6px;
                line-height: 1.2;
              }
              .professional-hexagon .overlay-location {
                font-size: 7px;
                color: rgba(255, 255, 255, 0.8);
                padding: 0 6px;
                line-height: 1.1;
              }
              /* Desktop Overlay Content Adjustments - INCREASED SIZES */
              @media (min-width: 1024px) {
                .professional-hexagon .overlay-icon {
                  padding: 16px;
                  margin-bottom: 16px;
                }
                .professional-hexagon .overlay-title {
                  font-size: 16px;
                  margin-bottom: 6px;
                  padding: 0 16px;
                }
                .professional-hexagon .overlay-location {
                  font-size: 14px;
                  padding: 0 16px;
                }
              }
              @media (min-width: 1280px) {
                .professional-hexagon .overlay-icon {
                  padding: 20px;
                  margin-bottom: 20px;
                }
                .professional-hexagon .overlay-title {
                  font-size: 18px;
                  margin-bottom: 8px;
                  padding: 0 20px;
                }
                .professional-hexagon .overlay-location {
                  font-size: 16px;
                  padding: 0 20px;
                }
              }
              @media (min-width: 1536px) {
                .professional-hexagon .overlay-icon {
                  padding: 24px;
                  margin-bottom: 24px;
                }
                .professional-hexagon .overlay-title {
                  font-size: 20px;
                  margin-bottom: 10px;
                  padding: 0 24px;
                }
                .professional-hexagon .overlay-location {
                  font-size: 18px;
                  padding: 0 24px;
                }
              }
              @media (min-width: 1920px) {
                .professional-hexagon .overlay-icon {
                  padding: 28px;
                  margin-bottom: 28px;
                }
                .professional-hexagon .overlay-title {
                  font-size: 22px;
                  margin-bottom: 12px;
                  padding: 0 28px;
                }
                .professional-hexagon .overlay-location {
                  font-size: 20px;
                  padding: 0 28px;
                }
              }
              /* Mobile Overlay Content Adjustments */
              @media (min-width: 375px) {
                .professional-hexagon .overlay-icon {
                  padding: 7px;
                  margin-bottom: 7px;
                }
                .professional-hexagon .overlay-title {
                  font-size: 9px;
                  margin-bottom: 3px;
                  padding: 0 8px;
                }
                .professional-hexagon .overlay-location {
                  font-size: 8px;
                  padding: 0 8px;
                }
              }
              @media (min-width: 480px) {
                .professional-hexagon .overlay-icon {
                  padding: 8px;
                  margin-bottom: 8px;
                }
                .professional-hexagon .overlay-title {
                  font-size: 10px;
                  margin-bottom: 3px;
                  padding: 0 10px;
                }
                .professional-hexagon .overlay-location {
                  font-size: 9px;
                  padding: 0 10px;
                }
              }
              @media (min-width: 640px) {
                .professional-hexagon .overlay-icon {
                  padding: 10px;
                  margin-bottom: 10px;
                }
                .professional-hexagon .overlay-title {
                  font-size: 11px;
                  margin-bottom: 4px;
                  padding: 0 12px;
                }
                .professional-hexagon .overlay-location {
                  font-size: 10px;
                  padding: 0 12px;
                }
              }
              @media (min-width: 768px) {
                .professional-hexagon .overlay-icon {
                  padding: 12px;
                  margin-bottom: 12px;
                }
                .professional-hexagon .overlay-title {
                  font-size: 12px;
                  margin-bottom: 4px;
                  padding: 0 12px;
                }
                .professional-hexagon .overlay-location {
                  font-size: 10px;
                  padding: 0 12px;
                }
              }
            `}</style>

            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center z-30 bg-black/50 backdrop-blur-sm rounded-lg">
                <div className="flex items-center gap-2 sm:gap-3 text-white">
                  <Loader2 className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 animate-spin" />
                  <span className="text-xs sm:text-sm md:text-base font-medium">Loading Portfolio...</span>
                </div>
              </div>
            )}

            <div className="professional-honeycomb">
              {/* Generate professional honeycomb rows */}
              {Array.from({ length: Math.ceil(displayedMemories.length / 4.5) }, (_, rowIndex) => {
                const isEvenRow = rowIndex % 2 === 1
                const itemsPerRow = isEvenRow ? 4 : 5
                const startIndex = Math.floor(rowIndex / 2) * 9 + (rowIndex % 2) * 5
                const endIndex = startIndex + itemsPerRow
                const rowMemories = displayedMemories.slice(startIndex, endIndex)

                if (rowMemories.length === 0) return null

                return (
                  <div key={rowIndex} className="honeycomb-row">
                    {rowMemories.map((memory, index) => (
                      <div
                        key={memory.id}
                        className="professional-hexagon group"
                        onClick={() => openLightbox(memory, startIndex + index)}
                      >
                        <img src={memory.src || "/placeholder.svg"} alt={memory.title} loading="lazy" />

                        {/* Video Badge */}
                        
                        {/* Related Images Badge */}
                        
                        {/* Professional Hexagon-Shaped Overlay */}
                       
                      </div>
                    ))}
                  </div>
                )
              })}
            </div>
          </div>

          {/* Mobile-Optimized Load More */}
          {filteredMemories.length > 12 && (
            <div className="text-center mt-6 sm:mt-8 md:mt-12 lg:mt-16 px-1 sm:px-2 md:px-4">
              <Button
                onClick={() => setShowMore(!showMore)}
                className="bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white px-4 sm:px-6 md:px-8 lg:px-12 py-2 sm:py-2.5 md:py-3 lg:py-4 rounded-full font-medium text-xs sm:text-sm md:text-base lg:text-lg transition-all duration-300 shadow-lg shadow-gray-500/25 hover:shadow-gray-500/40 hover:scale-105"
              >
                {showMore ? "Show Less" : `View All ${filteredMemories.length} Projects`}
                <ChevronDown
                  className={`ml-1 sm:ml-2 w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 transition-transform duration-300 ${
                    showMore ? "rotate-180" : ""
                  }`}
                />
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Fully Mobile-Responsive Lightbox */}
      {selectedImage && (
        <div
          className={`fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center transition-all duration-300 ${
            isFullscreen ? "bg-black" : ""
          }`}
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              if (showRelatedImages) {
                backToMainImage()
              } else {
                closeLightbox()
              }
            }
          }}
        >
          {/* Mobile-Optimized Header */}
          <div className="absolute top-0 left-0 right-0 z-20 bg-gradient-to-b from-black/80 to-transparent p-2 sm:p-3 md:p-4 lg:p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1 sm:gap-2 md:gap-3 lg:gap-4">
                {showRelatedImages && (
                  <Button
                    onClick={backToMainImage}
                    variant="ghost"
                    size="sm"
                    className="text-white hover:bg-white/10 p-1 sm:p-1.5 md:p-2 lg:p-3"
                  >
                    <ArrowLeft className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                  </Button>
                )}
                <div className="text-white">
                  <h3 className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-semibold leading-tight">
                    {showRelatedImages ? selectedImage.relatedImages[relatedImageIndex]?.title : selectedImage.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-300 mt-0.5 sm:mt-1">
                    {showRelatedImages
                      ? `${relatedImageIndex + 1} of ${selectedImage.relatedImages.length} related images`
                      : `${currentIndex + 1} of ${displayedMemories.length}`}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-1 sm:gap-2">
                <Button
                  onClick={toggleZoom}
                  variant="ghost"
                  size="sm"
                  className="text-white hover:bg-white/10 p-1 sm:p-1.5 md:p-2 lg:p-3"
                >
                  {isZoomed ? (
                    <ZoomOut className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                  ) : (
                    <ZoomIn className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                  )}
                </Button>
                <Button
                  onClick={toggleFullscreen}
                  variant="ghost"
                  size="sm"
                  className="text-white hover:bg-white/10 p-1 sm:p-1.5 md:p-2 lg:p-3"
                >
                  <Maximize className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                </Button>
                <Button
                  onClick={closeLightbox}
                  variant="ghost"
                  size="sm"
                  className="text-white hover:bg-white/10 p-1 sm:p-1.5 md:p-2 lg:p-3"
                >
                  <X className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                </Button>
              </div>
            </div>
          </div>

          {/* Mobile-Optimized Navigation Buttons */}
          <Button
            onClick={showRelatedImages ? prevRelatedImage : prevImage}
            variant="ghost"
            size="sm"
            className="absolute left-1 sm:left-2 md:left-4 lg:left-6 top-1/2 -translate-y-1/2 z-20 text-white hover:bg-white/10 p-1 sm:p-2 md:p-3 lg:p-4 rounded-full"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
          </Button>

          <Button
            onClick={showRelatedImages ? nextRelatedImage : nextImage}
            variant="ghost"
            size="sm"
            className="absolute right-1 sm:right-2 md:right-4 lg:right-6 top-1/2 -translate-y-1/2 z-20 text-white hover:bg-white/10 p-1 sm:p-2 md:p-3 lg:p-4 rounded-full"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 rotate-180" />
          </Button>

          {/* Mobile-Responsive Main Content */}
          <div className="flex flex-col lg:flex-row w-full h-full max-w-7xl mx-auto">
            {/* Mobile-Optimized Image Container */}
            <div
              className={`flex-1 flex items-center justify-center p-2 sm:p-3 md:p-4 lg:p-6 ${
                isFullscreen ? "p-0" : ""
              }`}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <div className="relative max-w-full max-h-full">
                <img
                  ref={imageRef}
                  src={showRelatedImages ? selectedImage.relatedImages[relatedImageIndex]?.src : selectedImage.src}
                  alt={showRelatedImages ? selectedImage.relatedImages[relatedImageIndex]?.title : selectedImage.title}
                  className={`max-w-full max-h-full object-contain transition-transform duration-300 ${
                    isZoomed ? "scale-150 cursor-move" : "cursor-zoom-in"
                  }`}
                  onClick={toggleZoom}
                />

                {/* Video Play Button for Mobile */}
                {selectedImage.type === "video" && !showRelatedImages && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-black/50 backdrop-blur-sm rounded-full p-3 sm:p-4 md:p-6 lg:p-8">
                      <Play className="w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12 text-white fill-white" />
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Mobile-Responsive Info Panel */}
            {!isFullscreen && (
              <div className="w-full lg:w-80 xl:w-96 bg-gray-900/95 backdrop-blur-sm border-t lg:border-t-0 lg:border-l border-gray-700 p-3 sm:p-4 md:p-6 lg:p-8 overflow-y-auto max-h-[40vh] lg:max-h-full">
                <div className="space-y-3 sm:space-y-4 md:space-y-6">
                  {/* Mobile-Optimized Title and Description */}
                  <div>
                    <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-white mb-1 sm:mb-2 md:mb-3 leading-tight">
                      {showRelatedImages ? selectedImage.relatedImages[relatedImageIndex]?.title : selectedImage.title}
                    </h3>
                    <p className="text-xs sm:text-sm md:text-base text-gray-300 leading-relaxed">
                      {showRelatedImages
                        ? selectedImage.relatedImages[relatedImageIndex]?.description
                        : selectedImage.description}
                    </p>
                  </div>

                  {/* Mobile-Optimized Details */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 md:gap-4">
                    <div className="flex items-center gap-1.5 sm:gap-2 md:gap-3 text-xs sm:text-sm">
                      <Calendar className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400 flex-shrink-0" />
                      <span className="text-gray-300">
                        {showRelatedImages
                          ? selectedImage.relatedImages[relatedImageIndex]?.time || selectedImage.date
                          : selectedImage.date}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 sm:gap-2 md:gap-3 text-xs sm:text-sm">
                      <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400 flex-shrink-0" />
                      <span className="text-gray-300 truncate">{selectedImage.location}</span>
                    </div>
                    {selectedImage.type === "video" && !showRelatedImages && (
                      <div className="flex items-center gap-1.5 sm:gap-2 md:gap-3 text-xs sm:text-sm">
                        <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400 flex-shrink-0" />
                        <span className="text-gray-300">{selectedImage.duration}</span>
                      </div>
                    )}
                  </div>

                  {/* Mobile-Optimized Equipment Info */}
                  <div className="bg-gray-800/50 rounded-lg p-2 sm:p-3 md:p-4">
                    <h4 className="text-xs sm:text-sm font-semibold text-white mb-1 sm:mb-2 md:mb-3">
                      Equipment & Settings
                    </h4>
                    <div className="space-y-1 sm:space-y-1.5 md:space-y-2 text-xs sm:text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Camera:</span>
                        <span className="text-gray-300">
                          {showRelatedImages ? selectedImage.equipment.camera : selectedImage.equipment.camera}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Lens:</span>
                        <span className="text-gray-300">
                          {showRelatedImages
                            ? selectedImage.relatedImages[relatedImageIndex]?.equipment?.lens ||
                              selectedImage.equipment.lens
                            : selectedImage.equipment.lens}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Settings:</span>
                        <span className="text-gray-300 text-right">
                          {showRelatedImages
                            ? selectedImage.relatedImages[relatedImageIndex]?.equipment?.settings ||
                              selectedImage.equipment.settings
                            : selectedImage.equipment.settings}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Mobile-Optimized Related Images Button */}
                  {!showRelatedImages && selectedImage.relatedImages && selectedImage.relatedImages.length > 0 && (
                    <Button
                      onClick={showRelatedWork}
                      className="w-full bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white py-2 sm:py-2.5 md:py-3 rounded-lg font-medium text-xs sm:text-sm md:text-base transition-all duration-300 shadow-lg shadow-gray-500/25"
                    >
                      <Grid3X3 className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                      View {selectedImage.relatedImages.length} Related Images
                    </Button>
                  )}

                  {/* Mobile-Optimized Tags */}
                  {selectedImage.tags && (
                    <div>
                      <h4 className="text-xs sm:text-sm font-semibold text-white mb-1 sm:mb-2 md:mb-3">Tags</h4>
                      <div className="flex flex-wrap gap-1 sm:gap-1.5 md:gap-2">
                        {selectedImage.tags.map((tag: string) => (
                          <span
                            key={tag}
                            className="bg-gray-700 text-gray-300 px-1.5 sm:px-2 md:px-3 py-0.5 sm:py-1 rounded-full text-xs font-medium"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Mobile Touch Indicators */}
          <div className="absolute bottom-2 sm:bottom-3 md:bottom-4 lg:bottom-6 left-1/2 -translate-x-1/2 z-20 lg:hidden">
            <div className="bg-black/50 backdrop-blur-sm rounded-full px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2">
              <p className="text-xs sm:text-sm text-white/80 text-center">
                Swipe left/right to navigate • Tap image to zoom
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
