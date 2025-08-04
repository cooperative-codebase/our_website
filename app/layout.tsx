import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Cooperative Codebase - Software Solutions for Community Empowerment',
  description: 'Building software solutions and growing the cooperative ecosystem in New Orleans. We create custom technology solutions that strengthen cooperatives, nonprofits, and community organizations.',
  generator: 'Next.js',
  icons: {
    icon: '/images/logo.png',
    shortcut: '/images/logo.png',
    apple: '/images/logo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" sizes="32x32" href="/images/logo.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/logo.png" />
        <link rel="shortcut icon" href="/images/logo.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/logo.png" />
      </head>
      <body>{children}</body>
    </html>
  )
}
