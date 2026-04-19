import './SkeletonCard.css'

export default function SkeletonCard() {
  return (
    <div className="skeleton-card">
      <div className="skel skel-num" />
      <div className="skel skel-img" />
      <div className="skel skel-name" />
      <div className="skel-types">
        <div className="skel skel-badge" />
        <div className="skel skel-badge skel-badge-2" />
      </div>
    </div>
  )
}
