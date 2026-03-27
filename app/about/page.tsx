import type { Metadata } from 'next'
import StatsCounter from '@/components/StatsCounter'

export const metadata: Metadata = {
  title: 'About | JimsEstate',
  description:
    'Learn about JimsEstate — a boutique real estate agency dedicated to connecting buyers with exceptional properties.',
}

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative flex h-[70vh] min-h-[500px] items-end overflow-hidden"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1600&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 w-full px-6 pb-16 md:pb-20">
          <div className="mx-auto max-w-7xl">
            <h1 className="text-4xl leading-tight text-white md:text-5xl lg:text-6xl" style={{ fontWeight: 350 }}>
              About JimsEstate
            </h1>
          </div>
        </div>
      </section>

      <div className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          {/* Two Column Layout */}
          <div className="mb-24 grid grid-cols-1 gap-16 lg:grid-cols-2">
            {/* Left: Text */}
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-neutral-600">
                JimsEstate is a boutique real estate agency founded on a simple
                belief: that finding a home should be a personal, unhurried
                experience. We curate a small selection of exceptional properties
                and work closely with each client to find the right fit — not just
                the fastest sale.
              </p>
              <p className="text-lg leading-relaxed text-neutral-600">
                Over the past decade, we have helped more than fifty families find
                homes they love across some of the most sought-after neighborhoods
                in the country. From historic brownstones to modern lakefront
                estates, our portfolio reflects an unwavering commitment to
                quality, character, and craftsmanship.
              </p>
              <p className="text-lg leading-relaxed text-neutral-600">
                Our approach is different. We take on fewer clients so we can give
                each one our full attention. We get to know what matters to you —
                the school district, the commute, the morning light in the kitchen
                — and we do not stop searching until we find it.
              </p>
            </div>

            {/* Right: Image */}
            <div className="overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=900&q=80"
                alt="JimsEstate office"
                className="h-full min-h-[400px] w-full object-cover"
              />
            </div>
          </div>

          {/* Two Images */}
          <div className="mb-24 grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=900&q=80"
                alt="Property interior"
                className="h-72 w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div className="overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=900&q=80"
                alt="Property living space"
                className="h-72 w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>

          {/* Stats Row */}
          <div className="mb-24 border-t border-b border-neutral-100 py-14">
            <StatsCounter />
          </div>

          {/* Contact & Team */}
          <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
            <div className="bg-neutral-100 p-8">
              <h2 className="mb-8 text-3xl font-semibold text-neutral-900">
                Get in Touch
              </h2>
              <p className="mb-8 text-neutral-500">
                Ready to start your search? We would love to hear from you.
                Reach out and one of our agents will be in touch within one
                business day.
              </p>
              <div className="space-y-5">
                {[
                  { label: 'Phone', value: '(203) 555-0182' },
                  { label: 'Email', value: 'hello@jimsestate.com' },
                  { label: 'Office', value: '44 Greenwich Avenue\nGreenwich, CT 06830' },
                  { label: 'Hours', value: 'Mon – Fri, 9 am – 6 pm\nSaturday, 10 am – 4 pm' },
                ].map((item) => (
                  <div key={item.label}>
                    <p className="text-xs font-medium text-neutral-400">
                      {item.label}
                    </p>
                    <p className="mt-1.5 text-neutral-800 whitespace-pre-line">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="mb-8 text-3xl font-semibold text-neutral-900">
                Our Principals
              </h2>
              <div className="space-y-8">
                {[
                  {
                    name: 'Jim Hargreaves',
                    role: 'Founder & Principal Broker',
                    bio: 'Licensed in CT, NY, and NJ with over fifteen years of experience in luxury residential real estate.',
                  },
                  {
                    name: 'Sarah Calloway',
                    role: 'Senior Agent',
                    bio: 'Specializing in waterfront and historic properties across Fairfield County and the Hudson Valley.',
                  },
                  {
                    name: 'Marcus Webb',
                    role: "Buyer's Specialist",
                    bio: 'Dedicated to helping first-time and move-up buyers navigate competitive markets with confidence.',
                  },
                ].map((person) => (
                  <div key={person.name} className="border-l-2 border-neutral-200 pl-5">
                    <p className="mb-0.5 font-semibold text-neutral-900">{person.name}</p>
                    <p className="mb-2 text-xs font-medium lowercase tracking-widest text-neutral-400">
                      {person.role}
                    </p>
                    <p className="text-sm text-neutral-500">{person.bio}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
