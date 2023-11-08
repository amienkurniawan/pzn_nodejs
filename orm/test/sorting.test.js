import { prismaClient } from "../src/prisma-client";

describe("Prisma Client Sorting", () => {
  it("should can do Sorting", async () => {
    const customers = await prismaClient.customer.findMany({
      skip: 0,
      take: 10,
      orderBy: [
        {
          name: "asc"
        },
        {
          email: "asc"
        }
      ]
    });

    console.info(customers);

  });
});