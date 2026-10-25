function ValueCard({ title, description }) {
  return (
    <div className="value-card">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}

export default ValueCard