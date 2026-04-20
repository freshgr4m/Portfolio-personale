export function scrollToSection(id, offset = -80) {
  const doScroll = () => {
    const el = document.getElementById(id)
    if (!el) return
    if (window.__lenis) {
      window.__lenis.scrollTo(el, { offset, duration: 1.2 })
    } else {
      const top = el.getBoundingClientRect().top + window.scrollY + offset
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }
  if (document.getElementById(id)) {
    doScroll()
  } else {
    window.location.href = '/'
    setTimeout(doScroll, 400)
  }
}
