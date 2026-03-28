import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'acjkye8h',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
})

const listings = [
  {
    id: '1',
    title: 'Elegant Colonial on Maple Street',
    address: '142 Maple Street',
    city: 'Greenwich',
    state: 'CT',
    price: 1850000,
    type: 'house',
    beds: 5,
    baths: 4,
    sqft: 4200,
    imageUrl: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80',
    description: "A timeless colonial home set on a generous half-acre lot in one of Greenwich's most coveted streets. This meticulously maintained five-bedroom residence features a grand foyer with soaring ceilings, a chef's kitchen with marble countertops and top-of-the-line appliances, and a sun-drenched living room with original hardwood floors throughout. The primary suite offers a spa-like bathroom and two walk-in closets. The landscaped backyard includes a stone patio perfect for entertaining. Minutes from town center, top-rated schools, and train access to Manhattan.",
    featured: true,
  },
  {
    id: '2',
    title: 'Modern Glass House with City Views',
    address: '88 Ridgeline Drive',
    city: 'Malibu',
    state: 'CA',
    price: 3250000,
    type: 'house',
    beds: 4,
    baths: 3,
    sqft: 3100,
    imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80',
    description: "An architectural masterpiece perched above the Pacific Coast with sweeping panoramic views. Floor-to-ceiling glass walls blur the boundary between interior and exterior, flooding every room with natural light. The open-plan living and dining area flows seamlessly onto a wraparound deck. The kitchen is outfitted with custom cabinetry and integrated smart appliances. Four thoughtfully designed bedrooms, each with en-suite bathrooms featuring heated floors and designer fixtures. A private infinity pool and outdoor kitchen complete this extraordinary residence. This is California living at its finest.",
    featured: true,
  },
  {
    id: '3',
    title: 'Luxury Estate on the Lake',
    address: '15 Lakeview Terrace',
    city: 'Lake Forest',
    state: 'IL',
    price: 2750000,
    type: 'house',
    beds: 6,
    baths: 5,
    sqft: 5800,
    imageUrl: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80',
    description: "An extraordinary lakefront estate offering unrivaled privacy and breathtaking water views from nearly every room. This six-bedroom masterpiece sits on two acres of manicured grounds with direct lake access and a private dock. The grand interior features a two-story entrance gallery, formal living and dining rooms, a gourmet kitchen, and a wood-paneled library. The lower level includes a home theater, wine cellar, and indoor gym. The primary suite wing features dual bathrooms, dual closets, and a private sitting room with lake views. A rare opportunity in one of Chicago's most prestigious suburbs.",
    featured: true,
  },
  {
    id: '4',
    title: 'Charming Craftsman Bungalow',
    address: '321 Oak Avenue',
    city: 'Pasadena',
    state: 'CA',
    price: 1125000,
    type: 'house',
    beds: 3,
    baths: 2,
    sqft: 1850,
    imageUrl: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&q=80',
    description: "A lovingly restored 1920s Craftsman bungalow in the heart of Pasadena's historic district. Original details abound — built-in bookshelves, box-beam ceilings, a river-rock fireplace, and wide plank hardwood floors — all thoughtfully updated with modern conveniences. The updated kitchen retains its vintage charm while incorporating stainless appliances and quartz countertops. A detached garage with a studio above offers potential as a home office or guest suite. The private garden features a pergola-covered patio, mature fruit trees, and drought-tolerant landscaping. Walk to Old Town Pasadena, the Rose Bowl, and award-winning restaurants.",
    featured: false,
  },
  {
    id: '5',
    title: 'Downtown Penthouse Condo',
    address: '500 Fifth Avenue, Unit 48C',
    city: 'New York',
    state: 'NY',
    price: 4100000,
    type: 'condo',
    beds: 3,
    baths: 3,
    sqft: 2400,
    imageUrl: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    description: "A spectacular full-floor penthouse on the 48th floor of one of Midtown Manhattan's premier residential towers. This three-bedroom, three-bathroom residence offers 360-degree city views through oversized windows that line every facade. The great room features soaring 11-foot ceilings and opens onto a private wraparound terrace with unobstructed views of Central Park and the Manhattan skyline. The chef's kitchen features Miele appliances and custom Italian cabinetry. The primary suite includes a dressing room, spa bath with soaking tub, and direct terrace access. Building amenities include a full-time doorman, concierge, fitness center, and rooftop lounge.",
    featured: false,
  },
  {
    id: '6',
    title: 'Brick Townhouse in Georgetown',
    address: '27 Prospect Street NW',
    city: 'Washington',
    state: 'DC',
    price: 2200000,
    type: 'townhouse',
    beds: 4,
    baths: 3,
    sqft: 3000,
    imageUrl: 'https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=800&q=80',
    description: "A distinguished Federal-style brick townhouse on one of Georgetown's most scenic cobblestone streets. This four-bedroom, three-and-a-half-bathroom home has been sensitively updated to offer the best of historic character and contemporary comfort. The main level features gracious entertaining rooms with crown moldings, a working fireplace, and wide-plank pine floors. The renovated kitchen opens to a private walled garden — a rare urban oasis. The upper floors house four generous bedrooms, including a luxurious primary suite with a spa bathroom and dressing room. One block from the C&O Canal towpath, steps from boutiques and acclaimed restaurants.",
    featured: false,
  },
]

async function seed() {
  console.log('Seeding listings to Sanity...')

  for (const listing of listings) {
    const doc = {
      _type: 'listing',
      _id: `listing-${listing.id}`,
      title: listing.title,
      slug: { _type: 'slug', current: listing.id },
      address: listing.address,
      city: listing.city,
      state: listing.state,
      price: listing.price,
      type: listing.type,
      beds: listing.beds,
      baths: listing.baths,
      sqft: listing.sqft,
      imageUrl: listing.imageUrl,
      description: listing.description,
      featured: listing.featured,
    }

    await client.createOrReplace(doc)
    console.log(`✓ Created: ${listing.title}`)
  }

  console.log('\nDone! All 6 listings seeded to Sanity.')
}

seed().catch((err) => {
  console.error('Seed failed:', err.message)
  process.exit(1)
})
