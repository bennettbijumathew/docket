import Koa from "koa"
import Router from "@koa/router"
import cors from "@koa/cors";

import dotenv from 'dotenv'
dotenv.config({ path: './../.env' })

import { exampleRoutes } from "./routes/example/index.ts";

const app = new Koa();
const router = new Router();

app.use(cors());

app
  .use(router.routes())
  .use(exampleRoutes)
  .use(router.allowedMethods());

app.listen(process.env.PUBLIC_API_PORT, async () => {
  console.log(`Server running on http://${process.env.PUBLIC_API_LINK}:${process.env.PUBLIC_API_PORT}/`);
});