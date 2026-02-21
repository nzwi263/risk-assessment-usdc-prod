# USDC Risk Profile App

A one-page Vercel-compliant application that displays the risk profile for USDC (USD Coin).

## Overview

This application provides a comprehensive risk assessment dashboard for USDC, a stablecoin pegged to the US Dollar. It displays key risk metrics including:

- **Collateralization Risk** - Understanding USDC's backing and reserves
- **Regulatory Risk** - Legal and regulatory considerations
- **Market Risk** - Price stability and liquidity concerns
- **Counterparty Risk** - Issuer reliability and transparency
- **Smart Contract Risk** - Technical security assessment

## Tech Stack

- **Framework**: Next.js (Vercel-optimized)
- **Styling**: CSS Modules / Tailwind CSS
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd risk-assessment-usdc

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

### Building for Production

```bash
npm run build
```

## Vercel Deployment

### Deploy with Vercel CLI

```bash
npm i -g vercel
vercel
```

### Deploy from Git

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Import the project in Vercel
3. Vercel will automatically detect Next.js and configure the build settings
4. Click "Deploy"

## Project Structure

```
.
├── src/
│   ├── app/
│   │   ├── page.js          # Main risk profile page
│   │   ├── layout.js        # Root layout
│   │   └── globals.css      # Global styles
│   └── components/
│       ├── RiskCard.js      # Individual risk metric card
│       ├── RiskGauge.js     # Visual risk gauge component
│       └── Header.js        # App header
├── public/
│   └── images/              # Static images
├── vercel.json              # Vercel configuration
├── next.config.js           # Next.js configuration
└── package.json
```

## Risk Profile Sections

### 1. Overall Risk Score
A composite score summarizing USDC's overall risk profile.

### 2. Reserve Transparency
Information about USDC's reserve holdings and audit reports.

### 3. Regulatory Compliance
Details on regulatory status and compliance measures.

### 4. Market Metrics
- Circulating supply
- Trading volume
- Peg stability

### 5. Governance
Information about Centre (the issuer) and governance structures.

## Environment Variables

Create a `.env.local` file for local development:

```env
NEXT_PUBLIC_API_URL=https://api.example.com
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

MIT License - see LICENSE file for details.

## Disclaimer

This app is for informational purposes only and does not constitute financial advice. Always do your own research before making any investment decisions.

## Resources

- [USDC Official Website](https://www.circle.com/usdc)
- [USDC Transparency](https://www.circle.com/en/usdc-transparency)
- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Documentation](https://nextjs.org/docs)
