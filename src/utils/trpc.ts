import { createReactQueryHooks } from "@trpc/react";
import type { AppRouter } from "@mon/backend/router";

export const trpc = createReactQueryHooks<AppRouter>();
