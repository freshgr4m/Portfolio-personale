import { Link, useParams, Navigate } from 'react-router-dom'
import { useLang } from '../context/LangContext'
import { PROJECTS, AREA_LABEL } from '../data/projects'

export default function ProjectDetail() {
  const { slug } = useParams()
  const { lang } = useLang()
  const t = (it, en) => (lang === 'it' ? it : en)

  const idx = PROJECTS.findIndex(p => p.slug === slug)
  const p = PROJECTS[idx]

  if (!p) {
    return (
      <div className="nf page-enter">
        <div>
          <h1>404</h1>
          <p className="mono">{t('Progetto non trovato', 'Project not found')}</p>
          <Link
            to="/projects"
            className="mono"
            style={{ color: 'var(--accent)', marginTop: 20, display: 'inline-block' }}
          >
            ← {t('Torna ai lavori', 'Back to work')}
          </Link>
        </div>
      </div>
    )
  }

  const next = PROJECTS[(idx + 1) % PROJECTS.length]

  return (
    <div className="page-enter">
      <div className="wrap">
        <section className="pd-head">
          <Link to="/projects" className="pd-back">
            ← {t('Tutti i lavori', 'All work')}
          </Link>
          <div className="pd-meta-top">
            <span>{p.num} / {String(PROJECTS.length).padStart(2, '0')}</span>
            <span>{p.year}</span>
            <span>{p.role[lang]}</span>
            <span style={{ color: 'var(--accent)' }}>{AREA_LABEL[p.area]}</span>
          </div>
          <h1 className="pd-title">
            {p.title[lang]}<span className="tdot">.</span>
          </h1>
          <p style={{ maxWidth: '58ch', color: 'var(--fg-dim)', fontSize: 18, lineHeight: 1.5 }}>
            {p.desc[lang]}
          </p>
        </section>

        <section className="pd-grid">
          <div>
            <div className="pd-label">{t('Stack & Strumenti', 'Stack & Tools')}</div>
            <div className="pd-stack">
              {p.stack.map(s => <span key={s} className="pd-chip">{s}</span>)}
            </div>
            <div style={{ height: 40 }} />
            <div className="pd-label">{t('Ruolo', 'Role')}</div>
            <div style={{ fontSize: 18 }}>{p.role[lang]}</div>
            <div style={{ height: 40 }} />
            <div className="pd-label">{t('Anno', 'Year')}</div>
            <div style={{ fontSize: 18 }}>{p.year}</div>
          </div>
          <div>
            <div className="pd-label">{t('Descrizione', 'Overview')}</div>
            <p className="pd-long">{p.longDesc[lang]}</p>
            <p className="pd-long" style={{ color: 'var(--fg-dim)' }}>
              {t(
                'Gli screenshot e il case study completo arriveranno a breve — sostituiremo i placeholder qui sotto con le immagini reali.',
                'Screenshots and the full case study are coming soon — we\'ll replace the placeholders below with real images.'
              )}
            </p>
          </div>
        </section>

        <section className="pd-gallery">
          <div className="pd-label" style={{ marginBottom: 24 }}>
            {t('Galleria', 'Gallery')} — {t('placeholder', 'placeholder')}
          </div>
          <div className="pd-gal-grid">
            <div className="g-lg" data-label={t('Screenshot 01 · Cover', 'Screenshot 01 · Cover')} />
            <div className="g-sm" data-label="02" />
            <div className="g-md" data-label={t('Dettaglio UI', 'UI detail')} />
            <div className="g-md" data-label={t('Flusso', 'Flow')} />
            <div className="g-sm" data-label="05" />
            <div className="g-sm" data-label="06" />
            <div className="g-lg" data-label={t('Screenshot 07 · Finale', 'Screenshot 07 · Final')} />
          </div>
        </section>

        <section className="pd-next">
          <div className="mono" style={{ color: 'var(--fg-dim)' }}>
            — {t('Prossimo', 'Next')}
          </div>
          <Link to={`/projects/${next.slug}`}>{next.title[lang]} →</Link>
        </section>
      </div>
    </div>
  )
}
