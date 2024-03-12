import { createTRPCRouter, publicProcedure } from '~/server/api/trpc';

export const columnRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.db.query.column.findMany();
  }),
});
