import { client } from './client'

export interface SanityListing {
  _id: string
  slug: string
  title: string
  address: string
  city: string
  state: string
  price: number
  type: 'house' | 'condo' | 'townhouse'
  beds: number
  baths: number
  sqft: number
  imageUrl: string
  description: string
  featured: boolean
}

const LISTING_FIELDS = `
  _id,
  title,
  "slug": slug.current,
  address,
  city,
  state,
  price,
  type,
  beds,
  baths,
  sqft,
  imageUrl,
  description,
  featured
`

export async function getAllListings(): Promise<SanityListing[]> {
  return client.fetch(
    `*[_type == "listing"] | order(_createdAt asc) { ${LISTING_FIELDS} }`,
    {},
    { next: { revalidate: 60 } }
  )
}

export async function getFeaturedListings(): Promise<SanityListing[]> {
  return client.fetch(
    `*[_type == "listing" && featured == true] | order(_createdAt asc) { ${LISTING_FIELDS} }`,
    {},
    { next: { revalidate: 60 } }
  )
}

export async function getListingBySlug(slug: string): Promise<SanityListing | null> {
  return client.fetch(
    `*[_type == "listing" && slug.current == $slug][0] { ${LISTING_FIELDS} }`,
    { slug },
    { next: { revalidate: 60 } }
  )
}

export async function getAllSlugs(): Promise<string[]> {
  const results = await client.fetch<{ slug: string }[]>(
    `*[_type == "listing"] { "slug": slug.current }`
  )
  return results.map((r) => r.slug)
}
