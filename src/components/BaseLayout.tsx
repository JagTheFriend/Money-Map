import { Toaster } from 'sonner'
import Footer from './Footer'
import Navbar from './Navbar'

export default function BaseLayout({
  children,
}: { children: React.ReactNode }) {
  return (
    <main className="flex flex-col h-screen antialiased">
      <div className="flex-grow">
        <Toaster richColors />
        <Navbar />
        {children}
      </div>
      <Footer />
    </main>
  )
}
