import { useEffect } from 'react'

interface Props {
  schema: Record<string, unknown>
}

export default function JsonLd({ schema }: Props) {
  useEffect(() => {
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.text = JSON.stringify(schema)
    script.id = 'json-ld-schema'
    const existing = document.getElementById('json-ld-schema')
    if (existing) existing.remove()
    document.head.appendChild(script)
    return () => { document.getElementById('json-ld-schema')?.remove() }
  }, [schema])
  return null
}
