import { useEffect, useState } from 'react'
import { TYPE_COLORS, STAT_COLORS, STAT_LABELS, ALL_TYPES } from '../utils/typeColors'
import EvolutionChain from './EvolutionChain'
import Pokeball from './Pokeball'
import Heart from './Heart'
import './PokemonModal.css'

// ── Encounter helpers ──────────────────────────────
const NO_ENCOUNTER_MSG = {
  1:   'Pokémon inicial — obtido ao escolher no Laboratório Oak',
  4:   'Pokémon inicial — obtido ao escolher no Laboratório Oak',
  7:   'Pokémon inicial — obtido ao escolher no Laboratório Oak',
  106: 'Obtido no Dojo de Luta em Saffron City',
  107: 'Obtido no Dojo de Luta em Saffron City',
  131: 'Presente na Silph Co. em Saffron City',
  133: 'Presente no apartamento em Celadon City',
  138: 'Revivido a partir do Fóssil Helix',
  139: 'Evolução de Pokémon fóssil (Omanyte)',
  140: 'Revivido a partir do Fóssil Cúpula',
  141: 'Evolução de Pokémon fóssil (Kabuto)',
  142: 'Revivido a partir do Âmbar Antigo',
  144: 'Pokémon Lendário — único no jogo',
  145: 'Pokémon Lendário — único no jogo',
  146: 'Pokémon Lendário — único no jogo',
  150: 'Pokémon Lendário — encontrado em Cerulean Cave',
  151: 'Obtido em evento especial',
}

function formatLocation(raw) {
  return raw
    .replace(/-area$/, '')
    .replace(/-\d+f$/, m => ' ' + m.replace(/-/, '').toUpperCase())
    .split('-')
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ')
}

// ── Type effectiveness ─────────────────────────────
function computeTypeEff(typeDataList) {
  const def = {}
  ALL_TYPES.forEach(t => { def[t] = 1 })

  for (const data of typeDataList) {
    const rel = data.damage_relations
    for (const { name } of rel.double_damage_from) if (name in def) def[name] *= 2
    for (const { name } of rel.half_damage_from)   if (name in def) def[name] *= 0.5
    for (const { name } of rel.no_damage_from)     if (name in def) def[name]  = 0
  }

  const weaknesses = ALL_TYPES
    .filter(t => def[t] >= 2)
    .map(t => ({ type: t, mult: def[t] }))
    .sort((a, b) => b.mult - a.mult)

  const offSet = new Set()
  for (const data of typeDataList)
    for (const { name } of data.damage_relations.double_damage_to)
      if (ALL_TYPES.includes(name)) offSet.add(name)

  return { weaknesses, strengths: [...offSet] }
}

export default function PokemonModal({ pokemon, onClose, captured, onCapture, wished, onWish }) {
  const id          = String(pokemon.id).padStart(3, '0')
  const image       = pokemon.sprites.other?.['official-artwork']?.front_default
                   ?? pokemon.sprites.front_default
  const primaryType = pokemon.types[0].type.name
  const typeColor   = TYPE_COLORS[primaryType]?.bg ?? '#7c6aff'

  const [evoChain, setEvoChain]       = useState(null)
  const [evoLoading, setEvoLoading]   = useState(true)
  const [encounters, setEncounters]   = useState(null)
  const [encLoading, setEncLoading]   = useState(true)
  const [typeEff, setTypeEff]         = useState(null)
  const [typeEffLoading, setTypeEffLoading] = useState(true)

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
    setEvoChain(null);    setEvoLoading(true)
    setEncounters(null);  setEncLoading(true)
    setTypeEff(null);     setTypeEffLoading(true)

    async function fetchSpeciesData() {
      try {
        const speciesRes = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemon.id}`)
        const species    = await speciesRes.json()
        const chainRes   = await fetch(species.evolution_chain.url)
        setEvoChain((await chainRes.json()).chain)
      } catch { setEvoChain(null) }
      finally  { setEvoLoading(false) }
    }

    async function fetchEncounters() {
      try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.id}/encounters`)
        setEncounters(await res.json())
      } catch { setEncounters([]) }
      finally  { setEncLoading(false) }
    }

    async function fetchTypeEff() {
      try {
        const list = await Promise.all(
          pokemon.types.map(({ type }) =>
            fetch(`https://pokeapi.co/api/v2/type/${type.name}`).then(r => r.json())
          )
        )
        setTypeEff(computeTypeEff(list))
      } catch { setTypeEff(null) }
      finally  { setTypeEffLoading(false) }
    }

    fetchSpeciesData()
    fetchEncounters()
    fetchTypeEff()
  }, [pokemon.id])

  const height = (pokemon.height / 10).toFixed(1)
  const weight = (pokemon.weight / 10).toFixed(1)

  const uniqueLocations  = encounters ? [...new Set(encounters.map(e => e.location_area.name))] : []
  const displayLocations = uniqueLocations.slice(0, 9)
  const extraCount       = uniqueLocations.length - displayLocations.length

  return (
    <div className="modal-overlay" onClick={e => e.target === e.currentTarget && onClose()}>
      <div className="modal" style={{ '--type-color': typeColor }}>
        <div className="modal-bg-circle" />
        <button className="modal-close" onClick={onClose} aria-label="Fechar">×</button>

        {/* ── Header ───────────────────────────────── */}
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
                  <span key={type.name} className="type-badge" style={{ background: c.bg, color: c.text }}>
                    {type.name}
                  </span>
                )
              })}
            </div>
            <div className="modal-actions">
              <button
                className={`modal-action-btn modal-capture-btn${captured ? ' is-captured' : ''}`}
                onClick={onCapture}
              >
                <Pokeball captured={captured} size={15} />
                {captured ? 'Capturado' : 'Capturar'}
              </button>
              <button
                className={`modal-action-btn modal-wish-btn${wished ? ' is-wished' : ''}`}
                onClick={onWish}
              >
                <Heart wished={wished} size={15} />
                {wished ? 'Desejado' : 'Desejar'}
              </button>
            </div>
          </div>
        </div>

        {/* ── Info strip ───────────────────────────── */}
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

        {/* ── Two-column body ──────────────────────── */}
        <div className="modal-body-grid">

          {/* Left: Base Stats */}
          <div>
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
                    <div className="stat-fill" style={{ '--pct': `${pct}%`, background: color }} />
                  </div>
                </div>
              )
            })}
          </div>

          {/* Right: Encounters + Type Effectiveness */}
          <div className="modal-col-right">

            {/* Onde Encontrar */}
            <div>
              <h3 className="stats-title">Onde Encontrar</h3>
              {encLoading ? (
                <div className="loc-skeleton">
                  {[80, 120, 95, 110].map((w, i) => (
                    <div key={i} className="loc-skel-chip" style={{ width: w, animationDelay: `${i * 0.1}s` }} />
                  ))}
                </div>
              ) : uniqueLocations.length > 0 ? (
                <div className="loc-list">
                  {displayLocations.map(name => (
                    <span key={name} className="loc-chip">{formatLocation(name)}</span>
                  ))}
                  {extraCount > 0 && <span className="loc-chip loc-extra">+{extraCount} locais</span>}
                </div>
              ) : (
                <p className="loc-none">
                  <span className="loc-none-icon">◎</span>
                  {NO_ENCOUNTER_MSG[pokemon.id] ?? 'Não encontrado na natureza'}
                </p>
              )}
            </div>

            {/* Efetividade de Tipos */}
            <div>
              <h3 className="stats-title">Efetividade de Tipos</h3>
              {typeEffLoading ? (
                <div className="eff-skeleton">
                  {[55, 45, 65, 50, 60, 48].map((w, i) => (
                    <div key={i} className="eff-skel-chip" style={{ width: w, animationDelay: `${i * 0.08}s` }} />
                  ))}
                </div>
              ) : typeEff ? (
                <>
                  <div className="eff-group">
                    <span className="eff-sublabel">Fraco contra</span>
                    <div className="eff-badges">
                      {typeEff.weaknesses.length === 0 ? (
                        <span className="eff-none">Nenhuma fraqueza</span>
                      ) : typeEff.weaknesses.map(({ type, mult }) => {
                        const c = TYPE_COLORS[type] ?? { bg: '#9e9e9e', text: '#fff' }
                        return (
                          <span key={type} className="type-badge eff-badge" style={{ background: c.bg, color: c.text }}>
                            {type}<span className="eff-mult">×{mult}</span>
                          </span>
                        )
                      })}
                    </div>
                  </div>
                  <div className="eff-group">
                    <span className="eff-sublabel">Forte contra</span>
                    <div className="eff-badges">
                      {typeEff.strengths.length === 0 ? (
                        <span className="eff-none">Nenhum tipo</span>
                      ) : typeEff.strengths.map(type => {
                        const c = TYPE_COLORS[type] ?? { bg: '#9e9e9e', text: '#fff' }
                        return (
                          <span key={type} className="type-badge eff-badge" style={{ background: c.bg, color: c.text }}>
                            {type}
                          </span>
                        )
                      })}
                    </div>
                  </div>
                </>
              ) : (
                <p className="eff-none">Não foi possível carregar.</p>
              )}
            </div>

          </div>
        </div>

        {/* ── Evoluções (full width) ───────────────── */}
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
