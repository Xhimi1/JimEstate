import type { Metadata } from 'next'
import ScrollStatement from '@/components/ScrollStatement'
import ScrollHero from '@/components/ScrollHero'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About | JimsEstate',
  description:
    'Learn about JimsEstate — a boutique real estate agency dedicated to connecting buyers with exceptional properties.',
}

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <ScrollHero
        image="https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1600&q=80"
        alt="About JimsEstate"
        height="h-[70vh] min-h-[500px]"
        initialOpacity={0.5}
      >
        <div className="relative z-10 flex h-full items-end w-full px-6 pb-16 md:pb-20">
          <div className="mx-auto w-full max-w-7xl">
            <h1 className="text-4xl leading-tight text-white md:text-5xl lg:text-6xl" style={{ fontWeight: 350 }}>
              About JimsEstate
            </h1>
          </div>
        </div>
      </ScrollHero>

      <div className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          {/* Two Column Layout */}
          <div className="mb-4 md:mb-24 grid grid-cols-1 gap-4 lg:gap-16 lg:grid-cols-2">
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
          <div className="mb-0 grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=900&q=80"
                alt="Property interior"
                className="h-72 w-full object-cover"
              />
            </div>
            <div className="overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=900&q=80"
                alt="Property living space"
                className="h-72 w-full object-cover"
              />
            </div>
          </div>

          {/* Scroll Statement */}
          <ScrollStatement />

          {/* Contact & Team */}
          <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
            <div className="rounded-lg bg-neutral-100 p-8">
              <h2 className="mb-8 text-3xl font-semibold text-neutral-900">
                Get in Touch
              </h2>
              <p className="mb-8 text-neutral-500">
                Ready to start your search? We would love to hear from you.
                Reach out and one of our agents will be in touch within one
                business day.
              </p>
              <div className="space-y-8">
                {[
                  { icon: Phone, value: '(203) 555-0182', href: 'tel:+12035550182' },
                  { icon: Mail, value: 'hello@jimsestate.com', href: 'mailto:hello@jimsestate.com' },
                  { icon: MapPin, value: '44 Greenwich Avenue\nGreenwich, CT 06830', href: 'https://maps.google.com/?q=44+Greenwich+Avenue+Greenwich+CT+06830' },
                  { icon: Clock, value: 'Mon – Fri, 9 am – 6 pm\nSaturday, 10 am – 4 pm', href: null },
                ].map(({ icon: Icon, value, href }) => (
                  <div key={value} className="flex items-start gap-4">
                    <Icon size={18} className="mt-0.5 shrink-0 text-neutral-900" />
                    {href ? (
                      <a
                        href={href}
                        target={href.startsWith('http') ? '_blank' : undefined}
                        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-neutral-800 whitespace-pre-line underline underline-offset-4 decoration-neutral-300 hover:decoration-neutral-900 transition-colors duration-150 cursor-pointer"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-neutral-800 whitespace-pre-line">{value}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-neutral-100 p-8">
              <h2 className="mb-8 text-3xl font-semibold text-neutral-900">
                Our Principals
              </h2>
              <div className="space-y-4">
                {[
                  {
                    name: 'Jim Hargreaves',
                    role: 'Founder & Principal Broker',
                    bio: 'Licensed in CT, NY, and NJ with over fifteen years of experience in luxury residential real estate.',
                    photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&q=80',
                  },
                  {
                    name: 'Sarah Calloway',
                    role: 'Senior Agent',
                    bio: 'Specializing in waterfront and historic properties across Fairfield County and the Hudson Valley.',
                    photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&q=80',
                  },
                  {
                    name: 'Marcus Webb',
                    role: "Buyer's Specialist",
                    bio: 'Dedicated to helping first-time and move-up buyers navigate competitive markets with confidence.',
                    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80',
                  },
                ].map((person) => (
                  <div key={person.name} className="flex gap-5 rounded-lg border border-neutral-200 bg-white p-5">
                    <img
                      src={person.photo}
                      alt={person.name}
                      className="h-20 w-20 shrink-0 rounded-lg object-cover object-top"
                    />
                    <div>
                      <p className="mb-0.5 text-lg font-semibold text-neutral-900">{person.name}</p>
                      <p className="mb-2 text-xs font-medium tracking-widest text-neutral-400">
                        {person.role}
                      </p>
                      <p className="text-sm text-neutral-500">{person.bio}</p>
                    </div>
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
