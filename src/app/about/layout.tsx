import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Money Map',
  description: 'Money Map - Track, analyze, and elevate your finances',
  icons: [{ rel: 'icon', url: '/favicon.ico' }],
}

export default function AboutLayout({
  children,
}: { children: React.ReactNode }) {
  return <>{children}</>
}
