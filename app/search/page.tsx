import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { searchMovies } from "@/lib/movie-data"
import MovieCard from "@/components/movie-card"

export default async function SearchPage({ searchParams }: { searchParams: { q: string } }) {
  const query = searchParams.q
  const movies = query ? await searchMovies(query) : []

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

          <h1 className="text-3xl font-bold md:text-4xl">
            {query ? `Search Results for "${query}"` : "Search Movies"}
          </h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {query && movies.length === 0 && (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <div className="rounded-full bg-muted p-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-10 w-10 text-muted-foreground"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
            </div>
            <h2 className="mt-4 text-xl font-bold">No results found</h2>
            <p className="mt-2 text-muted-foreground">We couldn't find any movies matching "{query}"</p>
          </div>
        )}

        {movies.length > 0 && (
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
            {movies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

