import Link from "next/link"
import { ArrowRight } from "lucide-react"
import HeroSlider from "@/components/hero-slider"
import MovieCard from "@/components/movie-card"
import { getPopularMovies, getMoviesByCategory } from "@/lib/movie-data"

export default function Home() {
  const trendingMovies = getPopularMovies().slice(0, 6)
  const hollywoodMovies = getMoviesByCategory("hollywood").slice(0, 6)
  const tvShows = getMoviesByCategory("series").slice(0, 6)

  return (
    <div>
      <HeroSlider />

      <div className="container mx-auto px-4 py-12">
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="section-title">Trending Now</h2>
            <Link
              href="/category/trending"
              className="flex items-center text-sm font-medium text-primary hover:underline"
            >
              View All <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {trendingMovies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        </section>

        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="section-title">Hollywood Movies</h2>
            <Link
              href="/category/hollywood"
              className="flex items-center text-sm font-medium text-primary hover:underline"
            >
              View All <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {hollywoodMovies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        </section>

        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="section-title">TV Shows</h2>
            <Link
              href="/category/series"
              className="flex items-center text-sm font-medium text-primary hover:underline"
            >
              View All <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {tvShows.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

