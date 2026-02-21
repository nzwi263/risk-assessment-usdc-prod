import Header from '../components/Header'
import RiskCard from '../components/RiskCard'
import RiskGauge from '../components/RiskGauge'

export default function Home() {
  const riskData = {
    overallScore: 35,
    collateralization: {
      level: 'Low',
      description: 'USDC maintains full backing with cash equivalents and US Treasury bills. Regular audits by top accounting firms ensure transparency.',
      metrics: [
        { label: 'Backing', value: '100%' },
        { label: 'Reserve Type', value: 'Cash & T-Bills' },
        { label: 'Last Audit', value: 'Jan 2024' }
      ]
    },
    regulatory: {
      level: 'Medium',
      description: 'USDC is regulated as a stablecoin and subject to evolving US regulatory frameworks. Centre LLC maintains compliance with relevant laws.',
      metrics: [
        { label: 'Jurisdiction', value: 'US' },
        { label: 'Status', value: 'Regulated' },
        { label: 'License', value: 'MTL' }
      ]
    },
    market: {
      level: 'Low',
      description: 'USDC maintains strong liquidity across major exchanges with high trading volume and tight peg stability to $1.00.',
      metrics: [
        { label: '24h Volume', value: '$50B+' },
        { label: 'Peg Deviation', value: '<0.01%' },
        { label: 'Exchanges', value: '100+' }
      ]
    },
    counterparty: {
      level: 'Low',
      description: 'Centre (Circle) is a well-established company with significant institutional backing and transparent operations.',
      metrics: [
        { label: 'Issuer', value: 'Circle' },
        { label: 'Founded', value: '2018' },
        { label: 'Backing', value: 'Goldman, IDG' }
      ]
    },
    smartContract: {
      level: 'Low',
      description: 'The USDC smart contracts have been audited multiple times by leading security firms and have a proven track record.',
      metrics: [
        { label: 'Audits', value: '5+' },
        { label: 'Bug Bounty', value: 'Active' },
        { label: 'Age', value: '6+ years' }
      ]
    },
    reserveTransparency: {
      level: 'Low',
      description: 'Circle publishes monthly reserve attestations and undergoes regular third-party audits to verify backing.',
      metrics: [
        { label: 'Attestations', value: 'Monthly' },
        { label: 'Auditor', value: 'Grant Thornton' },
        { label: 'Transparency', value: 'High' }
      ]
    },
    governance: {
      level: 'Low',
      description: 'Centre Consortium governs USDC with transparent governance structures and established decision-making processes.',
      metrics: [
        { label: 'Governance', value: 'Centre Consortium' },
        { label: 'Token Type', value: 'Fungible' },
        { label: 'Standard', value: 'ERC-20' }
      ]
    },
    marketMetrics: {
      circulatingSupply: '$45.2B',
      tradingVolume: '$52.1B',
      pegStability: '$1.00',
      marketCap: '$45.2B'
    }
  }

  return (
    <main>
      <Header />
      
      <div className="main-content">
        {/* Overall Risk Score Section */}
        <section className="risk-score-section">
          <h2 className="section-title">Overall Risk Score</h2>
          <RiskGauge 
            score={riskData.overallScore} 
            label="Composite Risk Score"
            description="Lower scores indicate lower risk"
          />
        </section>

        {/* Risk Cards Section */}
        <section>
          <h2 className="section-title">Risk Categories</h2>
          <div className="risk-cards-grid">
            <RiskCard 
              title="Collateralization Risk"
              level={riskData.collateralization.level}
              description={riskData.collateralization.description}
              metrics={riskData.collateralization.metrics}
            />
            <RiskCard 
              title="Regulatory Risk"
              level={riskData.regulatory.level}
              description={riskData.regulatory.description}
              metrics={riskData.regulatory.metrics}
            />
            <RiskCard 
              title="Market Risk"
              level={riskData.market.level}
              description={riskData.market.description}
              metrics={riskData.market.metrics}
            />
            <RiskCard 
              title="Counterparty Risk"
              level={riskData.counterparty.level}
              description={riskData.counterparty.description}
              metrics={riskData.counterparty.metrics}
            />
            <RiskCard 
              title="Smart Contract Risk"
              level={riskData.smartContract.level}
              description={riskData.smartContract.description}
              metrics={riskData.smartContract.metrics}
            />
            <RiskCard 
              title="Reserve Transparency"
              level={riskData.reserveTransparency.level}
              description={riskData.reserveTransparency.description}
              metrics={riskData.reserveTransparency.metrics}
            />
          </div>
        </section>

        {/* Market Metrics Section */}
        <section>
          <h2 className="section-title">Market Metrics</h2>
          <div className="market-metrics-grid">
            <div className="market-metric">
              <div className="market-metric-label">Circulating Supply</div>
              <div className="market-metric-value">{riskData.marketMetrics.circulatingSupply}</div>
            </div>
            <div className="market-metric">
              <div className="market-metric-label">24h Trading Volume</div>
              <div className="market-metric-value">{riskData.marketMetrics.tradingVolume}</div>
            </div>
            <div className="market-metric">
              <div className="market-metric-label">Peg Stability</div>
              <div className="market-metric-value">{riskData.marketMetrics.pegStability}</div>
            </div>
            <div className="market-metric">
              <div className="market-metric-label">Market Cap</div>
              <div className="market-metric-value">{riskData.marketMetrics.marketCap}</div>
            </div>
          </div>
        </section>

        {/* Governance Section */}
        <section>
          <h2 className="section-title">Governance</h2>
          <div className="risk-cards-grid">
            <RiskCard 
              title="Issuer Governance"
              level={riskData.governance.level}
              description={riskData.governance.description}
              metrics={riskData.governance.metrics}
            />
          </div>
        </section>

        {/* Disclaimer */}
        <div className="disclaimer">
          <strong>Disclaimer:</strong> This app is for informational purposes only and does not constitute financial advice. 
          Always do your own research before making any investment decisions. The risk assessments provided are based on publicly 
          available information and should not be considered as definitive financial advice.
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div>
            <strong>USDC Risk Profile App</strong>
            <p style={{ fontSize: '12px', opacity: 0.8, marginTop: '8px' }}>
              A comprehensive risk assessment dashboard for USDC
            </p>
          </div>
          <div className="footer-links">
            <a 
              href="https://www.circle.com/usdc" 
              target="_blank" 
              rel="noopener noreferrer"
              className="footer-link"
            >
              USDC Official
            </a>
            <a 
              href="https://www.circle.com/en/usdc-transparency" 
              target="_blank" 
              rel="noopener noreferrer"
              className="footer-link"
            >
              Transparency
            </a>
          </div>
        </div>
      </footer>
    </main>
  )
}