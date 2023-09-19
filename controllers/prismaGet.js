import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const testConnection = async () => {
  await prisma.$connect().then(() => {
    console.log("Connected to database via Prisma");
  }).catch((err) => {
    console.error(err);
    console.log("Couldn't connect to database via Prisma");
  });
}
