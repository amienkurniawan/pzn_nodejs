import { prismaClient } from "../src/prisma-client";

describe("Prisma Client select field", () => {
  it("should can do select paging", async () => {

    const customers = await prismaClient.customer.findMany({
      select: {
        id: true,
        name: true
      }
    });

    for (const customer of customers) {
      expect(customer.id).toBeDefined();
      expect(customer.name).toBeDefined();
      expect(customer.email).toBeUndefined();
      expect(customer.phone).toBeUndefined();
    }

  });
});