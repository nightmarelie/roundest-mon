import * as trpc from "@trpc/server";
import { z } from "zod";

export const appRouter = trpc
  .router()
  .query("get-pokemon-pair", {
    async resolve() {
      return {};
    },
  })
  .mutation("cast-vote", {
    input: z.object({
      votedFor: z.number(),
      votedAgainst: z.number(),
    }),
    async resolve({}) {
      return {};
    },
  });

// export type definition of API
export type AppRouter = typeof appRouter;
