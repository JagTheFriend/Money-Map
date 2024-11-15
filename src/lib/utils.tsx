import type { Transaction } from '@prisma/client'
import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import type { CustomTransactionType } from './types'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function attachMetadataToTransaction(transactions: Transaction[]) {
  const data: CustomTransactionType[] = []

  transactions.map((currentTransaction) => {
    data.push({
      monthName: currentTransaction.purchaseDate.toLocaleString('default', {
        month: 'long',
      }),
      totalAmount: parseInt(currentTransaction.amount),
      transactions: transactions.filter(
        (filterTransaction) =>
          filterTransaction.purchaseDate.getMonth() ===
          currentTransaction.purchaseDate.getMonth(),
      ),
    })
  })

  console.log(data)

  return data
}
