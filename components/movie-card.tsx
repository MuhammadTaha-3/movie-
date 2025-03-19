import Image from "next/image"
import Link from "next/link"
import { Star } from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface MovieCardProps {
  movie: {
    id: number
    title: string
    poster_path: string
    vote_average: number
    genres?: { id: number; name: string }[]
  }
  variant?: "default" | "featured"
}

export default function MovieCard({ movie, variant = "default" }: MovieCardProps) {
  if (variant === "featured") {
    return (
      <Link href={`/movie/${movie.id}`} className="movie-card group block">
        <div className="movie-card-image">
          <Image
              src="https://images8.alphacoders.com/100/1003220.png"
            alt={movie.title}
            width={500}
            height={750}
            className="h-full w-full object-cover transition-transform duration-500"
          />
        </div>
        <div className="movie-card-content">
          <div className="flex items-center space-x-2">
            <div className="flex items-center">
              <Star className="mr-1 h-4 w-4 fill-yellow-500 text-yellow-500" />
              <span className="text-sm font-medium">{movie.vote_average.toFixed(1)}</span>
            </div>
            {movie.genres &&
              movie.genres.slice(0, 2).map((genre) => (
                <Badge key={genre.id} variant="outline" className="border-primary/50 text-xs">
                  {genre.name}
                </Badge>
              ))}
          </div>
          <h3 className="mt-2 text-lg font-bold leading-tight">{movie.title}</h3>
        </div>
      </Link>
    )
  }

  return (
    <Link
      href={`/movie/${movie.id}`}
      className="group block overflow-hidden rounded-xl transition-all duration-300 hover:shadow-xl"
    >
      <div className="relative">
        <div className="aspect-[2/3] overflow-hidden">
          <Image
            src={movie.poster_path || "/placeholder.svg"}
            alt={movie.title}
            width={500}
            height={750}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-4 pt-16">
          <div className="flex items-center">
            <Star className="mr-1 h-4 w-4 fill-yellow-500 text-yellow-500" />
            <span className="text-sm font-medium">{movie.vote_average.toFixed(1)}</span>
          </div>
          <h3 className="mt-1 line-clamp-2 font-bold leading-tight">{movie.title}</h3>
        </div>
      </div>
    </Link>
  )
}

