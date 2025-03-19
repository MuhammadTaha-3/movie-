import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function DMCAPage() {
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

          <h1 className="text-3xl font-bold md:text-4xl">DMCA Policy</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-3xl">
          <div className="space-y-6">
            <p>Last updated: March 17, 2025</p>

            <h2 className="text-2xl font-bold">Digital Millennium Copyright Act Notice</h2>
            <p>
              CineVerse respects the intellectual property rights of others and expects its users to do the same. In
              accordance with the Digital Millennium Copyright Act of 1998 ("DMCA"), the text of which may be found on
              the U.S. Copyright Office website at{" "}
              <span className="text-primary">http://www.copyright.gov/legislation/dmca.pdf</span>, CineVerse will
              respond expeditiously to claims of copyright infringement committed using the CineVerse service that are
              reported to our designated copyright agent identified below.
            </p>

            <h2 className="text-2xl font-bold">DMCA Notification</h2>
            <p>
              If you are a copyright owner, or authorized on behalf of one, and you believe that your copyrighted work
              has been copied in a way that constitutes copyright infringement, please submit your claim via email to
              <span className="text-primary"> dmca@cineverse.com</span>, with the subject line: "DMCA Infringement
              Notification"
            </p>

            <p>
              For your complaint to be valid under the DMCA, you must provide the following information when providing
              notice of the claimed copyright infringement:
            </p>

            <ul className="list-disc pl-6 space-y-2">
              <li>
                A physical or electronic signature of a person authorized to act on behalf of the copyright owner.
              </li>
              <li>Identification of the copyrighted work claimed to have been infringed.</li>
              <li>
                Identification of the material that is claimed to be infringing or to be the subject of the infringing
                activity, and that is to be removed or access to which is to be disabled, as well as information
                reasonably sufficient to permit CineVerse to locate the material.
              </li>
              <li>
                Information reasonably sufficient to permit CineVerse to contact the complaining party, such as an
                address, telephone number, and, if available, an electronic mail address at which the complaining party
                may be contacted.
              </li>
              <li>
                A statement that the complaining party has a good faith belief that use of the material in the manner
                complained of is not authorized by the copyright owner, its agent, or the law.
              </li>
              <li>
                A statement that the information in the notification is accurate, and under penalty of perjury, that the
                complaining party is authorized to act on behalf of the owner of an exclusive right that is allegedly
                infringed.
              </li>
            </ul>

            <h2 className="text-2xl font-bold">Contact Us</h2>
            <p>
              If you have any questions about this DMCA Policy, please contact us through our{" "}
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

