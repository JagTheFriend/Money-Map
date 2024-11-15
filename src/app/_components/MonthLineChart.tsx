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
import { data } from './data'

export const MonthLineChart = () => {
  return (
    <motion.div
      initial={{ x: '100%' }}
      whileInView={{ x: '0' }}
      transition={{ duration: 1.5, ease: 'easeInOut' }}
      className="w-full h-full"
    >
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
    </motion.div>
  )
}
