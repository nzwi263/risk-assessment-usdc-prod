export default function RiskCard({ title, level, description, metrics }) {
  const getRiskLevelClass = (level) => {
    switch (level.toLowerCase()) {
      case 'low':
        return 'low'
      case 'medium':
        return 'medium'
      case 'high':
        return 'high'
      default:
        return 'medium'
    }
  }

  return (
    <div className="risk-card">
      <div className="risk-card-header">
        <h3 className="risk-card-title">{title}</h3>
        <span className={`risk-level ${getRiskLevelClass(level)}`}>
          {level}
        </span>
      </div>
      <p className="risk-card-description">{description}</p>
      {metrics && metrics.length > 0 && (
        <div className="risk-metrics">
          {metrics.map((metric, index) => (
            <div key={index} className="metric">
              <span className="metric-label">{metric.label}</span>
              <span className="metric-value">{metric.value}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}