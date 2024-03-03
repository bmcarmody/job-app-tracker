import type { Config } from "drizzle-kit";

export default {
  schema: "./src/schemas/*",
  driver: "mysql2",
  dbCredentials: {
    uri: process.env["DATABASE_URL"] as string,
  },
  out: "./migrations",
} satisfies Config;
