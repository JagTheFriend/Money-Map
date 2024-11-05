import { redirect } from 'next/navigation'

export default function Dashboard({ year }: { year: string | undefined }) {
  if (!year) {
    const currentYear = new Date().getFullYear()
    redirect(`?year=${currentYear}`)
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold">Dashboard</h1>
    </div>
  )
}
