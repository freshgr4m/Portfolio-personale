import { Link, useParams, Navigate } from 'react-router-dom'
import { useLang } from '../context/LangContext'
import { POSTS } from '../data/posts'
import { formatDate } from '../utils/formatDate'

function renderBlock(block, i) {
  switch (block.type) {
    case 'lead':
      return <p key={i} className="lead">{block.text}</p>
    case 'h2':
      return (
        <h2 key={i}>
          <span className="post-h2-num">{String(block._n).padStart(2, '0')}</span>
          {block.text}
        </h2>
      )
    case 'quote':
      return <blockquote key={i}>{block.text}</blockquote>
    case 'code':
      return <pre key={i}><code>{block.text}</code></pre>
    case 'ol':
      return (
        <ol key={i}>
          {block.items.map((item, j) => <li key={j}>{item}</li>)}
        </ol>
      )
    default:
      if (block.html) return <p key={i} dangerouslySetInnerHTML={{ __html: block.text }} />
      return <p key={i}>{block.text}</p>
  }
}

function share(platform) {
  const url = encodeURIComponent(window.location.href)
  if (platform === 'x') window.open(`https://twitter.com/intent/tweet?url=${url}`, '_blank')
  if (platform === 'linkedin') window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank')
  if (platform === 'copy') navigator.clipboard?.writeText(window.location.href)
}

export default function JournalPost() {
  const { slug } = useParams()
  const { lang } = useLang()
  const t = (it, en) => (lang === 'it' ? it : en)

  const idx = POSTS.findIndex(p => p.slug === slug)
  if (idx === -1) return <Navigate to="/journal" replace />

  const post = POSTS[idx]
  const prev = POSTS[idx - 1]
  const next = POSTS[idx + 1]
  const total = POSTS.length

  // pre-number h2 blocks
  let h2Count = 0
  const body = post.body[lang].map(block =>
    block.type === 'h2' ? { ...block, _n: ++h2Count } : block
  )

  return (
    <div className="page-enter">

      {/* ── HERO ── */}
      <section className="post-hero">
        <div className="post-tags">
          <span className="post-tag-pill">{post.tag[lang]}</span>
          <span className="post-tag-pill">{formatDate(post.date, lang)}</span>
          <span className="post-tag-pill">{post.readTime} {t('min', 'min')}</span>
        </div>
        <h1 className="post-h1">{post.title[lang]}</h1>
        {post.excerpt && (
          <p className="post-excerpt-hero">{post.excerpt[lang]}</p>
        )}
      </section>

      {/* ── META STRIP ── */}
      <div className="post-meta-strip">
        <div className="post-meta-left">
          <Link to="/journal" className="post-meta-back">← Journal</Link>
          <span>
            N° {String(idx + 1).padStart(2, '0')} / {String(total).padStart(2, '0')} · {post.tag[lang]}
          </span>
        </div>
        <div className="post-share">
          <span className="post-share-label">{t('Condividi', 'Share')}:</span>
          <button className="post-share-btn" onClick={() => share('x')}>X</button>
          <button className="post-share-btn" onClick={() => share('linkedin')}>LinkedIn</button>
          <button className="post-share-btn" onClick={() => share('copy')}>
            {t('Copia link', 'Copy link')}
          </button>
        </div>
      </div>

      {/* ── COVER ── */}
      {post.cover && (
        <div className="post-cover">
          <img src={post.cover} alt={post.title[lang]} />
        </div>
      )}

      {/* ── BODY ── */}
      <article className="post-body">
        {body.map((block, i) => renderBlock(block, i))}
      </article>

      {/* ── NAV ── */}
      <nav className="post-nav">
        {prev ? (
          <Link to={`/journal/${prev.slug}`}>
            <span className="post-nav-label">← {t('Precedente', 'Previous')}</span>
            <span className="post-nav-title">{prev.title[lang]}</span>
          </Link>
        ) : (
          <Link to="/journal">
            <span className="post-nav-label">← {t('Tutti i post', 'All posts')}</span>
            <span className="post-nav-title">Journal</span>
          </Link>
        )}
        {next ? (
          <Link to={`/journal/${next.slug}`} className="next">
            <span className="post-nav-label">{t('Successivo', 'Next')} →</span>
            <span className="post-nav-title">{next.title[lang]}</span>
          </Link>
        ) : (
          <Link to="/journal" className="next">
            <span className="post-nav-label">{t('Tutti i post', 'All posts')} →</span>
            <span className="post-nav-title">Journal</span>
          </Link>
        )}
      </nav>

    </div>
  )
}
