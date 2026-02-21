'use client'

import { useEffect, useState } from 'react'

export default function RiskGauge({ score, label, description }) {
  const [rotation, setRotation] = useState(-90)

  useEffect(() => {
    // Score is 0-100, map to -90 to 90 degrees
    const newRotation = (score / 100) * 180 - 90
    setRotation(newRotation)
  }, [score])

  const getScoreColor = (score) => {
    if (score <= 30) return '#48bb78' // Green - Low risk
    if (score <= 60) return '#ecc94b' // Yellow - Medium risk
    return '#f56565' // Red - High risk
  }

  return (
    <div className="risk-gauge">
      <div className="gauge-background">
        <div className="gauge-cover"></div>
        <div
          className="gauge-needle"
          style={{
            transform: `translateX(-50%) rotate(${rotation}deg)`,
            backgroundColor: getScoreColor(score)
          }}
        ></div>
        <div className="gauge-center"></div>
      </div>
      <div className="gauge-label" style={{ color: getScoreColor(score) }}>
        {score}
      </div>
      <div className="gauge-description">{label}</div>
      {description && <div className="gauge-description">{description}</div>}
    </div>
  )
}