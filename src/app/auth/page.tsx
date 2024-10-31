import type { Metadata, ResolvingMetadata } from 'next'
import FormComponent from './FormComponent'

type Prop = { searchParams: { type: string | undefined } }

export async function generateMetadata(
  { searchParams }: Prop,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  if (searchParams.type === 'login') {
    return { title: 'Login to Money Map' }
  }
  return { title: 'Register for Money Map' }
}

export default function AuthPage({ searchParams }: Prop) {
  return <FormComponent type={searchParams.type ?? ''} />
}
