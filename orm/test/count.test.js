import { prismaClient } from "../src/prisma-client";

describe("Prisma Client Count", () => {
  it("should be able count", async () => {

    const total = await prismaClient.customer.count({
      where: {
        name: "ika putri"
      }
    });

    console.log(total);
    expect(total).toBe(5);

  });
});