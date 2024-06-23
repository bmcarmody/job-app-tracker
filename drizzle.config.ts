import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  dialect: 'postgresql',
  schema: './src/schemas/*',
  out: './migrations',
  dbCredentials: {
    url: process.env['DATABASE_URL'] as string,
  },
});
