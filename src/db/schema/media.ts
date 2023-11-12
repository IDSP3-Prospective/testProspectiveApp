import { pgTable, serial, text, date, integer, pgEnum } from 'drizzle-orm/pg-core';

export const mediaTypeValues = [
    "image",
    "video",
    "gif",
] as const
export type mediaType = typeof mediaTypeValues[number]
export const mediaType = pgEnum("media_type", mediaTypeValues);

// use enum for mediaTypeId
export const media = pgTable('media', {
    id: serial('id').primaryKey(),
    mediaType: mediaType('media_type').default("image"),
    url: text('url').notNull(),
    width: integer('width').default(300),
    height: integer('height').default(300),
});
