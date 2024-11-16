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
import uniqolor from 'uniqolor'
import type { CustomTransactionType } from '~/lib/types'

export const MonthLineChart = ({
  transactionsData,
}: { transactionsData: CustomTransactionType[] }) => {
  return (
    <motion.div
      initial={{ x: '100%' }}
      whileInView={{ x: '0' }}
      transition={{ duration: 1.5, ease: 'easeInOut' }}
      className="w-full h-full"
    >
      <ResponsiveContainer height="100%" width="100%">
        <LineChart height={4000} width={5000}>
          <CartesianGrid stroke="#303030" strokeDasharray={'5 5'} />
          {transactionsData.map((transaction) => {
            return (
              <Line
                key={transaction.monthName + Math.random()}
                data={transaction.transactions}
                type="monotone"
                dataKey="amount"
                name={transaction.monthName}
                stroke={
                  uniqolor(transaction.monthName + Math.random(), {
                    lightness: 50,
                    format: 'hex',
                  }).color
                }
              />
            )
          })}
          <XAxis dataKey="title" />
          <YAxis dataKey="amount" />
          <Tooltip />
          <Legend />
        </LineChart>
      </ResponsiveContainer>
    </motion.div>
  )
}
