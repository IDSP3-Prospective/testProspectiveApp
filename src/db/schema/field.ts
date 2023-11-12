import { pgTable, serial, text, date, integer } from 'drizzle-orm/pg-core';

export const field = pgTable('field', {
    id: serial('id').primaryKey(),
    field: text('field')
});
