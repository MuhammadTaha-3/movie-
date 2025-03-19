import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function AboutPage() {
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

          <h1 className="text-3xl font-bold md:text-4xl">About CineVerse</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-3xl">
          <div className="space-y-6 text-lg">
            <p>
              Welcome to CineVerse, your ultimate destination for discovering and exploring movies from around the
              world. We are passionate about cinema and dedicated to providing you with a comprehensive platform to find
              information about your favorite films and discover new ones.
            </p>

            <h2 className="text-2xl font-bold">Our Mission</h2>
            <p>
              At CineVerse, our mission is to create a user-friendly platform that connects movie enthusiasts with the
              content they love. We strive to provide accurate, up-to-date information about movies across different
              genres, languages, and regions, making it easier for you to find exactly what you're looking for.
            </p>

            <h2 className="text-2xl font-bold">What We Offer</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Comprehensive database of movies from Hollywood, Bollywood, Korean cinema, and more</li>
              <li>Detailed information about movies, including cast, crew, ratings, and release dates</li>
              <li>Regular updates on the latest releases and upcoming films</li>
              <li>User-friendly interface for seamless navigation and discovery</li>
              <li>High-quality movie posters and promotional materials</li>
            </ul>

            <h2 className="text-2xl font-bold">Our Team</h2>
            <p>
              CineVerse is maintained by a team of dedicated movie enthusiasts who are committed to creating the best
              possible experience for our users. Our team works tirelessly to keep our database updated and ensure that
              our platform remains user-friendly and accessible.
            </p>

            <h2 className="text-2xl font-bold">Legal Information</h2>
            <p>
              CineVerse does not host any content on its servers. All content linked or referenced on this site is
              hosted on third-party services that are not affiliated with CineVerse. We simply provide information and
              links to these services. For more information, please refer to our Disclaimer and DMCA pages.
            </p>

            <p>
              Thank you for visiting CineVerse. We hope you enjoy your time exploring our platform and discovering new
              movies to watch!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

