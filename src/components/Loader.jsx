import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const BLOCK = 140

export default function Loader({ onComplete }) {
  const overlayRef = useRef(null)
  const gridRef = useRef(null)
  const textRef = useRef(null)
  const counterRef = useRef(null)

  useEffect(() => {
    const vw = window.innerWidth
    const vh = window.innerHeight
    const cols = Math.ceil(vw / BLOCK)
    const rows = Math.ceil(vh / BLOCK)

    const frag = document.createDocumentFragment()
    for (let i = 0; i < cols * rows; i++) {
      const d = document.createElement('div')
      d.className = 'loader-block'
      frag.appendChild(d)
    }
    gridRef.current.style.gridTemplateColumns = `repeat(${cols}, 1fr)`
    gridRef.current.style.gridTemplateRows = `repeat(${rows}, 1fr)`
    gridRef.current.appendChild(frag)
    const blocks = gridRef.current.querySelectorAll('.loader-block')

    gsap.set('.ln-word', { yPercent: -120, opacity: 0 })
    gsap.set('.ln-meta', { opacity: 0, x: -20 })

    const tl = gsap.timeline({
      onComplete: () => {
        if (overlayRef.current) overlayRef.current.style.display = 'none'
        onComplete?.()
      },
    })

    // counter gira da 0 → 100 veloce
    const count = { val: 0 }
    tl.to(count, {
      val: 100,
      duration: 1.6,
      ease: 'power2.inOut',
      onUpdate() {
        if (counterRef.current)
          counterRef.current.textContent = String(Math.floor(count.val)).padStart(2, '0')
      },
    }, 0)

    const isMobile = window.innerWidth < 900

    if (!isMobile) {
      tl.to('.ln-word', {
        yPercent: 0,
        opacity: 1,
        duration: 0.7,
        stagger: 0.12,
        ease: 'power3.out',
      }, 0.2)

      tl.to('.ln-meta', {
        opacity: 1,
        x: 0,
        duration: 0.5,
        ease: 'power2.out',
      }, 0.6)
    }

    // hold breve
    tl.to({}, { duration: 0.2 })

    // testo esce
    tl.to(textRef.current, {
      opacity: 0,
      duration: 0.2,
      ease: 'power1.in',
    })

    // dissolve a triangolo — punta a sinistra, base a destra
    // ogni blocco parte in base a: col + distanza dal centro verticale * slope
    const slope = 0.9
    const centerRow = (rows - 1) / 2
    const maxVal = (cols - 1) + centerRow * slope

    tl.to(blocks, {
      opacity: 0,
      duration: 0.28,
      ease: 'power1.in',
      stagger: (i) => {
        const col = i % cols
        const row = Math.floor(i / cols)
        const dist = Math.abs(row - centerRow)
        const val = col + dist * slope
        const normalized = val / maxVal      // 0 = sinistra-centro (ultimo), 1 = destra (primo)
        return (1 - normalized) * 0.75      // spread totale ~0.75s
      },
    }, '-=0.05')
  }, [])

  return (
    <div className="loader-overlay" ref={overlayRef}>
      <div className="loader-grid" ref={gridRef} />

      <div className="loader-text" ref={textRef}>

        {/* top bar */}
        <div className="ln-topbar">
          <span className="ln-label">FM — Portfolio</span>
          <span className="ln-label">2026</span>
        </div>

        {/* corpo principale: numero a sinistra, nome a destra */}
        <div className="ln-body">
          <div className="ln-counter-wrap">
            <span className="ln-counter" ref={counterRef}>00</span>
            <span className="ln-counter-pct">%</span>
          </div>
          <div className="ln-right">
            <div className="ln-name">
              <div className="ln-name-line"><span className="ln-word">Francesco</span></div>
              <div className="ln-name-line"><span className="ln-word">Mancino<span className="ln-dot">.</span></span></div>
            </div>
            <div className="ln-meta">
              <span>Frontend</span>
              <span className="ln-sep">—</span>
              <span>AI Developer</span>
              <span className="ln-sep">—</span>
              <span>Roma, IT</span>
            </div>
          </div>
        </div>

        {/* bottom */}
        <div className="ln-bottom">
          <span className="ln-label">React · AI Integration · Framer · No-Code</span>
          <span className="ln-label">Loading...</span>
        </div>

      </div>
    </div>
  )
}
