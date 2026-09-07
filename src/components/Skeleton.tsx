export function SkeletonBlock({ className = '' }: { className?: string }) {
  return <div className={`bg-surface-container-high rounded-lg animate-pulse ${className}`} />
}

export function SkeletonRagaCard() {
  return (
    <div className="rounded-2xl border border-outline-variant p-4 space-y-2">
      <SkeletonBlock className="h-3 w-16" />
      <SkeletonBlock className="h-5 w-32" />
      <SkeletonBlock className="h-3 w-24" />
    </div>
  )
}

export function SkeletonDetailHero() {
  return (
    <div className="h-72 md:h-96 bg-surface-container-high animate-pulse rounded-b-none" />
  )
}

export function SkeletonLibraryRow() {
  return (
    <tr className="border-t border-outline-variant">
      <td className="px-4 py-3"><SkeletonBlock className="h-4 w-32" /></td>
      <td className="px-4 py-3 hidden sm:table-cell"><SkeletonBlock className="h-4 w-20" /></td>
      <td className="px-4 py-3 hidden md:table-cell"><SkeletonBlock className="h-4 w-20" /></td>
      <td className="px-4 py-3 hidden lg:table-cell"><SkeletonBlock className="h-4 w-28" /></td>
      <td className="px-4 py-3 text-right"><SkeletonBlock className="h-4 w-8 ml-auto" /></td>
    </tr>
  )
}

export function PageSkeleton() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10 space-y-6 animate-pulse">
      <SkeletonBlock className="h-8 w-48" />
      <SkeletonBlock className="h-4 w-80" />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
        {Array.from({ length: 6 }).map((_, i) => (
          <SkeletonRagaCard key={i} />
        ))}
      </div>
    </div>
  )
}
