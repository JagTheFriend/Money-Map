'use client'
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
import type { CustomTransactionType } from '~/lib/types'

export const YearLineChart = ({
  transactionsData,
}: { transactionsData: CustomTransactionType[] }) => {
  return (
    <ResponsiveContainer height="100%" width="100%">
      <LineChart data={transactionsData} height={4000} width={5000}>
        <Line type="monotone" dataKey="totalAmount" />
        <CartesianGrid stroke="#303030" strokeDasharray={'5 5'} />
        <XAxis dataKey="monthName" />
        <YAxis dataKey="totalAmount" />
        <Tooltip />
        <Legend />
      </LineChart>
    </ResponsiveContainer>
  )
}
