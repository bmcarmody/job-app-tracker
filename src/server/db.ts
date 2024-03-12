import { drizzle } from 'drizzle-orm/postgres-js';
import * as schemas from '~/schemas';
import postgres from 'postgres';

const connectionString = process.env.DATABASE_URL || '';
const client = postgres(connectionString, { prepare: false });

export const db = drizzle(client, {
  schema: { ...schemas },
});
