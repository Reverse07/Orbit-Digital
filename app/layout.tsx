import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Orbit Digital — Agencia de Desarrollo Web',
  description: 'Construimos sitios web modernos, sistemas y soluciones digitales escalables para empresas.',
  keywords: 'desarrollo web, agencia digital, sistemas web, automatización, Next.js',
  openGraph: {
    title: 'Orbit Digital',
    description: 'Soluciones digitales modernas para empresas.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}