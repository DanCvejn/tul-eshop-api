import { Router } from "express";
import { getProductById, getProductsPrisma } from "../controllers/prismaGet.js";

const router = Router();

router.get("/products", async (req, res) => {
  const response = await getProductsPrisma();
  return res.status(200).send(response);
})

router.get("/products/:productId", async (req, res) => {
  const response = await getProductById(req.params.productId);
  if (!response) return res.status(200).send({ message: "Produkt nenalezen" });
  return res.status(200).send(response);
})

export { router as getRouter };
