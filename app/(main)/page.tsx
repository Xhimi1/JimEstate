import { getFeaturedListings } from '@/lib/sanity/queries'
import HomeClient from '@/components/HomeClient'

export const revalidate = 60

export default async function HomePage() {
  const featuredListings = await getFeaturedListings()
  return <HomeClient featuredListings={featuredListings} />
}
