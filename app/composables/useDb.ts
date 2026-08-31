import { createClient } from "@supabase/supabase-js";
import WebSocket from "ws";

let client: any = null;

export const useDb = () => {
  if (!client) {
    const config = useRuntimeConfig();

    if (process.server) {
      client = createClient(
        config.public.supabaseUrl as string,
        config.public.supabaseAnonKey as string,
        {
          realtime: {
            transport: WebSocket,
          },
        }
      );
    } else {
      client = createClient(
        config.public.supabaseUrl as string,
        config.public.supabaseAnonKey as string
      );
    }
  }

  return client;
};
