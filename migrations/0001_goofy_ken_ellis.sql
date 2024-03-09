CREATE TABLE IF NOT EXISTS "column" (
	"id" varchar(128) PRIMARY KEY NOT NULL,
	"default" boolean DEFAULT false NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"name" varchar(30) NOT NULL,
	"position" integer NOT NULL
);
