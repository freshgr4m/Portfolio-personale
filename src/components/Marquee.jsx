export default function Marquee({ items }) {
  const doubled = [...items, ...items]
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span key={i} className={item.accent ? 'accent' : ''}>
            {item.text}
            <span className="dot" style={{ padding: '0 24px', color: 'var(--fg-dim)' }}>◆</span>
          </span>
        ))}
      </div>
    </div>
  )
}
