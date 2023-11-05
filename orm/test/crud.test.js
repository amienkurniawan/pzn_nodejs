import { prismaClient } from "../src/prisma-client";

describe("Prisma Client CRUD", () => {
  // it("should be able to create customer", async () => {
  //   const customer = await prismaClient.customer.create({
  //     data: {
  //       id: "lucas",
  //       email: "offdevamienk2@gmail.com",
  //       name: "Amien Kurniawan",
  //       phone: "089565899513"
  //     }
  //   })

  //   expect(customer.id).toBe("lucas");
  //   expect(customer.email).toBe("offdevamienk2@gmail.com");
  //   expect(customer.name).toBe("Amien Kurniawan");
  //   expect(customer.phone).toBe("089565899513");
  // });

  it("should be able to update customer", async () => {
    const customer = await prismaClient.customer.update({
      data: {
        name: "Amien Kurniawan 22"
      },
      where: {
        id: "lucas"
      }
    })

    expect(customer.id).toBe("lucas");
    expect(customer.email).toBe("offdevamienk2@gmail.com");
    expect(customer.name).toBe("Amien Kurniawan 22");
    expect(customer.phone).toBe("089565899513");
  });

  it("should be able to read customer", async () => {
    const customer = await prismaClient.customer.findUnique({
      where: {
        id: "lucas"
      }
    })

    expect(customer.id).toBe("lucas");
    expect(customer.email).toBe("offdevamienk2@gmail.com");
    expect(customer.name).toBe("Amien Kurniawan 22");
    expect(customer.phone).toBe("089565899513");
  });

  it("should be able to delete customer", async () => {
    const customer = await prismaClient.customer.delete({
      where: {
        id: "lucas"
      }
    })

    expect(customer.id).toBe("lucas");
    expect(customer.email).toBe("offdevamienk2@gmail.com");
    expect(customer.name).toBe("Amien Kurniawan 22");
    expect(customer.phone).toBe("089565899513");
  });
})
