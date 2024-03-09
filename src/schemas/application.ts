import {
  varchar,
  integer,
  pgTable,
  index,
  timestamp,
} from "drizzle-orm/pg-core";
import { createId } from "@paralleldrive/cuid2";

export const application = pgTable(
  "application",
  {
    id: varchar("id", { length: 128 })
      .primaryKey()
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-call
      .$defaultFn(() => createId()),
    createdAt: timestamp("created_at").notNull().defaultNow(),
    updatedAt: timestamp("updated_at").notNull().defaultNow(), // Postgres does not have an equivalent of onUpdateNow()
    userId: varchar("user_id", { length: 30 }).notNull(),
    statusId: varchar("status_id", { length: 30 }).notNull(),
    position: varchar("position", { length: 30 }).notNull(),
    companyName: varchar("company_name", { length: 30 }).notNull(),
    jobPostUrl: varchar("job_post_url", { length: 500 }).notNull(),
    confidenceLevel: integer("confidence_level").notNull(),
    applyDate: timestamp("apply_date").notNull(), // Postgres does not have an equivalent of defaultNow() for timestamps
  },
  (application) => ({
    userIdIdx: index("user_id_idx").on(application.userId),
    statusIdIdx: index("status_id_idx").on(application.statusId),
  })
);
