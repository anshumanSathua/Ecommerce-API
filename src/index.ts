import connectDb from "./config/db";
import app from "./app";
import { env } from "./config/env";

const { port } = env;

connectDb().then(() => {
  app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
  });
});
