CREATE TABLE IF NOT EXISTS "application" (
	"id" varchar(128) PRIMARY KEY NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"user_id" varchar(30) NOT NULL,
	"status_id" varchar(30) NOT NULL,
	"position" varchar(30) NOT NULL,
	"company_name" varchar(30) NOT NULL,
	"job_post_url" varchar(500) NOT NULL,
	"confidence_level" integer NOT NULL,
	"apply_date" timestamp NOT NULL
);
--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "user_id_idx" ON "application" ("user_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "status_id_idx" ON "application" ("status_id");