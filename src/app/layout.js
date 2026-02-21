import './globals.css'

export const metadata = {
  title: 'USDC Risk Profile App',
  description: 'A comprehensive risk assessment dashboard for USDC (USD Coin)',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}