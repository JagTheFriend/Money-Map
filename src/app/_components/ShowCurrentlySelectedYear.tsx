'use client'

import DatePicker from 'react-date-picker'

import { motion } from 'framer-motion'
import { redirect } from 'next/navigation'
import 'react-calendar/dist/Calendar.css'
import 'react-date-picker/dist/DatePicker.css'

type ValuePiece = Date | null
type Value = ValuePiece | [ValuePiece, ValuePiece]

export default function ShowCurrentlySelectedYear({ year }: { year: string }) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.3, ease: 'easeInOut' }}
      className="text-xl flex flex-row justify-center gap-2 m-2"
    >
      Year:
      <DatePicker
        onChange={(e: Value) => {
          const date = e?.toString() ?? ''
          const year = new Date(date).getFullYear()
          redirect(`?year=${year}`)
        }}
        value={new Date(year)}
        maxDetail="decade"
        clearIcon={false}
        calendarIcon={false}
      />
    </motion.section>
  )
}
