import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useLang } from '../context/LangContext'
import { useLoaded } from '../context/LoadedContext'
import { PROJECTS, SKILLS, AREA_LABEL } from '../data/projects'
import { POSTS } from '../data/posts'
import { NOW } from '../data/now'
import { formatDate } from '../utils/formatDate'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrambleTextPlugin } from 'gsap/ScrambleTextPlugin'
import ProjRow from '../components/ProjRow'
import UnicornBg from '../components/UnicornBg'

gsap.registerPlugin(ScrollTrigger, ScrambleTextPlugin)



export default function Home() {
  const { lang } = useLang()
  const { loaded } = useLoaded()
  const t = (it, en) => (lang === 'it' ? it : en)
  const featured = PROJECTS.filter(p => p.featured).slice(0, 4)
  const latest = POSTS.slice(0, 3)

  const heroRef = useRef(null)
  const pageRef = useRef(null)

  useEffect(() => {
    const el = heroRef.current
    if (!el) return
    gsap.set(el.querySelectorAll('.h2n-word'), { yPercent: 105 })
    gsap.set(el.querySelector('.accent-dot'),    { scale: 0, opacity: 0 })
    gsap.set(el.querySelector('.hero-v2-role'),    { x: -24, opacity: 0 })
    gsap.set(el.querySelector('.hero-v2-bottom'),  { y: 32, opacity: 0 })
    return () => {
      gsap.set(el.querySelectorAll('.h2n-word'),   { clearProps: 'all' })
      gsap.set(el.querySelector('.accent-dot'),    { clearProps: 'all' })
      gsap.set(el.querySelector('.hero-v2-role'),  { clearProps: 'all' })
      gsap.set(el.querySelector('.hero-v2-bottom'),{ clearProps: 'all' })
    }
  }, [])

  useEffect(() => {
    if (!loaded) return
    const el = heroRef.current
    if (!el) return
    const targets = [
      ...el.querySelectorAll('.h2n-word'),
      el.querySelector('.accent-dot'),
      el.querySelector('.hero-v2-role'),
      el.querySelector('.hero-v2-bottom'),
    ]
    gsap.killTweensOf(targets)
    const tl = gsap.timeline({ defaults: { ease: 'power4.out' } })
    tl.to(el.querySelectorAll('.h2n-word'),       { yPercent: 0, duration: 1.1, stagger: 0.18 }, '-=0.4')
      .to(el.querySelector('.accent-dot'),         { scale: 1, opacity: 1, duration: 0.5, ease: 'back.out(2)' }, '-=0.3')
      .to(el.querySelector('.hero-v2-role'),       { x: 0, opacity: 1, duration: 1.2, ease: 'power3.out', scrambleText: { text: 'Frontend & AI Developer', chars: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ·—', speed: 0.3 } }, '-=0.4')
      .to(el.querySelector('.hero-v2-bottom'),     { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out' }, '-=0.5')
    return () => tl.kill()
  }, [loaded])

  useEffect(() => {
    const ctx = gsap.context(() => {
      const reveal = (targets, vars = {}) => {
        const { scrub = 1.2, start = 'top 92%', end = 'top 55%', ...rest } = vars
        gsap.from(targets, {
          opacity: 0, y: 48, ease: 'none',
          scrollTrigger: {
            trigger: targets,
            start,
            end,
            scrub,
          },
          ...rest,
        })
      }

      reveal('.stat-cell', { y: 28, stagger: 0.08 })

      reveal('.now-num', { y: 20, end: 'top 70%' })
      reveal('.now-title', { y: 36, end: 'top 65%' })
      reveal('.now-card', { y: 32, end: 'top 60%' })

      document.querySelectorAll('.section-title').forEach(el => reveal(el, { y: 30 }))

      reveal('.work-proj-row', { y: 28, stagger: 0.07, end: 'top 40%' })

      reveal('.about-photo', { x: -40, y: 0, end: 'top 50%' })
      reveal('.about-label', { y: 20 })
      reveal('.about-title', { y: 40, end: 'top 60%' })
      reveal('.about-bio', { y: 28, end: 'top 55%' })
      reveal('.about-fact', { y: 20, stagger: 0.08, end: 'top 50%' })

      reveal('.skill-col', { y: 44, stagger: 0.1, end: 'top 45%' })

      reveal('.jp-card', { y: 36, stagger: 0.1, end: 'top 50%' })

      gsap.from('.contact-v2', {
        opacity: 0, y: 40, ease: 'none',
        scrollTrigger: { trigger: '.contact-v2', start: 'top 95%', end: 'top 60%', scrub: 1 },
      })
      reveal('.contact-v2-heading', { y: 56, end: 'top 55%' })
      ScrollTrigger.create({
        trigger: '.contact-v2-sub',
        start: 'top 82%',
        once: true,
        onEnter: () => {
          const el = document.querySelector('.contact-v2-sub')
          if (!el) return
          const final = el.textContent
          gsap.fromTo(el,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.4, ease: 'power3.out',
              onComplete: () => gsap.to(el, {
                duration: 1.4,
                scrambleText: { text: final, chars: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ!?·—', speed: 0.4, delimiter: '' },
                ease: 'none',
              })
            }
          )
        },
      })
      reveal('.contact-v2-ctas', { y: 20, end: 'top 65%' })
      reveal('.contact-v2-row', { y: 16, stagger: 0.06, end: 'top 45%' })
    }, pageRef)

    return () => ctx.revert()
  }, [])

  return (
    <div className="page-enter" ref={pageRef}>

      {/* ── HERO ── */}
      <section className="hero-v2" ref={heroRef}>
        <UnicornBg opacity={0.6} />
        <div aria-hidden="true" />

        <div className="hero-v2-center">
          <div className="hero-v2-name">
            <div className="h2n-clip"><div className="h2n-word">Francesco</div></div>
            <div className="h2n-clip h2n-second"><div className="h2n-word">Mancino<span className="accent-dot">.</span></div></div>
          </div>
          <div className="hero-v2-role">
            {t('Frontend & AI Developer', 'Frontend & AI Developer')}
          </div>
        </div>

        <div className="hero-v2-bottom">
          <p className="hero-v2-bio-short">
            {t(
              'Interfacce React, integrazione AI, prototipi Framer — per startup e team di prodotto che vogliono spedire.',
              'React interfaces, AI integration, Framer prototypes — for startups and product teams that want to ship.'
            )}
          </p>
          <div className="hero-v2-cta-row">
            <a href="mailto:hello@francescomancino.dev" className="hero-cta-primary">
              {t('Scrivimi', 'Get in touch')} ↗
            </a>
            <Link to="/projects" className="hero-cta-secondary">
              {t('Vedi i lavori', 'View work')}
            </Link>
          </div>
        </div>
      </section>

      <div className="stat-strip">
        <div className="stat-cell">
          <div className="stat-k">{t('Esperienza', 'Experience')}</div>
          <div className="stat-v">5+ <span style={{ color: 'var(--accent)' }}>{t('anni', 'years')}</span></div>
        </div>
        <div className="stat-cell">
          <div className="stat-k">{t('Progetti', 'Projects')}</div>
          <div className="stat-v">12+ <span style={{ color: 'var(--accent)' }}>{t('consegnati', 'shipped')}</span></div>
        </div>
        <div className="stat-cell">
          <div className="stat-k">{t('Aree', 'Areas')}</div>
          <div className="stat-v">FE <span style={{ color: 'var(--fg-dim)', fontWeight: 300 }}>·</span> AI <span style={{ color: 'var(--fg-dim)', fontWeight: 300 }}>·</span> Design</div>
        </div>
        <div className="stat-cell">
          <div className="stat-k">{t('Disponibilità', 'Availability')}</div>
          <div className="stat-v"><span style={{ color: 'var(--accent)' }}>Q3</span> 2026</div>
        </div>
      </div>

      {/* ── NOW ── */}
      <section className="now-section">
        <div className="now-header">
          <div>
            <div className="now-num">N° 00 / Now</div>
            <h2 className="now-title">
              {t('COSA ', 'WHAT I\'M ')}<span className="light">{t('sto facendo', 'doing')}</span>{' '}
              {t('ADESSO', 'RIGHT NOW')}
            </h2>
          </div>
          <div className="now-meta">
            <div className="now-live-dot" />
            <span className="now-live-label">Live</span>
            <span className="now-updated">{t('Aggiornato', 'Updated')} · {NOW.updatedAt}</span>
          </div>
        </div>

        <div className="now-list">
          {NOW.items.map((item, i) => (
            <div key={i} className="now-item">
              <span className="now-item-num">{String(i + 1).padStart(2, '0')}</span>
              <span className="now-item-cat">{item.category[lang]}</span>
              <p className="now-item-text">{item.text[lang]}</p>
              <span className={`now-item-status ${item.status.en === 'Coming soon' ? 'soon' : 'active'}`}>
                {item.status[lang]}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ── LAVORI IN EVIDENZA ── */}
      <section className="section" id="work">
        <div className="section-head">
          <h2 className="section-title">
            {t('Lavori', 'Selected')} <span className="amp">{t('selezionati', 'work')}</span>
          </h2>
          <span className="mono">(01 / 04)</span>
        </div>
        <div className="work-proj-list">
          {featured.map(p => (
            <ProjRow key={p.slug} p={p} lang={lang} />
          ))}
        </div>
        <div style={{ marginTop: 48, display: 'flex', justifyContent: 'flex-end' }}>
          <Link to="/projects" className="btn-outline-white">
            {t('Archivio completo', 'Full archive')} →
          </Link>
        </div>
      </section>

      {/* ── CHI SONO ── */}
      <section className="about" id="about">
        <div className="about-photo">
          <img src="/assets/portrait.png" alt={t('Ritratto', 'Portrait')} />
          <div className="about-photo-corner" />
        </div>
        <div className="about-body">
          <div className="about-label">
            <span className="mono">— {t('Chi sono', 'About')}</span>
            <span className="mono">(02 / 04)</span>
          </div>
          <h2 className="about-title">
            {t('Parto dal', 'I start from the')}{' '}
            <span className="amp">{t('problema', 'problem')}.</span>
          </h2>
          <p className="about-bio">
            {t(
              "Sono un frontend developer con un occhio per il design e una crescente ossessione per l'AI. Ho iniziato dal classico — HTML, CSS, JS — e da lì sono passato a React, al no-code e agli strumenti AI che cambiano davvero come si lavora. Costruisco interfacce pulite, prototipi funzionanti e, sempre più spesso, agenti AI. Lavoro da Roma, parto dal problema del cliente.",
              "I'm a frontend developer with an eye for design and a growing obsession with AI. I started from the classics — HTML, CSS, JS — and moved into React, no-code, and the AI tools that actually change how you work. I build clean interfaces, working prototypes and, more and more often, AI agents. Based in Rome, I start from the client's problem."
            )}
          </p>
          <div className="about-facts">
            <div className="about-fact">
              <div className="about-fact-k">{t('Ruolo', 'Role')}</div>
              <div className="about-fact-v">
                Frontend <span className="dot">·</span> UI/UX <span className="dot">·</span> AI
              </div>
            </div>
            <div className="about-fact">
              <div className="about-fact-k">{t('Base', 'Base')}</div>
              <div className="about-fact-v">
                Roma, IT <span className="dot">◆</span> {t('Remote', 'Remote')}
              </div>
            </div>
            <div className="about-fact">
              <div className="about-fact-k">Stack</div>
              <div className="about-fact-v">
                React <span className="dot">/</span> TypeScript <span className="dot">/</span> Python
              </div>
            </div>
            <div className="about-fact">
              <div className="about-fact-k">{t('Disponibilità', 'Availability')}</div>
              <div className="about-fact-v">Q3 2026 <span className="dot">→</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SKILLS ── */}
      <section className="skills" id="skills">
        <div className="skills-head">
          <h2 className="section-title">
            {t('Skill', 'Skills')} <span className="amp">&amp; {t('strumenti', 'tools')}</span>
          </h2>
          <span className="mono">(03 / 04)</span>
        </div>
        <div className="skills-grid">
          {SKILLS.map(s => (
            <div key={s.num} className="skill-col">
              <div className="skill-num">{s.num} —</div>
              <h3 className="skill-title">{s.title[lang]}</h3>
              <div className="skill-icons">
                {s.items.map(item => (
                  <div key={item.name} className="skill-icon-tile">
                    <img
                      src={`https://cdn.simpleicons.org/${item.icon}/EDEAE3`}
                      alt={item.name}
                      className="skill-icon-img"
                      onError={e => { e.currentTarget.style.display = 'none' }}
                    />
                    <span className="skill-icon-name">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── JOURNAL PREVIEW ── */}
      <section className="section" style={{ background: 'var(--bg-2)' }}>
        <div className="section-head">
          <h2 className="section-title">
            Journal{' '}
            <span className="mono" style={{ fontSize: 14, marginLeft: 12 }}>(04 / 04)</span>

          </h2>
          <Link to="/journal" className="btn-outline-white">
            {t('Tutti i post', 'All posts')} →
          </Link>
        </div>
        <div className="journal-preview stagger">
          {latest.map(p => (
            <Link key={p.slug} to={`/journal/${p.slug}`} className="jp-card">
              {p.cover && (
                <div className="jp-cover">
                  <img src={p.cover} alt={p.title[lang]} />
                  <span className="jp-tag">{p.tag[lang]}</span>
                </div>
              )}
              <div className="jp-body">
                <div className="jp-meta">
                  <span>{formatDate(p.date, lang)}</span>
                  <span>{p.readTime}′ {t('lettura', 'read')}</span>
                </div>
                <div className="jp-title">{p.title[lang]}</div>
                <div className="jp-excerpt">{p.excerpt[lang]}</div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── CONTACT V2 ── */}
      <section className="contact-v2" id="contact">
        <div>
          <div className="contact-v2-num">N° 05 / {t('Contatti', 'Contact')}</div>
          <h2 className="contact-v2-heading">{t("HAI UN'IDEA?", 'GOT AN IDEA?')}</h2>
          <p className="contact-v2-sub">{t('Parliamone.', "Let's talk.")}</p>
          <div className="contact-v2-ctas">
            <a href="mailto:hello@francescomancino.dev" className="cta-primary">
              hello@francescomancino.dev →
            </a>
            <a href="https://calendly.com" target="_blank" rel="noopener noreferrer" className="cta-secondary">
              Calendly
            </a>
          </div>
        </div>
        <div className="contact-v2-table">
          <div className="contact-v2-row">
            <span className="contact-v2-key">Email</span>
            <span className="contact-v2-val">
              <a href="mailto:hello@francescomancino.dev">hello@francescomancino.dev</a>
            </span>
          </div>
          <div className="contact-v2-row">
            <span className="contact-v2-key">GitHub</span>
            <span className="contact-v2-val">
              <a href="https://github.com/fmancino" target="_blank" rel="noopener noreferrer">@fmancino</a>
            </span>
          </div>
          <div className="contact-v2-row">
            <span className="contact-v2-key">LinkedIn</span>
            <span className="contact-v2-val">
              <a href="https://linkedin.com/in/francescomancino" target="_blank" rel="noopener noreferrer">in/francescomancino</a>
            </span>
          </div>
          <div className="contact-v2-row">
            <span className="contact-v2-key">X / Twitter</span>
            <span className="contact-v2-val">
              <a href="https://x.com/fmancino_dev" target="_blank" rel="noopener noreferrer">@fmancino_dev</a>
            </span>
          </div>
          <div className="contact-v2-row">
            <span className="contact-v2-key">Read.cv</span>
            <span className="contact-v2-val">
              <a href="https://read.cv/fmancino" target="_blank" rel="noopener noreferrer">read.cv/fmancino</a>
            </span>
          </div>
          <div className="contact-v2-row">
            <span className="contact-v2-key">Location</span>
            <span className="contact-v2-val">Italy · EU · Remote</span>
          </div>
        </div>
      </section>

    </div>
  )
}
