import { createContext, useContext, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { gsap } from 'gsap'

const Ctx = createContext()
const NUM_COLS = 10  // strisce verticali

export function TransitionProvider({ children }) {
  const overlayRef = useRef(null)
  const busy       = useRef(false)
  const navigate   = useNavigate()

  const transitionTo = (path) => {
    if (busy.current) return
    busy.current = true

    const overlay = overlayRef.current
    overlay.innerHTML = ''

    // crea N strisce verticali alte 100vh
    const strips = []
    for (let i = 0; i < NUM_COLS; i++) {
      const s = document.createElement('div')
      s.className = 'pt-strip'
      overlay.appendChild(s)
      strips.push(s)
    }

    overlay.style.display       = 'flex'
    overlay.style.pointerEvents = 'all'
    document.body.style.overflow = 'hidden'

    // partono piatte (scaleY 0) e crescono verso l'alto
    gsap.set(strips, { scaleY: 0, transformOrigin: 'bottom center', yPercent: 0 })

    const tl = gsap.timeline()

    // strisce crescono da destra a sinistra — la pagina "si alza" via
    tl.to(strips, {
      scaleY: 1,
      duration: 0.35,
      ease: 'power3.inOut',
      stagger: {
        each: 0.045,
        from: 'end', // inizia dall'ultima (destra)
      },
    })

    // naviga quando tutto è coperto
    tl.call(() => {
      navigate(path)
      window.scrollTo(0, 0)
    })

    tl.to({}, { duration: 0.06 })

    // strisce volano via verso l'alto da destra a sinistra — pagina si "strappa"
    tl.to(strips, {
      yPercent: -105,
      duration: 0.45,
      ease: 'power3.inOut',
      stagger: {
        each: 0.04,
        from: 'end', // destra prima
      },
    })

    tl.call(() => {
      overlay.style.display       = 'none'
      overlay.style.pointerEvents = 'none'
      document.body.style.overflow = ''
      busy.current = false
    })
  }

  return (
    <Ctx.Provider value={{ transitionTo }}>
      {children}
      <div className="pt-overlay" ref={overlayRef} />
    </Ctx.Provider>
  )
}

export const usePageTransition = () => useContext(Ctx)
