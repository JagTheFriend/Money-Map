'use server'

import { revalidatePath } from 'next/cache'
import { z } from 'zod'
import { authenticatedAction } from '~/lib/safe-action'
import { attachMetadataToTransaction } from '~/lib/utils'
import { db } from './db'

const newTransactionSchema = z.object({
  purchaseDate: z.date(),
  amount: z.string(),
  title: z.string(),
  description: z.string().default(''),
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
    revalidatePath('/?year=' + parsedInput.purchaseDate.getFullYear())
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
          lte: new Date(parsedInput.selectedYear, 11, 31),
        },
      },
      orderBy: {
        purchaseDate: 'asc',
      },
    })

    return attachMetadataToTransaction(transactions)
  })

const updateTransactionSchema = z.object({
  transactionId: z.string(),
  amount: z.string(),
  purchaseDate: z.date(),
  title: z.string(),
  description: z.string(),
})

export const updateTransaction = authenticatedAction
  .schema(updateTransactionSchema)
  .action(async ({ parsedInput, ctx }) => {
    const transaction = await db.transaction.update({
      where: {
        id: parsedInput.transactionId,
      },
      data: {
        amount: parsedInput.amount,
        purchaseDate: parsedInput.purchaseDate,
        title: parsedInput.title,
        description: parsedInput.description,
      },
    })

    return transaction
  })

const deleteTransactionSchema = z.object({
  transactionId: z.string(),
})

export const deleteTransaction = authenticatedAction
  .schema(deleteTransactionSchema)
  .action(async ({ parsedInput, ctx }) => {
    const transaction = await db.transaction.delete({
      where: {
        id: parsedInput.transactionId,
      },
    })

    return transaction
  })
