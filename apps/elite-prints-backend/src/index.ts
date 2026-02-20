import { app } from "./server";

app.listen(process.env.PORT ?? '3000', (server) => {
    console.log(
        `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
    );
});