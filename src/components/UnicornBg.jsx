import { useEffect } from 'react'

export default function UnicornBg({ opacity = 0.6 }) {
  useEffect(() => {
    const existing = document.querySelector('script[src*="unicornStudio"]')
    if (!existing) {
      const s = document.createElement('script')
      s.src = 'https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.1.9/dist/unicornStudio.umd.js'
      s.onload = () => window.UnicornStudio?.init()
      document.head.appendChild(s)
    } else {
      window.UnicornStudio?.init()
    }
  }, [])

  return (
    <div
      className="hero-unicorn-bg"
      data-us-project="sKXpi0I3eKE5hKKGP247"
      aria-hidden="true"
      style={{ opacity }}
    />
  )
}
