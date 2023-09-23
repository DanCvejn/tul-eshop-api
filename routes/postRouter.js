import { Router } from "express";
import { createProduct } from "../controllers/prismaCreate.js";
import { createId } from "../helpers/generators.js";

const router = Router();

router.post("/products/new", async (req, res) => {
  const data = req.body;
  data.id = await createId();
  data.price = parseInt(data.price);
  const response = await createProduct(data);
  if (!response) return res.status(500).send({ message: "Nepovedlo se vytvořit produkt" });
  return res.status(200).send({ message: "Produkt vytvořen", product: response });
})

export { router as postRouter };