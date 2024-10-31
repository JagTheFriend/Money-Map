import { auth } from '@clerk/nextjs/server'
import {
  DEFAULT_SERVER_ERROR_MESSAGE,
  createSafeActionClient,
} from 'next-safe-action'

export const authenticatedAction = createSafeActionClient({
  handleServerError: (_error) => {
    return DEFAULT_SERVER_ERROR_MESSAGE
  },
}).use(async ({ next }) => {
  const currentUserData = await auth()
  if (!currentUserData.userId) {
    throw new Error('Not authenticated')
  }
  return next({ ctx: { currentUserData } })
})
