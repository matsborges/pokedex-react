import { useState } from 'react'
import { TYPE_COLORS } from '../utils/typeColors'
import Pokeball from './Pokeball'
import Heart from './Heart'
import './PokemonCard.css'

export default function PokemonCard({ pokemon, onClick, captured, onCapture, wished, onWish }) {
  const [capAnim, setCapAnim]   = useState(false)
  const [wishAnim, setWishAnim] = useState(false)

  const primaryType = pokemon.types[0].type.name
  const color       = TYPE_COLORS[primaryType]?.bg ?? '#7c6aff'
  const id          = String(pokemon.id).padStart(3, '0')
  const image       = pokemon.sprites.other?.['official-artwork']?.front_default
                   ?? pokemon.sprites.front_default

  function handleCapture(e) {
    e.stopPropagation()
    setCapAnim(true)
    setTimeout(() => setCapAnim(false), 600)
    onCapture(e)
  }

  function handleWish(e) {
    e.stopPropagation()
    setWishAnim(true)
    setTimeout(() => setWishAnim(false), 500)
    onWish(e)
  }

  const cardClass = ['poke-card', captured && 'captured', wished && 'wished']
    .filter(Boolean).join(' ')

  return (
    <article
      className={cardClass}
      style={{ '--type-color': color }}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={e => e.key === 'Enter' && onClick()}
      aria-label={`Ver detalhes de ${pokemon.name}`}
    >
      <div className="card-glow" />

      {/* Wish button — top left */}
      <button
        className={`wish-btn${wished ? ' is-wished' : ''}${wishAnim ? ' animating' : ''}`}
        onClick={handleWish}
        aria-label={wished ? `Remover ${pokemon.name} dos desejos` : `Adicionar ${pokemon.name} aos desejos`}
        title={wished ? 'Remover dos desejos' : 'Adicionar aos desejos'}
      >
        <Heart wished={wished} size={15} />
      </button>

      {/* Capture button — top right */}
      <button
        className={`capture-btn${captured ? ' is-captured' : ''}${capAnim ? ' animating' : ''}`}
        onClick={handleCapture}
        aria-label={captured ? `Liberar ${pokemon.name}` : `Capturar ${pokemon.name}`}
        title={captured ? 'Liberar' : 'Capturar'}
      >
        <Pokeball captured={captured} size={17} />
      </button>

      <span className="card-number">#{id}</span>
      <div className="card-img-wrap">
        <img className="card-img" src={image} alt={pokemon.name} loading="lazy" />
      </div>
      <h3 className="card-name">{pokemon.name}</h3>
      <div className="card-types">
        {pokemon.types.map(({ type }) => {
          const c = TYPE_COLORS[type.name] ?? { bg: '#9e9e9e', text: '#fff' }
          return (
            <span key={type.name} className="type-badge" style={{ background: c.bg, color: c.text }}>
              {type.name}
            </span>
          )
        })}
      </div>
    </article>
  )
}
