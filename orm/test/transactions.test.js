import { prismaClient } from "../src/prisma-client"

describe("Prisma Client Transaction", () => {
  it("should can execute sequential transaction", async () => {
    const [amien, kurniawan] = await prismaClient.$transaction([
      prismaClient.customer.create({
        data: {
          id: "ika",
          email: "ika@gmail.com",
          name: "ika putri",
          phone: "01927774981"
        }
      }),
      prismaClient.customer.create({
        data: {
          id: "putri",
          email: "putri@gmail.com",
          name: "lika liku putri",
          phone: "01927774912"
        }
      }),
    ]);

    expect(amien.name).toBe("ika");
    expect(kurniawan.name).toBe("putri");

  })

  it("should can execute Interactive Transaction", async () => {
    const amien = await prismaClient.customer.create({
      data: {
        id: "yuki",
        email: 'yuki@gmail.com',
        name: "eko khannedy",
        phone: "2085238468"
      }
    });

    const kurniawan = await prismaClient.customer.create({
      data: {
        id: "kutniawan",
        email: "yukiajinomoto@gmail.com",
        name: "yuki ajo no moto",
        phone: "856585268556"
      }
    });

    return [amien, kurniawan];

  });
})