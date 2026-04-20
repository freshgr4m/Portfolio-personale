import { useRef } from 'react'
import { Link } from 'react-router-dom'

export default function ProjRow({ p, lang }) {
  const previewRef = useRef(null)

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

  return (
    <Link
      to={`/projects/${p.slug}`}
      className="work-proj-row"
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
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
  )
}
