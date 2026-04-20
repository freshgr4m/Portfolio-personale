import { useEffect, useRef } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useLang } from '../context/LangContext'
import { PROJECTS, AREA_LABEL } from '../data/projects'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function ProjectDetail() {
  const { slug } = useParams()
  const { lang } = useLang()
  const t = (it, en) => (lang === 'it' ? it : en)
  const pageRef = useRef(null)
  const heroImgRef = useRef(null)

  const idx = PROJECTS.findIndex(p => p.slug === slug)
  const p = PROJECTS[idx]
  const next = p ? PROJECTS[(idx + 1) % PROJECTS.length] : null

  useEffect(() => {
    if (!p) return
    const ctx = gsap.context(() => {
      // title reveal
      gsap.set('.pd-title-word', { yPercent: 110 })
      gsap.set('.pd-meta-strip', { opacity: 0, y: 20 })
      gsap.set('.pd-desc', { opacity: 0, y: 24 })

      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } })
      tl.to('.pd-title-word', { yPercent: 0, duration: 1, stagger: 0.1 }, 0.1)
        .to('.pd-meta-strip', { opacity: 1, y: 0, duration: 0.7 }, 0.5)
        .to('.pd-desc', { opacity: 1, y: 0, duration: 0.7 }, 0.65)

      // hero image parallax
      if (heroImgRef.current) {
        gsap.to(heroImgRef.current, {
          yPercent: 15,
          ease: 'none',
          scrollTrigger: {
            trigger: '.pd-hero-img',
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        })
      }

      // scroll reveals
      gsap.from('.pd-info-col', { opacity: 0, y: 40, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: '.pd-content', start: 'top 85%', once: true }
      })
      gsap.from('.pd-body-col', { opacity: 0, y: 40, duration: 0.8, ease: 'power3.out', delay: 0.1,
        scrollTrigger: { trigger: '.pd-content', start: 'top 85%', once: true }
      })
      gsap.from('.pd-next-row', { opacity: 0, y: 32, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: '.pd-next-row', start: 'top 90%', once: true }
      })
    }, pageRef)
    return () => ctx.revert()
  }, [p])

  if (!p) return (
    <div className="nf page-enter">
      <div>
        <h1>404</h1>
        <p className="mono">{t('Progetto non trovato', 'Project not found')}</p>
        <Link to="/projects" className="mono" style={{ color: 'var(--accent)', marginTop: 20, display: 'inline-block' }}>
          ← {t('Torna ai lavori', 'Back to work')}
        </Link>
      </div>
    </div>
  )

  return (
    <div className="page-enter" ref={pageRef}>

      {/* ── HEADER ── */}
      <div className="pd-header wrap">
        <Link to="/projects" className="pd-back">← {t('Tutti i lavori', 'All work')}</Link>
        <div className="pd-title-wrap">
          {p.title[lang].split(' ').map((word, i) => (
            <div key={i} className="pd-title-clip">
              <span className="pd-title-word">{word}</span>
            </div>
          ))}
          <div className="pd-title-clip">
            <span className="pd-title-word"><span className="tdot">.</span></span>
          </div>
        </div>
        <div className="pd-meta-strip">
          <span className="pd-meta-item">{p.num} / {String(PROJECTS.length).padStart(2, '0')}</span>
          <span className="pd-meta-sep">—</span>
          <span className="pd-meta-item">{p.year}</span>
          <span className="pd-meta-sep">—</span>
          <span className="pd-meta-item">{p.role[lang]}</span>
          <span className="pd-meta-sep">—</span>
          <span className="pd-meta-item pd-meta-area">{AREA_LABEL[p.area]}</span>
        </div>
        <p className="pd-desc">{p.desc[lang]}</p>
      </div>

      {/* ── HERO IMAGE ── */}
      {p.cover && (
        <div className="pd-hero-img">
          <img src={p.cover} alt={p.title[lang]} ref={heroImgRef} />
        </div>
      )}

      {/* ── CONTENT ── */}
      <div className="pd-content wrap">
        <div className="pd-info-col">
          <div className="pd-label">{t('Stack', 'Stack')}</div>
          <div className="pd-stack">
            {p.stack.map(s => <span key={s} className="pd-chip">{s}</span>)}
          </div>
          <div className="pd-info-row">
            <div className="pd-label">{t('Ruolo', 'Role')}</div>
            <div className="pd-info-val">{p.role[lang]}</div>
          </div>
          <div className="pd-info-row">
            <div className="pd-label">{t('Anno', 'Year')}</div>
            <div className="pd-info-val">{p.year}</div>
          </div>
          <div className="pd-info-row">
            <div className="pd-label">{t('Area', 'Area')}</div>
            <div className="pd-info-val">{AREA_LABEL[p.area]}</div>
          </div>
        </div>

        <div className="pd-body-col">
          <div className="pd-label">{t('Overview', 'Overview')}</div>
          <p className="pd-long">{p.longDesc[lang]}</p>
        </div>
      </div>

      {/* ── NEXT PROJECT ── */}
      {next && (
        <div className="wrap">
          <Link to={`/projects/${next.slug}`} className="pd-next-row">
            <div>
              <div className="pd-next-label">{t('Prossimo progetto', 'Next project')}</div>
              <div className="pd-next-title">{next.title[lang]}<span className="tdot">.</span></div>
            </div>
            <span className="pd-next-arrow">
              <svg viewBox="0 0 24 24" fill="none" width="20" height="20">
                <line x1="5" y1="19" x2="19" y2="5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <polyline points="8,5 19,5 19,16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </Link>
        </div>
      )}

    </div>
  )
}
