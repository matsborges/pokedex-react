import { useEffect, useState } from 'react'
import { TYPE_COLORS, STAT_COLORS, STAT_LABELS } from '../utils/typeColors'
import EvolutionChain from './EvolutionChain'
import Pokeball from './Pokeball'
import './PokemonModal.css'

export default function PokemonModal({ pokemon, onClose, captured, onCapture }) {
  const id          = String(pokemon.id).padStart(3, '0')
  const image       = pokemon.sprites.other?.['official-artwork']?.front_default
                   ?? pokemon.sprites.front_default
  const primaryType = pokemon.types[0].type.name
  const typeColor   = TYPE_COLORS[primaryType]?.bg ?? '#7c6aff'

  const [evoChain, setEvoChain]     = useState(null)
  const [evoLoading, setEvoLoading] = useState(true)

  useEffect(() => {
    const handler = e => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handler)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handler)
      document.body.style.overflow = ''
    }
  }, [onClose])

  useEffect(() => {
    setEvoChain(null)
    setEvoLoading(true)
    async function fetchChain() {
      try {
        const speciesRes = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemon.id}`)
        const species    = await speciesRes.json()
        const chainRes   = await fetch(species.evolution_chain.url)
        const chainData  = await chainRes.json()
        setEvoChain(chainData.chain)
      } catch {
        setEvoChain(null)
      } finally {
        setEvoLoading(false)
      }
    }
    fetchChain()
  }, [pokemon.id])

  const height = (pokemon.height / 10).toFixed(1)
  const weight = (pokemon.weight / 10).toFixed(1)

  return (
    <div className="modal-overlay" onClick={e => e.target === e.currentTarget && onClose()}>
      <div className="modal" style={{ '--type-color': typeColor }}>
        <div className="modal-bg-circle" />

        <button className="modal-close" onClick={onClose} aria-label="Fechar">×</button>

        <div className="modal-header">
          <div className="modal-img-wrap">
            <img src={image} alt={pokemon.name} className="modal-img" />
          </div>
          <div className="modal-title">
            <span className="modal-number">#{id}</span>
            <h2 className="modal-name">{pokemon.name}</h2>
            <div className="modal-types">
              {pokemon.types.map(({ type }) => {
                const c = TYPE_COLORS[type.name] ?? { bg: '#9e9e9e', text: '#fff' }
                return (
                  <span
                    key={type.name}
                    className="type-badge"
                    style={{ background: c.bg, color: c.text }}
                  >
                    {type.name}
                  </span>
                )
              })}
            </div>
            <button
              className={`modal-capture-btn${captured ? ' is-captured' : ''}`}
              onClick={onCapture}
              aria-label={captured ? `Liberar ${pokemon.name}` : `Capturar ${pokemon.name}`}
            >
              <Pokeball captured={captured} size={16} />
              {captured ? 'Capturado' : 'Capturar'}
            </button>
          </div>
        </div>

        <div className="modal-info">
          <div className="info-row">
            <div className="info-item">
              <span className="info-label">Altura</span>
              <span className="info-value">{height} m</span>
            </div>
            <div className="info-item">
              <span className="info-label">Peso</span>
              <span className="info-value">{weight} kg</span>
            </div>
            <div className="info-item">
              <span className="info-label">Habilidades</span>
              <span className="info-value abilities">
                {pokemon.abilities.map(a => a.ability.name).join(', ')}
              </span>
            </div>
          </div>
        </div>

        <div className="modal-stats">
          <h3 className="stats-title">Base Stats</h3>
          {pokemon.stats.map(({ stat, base_stat }) => {
            const key   = stat.name
            const color = STAT_COLORS[key] ?? '#7c6aff'
            const label = STAT_LABELS[key] ?? key
            const pct   = Math.round((base_stat / 255) * 100)
            return (
              <div key={key} className="stat-row">
                <span className="stat-label">{label}</span>
                <span className="stat-value">{base_stat}</span>
                <div className="stat-track">
                  <div
                    className="stat-fill"
                    style={{ '--pct': `${pct}%`, background: color }}
                  />
                </div>
              </div>
            )
          })}
        </div>

        <div className="modal-section">
          <h3 className="stats-title">Evoluções</h3>
          {evoLoading ? (
            <div className="evo-skeleton">
              {[0, 1, 2].map(i => (
                <div key={i} className="evo-skel-item">
                  <div className="evo-skel-img" style={{ animationDelay: `${i * 0.15}s` }} />
                  <div className="evo-skel-label" style={{ animationDelay: `${i * 0.15}s` }} />
                </div>
              ))}
            </div>
          ) : evoChain ? (
            <EvolutionChain chain={evoChain} currentId={pokemon.id} />
          ) : (
            <p className="evo-no-evo">Não foi possível carregar as evoluções.</p>
          )}
        </div>
      </div>
    </div>
  )
}
