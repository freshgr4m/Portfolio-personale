import { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { useLang } from '../context/LangContext'
import { POSTS } from '../data/posts'
import { formatDate } from '../utils/formatDate'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)


export default function Journal() {
  const { lang } = useLang()
  const t = (it, en) => (lang === 'it' ? it : en)
  const pageRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.work-h1', { y: 56, opacity: 0, duration: 1, ease: 'power3.out' })
      gsap.from('.work-head > div', { y: 32, opacity: 0, duration: 0.8, ease: 'power3.out', delay: 0.2 })

      gsap.set('.post-row', { y: 60, opacity: 0, skewY: 2 })
      ScrollTrigger.create({
        trigger: '.post-list',
        start: 'top 88%',
        once: true,
        onEnter: () => {
          gsap.to('.post-row', {
            y: 0, opacity: 1, skewY: 0,
            duration: 0.7,
            ease: 'power3.out',
            stagger: 0.1,
          })
        },
      })
    }, pageRef)
    return () => ctx.revert()
  }, [])

  return (
    <div className="page-enter" ref={pageRef}>
      <section className="work-head">
        <h1 className="work-h1">
          Journal
          <span style={{ color: 'var(--accent)', fontStyle: 'italic', fontWeight: 400 }}>.</span>
        </h1>
        <div>
          <div className="mono" style={{ marginBottom: 12 }}>
            — {t('Note & esperimenti', 'Notes & experiments')}
          </div>
          <p style={{ maxWidth: '40ch', color: 'var(--fg-dim)' }}>
            {t(
              'Appunti su frontend, design system e integrazione AI. Pubblico quando ho qualcosa di utile da dire — non di più.',
              'Notes on frontend, design systems and AI integration. I publish when I have something useful to say — nothing more.'
            )}
          </p>
        </div>
      </section>
      <div className="wrap">
        <div className="post-list" style={{ paddingBottom: 80 }}>
          {POSTS.map(p => (
            <Link key={p.slug} to={`/journal/${p.slug}`} className="post-row">
              <div className="post-row-top">
                <span className="jp-meta">{formatDate(p.date, lang)} · {p.readTime}′ {t('lettura', 'read')}</span>
                <span className="jp-tag">{p.tag[lang]}</span>
              </div>
              <div className="post-row-title">{p.title[lang]}</div>
              <div className="post-row-excerpt">{p.excerpt[lang]}</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
