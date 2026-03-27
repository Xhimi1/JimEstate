'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Search } from 'lucide-react'

export default function HomeSearchBar() {
  const [value, setValue] = useState('')
  const router = useRouter()

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (value.trim()) {
      router.push(`/listings?search=${encodeURIComponent(value.trim())}`)
    } else {
      router.push('/listings')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex w-full max-w-lg mx-auto">
      <div className="relative flex-1">
        <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400" />
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Search by city, address, or zip..."
          className="w-full bg-white/95 py-4 pl-11 pr-4 text-sm text-neutral-900 placeholder-neutral-400 outline-none focus:bg-white rounded-none border-0"
        />
      </div>
      <button
        type="submit"
        className="bg-white/95 px-6 py-4 text-sm font-medium text-neutral-900 hover:bg-white transition-colors border-l border-neutral-200"
      >
        Search
      </button>
    </form>
  )
}
