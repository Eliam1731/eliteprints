import { Elysia } from "elysia";
import { authRoutes } from "./routes";

const initServer = () => {
    const app = new Elysia()
        .get("/", () => "Hello Elysia")
        .use(authRoutes)
        .listen(process.env.PORT ?? '3000');

    console.log(
      `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
    );
}

export default initServer;

