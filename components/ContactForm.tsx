'use client'

import { useState } from 'react'

interface ContactFormProps {
  listingTitle: string
}

export default function ContactForm({ listingTitle }: ContactFormProps) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState(
    `Hi, I am interested in "${listingTitle}" and would like to schedule a showing.`
  )
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    // In a real app this would POST to an API
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="rounded-md border border-stone-200 p-6">
        <h3 className="mb-2 text-lg font-semibold text-black">
          Request Received
        </h3>
        <p className="text-sm text-stone-600">
          Thank you, {name}. One of our agents will contact you at {email}{' '}
          within one business day to confirm your showing.
        </p>
      </div>
    )
  }

  return (
    <div className="rounded-md border border-stone-200 p-6">
      <h3 className="mb-1 text-lg font-semibold text-black">
        Request a Showing
      </h3>
      <p className="mb-6 text-sm text-stone-500">
        Fill out the form below and an agent will be in touch shortly.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="name"
            className="mb-1 block text-xs font-medium text-stone-500"
          >
            Full Name
          </label>
          <input
            id="name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Jane Smith"
            className="w-full border border-stone-300 bg-white px-3 py-2.5 text-sm text-black placeholder-stone-400 outline-none focus:border-stone-900 rounded-md"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="mb-1 block text-xs font-medium text-stone-500"
          >
            Email Address
          </label>
          <input
            id="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="jane@example.com"
            className="w-full border border-stone-300 bg-white px-3 py-2.5 text-sm text-black placeholder-stone-400 outline-none focus:border-stone-900 rounded-md"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="mb-1 block text-xs font-medium text-stone-500"
          >
            Message
          </label>
          <textarea
            id="message"
            rows={5}
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full border border-stone-300 bg-white px-3 py-2.5 text-sm text-black placeholder-stone-400 outline-none focus:border-stone-900 rounded-md resize-none"
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-md border border-stone-900 bg-stone-900 py-3 text-sm font-medium text-white hover:bg-stone-800"
        >
          Request Showing
        </button>
      </form>
    </div>
  )
}
