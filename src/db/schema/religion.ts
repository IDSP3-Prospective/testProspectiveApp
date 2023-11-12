import { pgTable, serial, text, date, integer } from 'drizzle-orm/pg-core';

export const religion = pgTable('religion', {
    id: serial('id').primaryKey(),
    religion: text('religion').unique()
});
