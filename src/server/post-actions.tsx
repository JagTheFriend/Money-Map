'use server'

import { z } from 'zod'
import { authenticatedAction } from '~/lib/safe-action'
import { db } from './db'

const newTransactionSchema = z.object({
  purchaseDate: z.date(),
  amount: z.string(),
  title: z.string(),
  description: z.string().optional().default(''),
})

export const addNewTransaction = authenticatedAction
  .schema(newTransactionSchema)
  .action(async ({ parsedInput, ctx }) => {
    const transaction = await db.transaction.create({
      data: {
        authorId: ctx.currentUserData.userId,
        purchaseDate: parsedInput.purchaseDate,
        amount: parsedInput.amount,
        title: parsedInput.title,
        description: parsedInput.description,
      },
    })

    return transaction
  })

const getTransactionsSchema = z.object({
  selectedYear: z.number().default(new Date().getFullYear()),
})

export const getTransactions = authenticatedAction
  .schema(getTransactionsSchema)
  .action(async ({ parsedInput, ctx }) => {
    const transactions = await db.transaction.findMany({
      where: {
        authorId: ctx.currentUserData.userId,
        purchaseDate: {
          gte: new Date(parsedInput.selectedYear, 0, 1),
          lte: new Date(parsedInput.selectedYear, 12, 31),
        },
      },
      orderBy: {
        purchaseDate: 'asc',
      },
    })

    return transactions
  })
