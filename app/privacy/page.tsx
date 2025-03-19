import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function PrivacyPage() {
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

          <h1 className="text-3xl font-bold md:text-4xl">Privacy Policy</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-3xl">
          <div className="space-y-6">
            <p>Last updated: March 17, 2025</p>

            <p>
              At CineVerse, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose,
              and safeguard your information when you visit our website cineverse.com (the "Site"). Please read this
              privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access
              the site.
            </p>

            <h2 className="text-2xl font-bold">Information We Collect</h2>
            <p>
              We may collect information about you in a variety of ways. The information we may collect on the Site
              includes:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <span className="font-medium">Personal Data:</span> Personally identifiable information, such as your
                name and email address, that you voluntarily give to us when you choose to participate in various
                activities related to the Site, such as sending us messages through our contact form.
              </li>
              <li>
                <span className="font-medium">Derivative Data:</span> Information our servers automatically collect when
                you access the Site, such as your IP address, browser type, operating system, access times, and the
                pages you have viewed directly before and after accessing the Site.
              </li>
              <li>
                <span className="font-medium">Cookies and Web Beacons:</span> We may use cookies, web beacons, tracking
                pixels, and other tracking technologies on the Site to help customize the Site and improve your
                experience.
              </li>
            </ul>

            <h2 className="text-2xl font-bold">Use of Your Information</h2>
            <p>
              Having accurate information about you permits us to provide you with a smooth, efficient, and customized
              experience. Specifically, we may use information collected about you via the Site to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Create and manage your account.</li>
              <li>Respond to your inquiries and contact requests.</li>
              <li>Send you technical notices, updates, security alerts, and support messages.</li>
              <li>Monitor and analyze usage and trends to improve your experience with the Site.</li>
              <li>Increase the efficiency and operation of the Site.</li>
              <li>Compile anonymous statistical data for use internally or with third parties.</li>
            </ul>

            <h2 className="text-2xl font-bold">Contact Us</h2>
            <p>
              If you have questions or comments about this Privacy Policy, please contact us through our{" "}
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

