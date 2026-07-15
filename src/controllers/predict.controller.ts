import { Request, Response } from "express";
import fs from "fs";
import { predictWithPython } from "../services/python.service";

export const predictFruit = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    if (!req.file) {
      res.status(400).json({
        success: false,
        message: "No image uploaded",
      });

      return;
    }

    const prediction = await predictWithPython(
      req.file.path
    );

    // Delete uploaded file after prediction
    fs.unlinkSync(req.file.path);

    res.status(200).json({
  success: true,
  fruit: prediction.fruit,
  status: prediction.status,
  label: prediction.label,
  confidence: prediction.confidence,
});
  } catch (error) {
    console.error(error);

    if (req.file) {
      fs.unlink(req.file.path, () => {});
    }

    res.status(500).json({
      success: false,
      message: "Prediction failed",
    });
  }
};