export default function ScrollStatement() {
  return (
    <div className="py-32 md:py-40">
      {/* Desktop */}
      <h2 className="hidden md:block text-4xl leading-tight lg:text-5xl" style={{ fontWeight: 400 }}>
        <span className="block text-neutral-900">Your next chapter begins</span>
        <span className="block text-neutral-400">with finding a home that truly feels like yours.</span>
      </h2>
      {/* Mobile */}
      <h2 className="text-3xl leading-tight md:hidden" style={{ fontWeight: 400 }}>
        <span className="text-neutral-900">Your next chapter begins </span>
        <span className="text-neutral-400">with finding a home that truly feels like yours.</span>
      </h2>
    </div>
  )
}