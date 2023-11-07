import { prismaClient } from "../src/prisma-client"

describe("Prisma Client Transaction", () => {
  it("should can execute sequential transaction", async () => {
    const [amien, kurniawan] = await prismaClient.$transaction([
      prismaClient.customer.create({
        data: {
          id: "ika1a1q",
          email: "ikaq11a@gmail.com",
          name: "ika putri",
          phone: "019273111774981"
        }
      }),
      prismaClient.customer.create({
        data: {
          id: "putr1ia111",
          email: "puatr11i11@gmail.com",
          name: "lika liku putri",
          phone: "0192737117149112"
        }
      }),
    ], {
      timeout: 5
    });

    expect(amien.name).toBe("ika putri");
    expect(kurniawan.name).toBe("lika liku putri");

  })

  it("should can execute Interactive Transaction", async () => {
    const [amien, kurniawan] = await prismaClient.$transaction(async (prisma) => {

      const amien = await prisma.customer.create({
        data: {
          id: "yquka1i1111",
          email: 'yauki1q111@gmail.com',
          name: "eko khannedy",
          phone: "208523111184268"
        }
      });

      const kurniawan = await prisma.customer.create({
        data: {
          id: "kutnsiq1a1w1a11n",
          email: "yukia1sjin1a11omoto@gmail.com",
          name: "yuki ajo no moto",
          phone: "85658522111168556"
        }
      });
      return [amien, kurniawan];
    }, {
      timeout: 5
    });


    expect(amien.name).toBe("eko khannedy");
    expect(kurniawan.name).toBe("yuki ajo no moto");

  });
});