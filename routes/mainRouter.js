import { Router } from "express";
import { getRouter } from "./getRoutes.js";

const router = Router();

router.use("/", getRouter);

router.get("/", (req, res) => {
  const date = new Date();
  res.status(200).send({
    name: "TUL e-shop API",
    status: "Running",
    date: `${date.getDate()}. ${date.getMonth() + 1}. ${date.getFullYear()}`,
  })
})


export { router as mainRouter };