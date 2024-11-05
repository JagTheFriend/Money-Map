import { SignedIn, SignedOut } from '@clerk/nextjs'
import AuthButtons from './_components/AuthButtons'
import Dashboard from './_components/Dashboard'
import Features from './_components/Features'
import IntroBanner from './_components/IntroBanner'

type YearParam = Promise<{ year: string | undefined }>

export default async function HomePage({
  searchParams,
}: {
  searchParams: YearParam
}) {
  const { year } = await searchParams

  return (
    <>
      <SignedOut>
        <IntroBanner />
        <Features />
        <AuthButtons />
      </SignedOut>
      <SignedIn>
        <Dashboard year={year} />
      </SignedIn>
    </>
  )
}
