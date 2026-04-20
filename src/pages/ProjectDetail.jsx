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

  const idx = PROJECTS.findIndex(p => p.slug === slug)
  const p = PROJECTS[idx]
  const next = p ? PROJECTS[(idx + 1) % PROJECTS.length] : null

  useEffect(() => {
    if (!p) return
    const ctx = gsap.context(() => {
      gsap.set('.pd-title-word', { yPercent: 110 })
      gsap.set('.pd-header-tag', { opacity: 0, y: 10 })
      gsap.set('.pd-meta-row', { opacity: 0, y: 14 })
      gsap.set('.pd-brief', { opacity: 0, y: 18 })

      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } })
      tl.to('.pd-header-tag', { opacity: 1, y: 0, duration: 0.5 }, 0.05)
        .to('.pd-title-word', { yPercent: 0, duration: 1, stagger: 0.09 }, 0.15)
        .to('.pd-meta-row',  { opacity: 1, y: 0, duration: 0.6 }, 0.55)
        .to('.pd-brief',     { opacity: 1, y: 0, duration: 0.6 }, 0.68)

      gsap.from('.pd-gal-main', {
        opacity: 0, y: 44, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: '.pd-gallery', start: 'top 88%', once: true },
      })
      gsap.from('.pd-gal-side', {
        opacity: 0, y: 44, duration: 1, ease: 'power3.out', delay: 0.12,
        scrollTrigger: { trigger: '.pd-gallery', start: 'top 88%', once: true },
      })
      gsap.from('.pd-gal-row img', {
        opacity: 0, y: 36, duration: 0.8, ease: 'power3.out', stagger: 0.1,
        scrollTrigger: { trigger: '.pd-gal-row', start: 'top 88%', once: true },
      })
      gsap.from('.pd-info-col', {
        opacity: 0, y: 36, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: '.pd-content', start: 'top 85%', once: true },
      })
      gsap.from('.pd-body-col', {
        opacity: 0, y: 36, duration: 0.8, ease: 'power3.out', delay: 0.1,
        scrollTrigger: { trigger: '.pd-content', start: 'top 85%', once: true },
      })
      gsap.from('.pd-next-row', {
        opacity: 0, y: 28, duration: 0.7, ease: 'power3.out',
        scrollTrigger: { trigger: '.pd-next-row', start: 'top 90%', once: true },
      })
    }, pageRef)
    return () => ctx.revert()
  }, [p])

  if (!p) return (
    <div className="nf page-enter">
      <div>
        <h1>404</h1>
        <p className="mono">{t('Progetto non trovato', 'Project not found')}</p>
        <Link to="/projects" style={{ color: 'var(--accent)', marginTop: 20, display: 'inline-block' }} className="mono">
          ← {t('Torna ai lavori', 'Back to work')}
        </Link>
      </div>
    </div>
  )

  const imgs = p.images?.length ? p.images : p.cover ? [p.cover] : []

  return (
    <div className="page-enter" ref={pageRef}>

      {/* ── HEADER ── */}
      <div className="pd-header wrap">
        <Link to="/projects" className="pd-back">← {t('Tutti i lavori', 'All work')}</Link>

        <div className="pd-header-top">
          <span className="section-num">N° {p.num}</span>
          <span className="pd-header-tag cover-tag">{AREA_LABEL[p.area]}</span>
        </div>

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

        <div className="pd-meta-row">
          <span className="mono">{p.year}</span>
          <span className="pd-meta-sep mono">·</span>
          <span className="mono">{p.role[lang]}</span>
          <span className="pd-meta-sep mono">·</span>
          <span className="mono" style={{ color: 'var(--accent)' }}>{AREA_LABEL[p.area]}</span>
        </div>

        <p className="pd-brief">{p.desc[lang]}</p>
      </div>

      {/* ── GALLERY 5 IMMAGINI ── */}
      {imgs.length > 0 && (
        <div className="pd-gallery wrap">
          {/* Riga 1: immagine grande + 1 laterale */}
          <div className="pd-gal-top">
            <div className="pd-gal-main">
              <img src={imgs[0]} alt={p.title[lang]} />
            </div>
            {imgs[1] && (
              <div className="pd-gal-side">
                <img src={imgs[1]} alt={`${p.title[lang]} 2`} />
              </div>
            )}
          </div>

          {/* Riga 2: 3 immagini uguali */}
          {imgs.slice(2, 5).length > 0 && (
            <div className="pd-gal-row">
              {imgs.slice(2, 5).map((src, i) => (
                <img key={i} src={src} alt={`${p.title[lang]} ${i + 3}`} />
              ))}
            </div>
          )}
        </div>
      )}

      {/* ── CONTENT ── */}
      <div className="pd-content wrap">

        {/* Colonna sinistra: info + stack + cta */}
        <div className="pd-info-col">
          <div className="pd-info-block">
            <span className="mono pd-label-sm">{t('Stack', 'Stack')}</span>
            <div className="pd-stack">
              {p.stack.map(s => <span key={s} className="stack-pill">{s}</span>)}
            </div>
          </div>

          <div className="pd-info-block">
            <span className="mono pd-label-sm">{t('Ruolo', 'Role')}</span>
            <div className="pd-info-val">{p.role[lang]}</div>
          </div>

          <div className="pd-info-block">
            <span className="mono pd-label-sm">{t('Anno', 'Year')}</span>
            <div className="pd-info-val">{p.year}</div>
          </div>

          <div className="pd-info-block">
            <span className="mono pd-label-sm">{t('Area', 'Area')}</span>
            <div className="pd-info-val">{AREA_LABEL[p.area]}</div>
          </div>

          <div className="pd-ctas">
            <a href="mailto:hello@francescomancino.dev" className="hero-cta-primary">
              {t('Scrivimi', 'Get in touch')} ↗
            </a>
            <Link to="/projects" className="hero-cta-secondary">
              {t('Tutti i lavori', 'All work')}
            </Link>
          </div>
        </div>

        {/* Colonna destra: overview */}
        <div className="pd-body-col">
          <span className="mono pd-label-sm">{t('Il Progetto', 'The Project')}</span>
          <p className="pd-long">{p.longDesc[lang]}</p>
        </div>

      </div>

      {/* ── NEXT PROJECT ── */}
      {next && (
        <div className="wrap">
          <Link to={`/projects/${next.slug}`} className="pd-next-row">
            <div>
              <div className="mono" style={{ opacity: 0.45, marginBottom: 10 }}>
                {t('Prossimo progetto', 'Next project')}
              </div>
              <div className="pd-next-title">
                {next.title[lang]}<span className="tdot">.</span>
              </div>
            </div>
            <span className="card-arrow-btn" style={{ position: 'static', flexShrink: 0 }}>
              <svg viewBox="0 0 24 24" fill="none" width="16" height="16">
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
