"use client"

import { CldImage } from "next-cloudinary"
import { cn } from "@/lib/utils"

interface CloudinaryImageProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
  crop?: {
    type: "auto" | "fill" | "scale" | "fit" | "limit" | "mfit" | "mpad" | "lpad" | "crop" | "thumb"
    gravity?:
      | "auto"
      | "center"
      | "north"
      | "south"
      | "east"
      | "west"
      | "north_east"
      | "north_west"
      | "south_east"
      | "south_west"
      | "face"
      | "faces"
    source?: boolean
  }
  quality?: number | "auto"
  priority?: boolean
  sizes?: string
}

export default function CloudinaryImage({
  src,
  alt,
  width,
  height,
  className,
  crop = { type: "fill", gravity: "auto" },
  quality = "auto",
  priority = false,
  sizes,
  ...props
}: CloudinaryImageProps) {
  return (
    <CldImage
      src={src}
      alt={alt}
      width={width}
      height={height}
      crop={crop}
      quality={quality}
      priority={priority}
      sizes={sizes}
      className={cn("object-cover", className)}
      {...props}
    />
  )
}
