import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createProduct = async (data) => {
  try {
    return await prisma.products.create({
      data: data,
    })
  } catch (error) {
    console.error(error);
    return;
  }
}