import { createTRPCRouter } from '~/server/api/trpc';
import { applicationRouter } from '~/server/api/routers/application';
import { columnRouter } from './routers/column';

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  application: applicationRouter,
  column: columnRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
