import { Router } from "express";
import { predictFruit } from "../controllers/predict.controller";
import { upload } from "../middleware/upload";

const router = Router();

router.post(
  "/predict",
  upload.single("image"),
  predictFruit
);

export default router;