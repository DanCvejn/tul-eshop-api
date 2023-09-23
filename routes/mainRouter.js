import { Router } from "express";
import { getRouter } from "./getRoutes.js";
import { postRouter } from "./postRouter.js";

const router = Router();

router.use("/", getRouter);
// TODO: Create auth for POST, PATCH, DELETE
router.use("/", postRouter);

router.get("/", (req, res) => {
  const date = new Date();
  res.status(200).send({
    name: "TUL e-shop API",
    status: "Running",
    date: `${date.getDate()}. ${date.getMonth() + 1}. ${date.getFullYear()}`,
  })
})


export { router as mainRouter };