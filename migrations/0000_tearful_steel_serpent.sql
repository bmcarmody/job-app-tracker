CREATE TABLE `application` (
	`id` varchar(128) NOT NULL,
	`created_at` timestamp NOT NULL DEFAULT (now()),
	`updated_at` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	`user_id` varchar(30) NOT NULL,
	`status_id` varchar(30) NOT NULL,
	`position` varchar(30) NOT NULL,
	`company_name` varchar(30) NOT NULL,
	`job_post_url` varchar(500) NOT NULL,
	`confidence_level` int NOT NULL,
	`apply_date` timestamp NOT NULL,
	CONSTRAINT `application_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE INDEX `id_idx` ON `application` (`id`);--> statement-breakpoint
CREATE INDEX `user_id_idx` ON `application` (`user_id`);--> statement-breakpoint
CREATE INDEX `status_id_idx` ON `application` (`status_id`);