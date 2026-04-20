import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useLang } from '../context/LangContext'
import { PROJECTS, AREA_LABEL } from '../data/projects'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const FILTERS = [
  { key: 'all',       it: 'Tutti',        en: 'All' },
  { key: 'fe',        it: 'Frontend',     en: 'Frontend' },
  { key: 'fullstack', it: 'Full-Stack',   en: 'Full-Stack' },
  { key: 'design',    it: 'Web Design',   en: 'Web Design' },
  { key: 'ai',        it: 'AI Developer', en: 'AI Developer' },
]

export default function ProjectsList() {
  const { lang } = useLang()
  const t = (it, en) => (lang === 'it' ? it : en)
  const [filter, setFilter] = useState('all')
  const pageRef = useRef(null)

  const visible = filter === 'all'
    ? PROJECTS
    : PROJECTS.filter(p => p.filters?.includes(filter))

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.work-h1', { y: 56, opacity: 0, duration: 1, ease: 'power3.out' })
      gsap.from('.work-head > div', { y: 32, opacity: 0, duration: 0.8, ease: 'power3.out', delay: 0.2 })
      gsap.from('.work-filter-btn', { y: 16, opacity: 0, duration: 0.5, ease: 'power3.out', stagger: 0.07, delay: 0.35 })
      gsap.from('.proj-card', {
        y: 48, opacity: 0, ease: 'none', stagger: 0.08,
        scrollTrigger: { trigger: '.proj-grid', start: 'top 92%', end: 'top 40%', scrub: 1.2 },
      })
    }, pageRef)
    return () => ctx.revert()
  }, [])

  return (
    <div className="page-enter" ref={pageRef}>

      <section className="work-head">
        <h1 className="work-h1">
          {t('Lavori', 'Work')}
          <span style={{ color: 'var(--accent)', fontStyle: 'italic', fontWeight: 400 }}>.</span>
        </h1>
        <div>
          <div className="mono" style={{ marginBottom: 12 }}>
            — {t('Dal 2019 ad oggi', 'From 2019 to today')}
          </div>
          <p style={{ maxWidth: '44ch', color: 'var(--fg-dim)' }}>
            {t(
              'Una selezione di progetti — interfacce, prodotti, prototipi con AI. Clicca su un progetto per aprirne la scheda.',
              'A selection of projects — interfaces, products, AI-powered prototypes. Click to open the full case.'
            )}
          </p>
        </div>
      </section>

      <div className="work-filters">
        {FILTERS.map(f => (
          <button
            key={f.key}
            className={`work-filter-btn${filter === f.key ? ' active' : ''}`}
            onClick={() => setFilter(f.key)}
          >
            {lang === 'it' ? f.it : f.en}
          </button>
        ))}
      </div>

      <div style={{ padding: '0 var(--pad-x) var(--pad-y)' }}>
        {visible.length === 0 ? (
          <div style={{ paddingTop: 48, color: 'var(--fg-dim)', fontFamily: 'var(--f-mono)', fontSize: 12, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
            {t('Nessun progetto in questa categoria ancora.', 'No projects in this category yet.')}
          </div>
        ) : (
          <div className="proj-grid">
            {visible.map(p => (
              <Link key={p.slug} to={`/projects/${p.slug}`} className="proj-card">
                <div className={`proj-cover cover-tint-${p.area}`}>
                  {p.cover && <img src={p.cover} alt={p.title[lang]} className="proj-cover-img" />}
                  <div className="cover-inner">
                    <div className="cover-topbar">
                      <span className="cover-num">{p.num} · {p.year}</span>
                      <span className="cover-tag">{AREA_LABEL[p.area]}</span>
                    </div>
                    <div className="cover-bottom">
                      <div className="cover-title">{p.title[lang]}<span className="tdot">.</span></div>
                      <div className="cover-desc">{p.desc[lang]}</div>
                    </div>
                  </div>
                  <div className="card-arrow-btn">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <line x1="5" y1="19" x2="19" y2="5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      <polyline points="8,5 19,5 19,16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>

    </div>
  )
}
