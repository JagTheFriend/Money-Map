'use client'

import { useState } from 'react'
import DatePicker from 'react-date-picker'

import 'react-calendar/dist/Calendar.css'
import 'react-date-picker/dist/DatePicker.css'

type ValuePiece = Date | null

type Value = ValuePiece | [ValuePiece, ValuePiece]

export default function ShowCurrentlySelectedYear({ year }: { year: string }) {
  const [value, onChange] = useState<Value>(new Date(parseInt(year), 0, 1))

  return (
    <section>
      <DatePicker onChange={onChange} value={value} maxDetail="year" />
    </section>
  )
}
