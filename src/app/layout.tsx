import '~/styles/globals.css'

import { GeistSans } from 'geist/font/sans'
import type { Metadata, Viewport } from 'next'
import BaseLayout from '~/components/BaseLayout'

export const metadata: Metadata = {
  title: 'Money Map',
  description: 'Money Map - Track, analyze, and elevate your finances',
  icons: [{ rel: 'icon', url: '/favicon.ico' }],
}

export const viewport: Viewport = {
  initialScale: 1,
  width: 'device-width',
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>
        <BaseLayout>{children}</BaseLayout>
      </body>
    </html>
  )
}
