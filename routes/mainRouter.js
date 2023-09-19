import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.status(200).send({
    name: "TUL e-shop API",
    status: "Running",
  })
})

export { router as mainRouter };