import { pgTable, serial, text, integer, date, pgEnum} from 'drizzle-orm/pg-core';
import { users } from './user';
import { scholarship } from './scholarship';

export const booleanValues = [
    "true",
    "false",
] as const
export type booleanType = typeof booleanValues[number]
export const boolean = pgEnum("media_type", booleanValues);

export const userScholarship = pgTable('user_scholarship', {
    id: serial('id').primaryKey(),
    userId: serial('user_id').references(() => users.id),
    scholarshipId: serial('scholarship_id').references(() => scholarship.id),
    scholarshipSaved: boolean('saved'),
    scholarshipApplied: boolean('applied')
});