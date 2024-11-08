'use client'

import { useState } from 'react'
import DatePicker from 'react-date-picker'

type ValuePiece = Date | null

type Value = ValuePiece | [ValuePiece, ValuePiece]

export default function ShowCurrentlySelectedYear({ year }: { year: string }) {
  const [value, onChange] = useState<Value>(new Date())

  return (
    <section>
      <DatePicker onChange={onChange} value={value} />
    </section>
  )
}
