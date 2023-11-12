import { pgTable, serial, text, date, integer } from 'drizzle-orm/pg-core';

export const institution = pgTable('institution', {
    id: serial('id').primaryKey(),
    institution: text('institution').notNull().unique()
});
