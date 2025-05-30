import express, { Request, Response } from "express";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";

const app = express();

app.set("trust proxy", 1);

app.use(helmet());
app.use(cors());
app.use(
  rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
    message: "Too many requests from this IP, please try again later.",
  })
);

app.use(express.json());

app.get("/", (_req: Request, res: Response) => {
  res.send("🛒 Ecommerce API is running!");
});

export default app;
