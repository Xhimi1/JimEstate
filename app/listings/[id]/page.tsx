import Link from 'next/link'
import { notFound } from 'next/navigation'
import { listings } from '@/data/listings'
import { BedDouble, Bath, Maximize2, MapPin, ArrowLeft } from 'lucide-react'
import type { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'
import ScrollHero from '@/components/ScrollHero'

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
      <ScrollHero image={listing.image} alt={listing.title} initialOpacity={0.6}>
        <div className="relative z-10 flex h-full items-end px-6 pb-16 md:pb-20">
          <div className="mx-auto w-full max-w-6xl">
            <h1 className="text-4xl leading-tight text-white md:text-5xl lg:text-6xl" style={{ fontWeight: 350 }}>
              {listing.title}
            </h1>
          </div>
        </div>
      </ScrollHero>

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
              <div className="mb-10 flex flex-wrap gap-3">
                <span className="flex items-center gap-2 rounded-lg border border-neutral-300 bg-neutral-100 px-4 py-2.5 text-sm text-neutral-600">
                  <BedDouble className="h-4 w-4 text-neutral-400" />
                  {listing.beds} {listing.beds === 1 ? 'Bedroom' : 'Bedrooms'}
                </span>
                <span className="flex items-center gap-2 rounded-lg border border-neutral-300 bg-neutral-100 px-4 py-2.5 text-sm text-neutral-600">
                  <Bath className="h-4 w-4 text-neutral-400" />
                  {listing.baths} {listing.baths === 1 ? 'Bathroom' : 'Bathrooms'}
                </span>
                <span className="flex items-center gap-2 rounded-lg border border-neutral-300 bg-neutral-100 px-4 py-2.5 text-sm text-neutral-600">
                  <Maximize2 className="h-4 w-4 text-neutral-400" />
                  {formatSqft(listing.sqft)} sqft
                </span>
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
