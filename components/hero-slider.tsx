"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { popularMovies } from "@/lib/movie-data"

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const featuredMovies = popularMovies.slice(0, 5)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === featuredMovies.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? featuredMovies.length - 1 : prev - 1))
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 6000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative h-[70vh] overflow-hidden">
      {featuredMovies.map((movie, index) => (
        <div
          key={movie.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <div className="relative h-full w-full">
           <Image
  src="https://images8.alphacoders.com/100/1003220.png"
  alt="Movie Image"
  fill
  className="object-cover"
  priority
/>

            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 top-0 flex flex-col justify-center p-8 md:p-16">
              <div className="container mx-auto">
                <div className="max-w-2xl">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {movie.genres?.map((genre) => (
                      <Badge key={genre.id} variant="outline" className="border-primary/50">
                        {genre.name}
                      </Badge>
                    ))}
                  </div>

                  <h1 className="mb-4 text-4xl font-bold md:text-5xl lg:text-6xl">{movie.title}</h1>

                  <p className="mb-6 line-clamp-3 text-lg text-muted-foreground md:text-xl">{movie.overview}</p>

                  <div className="flex flex-wrap gap-4">
                    <Button asChild size="lg" className="gap-2">
                      <Link href={`/movie/${movie.id}`}>
                        <Play className="h-5 w-5" />
                        Watch Now
                      </Link>
                    </Button>
                    <Button asChild variant="outline" size="lg">
                      <Link href={`/movie/${movie.id}`}>More Info</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/30 p-2 text-white backdrop-blur-sm transition-all hover:bg-black/50"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/30 p-2 text-white backdrop-blur-sm transition-all hover:bg-black/50"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 space-x-2">
        {featuredMovies.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-1.5 rounded-full transition-all ${
              index === currentSlide ? "w-8 bg-primary" : "w-2 bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

