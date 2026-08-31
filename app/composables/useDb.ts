import { createClient } from "@supabase/supabase-js";

let client: any = null;

export const useDb = () => {
  if (!client) {
    const config = useRuntimeConfig();

    if (process.server) {
      // Server side — use ws package
      const ws = require("ws");
      client = createClient(
        config.public.supabaseUrl as string,
        config.public.supabaseAnonKey as string,
        {
          realtime: {
            transport: ws,
          },
        }
      );
    } else {
      // Browser side — native WebSocket works fine
      client = createClient(
        config.public.supabaseUrl as string,
        config.public.supabaseAnonKey as string
      );
    }
  }
  return client;
};
