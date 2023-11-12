import { pgTable, serial, text, date, integer, pgEnum, timestamp } from 'drizzle-orm/pg-core';
import { requirements } from './requirements';
import { institution } from './institution';
import { media } from './media';

export const awardTypeValues = [
    "scholarship",
    "grant",
    "bursary",
    "loan",
    "other",
] as const
export type awardType = typeof awardTypeValues[number]
export const awardType = pgEnum("award_type", awardTypeValues);


export const scholarship = pgTable('scholarships', {
    id: serial('id').primaryKey(),
    name: text('name').notNull().unique(),
    institutionId: integer("institution_id").references(() => institution.id),
    description: text('description'),
    amount: integer('amount'),
    deadline: timestamp('deadline'),
    link: text('link').notNull(),
    awardType: awardType("award_type").notNull(),
    requirementsId: integer('requirements_id').references(() => requirements.id),
    mediaId: integer('media_id').references(() => media.id),
});
