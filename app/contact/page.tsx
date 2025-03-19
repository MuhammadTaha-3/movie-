import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactPage() {
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

          <h1 className="text-3xl font-bold md:text-4xl">Contact Us</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-6">
              <p className="text-lg">
                Have a question, suggestion, or feedback? We'd love to hear from you! Fill out the form and our team
                will get back to you as soon as possible.
              </p>

              <div>
                <h2 className="text-xl font-bold">Email</h2>
                <p className="mt-1">contact@cineverse.com</p>
              </div>

              <div>
                <h2 className="text-xl font-bold">Social Media</h2>
                <div className="mt-2 flex space-x-4">
                  <Link href="#" className="text-primary hover:underline">
                    Twitter
                  </Link>
                  <Link href="#" className="text-primary hover:underline">
                    Facebook
                  </Link>
                  <Link href="#" className="text-primary hover:underline">
                    Instagram
                  </Link>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-bold">Join Our Community</h2>
                <p className="mt-1">
                  Join our Telegram channel to get updates on the latest movies and connect with other movie
                  enthusiasts.
                </p>
                <Button className="mt-2">Join Telegram</Button>
              </div>
            </div>

            <div className="rounded-xl bg-card p-6 shadow-lg">
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    Name
                  </label>
                  <Input id="name" placeholder="Your name" />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="your.email@example.com" />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-1">
                    Subject
                  </label>
                  <Input id="subject" placeholder="What is this regarding?" />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">
                    Message
                  </label>
                  <Textarea id="message" className="min-h-[150px]" placeholder="Your message..." />
                </div>

                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

