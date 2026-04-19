import { useState, useEffect, useMemo } from 'react'
import PokemonCard from './components/PokemonCard'
import SkeletonCard from './components/SkeletonCard'
import PokemonModal from './components/PokemonModal'
import Pokeball from './components/Pokeball'
import Heart from './components/Heart'
import { ALL_TYPES, TYPE_COLORS } from './utils/typeColors'
import './App.css'

const TOTAL        = 151
const CAPTURED_KEY = 'pokedex_captured'
const WISHED_KEY   = 'pokedex_wished'

function loadSet(key) {
  try {
    const raw = localStorage.getItem(key)
    return new Set(raw ? JSON.parse(raw) : [])
  } catch {
    return new Set()
  }
}

function saveSet(key, set) {
  localStorage.setItem(key, JSON.stringify([...set]))
}

export default function App() {
  const [pokemon, setPokemon]       = useState([])
  const [loading, setLoading]       = useState(true)
  const [search, setSearch]         = useState('')
  const [activeType, setActiveType] = useState('all')
  const [selected, setSelected]     = useState(null)
  const [activeTab, setActiveTab]   = useState('all')
  const [captured, setCaptured]     = useState(() => loadSet(CAPTURED_KEY))
  const [wished, setWished]         = useState(() => loadSet(WISHED_KEY))

  useEffect(() => {
    async function fetchAll() {
      try {
        const listRes = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${TOTAL}`)
        const list    = await listRes.json()
        const details = await Promise.all(
          list.results.map(p => fetch(p.url).then(r => r.json()))
        )
        setPokemon(details)
      } catch (err) {
        console.error('Erro ao carregar Pokédex:', err)
      } finally {
        setLoading(false)
      }
    }
    fetchAll()
  }, [])

  function toggleCapture(e, poke) {
    e.stopPropagation()
    setCaptured(prev => {
      const isCaptured = prev.has(poke.id)
      if (isCaptured && !window.confirm(`Liberar ${poke.name}?`)) return prev
      const next = new Set(prev)
      isCaptured ? next.delete(poke.id) : next.add(poke.id)
      saveSet(CAPTURED_KEY, next)
      return next
    })
  }

  function toggleWish(e, poke) {
    e.stopPropagation()
    setWished(prev => {
      const isWished = prev.has(poke.id)
      if (isWished && !window.confirm(`Remover ${poke.name} da lista de desejos?`)) return prev
      const next = new Set(prev)
      isWished ? next.delete(poke.id) : next.add(poke.id)
      saveSet(WISHED_KEY, next)
      return next
    })
  }

  const filtered = useMemo(() => {
    const q = search.toLowerCase().trim()
    const base = activeTab === 'mine' ? pokemon.filter(p => captured.has(p.id))
               : activeTab === 'wish' ? pokemon.filter(p => wished.has(p.id))
               : pokemon
    return base.filter(p => {
      const matchSearch = p.name.includes(q) || String(p.id).padStart(3, '0').includes(q)
      const matchType   = activeType === 'all' || p.types.some(t => t.type.name === activeType)
      return matchSearch && matchType
    })
  }, [pokemon, search, activeType, activeTab, captured, wished])

  const showMineEmpty = activeTab === 'mine' && !loading && captured.size === 0
  const showWishEmpty = activeTab === 'wish' && !loading && wished.size === 0

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-inner">
          <div className="logo">
            <span className="logo-ball">◉</span>
            <h1>Pokédex</h1>
          </div>
          <p className="header-sub">Geração I · {TOTAL} Pokémons</p>
        </div>
      </header>

      <nav className="tabs-nav">
        <div className="tabs-inner">
          <button
            className={`tab${activeTab === 'all' ? ' tab-active' : ''}`}
            onClick={() => setActiveTab('all')}
          >
            Todos
            {!loading && <span className="tab-badge">{pokemon.length}</span>}
          </button>

          <button
            className={`tab${activeTab === 'mine' ? ' tab-active' : ''}`}
            onClick={() => setActiveTab('mine')}
          >
            <span className="tab-icon"><Pokeball captured={captured.size > 0} size={15} /></span>
            Minha Pokédex
            <span className={`tab-badge${captured.size > 0 ? ' tab-badge-red' : ''}`}>
              {captured.size} / {pokemon.length || TOTAL}
            </span>
          </button>

          <button
            className={`tab${activeTab === 'wish' ? ' tab-active' : ''}`}
            onClick={() => setActiveTab('wish')}
          >
            <span className="tab-icon"><Heart wished={wished.size > 0} size={14} /></span>
            Lista de Desejos
            <span className={`tab-badge${wished.size > 0 ? ' tab-badge-gold' : ''}`}>
              {wished.size}
            </span>
          </button>
        </div>
      </nav>

      <div className="controls">
        <div className="search-wrap">
          <span className="search-icon">⌕</span>
          <input
            className="search-input"
            type="text"
            placeholder="Buscar por nome ou número..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          {search && (
            <button className="search-clear" onClick={() => setSearch('')}>×</button>
          )}
        </div>

        <div className="type-filters">
          <button
            className={`type-btn ${activeType === 'all' ? 'active' : ''}`}
            onClick={() => setActiveType('all')}
          >
            Todos
          </button>
          {ALL_TYPES.map(type => {
            const color = TYPE_COLORS[type]
            return (
              <button
                key={type}
                className={`type-btn ${activeType === type ? 'active' : ''}`}
                style={activeType === type
                  ? { background: color.bg, color: color.text, borderColor: color.bg }
                  : { '--hover-bg': color.bg }
                }
                onClick={() => setActiveType(activeType === type ? 'all' : type)}
              >
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </button>
            )
          })}
        </div>
      </div>

      <main className="grid-wrap">
        {loading ? (
          <div className="poke-grid">
            {Array.from({ length: 20 }).map((_, i) => <SkeletonCard key={i} />)}
          </div>
        ) : showMineEmpty ? (
          <div className="empty-state">
            <span className="empty-pokeball"><Pokeball captured={false} size={72} /></span>
            <p className="empty-title">Nenhum Pokémon capturado ainda</p>
            <p className="empty-sub">Clique na pokébola em qualquer card para começar sua coleção</p>
            <button onClick={() => setActiveTab('all')}>Explorar Pokémons</button>
          </div>
        ) : showWishEmpty ? (
          <div className="empty-state">
            <span className="empty-heart"><Heart wished={false} size={72} /></span>
            <p className="empty-title">Lista de desejos vazia</p>
            <p className="empty-sub">Clique no coração em qualquer card para adicionar à lista</p>
            <button onClick={() => setActiveTab('all')}>Explorar Pokémons</button>
          </div>
        ) : filtered.length === 0 ? (
          <div className="empty-state">
            <span className="empty-ball">◉</span>
            <p>Nenhum Pokémon encontrado</p>
            <button onClick={() => { setSearch(''); setActiveType('all') }}>Limpar filtros</button>
          </div>
        ) : (
          <div className="poke-grid" key={activeTab}>
            {filtered.map(p => (
              <PokemonCard
                key={p.id}
                pokemon={p}
                onClick={() => setSelected(p)}
                captured={captured.has(p.id)}
                onCapture={e => toggleCapture(e, p)}
                wished={wished.has(p.id)}
                onWish={e => toggleWish(e, p)}
              />
            ))}
          </div>
        )}
      </main>

      {selected && (
        <PokemonModal
          pokemon={selected}
          onClose={() => setSelected(null)}
          captured={captured.has(selected.id)}
          onCapture={e => toggleCapture(e, selected)}
          wished={wished.has(selected.id)}
          onWish={e => toggleWish(e, selected)}
        />
      )}
    </div>
  )
}
