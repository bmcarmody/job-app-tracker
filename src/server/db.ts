import { drizzle } from "drizzle-orm/planetscale-serverless";
import { connect } from "@planetscale/database";
import * as schemas from "~/schemas";

const connection = connect({
  url: process.env["DATABASE_URL"] as string,
});

export const db = drizzle(connection, {
  schema: { ...schemas },
});
