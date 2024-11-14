import { redirect } from 'next/navigation'
import { getTransactions } from '~/server/post-actions'
import { CustomRadarChart } from './CustomRadarChart'
import { CustomTable } from './CustomTable'
import { MonthLineChart } from './MonthLineChart'
import ShowCurrentlySelectedYear from './ShowCurrentlySelectedYear'
import { YearLineChart } from './YearLineChart'

const GridItem = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="flex flex-col items-center justify-center p-4 rounded-xl h-[400px]">
      {children}
    </section>
  )
}

export default async function Dashboard({
  year,
}: { year: string | undefined }) {
  if (!year) {
    const currentYear = new Date().getFullYear()
    redirect(`?year=${currentYear}`)
  }

  const transactions = await getTransactions({ selectedYear: parseInt(year) })

  return (
    <div className="flex flex-col w-full">
      <ShowCurrentlySelectedYear year={year} />
      <div className="flex flex-col justify-center items-center px-4 w-full">
        <div className="grid lg:grid-cols-2 grid-cols-1 w-full">
          <GridItem children={<YearLineChart />} />
          <GridItem children={<MonthLineChart />} />
          <GridItem children={<CustomRadarChart />} />
          <GridItem children={<CustomTable />} />
        </div>
      </div>
    </div>
  )
}
