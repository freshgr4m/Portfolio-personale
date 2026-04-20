import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'

const ArrowCircle = () => (
  <span className="cta-arrow-circle">
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line x1="5" y1="19" x2="19" y2="5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <polyline points="8,5 19,5 19,16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  </span>
)

export default function CtaRow({
  primaryHref    = 'mailto:hello@francescomancino.dev',
  primaryLabel   = 'Scrivimi',
  secondaryTo    = '/projects',
  secondaryLabel = 'Vedi i lavori',
  className      = '',
}) {
  const btnRef = useRef(null)

  useEffect(() => {
    if (!window.matchMedia('(hover: hover)').matches) return
    const btn = btnRef.current
    if (!btn) return

    const onMove = (e) => {
      const { left, top, width, height } = btn.getBoundingClientRect()
      gsap.to(btn, {
        x: (e.clientX - (left + width / 2)) * 0.28,
        y: (e.clientY - (top + height / 2)) * 0.28,
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
  }, [])

  return (
    <div className={`hero-v2-cta-row${className ? ' ' + className : ''}`}>
      <a href={primaryHref} className="hero-cta-primary" ref={btnRef}>
        {primaryLabel}
        <ArrowCircle />
      </a>
      <Link to={secondaryTo} className="hero-cta-secondary hero-cta-secondary--home">
        <span className="cta-slide">
          <span className="cta-slide-a">{secondaryLabel}</span>
          <span className="cta-slide-b">{secondaryLabel}</span>
        </span>
        <ArrowCircle />
      </Link>
    </div>
  )
}
