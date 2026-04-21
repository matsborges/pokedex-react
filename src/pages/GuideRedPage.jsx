import { useState, useEffect, useRef, useCallback } from 'react'
import pokemonRedGuide from '../../doc/pokemon-red-guide.js'
import './GuideRedPage.css'

function parseContent(text) {
  const lines = text.trim().split('\n')
  const result = []
  let i = 0

  while (i < lines.length) {
    const line = lines[i]

    if (line.startsWith('- ') || line.startsWith('* ')) {
      const items = []
      while (i < lines.length && (lines[i].startsWith('- ') || lines[i].startsWith('* '))) {
        items.push(inlineParse(lines[i].slice(2)))
        i++
      }
      result.push(<ul key={i}>{items.map((item, j) => <li key={j} dangerouslySetInnerHTML={{ __html: item }} />)}</ul>)
      continue
    }

    if (line.trim() === '') {
      i++
      continue
    }

    result.push(<p key={i} dangerouslySetInnerHTML={{ __html: inlineParse(line) }} />)
    i++
  }

  return result
}

function inlineParse(text) {
  return text
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/`(.+?)`/g, '<code>$1</code>')
}

export default function GuideRedPage({ onBack }) {
  const { title, subtitle, year, platform, sections } = pokemonRedGuide

  const [expanded, setExpanded]     = useState(() => new Set([sections[0].id]))
  const [activeId, setActiveId]     = useState(sections[0].id)
  const [scrollPct, setScrollPct]   = useState(0)
  const [showTop, setShowTop]       = useState(false)
  const mainRef = useRef(null)
  const sectionRefs = useRef({})

  const readCount = sections.filter(s => expanded.has(s.id)).length

  useEffect(() => {
    function onScroll() {
      const el = document.documentElement
      const scrolled = el.scrollTop || document.body.scrollTop
      const total = el.scrollHeight - el.clientHeight
      setScrollPct(total > 0 ? (scrolled / total) * 100 : 0)
      setShowTop(scrolled > 400)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const observers = sections.map(section => {
      const el = sectionRefs.current[section.id]
      if (!el) return null
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveId(section.id) },
        { rootMargin: '-20% 0px -60% 0px' }
      )
      obs.observe(el)
      return obs
    })
    return () => observers.forEach(o => o?.disconnect())
  }, [])

  const toggle = useCallback((id) => {
    setExpanded(prev => {
      const next = new Set(prev)
      next.has(id) ? next.delete(id) : next.add(id)
      return next
    })
  }, [])

  function scrollToSection(id) {
    sectionRefs.current[id]?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const expandAll   = () => setExpanded(new Set(sections.map(s => s.id)))
  const collapseAll = () => setExpanded(new Set())

  return (
    <div className="guide-page">
      {/* Progress bar */}
      <div className="guide-progress-bar" style={{ width: `${scrollPct}%` }} />

      {/* Back button */}
      <button className="guide-back-btn" onClick={onBack}>← Pokédex</button>

      {/* Hero */}
      <div className="guide-hero">
        <div className="guide-hero-ghost">RED</div>
        <div className="guide-hero-inner">
          <span className="guide-hero-badge">{platform} · {year}</span>
          <h1 className="guide-hero-title">{title}</h1>
          <p className="guide-hero-subtitle">{subtitle}</p>
          <div className="guide-hero-stats">
            <div className="guide-stat"><span className="guide-stat-num">151</span><span className="guide-stat-label">Pokémon</span></div>
            <div className="guide-stat"><span className="guide-stat-num">8</span><span className="guide-stat-label">Ginásios</span></div>
            <div className="guide-stat"><span className="guide-stat-num">5</span><span className="guide-stat-label">Lendários</span></div>
            <div className="guide-stat"><span className="guide-stat-num">{sections.length}</span><span className="guide-stat-label">Seções</span></div>
          </div>
        </div>
      </div>

      {/* Layout */}
      <div className="guide-layout">

        {/* Sidebar */}
        <aside className="guide-sidebar">
          <div className="guide-sidebar-inner">
            <div className="guide-sidebar-header">
              <span className="guide-sidebar-badge">Pokémon Red</span>
              <div className="guide-sidebar-progress">
                <div className="guide-sidebar-progress-bar" style={{ width: `${(readCount / sections.length) * 100}%` }} />
              </div>
              <span className="guide-sidebar-progress-label">{readCount}/{sections.length} seções</span>
            </div>

            <div className="guide-sidebar-actions">
              <button className="guide-sidebar-action" onClick={expandAll}>Expandir tudo</button>
              <button className="guide-sidebar-action" onClick={collapseAll}>Recolher tudo</button>
            </div>

            <nav className="guide-sidebar-nav">
              {sections.map(section => (
                <button
                  key={section.id}
                  className={`guide-nav-item${activeId === section.id ? ' active' : ''}${expanded.has(section.id) ? ' is-open' : ''}`}
                  onClick={() => scrollToSection(section.id)}
                >
                  {section.title}
                </button>
              ))}
            </nav>
          </div>
        </aside>

        {/* Main content */}
        <main className="guide-main" ref={mainRef}>
          {sections.map((section, idx) => {
            const isOpen = expanded.has(section.id)
            return (
              <section
                key={section.id}
                id={section.id}
                ref={el => sectionRefs.current[section.id] = el}
                className={`guide-section${isOpen ? ' expanded' : ''}`}
              >
                <button className="guide-section-header" onClick={() => toggle(section.id)}>
                  <span className="guide-section-num">{String(idx + 1).padStart(2, '0')}</span>
                  <span className="guide-section-title">{section.title}</span>
                  <span className="guide-section-chevron">{isOpen ? '▲' : '▼'}</span>
                </button>
                {isOpen && (
                  <div className="guide-section-body">
                    {parseContent(section.content)}
                  </div>
                )}
              </section>
            )
          })}
        </main>

      </div>

      {/* Scroll to top */}
      {showTop && (
        <button className="guide-scroll-top" onClick={scrollToTop} aria-label="Voltar ao topo">↑</button>
      )}
    </div>
  )
}
