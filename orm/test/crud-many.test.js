import { prismaClient } from "../src/prisma-client";

describe("Prisma Client CRUD Many", () => {
  it("should can create many records", async () => {
    const { count } = await prismaClient.customer.createMany({
      data: [
        {
          id: "eko",
          email: "eko@pzn.com",
          phone: "8192819212",
          name: "EKO"
        },
        {
          id: "eko1",
          email: "eko1@pzn.com",
          phone: "81921819212",
          name: "EKO"
        },
        {
          id: "eko2",
          email: "eko2@pzn.com",
          phone: "81922819212",
          name: "EKO"
        },
        {
          id: "eko3",
          email: "eko3@pzn.com",
          phone: "81923819212",
          name: "EKO"
        },
      ]
    });

    console.log(count);
    expect(count).toBe(4);
  });

  it("should can update records", async () => {
    const { count } = await prismaClient.customer.updateMany({
      data: {
        email: "budilagia@gmail.com"
      },
      where: {
        name: "Amien Kurniawan 2"
      }
    });

    expect(count).toBe(1);
  });

  it("should can delete records", async () => {
    const { count } = await prismaClient.customer.deleteMany({
      where: {
        name: "Amien Kurniawan 2"
      }
    });

    expect(count).toBe(1);
  });

  it("should be able read many records", async () => {
    const customers = await prismaClient.customer.findMany({});

    expect(customers.length).toBe(3);
  });
});