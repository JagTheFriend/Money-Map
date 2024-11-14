import type { Transaction } from '@prisma/client'
import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function attachMetadataToTransaction(transactions: Transaction[]) {
  return transactions.map((transaction) => {
    return {
      ...transaction,
      month: transaction.purchaseDate.getMonth(),
      year: transaction.purchaseDate.getFullYear(),
      dayName: transaction.purchaseDate.toString().split(' ')[0],
    }
  })
}
