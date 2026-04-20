import { useRef, useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useLang } from '../context/LangContext'
import { gsap } from 'gsap'

function RomeClock() {
  const [time, setTime] = useState('')

  useEffect(() => {
    const tick = () => {
      const t = new Date().toLocaleTimeString('it-IT', {
        timeZone: 'Europe/Rome',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      })
      setTime(t)
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="nav-clock">
      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <line x1="2" y1="12" x2="22" y2="12"/>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
      <span>Roma {time}</span>
    </div>
  )
}

function LangToggle() {
  const { lang, setLang } = useLang()
  const indicatorRef = useRef(null)
  const itRef = useRef(null)
  const enRef = useRef(null)

  useEffect(() => {
    const target = lang === 'it' ? itRef.current : enRef.current
    if (!target || !indicatorRef.current) return
    const { offsetLeft, offsetWidth } = target
    gsap.to(indicatorRef.current, {
      x: offsetLeft,
      width: offsetWidth,
      duration: 0.4,
      ease: 'power3.inOut',
    })
  }, [lang])

  return (
    <div className="lang-toggle">
      <div className="lang-indicator" ref={indicatorRef} />
      <button
        ref={itRef}
        className={`lang-opt${lang === 'it' ? ' active' : ''}`}
        onClick={() => setLang('it')}
      >
        IT
      </button>
      <button
        ref={enRef}
        className={`lang-opt${lang === 'en' ? ' active' : ''}`}
        onClick={() => setLang('en')}
      >
        EN
      </button>
    </div>
  )
}

export default function Navbar() {
  const { lang } = useLang()
  const t = (it, en) => (lang === 'it' ? it : en)

  return (
    <header className="nav-header">
      <nav className="nav">
        <Link to="/" className="nav-brand" aria-label="Home">
          Francesco Mancino
        </Link>

        <NavLink to="/" end className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}>
          {t('Index', 'Index')}
        </NavLink>
        <NavLink to="/projects" className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}>
          {t('Lavori', 'Work')}
        </NavLink>
        <NavLink to="/journal" className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}>
          Journal
        </NavLink>

        <div className="nav-right">
          <a href="mailto:hello@francescomancino.dev" className="nav-cta">
            hello@francescomancino.dev ↗
          </a>
          <LangToggle />
        </div>
      </nav>

      <div className="nav-strip">
        <div className="nav-strip-left">
          <span className="nav-strip-dot" />
          <span>{t('Disponibile', 'Available')}</span>
          <span className="nav-strip-sep">·</span>
          <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
          <span>{t('Roma, Italia', 'Rome, Italy')}</span>
          <span className="nav-strip-sep">·</span>
          <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>
          <span>Remote</span>
        </div>
        <RomeClock />
      </div>
    </header>
  )
}
