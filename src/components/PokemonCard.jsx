import { useState } from 'react'
import { TYPE_COLORS } from '../utils/typeColors'
import Pokeball from './Pokeball'
import './PokemonCard.css'

export default function PokemonCard({ pokemon, onClick, captured, onCapture }) {
  const [animating, setAnimating] = useState(false)

  const primaryType = pokemon.types[0].type.name
  const color       = TYPE_COLORS[primaryType]?.bg ?? '#7c6aff'
  const id          = String(pokemon.id).padStart(3, '0')
  const image       = pokemon.sprites.other?.['official-artwork']?.front_default
                   ?? pokemon.sprites.front_default

  function handleCapture(e) {
    e.stopPropagation()
    setAnimating(true)
    setTimeout(() => setAnimating(false), 600)
    onCapture(e)
  }

  return (
    <article
      className={`poke-card${captured ? ' captured' : ''}`}
      style={{ '--type-color': color }}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={e => e.key === 'Enter' && onClick()}
      aria-label={`Ver detalhes de ${pokemon.name}`}
    >
      <div className="card-glow" />

      <button
        className={`capture-btn${captured ? ' is-captured' : ''}${animating ? ' animating' : ''}`}
        onClick={handleCapture}
        aria-label={captured ? `Liberar ${pokemon.name}` : `Capturar ${pokemon.name}`}
        title={captured ? 'Liberar' : 'Capturar'}
      >
        <Pokeball captured={captured} size={17} />
      </button>

      <span className="card-number">#{id}</span>
      <div className="card-img-wrap">
        <img
          className="card-img"
          src={image}
          alt={pokemon.name}
          loading="lazy"
        />
      </div>
      <h3 className="card-name">{pokemon.name}</h3>
      <div className="card-types">
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
    </article>
  )
}
