import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function DisclaimerPage() {
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

          <h1 className="text-3xl font-bold md:text-4xl">Disclaimer</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-3xl">
          <div className="space-y-6">
            <p>Last updated: March 17, 2025</p>

            <h2 className="text-2xl font-bold">Website Disclaimer</h2>
            <p>
              The information provided by CineVerse ("we," "us," or "our") on cineverse.com (the "Site") is for general
              informational purposes only. All information on the Site is provided in good faith, however we make no
              representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity,
              reliability, availability, or completeness of any information on the Site.
            </p>

            <h2 className="text-2xl font-bold">External Links Disclaimer</h2>
            <p>
              The Site may contain (or you may be sent through the Site) links to other websites or content belonging to
              or originating from third parties or links to websites and features in banners or other advertising. Such
              external links are not investigated, monitored, or checked for accuracy, adequacy, validity, reliability,
              availability, or completeness by us.
            </p>

            <h2 className="text-2xl font-bold">Content Disclaimer</h2>
            <p>
              CineVerse does not host any content on its servers. All movie information, images, and related media
              displayed on this website are collected from publicly available sources and third-party websites. We do
              not claim ownership of any of the images or videos displayed on this site. All trademarks, logos, and
              other proprietary information belong to their respective owners.
            </p>

            <h2 className="text-2xl font-bold">Fair Use Disclaimer</h2>
            <p>
              This site may contain copyrighted material the use of which has not always been specifically authorized by
              the copyright owner. We believe this constitutes a "fair use" of any such copyrighted material as provided
              for in section 107 of the US Copyright Law. If you wish to use copyrighted material from this site for
              purposes of your own that go beyond fair use, you must obtain permission from the copyright owner.
            </p>

            <h2 className="text-2xl font-bold">Contact Us</h2>
            <p>
              If you have any questions about this Disclaimer, you can contact us through our{" "}
              <Link href="/contact" className="text-primary hover:underline">
                Contact Page
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

