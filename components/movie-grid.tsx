import Image from "next/image"
import Link from "next/link"
import { getPopularMovies, getMoviesByCategory } from "@/lib/movie-data"

export default function MovieGrid({ category }: { category?: string }) {
  const movies = category ? getMoviesByCategory(category) : getPopularMovies()

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
      {movies.map((movie) => (
        <Link
          href={`/movie/${movie.id}`}
          key={movie.id}
          className="group relative overflow-hidden rounded-lg border border-dashed border-blue-400/50 p-1 transition-all hover:border-blue-400"
        >
          <div className="aspect-[2/3] overflow-hidden rounded-lg">
            <Image
              src={movie.poster_path || "/images.jpeg"}
              alt={movie.title}
              width={500}
              height={750}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
          </div>
          <div className="mt-2 p-2">
            <h3 className="line-clamp-1 font-medium">{movie.title}</h3>
            <div className="mt-1 flex flex-wrap gap-1">
              <span className="inline-block rounded bg-blue-900/50 px-1.5 py-0.5 text-xs">480p</span>
              <span className="inline-block rounded bg-blue-900/50 px-1.5 py-0.5 text-xs">720p</span>
              <span className="inline-block rounded bg-blue-900/50 px-1.5 py-0.5 text-xs">1080p</span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

