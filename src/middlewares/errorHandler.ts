import { Request, Response, NextFunction } from "express";
import { AppError } from "../utils/AppError";

export const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
): Response => {
  if (err instanceof AppError && err.isOperational) {
    return res.status(err.statusCode).json({
      success: false,
      status: err.status,
      message: err.message,
    });
  }

  console.error("💥 UNEXPECTED ERROR:", err);

  return res.status(500).json({
    success: false,
    status: "error",
    message: "Something went very wrong!",
  });
};
