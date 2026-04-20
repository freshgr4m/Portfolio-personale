import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'

export default function ProjRow({ p, lang }) {
  const previewRef = useRef(null)
  const [expanded, setExpanded] = useState(false)

  function onMouseMove(e) {
    if (!previewRef.current) return
    const r = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - r.left
    const y = e.clientY - r.top
    previewRef.current.style.transform =
      `translate(-50%,-50%) rotate(-3deg) translate(${x - r.width / 2}px,${y - r.height / 2}px) scale(1)`
  }

  function onMouseLeave() {
    if (!previewRef.current) return
    previewRef.current.style.transform = ''
  }

  function handleClick(e) {
    if (window.innerWidth < 900) {
      if (!expanded) {
        e.preventDefault()
        setExpanded(true)
      }
    }
  }

  return (
    <div className={`proj-row-wrap${expanded ? ' proj-row-wrap--open' : ''}`}>
      <Link
        to={`/projects/${p.slug}`}
        className="work-proj-row"
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        onClick={handleClick}
      >
        <span className="pn">{p.num}</span>
        <span className="pt">{p.title[lang]}</span>
        <span className="pr">{p.role[lang]}</span>
        <span className="py">{p.year}</span>
        <span className="pa">↗</span>
        {p.cover && (
          <div className="work-proj-preview" ref={previewRef} aria-hidden="true">
            <img src={p.cover} alt="" />
          </div>
        )}
      </Link>

      {/* Mobile expand panel */}
      <div className="proj-mob-panel">
        <div>
          {p.cover && <img src={p.cover} alt={p.title[lang]} className="proj-mob-img" />}
          <div className="proj-mob-footer">
            <div>
              <div className="proj-mob-role">{p.role[lang]} · {p.year}</div>
              <div className="proj-mob-title">{p.title[lang]}</div>
            </div>
            <Link to={`/projects/${p.slug}`} className="proj-mob-cta">
              {lang === 'it' ? 'Vedi progetto' : 'View project'} ↗
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
