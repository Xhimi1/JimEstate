'use client'

import { Filters, TypeFilter, BedFilter } from '@/app/listings/page'

interface FilterBarProps {
  filters: Filters
  onChange: (filters: Filters) => void
}

const typeOptions: { value: TypeFilter; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'house', label: 'House' },
  { value: 'condo', label: 'Condo' },
  { value: 'townhouse', label: 'Townhouse' },
]

const bedOptions: { value: BedFilter; label: string }[] = [
  { value: 'any', label: 'Any' },
  { value: '2+', label: '2+' },
  { value: '3+', label: '3+' },
  { value: '4+', label: '4+' },
]

export default function FilterBar({ filters, onChange }: FilterBarProps) {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8">
      {/* Type Filter */}
      <div className="flex items-center gap-3">
        <span className="text-xs font-medium uppercase tracking-widest text-neutral-400">
          Type
        </span>
        <div className="flex">
          {typeOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => onChange({ ...filters, type: option.value })}
              className={`px-3.5 py-2 text-xs font-medium border-t border-b border-r first:border-l transition-colors ${
                filters.type === option.value
                  ? 'bg-neutral-900 text-white border-neutral-900'
                  : 'bg-white text-neutral-600 border-neutral-200 hover:border-neutral-500 hover:text-neutral-900'
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>

      {/* Beds Filter */}
      <div className="flex items-center gap-3">
        <span className="text-xs font-medium uppercase tracking-widest text-neutral-400">
          Beds
        </span>
        <div className="flex">
          {bedOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => onChange({ ...filters, beds: option.value })}
              className={`px-3.5 py-2 text-xs font-medium border-t border-b border-r first:border-l transition-colors ${
                filters.beds === option.value
                  ? 'bg-neutral-900 text-white border-neutral-900'
                  : 'bg-white text-neutral-600 border-neutral-200 hover:border-neutral-500 hover:text-neutral-900'
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
