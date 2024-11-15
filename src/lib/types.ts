import type { Transaction } from '@prisma/client'

export type CustomTransactionType = {
  monthName: string
  totalAmount: number
  transactions: Transaction[]
}
