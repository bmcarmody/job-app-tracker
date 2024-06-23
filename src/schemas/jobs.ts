import { varchar, pgTable, timestamp, uuid } from 'drizzle-orm/pg-core';
import { createId } from '@paralleldrive/cuid2';
import { users } from './users';
import { columns } from './columns';

export const jobs = pgTable('jobs', {
  id: varchar('id', { length: 128 })
    .primaryKey()
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-call
    .$defaultFn(() => createId()),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow(),
  companyName: varchar('company_name', { length: 30 }).notNull(),
  jobPostUrl: varchar('job_post_url', { length: 500 }),
  applyDate: timestamp('apply_date').notNull(),
  columnId: varchar('column_id').references(() => columns.id),
  userId: uuid('user_id')
    .notNull()
    .references(() => users.id),
});
