import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Türk Hat Sanatı – Osmanlı Kaligrafi',
  description: 'Osmanlı medeniyetinin en köklü sanatlarından biri olan hat sanatı.',
  icons: { icon: 'data:,' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <head>
        {/* Inter – body text */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet" />
        {/* Satoshi – headings (same as Framer site) */}
        <link href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
}
