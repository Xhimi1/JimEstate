'use client'

import { useState } from 'react'
import { Search } from 'lucide-react'

interface SearchBarProps {
  onSearch: (query: string) => void
  defaultValue?: string
  placeholder?: string
}

export default function SearchBar({
  onSearch,
  defaultValue = '',
  placeholder = 'Search by city, address, or zip...',
}: SearchBarProps) {
  const [value, setValue] = useState(defaultValue)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    onSearch(value)
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value)
    onSearch(e.target.value)
  }

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="relative">
        <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400" />
        <input
          type="text"
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          className="w-full border border-neutral-200 bg-white py-3.5 pl-11 pr-4 text-sm text-neutral-900 placeholder-neutral-400 outline-none focus:border-neutral-900 rounded-none transition-colors"
        />
      </div>
    </form>
  )
}
