import { useState, useRef, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { useLocation } from 'react-router-dom'
import { gsap } from 'gsap'
import { useLang } from '../context/LangContext'
import { PROJECTS } from '../data/projects'
import { POSTS } from '../data/posts'

function getBotReply(question, lang) {
  const q = question.toLowerCase()
  const it = lang === 'it'

  if (q.includes('react') || q.includes('frontend') || q.includes('fe')) {
    const p = PROJECTS.filter(x => x.stack.includes('React'))
    return it
      ? `Ho lavorato con React in ${p.length} progetti: ${p.map(x => x.title.it).join(', ')}. È il mio stack principale insieme a TypeScript e Vite.`
      : `I've worked with React across ${p.length} projects: ${p.map(x => x.title.en ?? x.title.it).join(', ')}. It's my primary stack alongside TypeScript and Vite.`
  }
  if (q.includes('ai') || q.includes('agente') || q.includes('agent')) {
    const p = PROJECTS.filter(x => x.area === 'ai')
    return it
      ? `In ambito AI ho realizzato: ${p.map(x => `${x.title.it} — ${x.desc.it}`).join(' · ')}. Lavoro con OpenAI, LangChain, Claude e n8n.`
      : `My AI projects include: ${p.map(x => `${x.title.en ?? x.title.it} — ${x.desc.en ?? x.desc.it}`).join(' · ')}. I work with OpenAI, LangChain, Claude and n8n.`
  }
  if (q.includes('progett') || q.includes('project') || q.includes('lavori') || q.includes('work')) {
    return it
      ? `Ho ${PROJECTS.length} progetti in portfolio: ${PROJECTS.map(p => p.title.it).join(', ')}. Vuoi sapere qualcosa di specifico?`
      : `I have ${PROJECTS.length} portfolio projects: ${PROJECTS.map(p => p.title.en ?? p.title.it).join(', ')}. Want to know more about any of them?`
  }
  if (q.includes('contatt') || q.includes('email') || q.includes('contact') || q.includes('scriver')) {
    return it
      ? `Puoi scrivermi a hello@francescomancino.dev — rispondo entro 24h. Sono disponibile per nuovi progetti da Q3 2026.`
      : `You can reach me at hello@francescomancino.dev — I reply within 24h. Available for new projects from Q3 2026.`
  }
  if (q.includes('chi sei') || q.includes('about') || q.includes('who') || q.includes('esperienza') || q.includes('experience')) {
    return it
      ? `Sono Francesco, Frontend & AI Developer con base a Roma. 5+ anni tra interfacce React, design system e agenti AI. Lavoro con startup e team di prodotto.`
      : `I'm Francesco, a Frontend & AI Developer based in Rome. 5+ years building React interfaces, design systems, and more recently AI agents. I work with startups and product teams.`
  }
  if (q.includes('stack') || q.includes('tecnolog') || q.includes('tool')) {
    return it
      ? `Stack principale: React, TypeScript, Vite, Tailwind, GSAP per il frontend. Per l'AI: Python, LangChain, OpenAI, Claude, n8n. Per il design: Figma e Framer.`
      : `Main stack: React, TypeScript, Vite, Tailwind, GSAP on the frontend. For AI: Python, LangChain, OpenAI, Claude, n8n. For design: Figma and Framer.`
  }
  if (q.includes('blog') || q.includes('journal') || q.includes('articol') || q.includes('post') || q.includes('article')) {
    return it
      ? `Sul Journal scrivo di ${POSTS.slice(0, 3).map(p => p.tag.it).join(', ')} e altro. Ci sono ${POSTS.length} articoli — vuoi un consiglio su cosa leggere?`
      : `On the Journal I write about ${POSTS.slice(0, 3).map(p => p.tag.en ?? p.tag.it).join(', ')} and more. There are ${POSTS.length} articles — want a reading suggestion?`
  }
  return it
    ? `Bella domanda! Puoi chiedermi dei miei progetti, dello stack, di come contattarmi o del Journal. Cosa ti interessa?`
    : `Good question! You can ask me about my projects, tech stack, how to get in touch, or the Journal. What would you like to know?`
}

export default function ChatWidget() {
  const { lang } = useLang()
  const { pathname } = useLocation()
  const isHome = pathname === '/'
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState(() => [{
    from: 'bot',
    text: lang === 'it'
      ? 'Ciao! Sono l\'assistente di Francesco. Chiedimi dei suoi progetti, dello stack o come contattarlo.'
      : 'Hi! I\'m Francesco\'s assistant. Ask me about his projects, tech stack, or how to get in touch.'
  }])
  const [input, setInput] = useState('')
  const [typing, setTyping] = useState(false)
  const [collapsed, setCollapsed] = useState(false)
  const bottomRef = useRef(null)
  const inputRef = useRef(null)
  const prevLang = useRef(lang)

  useEffect(() => {
    if (prevLang.current === lang) return
    prevLang.current = lang
    setMessages([{
      from: 'bot',
      text: lang === 'it'
        ? 'Ciao! Sono l\'assistente di Francesco. Chiedimi dei suoi progetti, dello stack o come contattarlo.'
        : 'Hi! I\'m Francesco\'s assistant. Ask me about his projects, tech stack, or how to get in touch.'
    }])
  }, [lang])
  const widgetRef = useRef(null)

  useEffect(() => {
    const el = widgetRef.current
    if (!el) return
    const mobile = window.matchMedia('(max-width: 899px)').matches
    if (mobile) {
      gsap.set(el, { opacity: 0, scale: 0.6 })
      gsap.to(el, { opacity: 1, scale: 1, duration: 0.5, ease: 'back.out(1.7)', delay: 2.8 })
    } else {
      gsap.set(el, { yPercent: -50, xPercent: 100, opacity: 0 })
      gsap.to(el, { xPercent: 0, opacity: 1, duration: 0.9, ease: 'power4.out', delay: 2.8 })
    }
  }, [])

  useEffect(() => {
    if (!isHome) { setCollapsed(true); return }
    setCollapsed(window.scrollY > 60)
    const onScroll = () => setCollapsed(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [isHome])

  useEffect(() => {
    if (open) {
      bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
      setTimeout(() => inputRef.current?.focus(), 200)
    }
  }, [open, messages])

  function send() {
    const q = input.trim()
    if (!q) return
    setInput('')
    setMessages(prev => [...prev, { from: 'user', text: q }])
    setTyping(true)
    setTimeout(() => {
      setTyping(false)
      setMessages(prev => [...prev, { from: 'bot', text: getBotReply(q, lang) }])
    }, 900 + Math.random() * 600)
  }

  function onKey(e) {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send() }
  }

  const panel = (
    <div className={`chat-panel${open ? ' chat-panel--open' : ''}`}>
      <div className="chat-drag-handle" aria-hidden="true" />
      <div className="chat-header">
        <div className="chat-header-left">
          <span className="chat-dot" />
          <span className="chat-header-title">Ask Francesco</span>
        </div>
        <button className="chat-close" onClick={() => setOpen(false)} aria-label="Chiudi chat">
          <svg viewBox="0 0 24 24" fill="none" width="16" height="16">
            <line x1="18" y1="6" x2="6" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            <line x1="6" y1="6" x2="18" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
      </div>

      <div className="chat-messages">
        {messages.map((m, i) => (
          <div key={i} className={`chat-msg chat-msg--${m.from}`}>
            <span>{m.text}</span>
          </div>
        ))}
        {typing && (
          <div className="chat-msg chat-msg--bot chat-msg--typing">
            <span className="typing-dot" /><span className="typing-dot" /><span className="typing-dot" />
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      <div className="chat-input-row">
        <input
          ref={inputRef}
          className="chat-input"
          placeholder={lang === 'it' ? 'Chiedimi qualcosa…' : 'Ask me anything…'}
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={onKey}
        />
        <button className="chat-send" onClick={send} aria-label="Invia">
          <svg viewBox="0 0 24 24" fill="none" width="16" height="16">
            <line x1="5" y1="19" x2="19" y2="5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            <polyline points="8,5 19,5 19,16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
  )

  return (
    <>
      <div className="chat-widget" ref={widgetRef}>
        {/* Panel desktop (dentro il widget, position absolute) */}
        <div className="chat-panel-desktop">
          {panel}
        </div>

        {/* Toggle button */}
        <button
          className={`chat-toggle${open ? ' chat-toggle--open' : ''}${collapsed && !open ? ' chat-toggle--collapsed' : ''}`}
          onClick={() => setOpen(o => !o)}
          aria-label="Apri chat"
        >
          <svg viewBox="0 0 24 24" fill="none" width="16" height="16">
            {open
              ? <><line x1="18" y1="6" x2="6" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><line x1="6" y1="6" x2="18" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></>
              : <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            }
          </svg>
          <span className="chat-toggle-label">{open ? 'Chiudi' : 'Ask AI'}</span>
        </button>
      </div>

      {/* Panel mobile via portal (fuori dal widget trasformato) */}
      {createPortal(
        <div className="chat-panel-mobile">
          {panel}
        </div>,
        document.body
      )}
    </>
  )
}
