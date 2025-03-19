import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock, Star, Download, Play } from "lucide-react"
import { getMovieDetails } from "@/lib/movie-data"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import MovieCard from "@/components/movie-card"

export default async function MoviePage({ params }: { params: { id: string } }) {
  const movie = await getMovieDetails(params.id)

  return (
    <div>
      <div className="relative">
        <div className="relative h-[70vh]">
          <Image
            src={movie.backdrop_path || "/Public/images.jpeg"}
            alt={movie.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
        </div>

        <div className="container relative mx-auto px-4">
          <Link
            href="/"
            className="absolute top-4 left-4 z-10 flex items-center rounded-full bg-black/50 p-2 backdrop-blur-sm hover:bg-black/70"
          >
            <ArrowLeft className="h-5 w-5" />
            <span className="ml-1">Back</span>
          </Link>

          <div className="absolute -bottom-32 flex flex-col md:flex-row gap-8">
            <div className="relative h-[300px] w-[200px] flex-shrink-0 overflow-hidden rounded-xl border-2 border-muted shadow-xl">
              <Image src={movie.poster_path ||"https://images8.alphacoders.com/100/1003220.png"} alt={movie.title} fill className="object-cover" />
            </div>

            <div className="flex flex-col justify-end">
              <h1 className="text-3xl font-bold md:text-4xl">{movie.title}</h1>

              <div className="mt-4 flex flex-wrap items-center gap-4">
                <div className="flex items-center">
                  <Star className="mr-1 h-5 w-5 fill-yellow-500 text-yellow-500" />
                  <span className="text-lg font-medium">{movie.vote_average.toFixed(1)}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="mr-1 h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">{movie.release_date}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="mr-1 h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">{movie.runtime} min</span>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {movie.genres.map((genre: any) => (
                  <Badge key={genre.id} variant="outline" className="border-primary/50">
                    {genre.name}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="mt-40 grid gap-8 md:grid-cols-3">
          <div className="md:col-span-2">
            <h2 className="section-title">Overview</h2>
            <p className="text-lg text-muted-foreground">{movie.overview}</p>

            <div className="mt-8">
              <h2 className="section-title">Cast</h2>
              <div className="mt-4 flex gap-4 overflow-x-auto pb-4">
                {movie.credits.cast.map((person: any) => (
                  <div key={person.id} className="flex-shrink-0 w-[150px]">
                    <div className="aspect-[2/3] relative overflow-hidden rounded-lg">
                      {person.profile_path ? (
                        <Image
                          src={person.profile_path || "/images.jpeg"}
                          alt={person.name}
                          fill
                          className="object-cover"
                        />
                      ) : (
                        <div className="h-full w-full bg-muted flex items-center justify-center">
                          <span className="text-muted-foreground">No Image</span>
                        </div>
                      )}
                    </div>
                    <h3 className="mt-2 text-sm font-medium">{person.name}</h3>
                    <p className="text-xs text-muted-foreground">{person.character}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <div className="rounded-xl bg-card p-6">
              <h3 className="mb-4 text-xl font-bold">Download Options</h3>
              <div className="space-y-3">
                <Button className="w-full justify-between">
                  Download 480p <Download className="h-4 w-4" />
                </Button>
                <Button className="w-full justify-between">
                  Download 720p <Download className="h-4 w-4" />
                </Button>
                <Button className="w-full justify-between">
                  Download 1080p <Download className="h-4 w-4" />
                </Button>
              </div>

              <div className="mt-6">
                <Button variant="outline" className="w-full justify-center gap-2">
                  <Play className="h-4 w-4" /> Watch Trailer
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="my-12">
          <h2 className="section-title">Similar Movies</h2>
          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {movie.similar.results.slice(0, 6).map((similar: any) => (
              <MovieCard key={similar.id} movie={similar} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

