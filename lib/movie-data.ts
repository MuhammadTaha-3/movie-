// Static movie data to replace API calls

export const popularMovies = [
  {
    id: 1,
    title: "Avengers Endgame",
    poster_path: "/images.jpeg?height=800&width=600",
    backdrop_path: "/images.jpeg?height=1080&width=1920",
    overview:
      "After the devastating events of Avengers: Infinity War, the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.",
    vote_average: 8.3,
    release_date: "2019-04-26",
    runtime: 181,
    genres: [
      { id: 1, name: "Action" },
      { id: 2, name: "Adventure" },
      { id: 3, name: "Science Fiction" },
    ],
  },
  {
    id: 2,
    title: "Underground",
    poster_path: "/underground.jpeg?height=750&width=500",
    backdrop_path: "/underground.jpeg?height=1080&width=1920",
    overview:
      "A group of freedom fighters attempt to escape from a war-torn country through an underground network of tunnels.",
    vote_average: 7.5,
    release_date: "2022-05-15",
    runtime: 125,
    genres: [
      { id: 1, name: "Action" },
      { id: 4, name: "Thriller" },
      { id: 5, name: "Drama" },
    ],
  },
  {
    id: 3,
    title: "All of Us Are Dead",
    poster_path: "/All of us aur dead.jpeg?height=750&width=500",
    backdrop_path: "/All of us aur dead.jpeg?height=1080&width=1920",
    overview:
      "A high school becomes ground zero for a zombie virus outbreak. Trapped students must fight their way out or turn into one of the rabid infected.",
    vote_average: 8.1,
    release_date: "2022-01-28",
    runtime: 60,
    genres: [
      { id: 6, name: "Horror" },
      { id: 7, name: "Drama" },
      { id: 8, name: "Action" },
    ],
  },
  {
    id: 4,
    title: "Uncharted",
    poster_path: "/uncharted.jpg?height=750&width=500",
    backdrop_path: "/uncharted.jpg?height=1080&width=1920",
    overview:
      "Street-smart Nathan Drake is recruited by seasoned treasure hunter Victor 'Sully' Sullivan to recover a fortune amassed by Ferdinand Magellan and lost 500 years ago by the House of Moncada.",
    vote_average: 7.2,
    release_date: "2022-02-18",
    runtime: 116,
    genres: [
      { id: 1, name: "Action" },
      { id: 2, name: "Adventure" },
    ],
  },
  {
    id: 5,
    title: "Doctor Strange in the Multiverse of Madness",
    poster_path: "/multiverse.jpeg?height=750&width=500",
    backdrop_path: "/multiverse.jpeg?height=1080&width=1920",
    overview:
      "Doctor Strange, with the help of mystical allies both old and new, traverses the mind-bending and dangerous alternate realities of the Multiverse to confront a mysterious new adversary.",
    vote_average: 7.4,
    release_date: "2022-05-06",
    runtime: 126,
    genres: [
      { id: 9, name: "Fantasy" },
      { id: 1, name: "Action" },
      { id: 2, name: "Adventure" },
    ],
  },
  {
    id: 6,
    title: "X-Men",
    poster_path: "/x-men.jpg?height=750&width=500",
    backdrop_path: "/x-men.jpg?height=1080&width=1920",
    overview:
      "Two mutants come to a private academy for their kind whose resident superhero team must oppose a terrorist organization with similar powers.",
    vote_average: 7.3,
    release_date: "2000-07-14",
    runtime: 104,
    genres: [
      { id: 1, name: "Action" },
      { id: 2, name: "Adventure" },
      { id: 3, name: "Science Fiction" },
    ],
  },
  {
    id: 7,
    title: "Money Heist",
    poster_path: "/money.jpg?height=750&width=500",
    backdrop_path: "/money.jpg?height=1080&width=1920",
    overview:
      "A criminal mastermind who goes by 'The Professor' has a plan to pull off the biggest heist in recorded history -- to print billions of euros in the Royal Mint of Spain.",
    vote_average: 8.3,
    release_date: "2017-05-02",
    runtime: 70,
    genres: [
      { id: 4, name: "Thriller" },
      { id: 5, name: "Drama" },
      { id: 10, name: "Crime" },
    ],
  },
  {
    id: 8,
    title: "Ms Marvel",
    poster_path: "/ms marvel.jpeg?height=750&width=500",
    backdrop_path: "/ms marvel.jpeg?height=1080&width=1920",
    overview:
      "A great student, avid gamer, and voracious fan-fiction scribe, Kamala Khan has a special affinity for superheroes, particularly Captain Marvel. However, she struggles to fit in at home and at school — that is, until she gets superpowers like the heroes she's always looked up to.",
    vote_average: 7.1,
    release_date: "2022-06-08",
    runtime: 50,
    genres: [
      { id: 1, name: "Action" },
      { id: 2, name: "Adventure" },
      { id: 11, name: "Comedy" },
    ],
  },
  {
    id: 9,
    title: "Red Notice",
    poster_path: "/red.jpeg?height=750&width=500",
    backdrop_path: "/red.jpeg?height=1080&width=1920",
    overview:
      "An Interpol-issued Red Notice is a global alert to hunt and capture the world's most wanted. But when a daring heist brings together the FBI's top profiler and two rival criminals, there's no telling what will happen.",
    vote_average: 6.8,
    release_date: "2021-11-05",
    runtime: 118,
    genres: [
      { id: 1, name: "Action" },
      { id: 11, name: "Comedy" },
      { id: 4, name: "Thriller" },
    ],
  },
  {
    id: 10,
    title: "Sandman",
    poster_path: "/sand man.jpeg?height=750&width=500",
    backdrop_path: "/sand man.jpeg?height=1080&width=1920",
    overview:
      "After years of imprisonment, Morpheus — the King of Dreams — embarks on a journey across worlds to find what was stolen from him and restore his power.",
    vote_average: 8.0,
    release_date: "2022-08-05",
    runtime: 50,
    genres: [
      { id: 5, name: "Drama" },
      { id: 9, name: "Fantasy" },
      { id: 12, name: "Mystery" },
    ],
  },
  {
    id: 11,
    title: "Spider-Man: No Way Home",
    poster_path: "/spider.jpeg?height=750&width=500",
    backdrop_path: "/spider.jpeg?height=1080&width=1920",
    overview:
      "Peter Parker is unmasked and no longer able to separate his normal life from the high-stakes of being a super-hero. When he asks for help from Doctor Strange the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man.",
    vote_average: 8.2,
    release_date: "2021-12-17",
    runtime: 148,
    genres: [
      { id: 1, name: "Action" },
      { id: 2, name: "Adventure" },
      { id: 3, name: "Science Fiction" },
    ],
  },
  {
    id: 12,
    title: "Squid Game",
    poster_path: "/squid.jpeg?height=750&width=500",
    backdrop_path: "/squid.jpeg?height=1080&width=1920",
    overview:
      "Hundreds of cash-strapped players accept a strange invitation to compete in children's games. Inside, a tempting prize awaits — with deadly high stakes.",
    vote_average: 7.8,
    release_date: "2021-09-17",
    runtime: 54,
    genres: [
      { id: 5, name: "Drama" },
      { id: 12, name: "Mystery" },
      { id: 4, name: "Thriller" },
    ],
  },
]

export function getPopularMovies() {
  return popularMovies
}

export function getMovieDetails(id: string) {
  const movie = popularMovies.find((movie) => movie.id === Number.parseInt(id))

  if (!movie) {
    throw new Error("Movie not found")
  }

  // Add additional details for the movie page
  return {
    ...movie,
    credits: {
      cast: [
        { id: 101, name: "Actor 1", character: "Character 1", profile_path: "/placeholder.svg?height=300&width=200" },
        { id: 102, name: "Actor 2", character: "Character 2", profile_path: "/placeholder.svg?height=300&width=200" },
        { id: 103, name: "Actor 3", character: "Character 3", profile_path: "/placeholder.svg?height=300&width=200" },
        { id: 104, name: "Actor 4", character: "Character 4", profile_path: "/placeholder.svg?height=300&width=200" },
        { id: 105, name: "Actor 5", character: "Character 5", profile_path: "/placeholder.svg?height=300&width=200" },
      ],
    },
    similar: {
      results: popularMovies.filter((m) => m.id !== Number.parseInt(id)).slice(0, 6),
    },
    videos: {
      results: [{ id: "video1", key: "dQw4w9WgXcQ", name: "Official Trailer", type: "Trailer" }],
    },
  }
}

export function searchMovies(query: string) {
  if (!query) return []

  const lowercaseQuery = query.toLowerCase()
  return popularMovies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(lowercaseQuery) || movie.overview.toLowerCase().includes(lowercaseQuery),
  )
}

export function getMoviesByCategory(category: string) {
  // Simple category filtering logic
  switch (category) {
    case "hollywood":
      return popularMovies.slice(0, 6)
    case "bollywood":
      return popularMovies.slice(2, 8)
    case "korean":
      return [popularMovies[2], popularMovies[11]] // All of Us Are Dead, Squid Game
    case "series":
      return [popularMovies[2], popularMovies[6], popularMovies[7], popularMovies[9], popularMovies[11]] // TV shows
    default:
      return popularMovies
  }
}

