import { PrismaClient } from '@prisma/client'

describe(
  "Prisma client",
  () => {
    it("should be able to connec to database", async () => {
      const prisma = new PrismaClient()
      await prisma.$connect();

      // do something

      await prisma.$disconnect();
    })
  }
)

