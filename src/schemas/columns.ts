import { createId } from '@paralleldrive/cuid2';
import {
  boolean,
  pgTable,
  timestamp,
  varchar,
  uuid,
} from 'drizzle-orm/pg-core';
import { users } from './users';

export const columns = pgTable('columns', {
  id: varchar('id', { length: 128 })
    .primaryKey()
    .$defaultFn(() => createId()),
  default: boolean('default').notNull().default(false),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow(),
  name: varchar('name', { length: 30 }).notNull(),
  userId: uuid('user_id')
    .notNull()
    .references(() => users.id),
});
