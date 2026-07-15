import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import predictRoutes from "./routes/predict.routes";

dotenv.config();

const app = express();

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use("/uploads", express.static("uploads"));

app.get("/", (_req, res) => {
  res.json({
    success: true,
    message: "Fruit Freshness API Running",
  });
});

app.use("/api", predictRoutes);

export default app;