// film-preview.tsx
"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { Heart, MessageCircle } from "lucide-react";

const posts = [
  {
    id: 1,
    src: "/posts/cu4c6w4v.jpg", // download and rename image locally
    alt: "Wedding teaser bride",
    likes: 320,
    comments: 45,
  },
  {
    id: 2,
    src: "/posts/djhrujztnch.jpg",
    alt: "Couple goals wedding teaser",
    likes: 410,
    comments: 68,
  },
];

export default function FilmPreview() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-white text-gray-900 px-6 py-12">
      <h1 className="text-center text-4xl font-bold mb-12 tracking-wide">FILM PREVIEW</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <motion.div
            key={post.id}
            className="relative overflow-hidden rounded-2xl shadow-lg group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            onMouseEnter={() => setHoveredId(post.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <Image
              src={post.src}
              alt={post.alt}
              width={600}
              height={800}
              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
            />
            <div
              className={`absolute inset-0 bg-white/60 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition ease-in-out duration-500`}
            >
              <div className="flex space-x-6 text-gray-900">
                <div className="flex items-center space-x-2 text-xl">
                  <Heart />
                  <span>{post.likes}</span>
                </div>
                <div className="flex items-center space-x-2 text-xl">
                  <MessageCircle />
                  <span>{post.comments}</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
