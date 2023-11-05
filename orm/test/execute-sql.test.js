import { prismaClient } from "../src/prisma-client";

describe("Prisma Client", () => {
  it("should be able to execute sql", async () => {
    const name = "Amien Kurniawan 2";

    const impacted = await prismaClient.$executeRaw`INSERT INTO sample(name) VALUES (${name});`;
    expect(impacted).toBe(1);
  });
});