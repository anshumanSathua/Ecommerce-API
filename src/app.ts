import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import mongoSanitize from "express-mongo-sanitize";
import xss from "xss";
import morgan from "morgan";
import { errorHandler } from "./middlewares/errorHandler";
import { env } from "./config/env";

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
app.use(mongoSanitize());

// custom XSS filter
app.use((req, _res, next) => {
  if (req.body && typeof req.body === "object") {
    for (const key in req.body) {
      if (typeof req.body[key] === "string") {
        req.body[key] = xss(req.body[key]);
      }
    }
  }
  next();
});

const { nodeEnv } = env;

if (nodeEnv === "development") {
  app.use(morgan("dev"));
}

app.use(express.json({ limit: "10kb" }));

app.get("/", (_req: Request, res: Response) => {
  res.send("🛒 Ecommerce API is running!");
});

app.use(
  errorHandler as (
    err: any,
    req: Request,
    res: Response,
    next: NextFunction
  ) => void
);
export default app;
