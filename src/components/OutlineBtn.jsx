import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'

export default function OutlineBtn({ to, href, label, magnetic = false }) {
  const btnRef = useRef(null)

  useEffect(() => {
    if (!magnetic) return
    if (!window.matchMedia('(hover: hover)').matches) return
    const btn = btnRef.current
    if (!btn) return

    const onMove = (e) => {
      const { left, top, width, height } = btn.getBoundingClientRect()
      gsap.to(btn, {
        x: (e.clientX - (left + width / 2)) * 0.22,
        y: (e.clientY - (top + height / 2)) * 0.22,
        duration: 0.4,
        ease: 'power3.out',
      })
    }
    const onLeave = () => {
      gsap.to(btn, { x: 0, y: 0, duration: 0.7, ease: 'elastic.out(1, 0.35)' })
    }

    btn.addEventListener('mousemove', onMove)
    btn.addEventListener('mouseleave', onLeave)
    return () => {
      btn.removeEventListener('mousemove', onMove)
      btn.removeEventListener('mouseleave', onLeave)
    }
  }, [magnetic])

  const inner = (
    <>
      {label}
      <span className="cta-arrow-circle cta-arrow-circle--outline">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="5" y1="19" x2="19" y2="5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <polyline points="8,5 19,5 19,16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </span>
    </>
  )

  const cls = 'btn-cta-outline'

  if (href) return (
    <a href={href} className={cls} ref={btnRef}>{inner}</a>
  )

  return (
    <Link to={to} className={cls} ref={btnRef}>{inner}</Link>
  )
}
