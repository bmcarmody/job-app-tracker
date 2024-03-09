import type { Config } from "drizzle-kit";

export default {
  schema: "./src/schemas/*",
  driver: "pg",
  dbCredentials: {
    connectionString: process.env["DATABASE_URL"] as string,
  },
  out: "./migrations",
} satisfies Config;
