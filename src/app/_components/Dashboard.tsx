import { redirect } from 'next/navigation'
import ShowCurrentlySelectedYear from './ShowCurrentlySelectedYear'

export default function Dashboard({ year }: { year: string | undefined }) {
  if (!year) {
    const currentYear = new Date().getFullYear()
    redirect(`?year=${currentYear}`)
  }

  return (
    <div className="flex flex-col">
      <ShowCurrentlySelectedYear year={year} />
    </div>
  )
}
