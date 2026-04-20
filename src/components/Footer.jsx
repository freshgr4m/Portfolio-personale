import { useLang } from '../context/LangContext'

export default function Footer() {
  const { lang } = useLang()
  return (
    <footer className="footer-minimal">
      <span>© {new Date().getFullYear()} Francesco Mancino</span>
      <span>{lang === 'it' ? 'Costruito in React · Roma' : 'Built in React · Rome'}</span>
    </footer>
  )
}
