import { pgTable, serial, text, integer, date, timestamp, } from 'drizzle-orm/pg-core';


export const chat = pgTable('chat', {
    id: serial('id').primaryKey(),
    name: text('name'),
    updatedAt: timestamp('updated_at'),
})