import { pgTable, serial, text, integer, date, PgBoolean, pgEnum, timestamp } from 'drizzle-orm/pg-core';
import { sql } from "drizzle-orm";
import { users } from './user';
import { chat } from './chat';
import { media, mediaType } from './media';

export const typeValues = [
    "review",
    "comment",
] as const
export type type = typeof typeValues[number]
export const type = pgEnum("type", typeValues);

export const comments = pgTable('comments', {
    id: serial('id').primaryKey(),
    parentPostId: integer('parent_post_id').notNull(),
    parentPostType: type('parent_post_type'),
    comment: text('comment').notNull(),
    like: integer('like'),
    dislike: integer('dislike'),
    createdAt: timestamp('created_at').notNull(),
    userId: integer('user_id').notNull().references(() => users.id),
    type: type('type'),
    mediaId: integer('media_id').references(() => media.id),
});
