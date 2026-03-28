import { Suspense } from 'react'
import { getAllListings } from '@/lib/sanity/queries'
import ListingsGrid from '@/components/ListingsGrid'

export const revalidate = 60

export default async function ListingsPage({
  searchParams,
}: {
  searchParams: { search?: string }
}) {
  const listings = await getAllListings()

  return (
    <Suspense fallback={<div className="pt-28 px-6 text-neutral-400">Loading...</div>}>
      <ListingsGrid listings={listings} initialSearch={searchParams.search ?? ''} />
    </Suspense>
  )
}
