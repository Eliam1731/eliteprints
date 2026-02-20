import Elysia from "elysia";

interface Design {
    id: number;
    name: string;
    public: boolean;
}

export const desingRoutes = new Elysia({ prefix: 'api' })
    .get('/designs', async () => {
        
    });