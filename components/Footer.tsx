import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-neutral-100 bg-white px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 grid grid-cols-1 gap-10 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <p className="mb-4 text-base font-semibold uppercase tracking-widest text-neutral-900">
              JimsEstate
            </p>
            <p className="max-w-xs text-sm leading-relaxed text-neutral-400">
              A boutique real estate agency dedicated to connecting buyers with
              exceptional properties in the finest neighborhoods.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <p className="mb-5 text-xs font-medium uppercase tracking-widest text-neutral-400">
              Explore
            </p>
            <nav className="flex flex-col gap-3">
              <Link href="/listings" className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors">
                Listings
              </Link>
              <Link href="/about" className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors">
                About
              </Link>
              <Link href="/about" className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="mb-5 text-xs font-medium uppercase tracking-widest text-neutral-400">
              Contact
            </p>
            <div className="space-y-2.5 text-sm text-neutral-600">
              <p>hello@jimsestate.com</p>
              <p>(203) 555-0182</p>
              <p>
                44 Greenwich Avenue
                <br />
                Greenwich, CT 06830
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-100 pt-8 flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-xs text-neutral-400">
            &copy; {currentYear} JimsEstate. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-xs text-neutral-400 hover:text-neutral-600 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-xs text-neutral-400 hover:text-neutral-600 transition-colors">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
