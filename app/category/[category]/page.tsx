import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { getMoviesByCategory } from "@/lib/movie-data"
import MovieCard from "@/components/movie-card"

export default async function CategoryPage({ params }: { params: { category: string } }) {
  const { category } = params
  const movies = getMoviesByCategory(category)

  const getCategoryTitle = (category: string) => {
    switch (category) {
      case "hollywood":
        return "Hollywood Movies"
      case "bollywood":
        return "Bollywood Movies"
      case "korean":
        return "Korean Movies"
      case "series":
        return "TV Shows"
      case "trending":
        return "Trending Now"
      case "movies":
        return "All Movies"
      default:
        return category.charAt(0).toUpperCase() + category.slice(1)
    }
  }

  return (
    <div>
      <div className="bg-card py-12">
        <div className="container mx-auto px-4">
          <Link
            href="/"
            className="inline-flex items-center rounded-full bg-background/80 p-2 backdrop-blur-sm hover:bg-background mb-6"
          >
            <ArrowLeft className="h-5 w-5" />
            <span className="ml-1">Back to Home</span>
          </Link>

          <h1 className="text-3xl font-bold md:text-4xl">{getCategoryTitle(category)}</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  )
}

