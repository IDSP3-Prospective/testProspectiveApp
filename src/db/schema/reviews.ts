import { pgTable, serial, text, integer, date, pgEnum, timestamp,} from 'drizzle-orm/pg-core';
import { type } from './comments';
import { media, mediaType } from './media';

export const reviews = pgTable('reviews', {
    id: serial('id').primaryKey(),
    review: text('review').notNull(),
    like: integer('like'),
    dislike: integer('dislike'),
    userId: integer('user_id').notNull(),
    scholarshipId:integer('scholarship_id').notNull(),
    createdAt: timestamp('created_at'),
    type: type('type_id'),
    mediaId: integer('media_id').references(() => media.id),
});