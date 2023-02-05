import { PrismaClient } from '@prisma/client'
import { z } from 'zod'
import { procedure, router } from '../trpc'

const prisma = new PrismaClient()

export const appRouter = router({
  hello: procedure
    .input(
      z.object({
        text: z.string(),
      })
    )
    .query(({ input }) => {
      return {
        greeting: `hello ${input.text}`,
      }
    }),
  queryName: procedure
    .input(
      z.object({
        text: z.string(),
      })
    )
    .query(async ({ input }) => {
      const item = await prisma.user.findUnique({
        where: {
          email: input.text,
        },
      })
      console.log('input', input)
      return {
        item,
      }
    }),
})

// export type definition of API
export type AppRouter = typeof appRouter
