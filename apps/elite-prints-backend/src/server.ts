import { Elysia } from "elysia";
import { createClient } from "@supabase/supabase-js";
import { desingRoutes } from "./controllers";

const supabase = createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_PUBLISHABLE_KEY!);

export const app = new Elysia()
    .get('/', async () => {
        const { data, error } = await supabase
            .from('designs')
            .select('*')
            .eq('is_premium', true);

        if (error) throw error;
        return data;
    })
    // .use(desingRoutes);

export type App = typeof app;
