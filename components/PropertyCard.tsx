import Link from 'next/link'
import { BedDouble, Bath, Maximize2 } from 'lucide-react'
import { Listing } from '@/data/listings'

interface PropertyCardProps {
  listing: Listing
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

export default function PropertyCard({ listing }: PropertyCardProps) {
  return (
    <Link href={`/listings/${listing.id}`} className="group block">
      <article className="rounded-xl border border-neutral-200 overflow-hidden transition-shadow duration-300 hover:shadow-md">
        {/* Image */}
        <div className="relative aspect-[3/2] overflow-hidden bg-neutral-100">
          <img
            src={listing.image}
            alt={listing.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {/* Type badge overlaid on image */}
          <span className="absolute top-4 left-4 bg-white/90 px-3 py-1 text-xs font-medium uppercase tracking-widest text-neutral-700 rounded-full">
            {typeLabels[listing.type]}
          </span>
        </div>

        {/* Content */}
        <div className="px-5 pt-5 pb-5">
          {/* Price */}
          <p className="mb-1.5 text-2xl font-semibold text-neutral-900">
            {formatPrice(listing.price)}
          </p>

          {/* Title */}
          <p className="mb-1 font-medium text-neutral-800 leading-snug line-clamp-1">
            {listing.title}
          </p>

          {/* Address */}
          <p className="mb-4 text-sm text-neutral-400 line-clamp-1">
            {listing.address}, {listing.city}, {listing.state}
          </p>

          {/* Stats */}
          <div className="flex items-center gap-5 border-t border-neutral-100 pt-4 pb-4 text-sm text-neutral-500">
            <span className="flex items-center gap-1.5">
              <BedDouble className="h-3.5 w-3.5 text-neutral-400" />
              {listing.beds}
            </span>
            <span className="flex items-center gap-1.5">
              <Bath className="h-3.5 w-3.5 text-neutral-400" />
              {listing.baths}
            </span>
            <span className="flex items-center gap-1.5">
              <Maximize2 className="h-3.5 w-3.5 text-neutral-400" />
              {formatSqft(listing.sqft)} sqft
            </span>
          </div>

        </div>
      </article>
    </Link>
  )
}
