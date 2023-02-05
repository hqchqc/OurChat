import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
async function main() {
  const beanBag = await prisma.user.create({
    data: {
      email: '734986933@qq.com',
      name: 'beanBag',
    },
  })
  const bob = await prisma.user.upsert({
    where: { email: 'bob@prisma.io' },
    update: {},
    create: {
      email: 'bob@prisma.io',
      name: 'Bob',
    },
  })
  console.log({ beanBag, bob })
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
