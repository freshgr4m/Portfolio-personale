import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { gsap } from 'gsap'

const SIZE = 64
const DEFAULT_SCALE = 0.375  // 64 * 0.375 = 24px visually

export default function Cursor() {
  const ref = useRef(null)
  const location = useLocation()

  useEffect(() => {
    const el = ref.current
    if (!el) return
    el.classList.remove('cursor--card', 'cursor--journal')
    gsap.to(el, { scale: DEFAULT_SCALE, duration: 0.3, ease: 'power3.out' })
  }, [location.pathname])

  useEffect(() => {
    const el = ref.current
    const half = SIZE / 2

    gsap.set(el, { scale: DEFAULT_SCALE })

    const xTo = gsap.quickTo(el, 'x', { duration: 0.08, ease: 'power2.out' })
    const yTo = gsap.quickTo(el, 'y', { duration: 0.08, ease: 'power2.out' })

    const move = (e) => {
      xTo(e.clientX - half)
      yTo(e.clientY - half)
    }
    window.addEventListener('mousemove', move)

    const onCardEnter = () => {
      el.classList.add('cursor--card')
      gsap.to(el, { scale: 1, duration: 0.35, ease: 'power3.out' })
    }
    const onCardLeave = () => {
      el.classList.remove('cursor--card')
      gsap.to(el, { scale: DEFAULT_SCALE, duration: 0.3, ease: 'power3.out' })
    }

    const onJournalEnter = () => {
      el.classList.add('cursor--journal')
      gsap.to(el, { scale: 1, duration: 0.35, ease: 'power3.out' })
    }
    const onJournalLeave = () => {
      el.classList.remove('cursor--journal')
      gsap.to(el, { scale: DEFAULT_SCALE, duration: 0.3, ease: 'power3.out' })
    }

    const onPhotoEnter = () => {
      gsap.to(el, { scale: DEFAULT_SCALE, duration: 0.3, ease: 'power3.out' })
    }
    const onPhotoLeave = () => {
      gsap.to(el, { scale: DEFAULT_SCALE, duration: 0.3, ease: 'power3.out' })
    }

    const attach = () => {
      document.querySelectorAll('.proj-cover, .work-proj-row, .post-row').forEach(card => {
        card.removeEventListener('mouseenter', onCardEnter)
        card.removeEventListener('mouseleave', onCardLeave)
        card.addEventListener('mouseenter', onCardEnter)
        card.addEventListener('mouseleave', onCardLeave)
      })
      document.querySelectorAll('.jp-card').forEach(card => {
        card.removeEventListener('mouseenter', onJournalEnter)
        card.removeEventListener('mouseleave', onJournalLeave)
        card.addEventListener('mouseenter', onJournalEnter)
        card.addEventListener('mouseleave', onJournalLeave)
      })
      document.querySelectorAll('.about-photo').forEach(el => {
        el.removeEventListener('mouseenter', onPhotoEnter)
        el.removeEventListener('mouseleave', onPhotoLeave)
        el.addEventListener('mouseenter', onPhotoEnter)
        el.addEventListener('mouseleave', onPhotoLeave)
      })
    }
    attach()
    const obs = new MutationObserver(attach)
    obs.observe(document.body, { childList: true, subtree: true })

    return () => {
      window.removeEventListener('mousemove', move)
      obs.disconnect()
    }
  }, [])

  return (
    <div className="custom-cursor" ref={ref}>
      <svg className="cursor-arrow" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="5" y1="19" x2="19" y2="5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <polyline points="8,5 19,5 19,16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
  )
}
