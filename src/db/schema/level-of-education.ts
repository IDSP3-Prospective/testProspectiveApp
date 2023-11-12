import { pgTable, serial, text, date, integer } from 'drizzle-orm/pg-core';

export const levelOfEducation = pgTable('level_of_education', {
    id: serial('id').primaryKey(),
    levelOfEducation: text('level_of_education')
});