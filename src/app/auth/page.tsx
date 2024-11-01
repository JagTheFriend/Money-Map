import type { Metadata } from 'next'
import FormComponent from './FormComponent'

type SearchParams = Promise<{ type: string }>

export async function generateMetadata(props: {
  searchParams: SearchParams
}): Promise<Metadata> {
  const { type } = await props.searchParams

  if (type === 'login') {
    return { title: 'Login to Money Map' }
  }
  return { title: 'Register for Money Map' }
}

export default async function AuthPage(props: { searchParams: SearchParams }) {
  const { type } = await props.searchParams
  return <FormComponent type={type ?? ''} />
}
