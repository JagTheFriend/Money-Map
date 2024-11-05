import { SignedOut } from '@clerk/nextjs'
import AuthButtons from './_components/AuthButtons'
import Features from './_components/Features'
import IntroBanner from './_components/IntroBanner'

export default function HomePage() {
  return (
    <SignedOut>
      <IntroBanner />
      <Features />
      <AuthButtons />
    </SignedOut>
  )
}
