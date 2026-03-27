import Link from 'next/link'
import { notFound } from 'next/navigation'
import { listings } from '@/data/listings'
import { BedDouble, Bath, Maximize2, MapPin, ArrowLeft } from 'lucide-react'
import type { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'

interface PageProps {
  params: { id: string }
}

export async function generateStaticParams() {
  return listings.map((listing) => ({
    id: listing.id,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const listing = listings.find((l) => l.id === params.id)
  if (!listing) return { title: 'Not Found | JimsEstate' }
  return {
    title: `${listing.title} | JimsEstate`,
    description: listing.description.slice(0, 160),
  }
}

function formatPrice(price: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(price)
}

function formatSqft(sqft: number): string {
  return new Intl.NumberFormat('en-US').format(sqft)
}

const typeLabels: Record<string, string> = {
  house: 'House',
  condo: 'Condo',
  townhouse: 'Townhouse',
}

export default function ListingDetailPage({ params }: PageProps) {
  const listing = listings.find((l) => l.id === params.id)

  if (!listing) notFound()

  return (
    <div>
      {/* Hero Image */}
      <section className="relative h-[60vh] min-h-[420px] overflow-hidden">
        <img
          src={listing.image}
          alt={listing.title}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 flex h-full items-end px-8 pb-16 md:px-14 md:pb-20">
          <h1 className="max-w-4xl text-4xl leading-tight text-white md:text-5xl lg:text-6xl" style={{ fontWeight: 350 }}>
            {listing.title}
          </h1>
        </div>
      </section>

      <div className="px-6 py-12">
        <div className="mx-auto max-w-6xl">
          {/* Back Link */}
          <Link
            href="/listings"
            className="mb-10 inline-flex items-center gap-2 text-sm text-stone-500 hover:text-black"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Listings
          </Link>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            {/* Left: Details (2/3) */}
            <div className="lg:col-span-2">
              {/* Type Badge */}
              <span className="mb-4 inline-block border border-stone-300 px-3 py-1 text-xs font-medium uppercase tracking-widest text-stone-500">
                {typeLabels[listing.type]}
              </span>

              {/* Price */}
              <p className="mb-2 text-3xl font-bold text-black">
                {formatPrice(listing.price)}
              </p>

              {/* Address */}
              <div className="mb-8 flex items-center gap-2 text-stone-500">
                <MapPin className="h-4 w-4 flex-shrink-0" />
                <p className="text-sm">
                  {listing.address}, {listing.city}, {listing.state}
                </p>
              </div>

              {/* Stats Row */}
              <div className="mb-10 flex flex-wrap gap-6 border-t border-b border-stone-200 py-6">
                <div className="flex items-center gap-2">
                  <BedDouble className="h-5 w-5 text-stone-400" />
                  <div>
                    <p className="text-lg font-semibold text-black">
                      {listing.beds}
                    </p>
                    <p className="text-xs text-stone-500">
                      {listing.beds === 1 ? 'Bedroom' : 'Bedrooms'}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Bath className="h-5 w-5 text-stone-400" />
                  <div>
                    <p className="text-lg font-semibold text-black">
                      {listing.baths}
                    </p>
                    <p className="text-xs text-stone-500">
                      {listing.baths === 1 ? 'Bathroom' : 'Bathrooms'}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Maximize2 className="h-5 w-5 text-stone-400" />
                  <div>
                    <p className="text-lg font-semibold text-black">
                      {formatSqft(listing.sqft)}
                    </p>
                    <p className="text-xs text-stone-500">Square Feet</p>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div>
                <h2 className="mb-4 text-lg font-semibold text-black">
                  About This Property
                </h2>
                <p className="leading-relaxed text-stone-600">
                  {listing.description}
                </p>
              </div>
            </div>

            {/* Right: Contact Form (1/3) */}
            <div className="lg:col-span-1">
              <ContactForm listingTitle={listing.title} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
