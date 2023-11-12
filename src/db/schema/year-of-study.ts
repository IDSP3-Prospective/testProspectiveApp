import { pgTable, serial, text, date, integer } from 'drizzle-orm/pg-core';

export const yearOfStudy = pgTable('year_of_study', {
    id: serial('id').primaryKey(),
    yearOfStudy: integer('year_of_study')
});