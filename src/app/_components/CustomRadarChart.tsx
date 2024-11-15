'use client'
import { motion } from 'framer-motion'
import {
  Legend,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
  Tooltip,
} from 'recharts'
import type { CustomTransactionType } from '~/lib/types'

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
]

export const CustomRadarChart = ({
  transactionsData,
}: { transactionsData: CustomTransactionType[] }) => {
  return (
    <motion.div
      initial={{ x: '-100%' }}
      whileInView={{ x: '0' }}
      transition={{ duration: 2, ease: 'easeInOut' }}
      className="w-full h-full"
    >
      <ResponsiveContainer height="100%" width="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={transactionsData}>
          <PolarGrid />
          <PolarAngleAxis dataKey="monthName" />
          <PolarRadiusAxis />
          <Radar
            name="Expense"
            dataKey="totalAmount"
            stroke="#8884d8"
            fill="#8884d8"
            fillOpacity={0.6}
          />
          <Legend />
          <Tooltip />
        </RadarChart>
      </ResponsiveContainer>
    </motion.div>
  )
}
