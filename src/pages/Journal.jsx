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
      gsap.from('.post-row', {
        y: 28, opacity: 0, ease: 'none', stagger: 0.08,
        scrollTrigger: { trigger: '.post-list', start: 'top 92%', end: 'top 35%', scrub: 1.2 },
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
        <div className="post-list stagger" style={{ paddingBottom: 80 }}>
          {POSTS.map(p => (
            <Link key={p.slug} to={`/journal/${p.slug}`} className="post-row">
              {p.cover && <div className="post-thumb"><img src={p.cover} alt="" /></div>}
              <div className="post-main">
                <span className="post-tag">{p.tag[lang]} · {p.readTime}′</span>
                <div className="post-title">{p.title[lang]}</div>
                <div className="post-excerpt">{p.excerpt[lang]}</div>
              </div>
              <span className="post-date">{formatDate(p.date, lang)}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
