'use client'

import { Suspense, useState, useMemo } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { listings } from '@/data/listings'
import PropertyCard from '@/components/PropertyCard'
import SearchBar from '@/components/SearchBar'
import FilterBar from '@/components/FilterBar'

export type BedFilter = 'any' | '2+' | '3+' | '4+'
export type TypeFilter = 'all' | 'house' | 'condo' | 'townhouse'

export interface Filters {
  type: TypeFilter
  beds: BedFilter
}

function ListingsInner() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const initialSearch = searchParams.get('search') ?? ''

  const [search, setSearch] = useState(initialSearch)
  const [filters, setFilters] = useState<Filters>({ type: 'all', beds: 'any' })

  const filtered = useMemo(() => {
    return listings.filter((listing) => {
      if (search.trim()) {
        const q = search.toLowerCase()
        const match =
          listing.city.toLowerCase().includes(q) ||
          listing.address.toLowerCase().includes(q) ||
          listing.state.toLowerCase().includes(q) ||
          listing.title.toLowerCase().includes(q)
        if (!match) return false
      }
      if (filters.type !== 'all' && listing.type !== filters.type) return false
      if (filters.beds === '2+' && listing.beds < 2) return false
      if (filters.beds === '3+' && listing.beds < 3) return false
      if (filters.beds === '4+' && listing.beds < 4) return false
      return true
    })
  }, [search, filters])

  function handleSearch(query: string) {
    setSearch(query)
    const params = new URLSearchParams()
    if (query) params.set('search', query)
    router.replace(`/listings${params.toString() ? `?${params.toString()}` : ''}`, { scroll: false })
  }

  return (
    <div className="pt-28 pb-24 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12">
          <p className="mb-3 text-xs font-medium lowercase tracking-[0.2em] text-neutral-400">Browse</p>
          <h1 className="text-5xl font-semibold text-neutral-900 md:text-6xl">All Listings</h1>
        </div>

        <div className="mb-4">
          <SearchBar onSearch={handleSearch} defaultValue={initialSearch} />
        </div>

        <div className="mb-12">
          <FilterBar filters={filters} onChange={setFilters} />
        </div>

        <p className="mb-10 text-sm text-neutral-400">
          {filtered.length === 1 ? '1 property found' : `${filtered.length} properties found`}
        </p>

        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((listing) => (
              <PropertyCard key={listing.id} listing={listing} />
            ))}
          </div>
        ) : (
          <div className="py-24 text-center">
            <p className="mb-2 text-lg font-medium text-neutral-900">No properties found</p>
            <p className="text-neutral-400">Try adjusting your search or filters.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default function ListingsPage() {
  return (
    <Suspense fallback={<div className="pt-28 px-6 text-neutral-400">Loading...</div>}>
      <ListingsInner />
    </Suspense>
  )
}
