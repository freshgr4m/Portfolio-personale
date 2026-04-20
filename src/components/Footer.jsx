import { Link, useNavigate } from 'react-router-dom'
import { useLang } from '../context/LangContext'
import { scrollToSection } from '../utils/scrollTo'

export default function Footer() {
  const { lang } = useLang()
  const t = (it, en) => (lang === 'it' ? it : en)
  const navigate = useNavigate()

  return (
    <footer className="footer-main">
      <div className="footer-col footer-col--brand">
        <div className="footer-name">Francesco<br />Mancino<span className="footer-dot">.</span></div>
        <p className="footer-tagline">Frontend &amp; AI Developer<br />Roma, IT</p>
      </div>

      <div className="footer-col footer-col--nav">
        <span className="footer-col-label">{t('Navigazione', 'Navigate')}</span>
        <Link to="/">Home</Link>
        <Link to="/projects">{t('Lavori', 'Work')}</Link>
        <Link to="/journal">Journal</Link>
        <button onClick={() => scrollToSection('about', navigate)} className="footer-anchor-btn">{t('Chi sono', 'About')}</button>
        <button onClick={() => scrollToSection('contact', navigate)} className="footer-anchor-btn">{t('Contatti', 'Contact')}</button>
      </div>

      <div className="footer-col footer-col--social">
        <span className="footer-col-label">Social</span>
        <a href="https://github.com/freshgr4m" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://linkedin.com/in/francescomancino" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://x.com/fmancino_dev" target="_blank" rel="noopener noreferrer">X / Twitter</a>
        <a href="mailto:mancinofrancesco91@gmail.com">Email</a>
      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Francesco Mancino</span>
        <span>{t('Costruito in React · Vite · GSAP', 'Built with React · Vite · GSAP')}</span>
      </div>
    </footer>
  )
}
