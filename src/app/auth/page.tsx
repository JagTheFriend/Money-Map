import type { Metadata, ResolvingMetadata } from 'next'
import FormComponent from './FormComponent'

type Prop = { searchParams: { type: string | undefined } }

export async function generateMetadata(
  { searchParams }: Prop,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const { type } = await searchParams
  if (type === 'login') {
    return { title: 'Login to Money Map' }
  }
  return { title: 'Register for Money Map' }
}

export default async function AuthPage({ searchParams }: Prop) {
  const { type } = await searchParams
  return <FormComponent type={type ?? ''} />
}
