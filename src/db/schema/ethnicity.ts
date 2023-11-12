import { pgTable, serial, text, date, integer } from 'drizzle-orm/pg-core';

export const ethnicity = pgTable('ethnicity', {
    id: serial('id').primaryKey(),
    ethnicity: text('ethnicity').unique()
});
