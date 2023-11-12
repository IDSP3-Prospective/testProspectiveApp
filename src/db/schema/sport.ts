import { pgTable, serial, text, date, integer } from 'drizzle-orm/pg-core';

export const sport = pgTable('sport', {
    id: serial('id').primaryKey(),
    sport: text('sport').unique()
});
