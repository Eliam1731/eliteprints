import Elysia from "elysia";

interface Design {
    id: number;
    name: string;
    public: boolean;
}

export const desingRoutes = new Elysia({ prefix: 'api'})
    .get('/designs', (): Design[] => [
        { id: 1, name: 'First', public: true },
        { id: 1, name: 'First', public: false },
    ]);