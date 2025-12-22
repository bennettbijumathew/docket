import Koa from "koa"
import type { Context } from "koa"
import Router from "@koa/router"
import cors from "@koa/cors";

class ExampleRouter {
    router = new Router();

    constructor() {
        this.router.get('/example', this.getExample)
        this.router.get('/example/test', this.getExampleTest)
    }

    get routes() {
        return this.router.routes();
    }

    async getExample(ctx: Context) {
        ctx.body = 'Hello World!';
        ctx.status = 200;
    }

    async getExampleTest(ctx: Context) {
        ctx.body = 'Example Test!';
        ctx.status = 200;
    }
}

export const exampleRoutes = new ExampleRouter().routes; 