import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const jobApplicationRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.status.findMany();
  }),
});
