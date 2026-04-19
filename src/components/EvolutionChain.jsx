import './EvolutionChain.css'

const ARTWORK = id =>
  `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`

function idFromUrl(url) {
  return parseInt(url.split('/').filter(Boolean).pop())
}

function formatName(name) {
  return name.split('-').map(w => w[0].toUpperCase() + w.slice(1)).join(' ')
}

function getMethod(details) {
  if (!details) return null
  const { trigger, min_level, item, held_item, min_happiness, time_of_day, min_beauty } = details

  const suffix = time_of_day === 'day'   ? ' (Dia)'
               : time_of_day === 'night' ? ' (Noite)'
               : ''

  if (trigger?.name === 'trade') {
    return held_item ? `Troca c/ ${formatName(held_item.name)}` : 'Troca'
  }
  if (trigger?.name === 'use-item' && item) return formatName(item.name)
  if (min_happiness)  return `Amizade${suffix}`
  if (min_beauty)     return 'Beleza máx.'
  if (min_level)      return `Nível ${min_level}${suffix}`
  return `Evoluir${suffix}`
}

function buildStages(chain) {
  const stages = []

  function walk(node, depth, details) {
    if (!stages[depth]) stages[depth] = []
    stages[depth].push({
      id:      idFromUrl(node.species.url),
      name:    node.species.name,
      details,
    })
    for (const child of node.evolves_to) {
      walk(child, depth + 1, child.evolution_details?.[0] ?? null)
    }
  }

  walk(chain, 0, null)
  return stages
}

export default function EvolutionChain({ chain, currentId }) {
  const stages = buildStages(chain)

  if (stages.length <= 1) {
    return <p className="evo-no-evo">Este Pokémon não evolui.</p>
  }

  return (
    <div className="evo-chain">
      {stages.map((stage, si) => (
        <div key={si} className="evo-stage-col">
          {stage.map(mon => (
            <div key={mon.id} className="evo-item">
              {si > 0 && (
                <div className="evo-connector">
                  <span className="evo-method">{getMethod(mon.details)}</span>
                  <span className="evo-arrow">→</span>
                </div>
              )}
              <div className={`evo-mon${mon.id === currentId ? ' evo-current' : ''}`}>
                <img
                  className="evo-img"
                  src={ARTWORK(mon.id)}
                  alt={mon.name}
                  loading="lazy"
                />
                <span className="evo-name">{mon.name}</span>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}
