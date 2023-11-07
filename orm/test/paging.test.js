import { prismaClient } from "../src/prisma-client";

describe("Prisma Client Paging", () => {
  it("should can do paging", async () => {

    const page1 = await prismaClient.customer.findMany({
      take: 1
    });
    console.log(page1)
    expect(page1.length).toBe(1);

    const page2 = await prismaClient.customer.findMany({
      take: 2
    });
    console.log(page2)
    expect(page2.length).toBe(2);

    const page3 = await prismaClient.customer.findMany({
      take: 3
    });
    console.log(page3)
    expect(page3.length).toBe(3);

  });
});