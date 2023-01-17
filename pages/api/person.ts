import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// async function main() {
//   const allUsers = await prisma.user.findMany()
//   console.log(allUsers)
// }

export default async function handler() {
  const post = await prisma.post.update({
    where: { id: 1 },
    data: { published: true },
  })
  console.log(post)
}
