'use client'
import { IconArrowLeft, IconArrowRight } from '@tabler/icons-react'
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import { data } from './data'

export const MonthLineChart = () => {
  return (
    <>
      <p className="font-sans font-normal" style={{ fontSize: '20px' }}>
        Month Name
      </p>
      <ResponsiveContainer height="100%" width="100%">
        <LineChart data={data} height={4000} width={5000}>
          <Line type="monotone" dataKey="amt" />

          <CartesianGrid stroke="#303030" strokeDasharray={'5 5'} />
          <XAxis dataKey="name" />
          <YAxis dataKey="uv" />
          <Tooltip />
          <Legend />
        </LineChart>
      </ResponsiveContainer>
      <div className="flex flex-row gap-2">
        <button className="btn btn-circle btn-sm">
          <IconArrowLeft />
        </button>
        <button className="btn btn-circle btn-sm">
          <IconArrowRight />
        </button>
      </div>
    </>
  )
}
