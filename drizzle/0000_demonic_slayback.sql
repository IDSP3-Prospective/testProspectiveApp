CREATE TABLE IF NOT EXISTS "qualities" (
	"QID" serial PRIMARY KEY NOT NULL,
	"Quality" text
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "requirements" (
	"RID" serial PRIMARY KEY NOT NULL,
	"Requirement" text,
	"Strict" text
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "scholarships" (
	"SID" serial PRIMARY KEY NOT NULL,
	"Name" text,
	"Type" text,
	"Source" text,
	"Amount" text,
	"Description" text,
	"Link" text
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "user_quality" (
	"UQID" serial PRIMARY KEY NOT NULL,
	"UID" integer,
	"QID" integer,
	"Specifics" text
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "users" (
	"UID" serial PRIMARY KEY NOT NULL,
	"Name" text,
	"Email" text,
	"Username" text,
	"Password" text,
	"TuitionCost" text,
	"SID" integer
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "user_quality" ADD CONSTRAINT "user_quality_UID_users_UID_fk" FOREIGN KEY ("UID") REFERENCES "users"("UID") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "user_quality" ADD CONSTRAINT "user_quality_QID_qualities_QID_fk" FOREIGN KEY ("QID") REFERENCES "qualities"("QID") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "users" ADD CONSTRAINT "users_SID_scholarships_SID_fk" FOREIGN KEY ("SID") REFERENCES "scholarships"("SID") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
