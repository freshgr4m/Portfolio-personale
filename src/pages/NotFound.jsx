import { Link } from 'react-router-dom'
import { useLang } from '../context/LangContext'

export default function NotFound() {
  const { lang } = useLang()
  return (
    <div className="nf page-enter">
      <div>
        <h1>404</h1>
        <p className="mono">{lang === 'it' ? 'Pagina non trovata' : 'Page not found'}</p>
        <Link
          to="/"
          className="mono"
          style={{ color: 'var(--accent)', marginTop: 20, display: 'inline-block' }}
        >
          ← {lang === 'it' ? 'Torna alla home' : 'Back to home'}
        </Link>
      </div>
    </div>
  )
}
