import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { formatDate } from '../utils/formatDate'

export default function PostRow({ post, lang, num }) {
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
      to={`/journal/${post.slug}`}
      className="work-proj-row"
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      <span className="pn">{String(num).padStart(2, '0')}</span>
      <span className="pt">{post.title[lang]}</span>
      <span className="pr">{post.tag[lang]}</span>
      <span className="py">{post.readTime}′</span>
      <span className="pa">↗</span>
      {post.cover && (
        <div className="work-proj-preview" ref={previewRef} aria-hidden="true">
          <img src={post.cover} alt="" />
        </div>
      )}
    </Link>
  )
}
