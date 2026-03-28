import Link from 'next/link'
import { BedDouble, Bath, Maximize2, MapPin } from 'lucide-react'
import { SanityListing } from '@/lib/sanity/queries'

interface PropertyCardProps {
  listing: SanityListing
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

export default function PropertyCard({ listing }: PropertyCardProps) {
  return (
    <Link href={`/listings/${listing.slug}`} className="group block">
      <article className="rounded-2xl bg-white shadow-lg overflow-hidden transition-shadow duration-300 group-hover:shadow-xl border border-neutral-200 p-4">

        {/* Image */}
        <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-neutral-100">
          <img
            src={listing.imageUrl}
            alt={listing.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>

        {/* Content */}
        <div className="pt-4">

          {/* Title + Price */}
          <div className="flex items-start justify-between gap-6 mb-1">
            <p className="min-w-0 font-semibold text-neutral-900 leading-snug line-clamp-1 text-[15px]">
              {listing.title}
            </p>
            <p className="shrink-0 font-semibold text-neutral-900 text-[17px]">
              {formatPrice(listing.price)}
            </p>
          </div>

          {/* Location */}
          <div className="flex items-center gap-1 mb-4 text-sm text-neutral-400">
            <MapPin className="h-3.5 w-3.5 shrink-0" />
            <span className="line-clamp-1">{listing.city}, {listing.state}</span>
          </div>

          {/* Stats chips */}
          <div className="flex items-center gap-2 mb-4">
            <span className="flex items-center gap-1.5 rounded-lg border border-neutral-300 bg-neutral-100 px-3 py-1.5 text-xs text-neutral-600">
              <BedDouble className="h-3.5 w-3.5 text-neutral-400" />
              {listing.beds} Beds
            </span>
            <span className="flex items-center gap-1.5 rounded-lg border border-neutral-300 bg-neutral-100 px-3 py-1.5 text-xs text-neutral-600">
              <Bath className="h-3.5 w-3.5 text-neutral-400" />
              {listing.baths} Baths
            </span>
            <span className="flex items-center gap-1.5 rounded-lg border border-neutral-300 bg-neutral-100 px-3 py-1.5 text-xs text-neutral-600">
              <Maximize2 className="h-3.5 w-3.5 text-neutral-400" />
              {formatSqft(listing.sqft)} sqft
            </span>
          </div>

          {/* CTA */}
          <div className="rounded-lg bg-neutral-900 py-2.5 text-center text-sm font-medium text-white transition-colors duration-300 group-hover:bg-neutral-700">
            View Property
          </div>

        </div>
      </article>
    </Link>
  )
}
