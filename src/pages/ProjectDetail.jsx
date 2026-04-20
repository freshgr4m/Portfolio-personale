import { useEffect, useRef } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useLang } from '../context/LangContext'
import { PROJECTS } from '../data/projects'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import CtaRow from '../components/CtaRow'

gsap.registerPlugin(ScrollTrigger)

export default function ProjectDetail() {
  const { slug } = useParams()
  const { lang } = useLang()
  const t = (it, en) => (lang === 'it' ? it : en)
  const pageRef = useRef(null)

  const idx = PROJECTS.findIndex(p => p.slug === slug)
  const p = PROJECTS[idx]
  const prev = p ? PROJECTS[(idx - 1 + PROJECTS.length) % PROJECTS.length] : null
  const next = p ? PROJECTS[(idx + 1) % PROJECTS.length] : null

  useEffect(() => {
    if (!p) return
    const ctx = gsap.context(() => {
      gsap.set('.post-tag-pill',      { opacity: 0, y: 10 })
      gsap.set('.post-h1',            { opacity: 0, y: 28 })
      gsap.set('.post-excerpt-hero',  { opacity: 0, y: 18 })
      gsap.set('.post-meta-strip',    { opacity: 0 })

      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } })
      tl.to('.post-tag-pill',     { opacity: 1, y: 0, duration: 0.5, stagger: 0.07 }, 0.05)
        .to('.post-h1',           { opacity: 1, y: 0, duration: 0.9 }, 0.2)
        .to('.post-excerpt-hero', { opacity: 1, y: 0, duration: 0.6 }, 0.55)
        .to('.post-meta-strip',   { opacity: 1, duration: 0.5 }, 0.65)

      gsap.from('.stat-cell', {
        opacity: 0, y: 20, duration: 0.6, ease: 'power3.out', stagger: 0.08,
        scrollTrigger: { trigger: '.stat-strip', start: 'top 90%', once: true },
      })
      gsap.from('.pd-cover img', {
        opacity: 0, scale: 1.04, duration: 1.2, ease: 'power3.out',
        scrollTrigger: { trigger: '.pd-cover', start: 'top 88%', once: true },
      })
      gsap.from('.pd-section', {
        opacity: 0, y: 28, duration: 0.7, ease: 'power3.out', stagger: 0.12,
        scrollTrigger: { trigger: '.pd-section', start: 'top 88%', once: true },
      })
      gsap.from('.pd-gallery-item', {
        opacity: 0, y: 24, duration: 0.6, ease: 'power3.out', stagger: 0.1,
        scrollTrigger: { trigger: '.pd-gallery', start: 'top 88%', once: true },
      })
      gsap.from('.post-nav', {
        opacity: 0, y: 20, duration: 0.6, ease: 'power3.out',
        scrollTrigger: { trigger: '.post-nav', start: 'top 95%', once: true },
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

  const heroImg = p.cover || p.images?.[0]
  const galleryImgs = p.images?.length > 1 ? p.images.slice(1) : []

  const sections = [
    { num: '01', label: t('Problema', 'Problem'),   text: p.problem?.[lang] },
    { num: '02', label: t('Approccio', 'Approach'), text: p.approach?.[lang] },
    { num: '03', label: t('Risultato', 'Result'),   text: p.result?.[lang] },
  ].filter(s => s.text)

  return (
    <div className="page-enter" ref={pageRef}>

      {/* ── HERO ── */}
      <section className="post-hero">
        <div className="post-tags">
          <span className="post-tag-pill">{p.area.toUpperCase()}</span>
          <span className="post-tag-pill">{p.year}</span>
          <span className="post-tag-pill">{p.role[lang]}</span>
        </div>
        <h1 className="post-h1">{p.title[lang]}<span className="tdot">.</span></h1>
        <p className="post-excerpt-hero">{p.desc[lang]}</p>
        <CtaRow
          primaryLabel={t('Scrivimi', 'Get in touch')}
          secondaryTo="/projects"
          secondaryLabel={t('Tutti i lavori', 'All work')}
          className="pd-hero-ctas"
        />
      </section>

      {/* ── META TABLE ── */}
      <div className="stat-strip">
        <div className="stat-cell">
          <div className="stat-k">{t('Ruolo', 'Role')}</div>
          <div className="stat-v">{p.role[lang]}</div>
        </div>
        <div className="stat-cell">
          <div className="stat-k">{t('Cliente', 'Client')}</div>
          <div className="stat-v">{p.client?.[lang] ?? '—'}</div>
        </div>
        <div className="stat-cell">
          <div className="stat-k">{t('Anno', 'Year')}</div>
          <div className="stat-v">{p.year}</div>
        </div>
        <div className="stat-cell">
          <div className="stat-k">{t('Stack', 'Stack')}</div>
          <div className="stat-v">{p.stack.filter(s => s !== 'TypeScript').slice(0, 2).join(' · ')}</div>
        </div>
      </div>

      {/* ── COVER ── */}
      {heroImg && (
        <div className="pd-cover">
          <img src={heroImg} alt={p.title[lang]} />
        </div>
      )}

      {/* ── BODY SECTIONS ── */}
      {sections.map(({ num, label, text }) => (
        <section key={num} className="pd-section wrap">
          <div className="pd-body-grid">
            <div className="pd-section-label mono">
              <span className="pd-section-n">{num} /</span> {label}
            </div>
            <p className="pd-section-text">{text}</p>
          </div>
        </section>
      ))}

      {/* ── GALLERY ── */}
      {galleryImgs.length > 0 && (
        <section className="pd-section wrap">
          <div className="pd-body-grid pd-body-grid--full">
            <div className="pd-section-label mono">
              <span className="pd-section-n">04 /</span> {t('Gallery', 'Gallery')}
            </div>
            <div className="pd-gallery">
              {galleryImgs.map((src, i) => (
                <div key={i} className="pd-gallery-item">
                  <img src={src} alt={`${p.title[lang]} ${i + 2}`} />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}


      {/* ── PAGINATION ── */}
      {prev && next && (
        <nav className="post-nav post-nav--projects">
          <Link to={`/projects/${prev.slug}`}>
            <span className="post-nav-label">← {t('Progetto precedente', 'Previous project')}</span>
            <span className="post-nav-title">{prev.title[lang]}<span className="tdot">.</span></span>
          </Link>
          <Link to={`/projects/${next.slug}`} className="next">
            <span className="post-nav-label">{t('Prossimo progetto', 'Next project')} →</span>
            <span className="post-nav-title">{next.title[lang]}<span className="tdot">.</span></span>
          </Link>
        </nav>
      )}

    </div>
  )
}
