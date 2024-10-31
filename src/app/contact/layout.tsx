import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Developer of Money Map',
  description: 'Contact Developer of Money Map.',
  icons: [{ rel: 'icon', url: '/favicon.ico' }],
}

export default function ContactLayout({
  children,
}: { children: React.ReactNode }) {
  return <>{children}</>
}
