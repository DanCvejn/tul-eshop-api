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

export const getProductsPrisma = async () => {
  return await prisma.products.findMany({
    include: {
      categories: true,
    }
  })
}

export const getProductById = async (productId) => {
  return await prisma.products.findUnique({
    where: { id: productId },
    include: {
      categories: true,
      productsphotos: true,
    }
  })
}
