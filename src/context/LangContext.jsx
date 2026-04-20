import { createContext, useContext, useState, useEffect } from 'react'

const LangCtx = createContext({ lang: 'it', setLang: () => {} })

export function LangProvider({ children }) {
  const [lang, setLang] = useState(() => {
    try { return localStorage.getItem('portfolio-lang') || 'it' } catch { return 'it' }
  })

  useEffect(() => {
    try { localStorage.setItem('portfolio-lang', lang) } catch {}
    document.documentElement.lang = lang
  }, [lang])

  return <LangCtx.Provider value={{ lang, setLang }}>{children}</LangCtx.Provider>
}

export const useLang = () => useContext(LangCtx)
