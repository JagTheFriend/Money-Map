'use client'

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
              <td>{monthTransaction.title}</td>
              <td>{monthTransaction.amount}</td>
            </tr>
          )
        })}
      </tbody>
    </>
  )
}

export const CustomTable = ({
  transactionsData,
}: { transactionsData: CustomTransactionType[] }) => {
  return (
    <div className="w-full overflow-x-auto overflow-y-auto">
      <table className="table table-pin-rows">
        {transactionsData.map((transaction) => (
          <TableContent key={transaction.monthName} transaction={transaction} />
        ))}
      </table>
    </div>
  )
}
