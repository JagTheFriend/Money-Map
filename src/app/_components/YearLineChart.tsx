'use client'
import { motion } from 'framer-motion'
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
    <motion.div
      initial={{ x: '-100%' }}
      whileInView={{ x: '0' }}
      transition={{ duration: 1.5, ease: 'easeInOut' }}
      className="w-full h-full"
    >
      <ResponsiveContainer height="100%" width="100%">
        <LineChart data={transactionsData} height={4000} width={5000}>
          <Line name="Expense" type="monotone" dataKey="totalAmount" />
          <CartesianGrid stroke="#303030" strokeDasharray={'5 5'} />
          <XAxis dataKey="monthName" />
          <YAxis dataKey="totalAmount" />
          <Tooltip />
          <Legend />
        </LineChart>
      </ResponsiveContainer>
    </motion.div>
  )
}
