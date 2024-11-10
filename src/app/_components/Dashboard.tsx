import { redirect } from 'next/navigation'
import { CustomLineChart } from './CustonLineChart'
import ShowCurrentlySelectedYear from './ShowCurrentlySelectedYear'

const GridItem = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="flex flex-col items-center justify-center p-4 rounded-xl h-[400px]">
      {children}
    </section>
  )
}

export default function Dashboard({ year }: { year: string | undefined }) {
  if (!year) {
    const currentYear = new Date().getFullYear()
    redirect(`?year=${currentYear}`)
  }

  return (
    <div className="flex flex-col w-full">
      <ShowCurrentlySelectedYear year={year} />
      <div className="flex flex-col justify-center items-center px-4 w-full">
        <div className="grid lg:grid-cols-2 grid-cols-1 w-full">
          <GridItem children={<CustomLineChart />} />
          <GridItem children={<CustomLineChart />} />
        </div>
      </div>
    </div>
  )
}
