'use client'

import { format } from 'date-fns'
import { motion } from 'framer-motion'
import type { CustomTransactionType } from '~/lib/types'

function TableContent({ transaction }: { transaction: CustomTransactionType }) {
  return (
    <>
      <thead>
        <tr>
          <th>{transaction.monthName}</th>
        </tr>
      </thead>
      <tbody>
        {transaction.transactions.map((monthTransaction) => {
          return (
            <tr key={monthTransaction.id}>
              <td>{format(monthTransaction.purchaseDate, 'dd/MM/yyyy')}</td>
              <td>{monthTransaction.title}</td>
              <td>{monthTransaction.amount}</td>
            </tr>
          )
        })}
        <tr className="text-gray-500">
          <td></td>
          <td>Total</td>
          <td>{transaction.totalAmount}</td>
        </tr>
      </tbody>
    </>
  )
}

export const CustomTable = ({
  transactionsData,
}: { transactionsData: CustomTransactionType[] }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 3, ease: 'easeInOut' }}
      className="w-full overflow-x-auto overflow-y-auto"
    >
      <table className="table table-pin-rows">
        {transactionsData.map((transaction) => (
          <TableContent
            key={transaction.monthName + Math.random()}
            transaction={transaction}
          />
        ))}
      </table>
    </motion.div>
  )
}
