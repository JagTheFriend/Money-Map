'use server'

import { z } from 'zod'
import { authenticatedAction } from '~/lib/safe-action'

// This schema is used to validate input from client.
const schema = z.object({
  purchaseDate: z.date(),
  amount: z.string(),
  title: z.string(),
  description: z.string().optional(),
})

export const addNewTransaction = authenticatedAction
  .schema(schema)
  .action(async ({ parsedInput, ctx }) => {
    return
  })
