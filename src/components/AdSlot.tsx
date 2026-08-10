import { useEffect, useRef } from 'react'

interface AdSlotProps {
  slotId: string
  format?: 'horizontal' | 'rectangle' | 'responsive'
  className?: string
}

declare global {
  interface Window {
    adsbygoogle: unknown[]
  }
}

export default function AdSlot({ slotId, format = 'responsive', className = '' }: AdSlotProps) {
  const ref = useRef<HTMLModElement>(null)
  const initialized = useRef(false)

  useEffect(() => {
    if (initialized.current) return
    initialized.current = true
    try {
      ;(window.adsbygoogle = window.adsbygoogle || []).push({})
    } catch {}
  }, [])

  const sizeClass =
    format === 'horizontal'
      ? 'min-h-[90px]'
      : format === 'rectangle'
        ? 'min-h-[250px]'
        : 'min-h-[100px]'

  return (
    <div className={`w-full flex justify-center my-6 ${className}`}>
      <ins
        ref={ref}
        className={`adsbygoogle block w-full ${sizeClass}`}
        style={{ display: 'block' }}
        data-ad-client="ca-pub-2450379323335949"
        data-ad-slot={slotId}
        data-ad-format={format === 'responsive' ? 'auto' : format}
        data-full-width-responsive="true"
      />
    </div>
  )
}
