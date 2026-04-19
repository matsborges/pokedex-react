export default function Pokeball({ captured, size = 20 }) {
  const topFill    = captured ? '#e53935' : '#374151'
  const bottomFill = captured ? '#f0f0f0' : '#1f2937'
  const divider    = captured ? '#111827' : '#2d3748'
  const ringStroke = captured ? '#111827' : '#374151'
  const btnFill    = captured ? '#ffffff' : '#4b5563'
  const border     = captured ? '#b71c1c' : '#4b5563'

  return (
    <svg width={size} height={size} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
      {/* Bottom half */}
      <path d="M1.5 16 A14.5 14.5 0 0 0 30.5 16 Z" fill={bottomFill} />
      {/* Top half */}
      <path d="M1.5 16 A14.5 14.5 0 0 1 30.5 16 Z" fill={topFill} />
      {/* Divider band */}
      <rect x="1.5" y="14.2" width="29" height="3.6" fill={divider} />
      {/* Center ring */}
      <circle cx="16" cy="16" r="5" fill={divider} stroke={ringStroke} strokeWidth="1" />
      {/* Center button */}
      <circle cx="16" cy="16" r="3" fill={btnFill} />
      {/* Outer border */}
      <circle cx="16" cy="16" r="14.5" fill="none" stroke={border} strokeWidth="1.5" />
    </svg>
  )
}
