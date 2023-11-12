import { pgTable, serial, text, date, integer } from 'drizzle-orm/pg-core';

export const disability = pgTable('disability', {
    id: serial('id').primaryKey(),
    disability: text('disability').unique()
});
