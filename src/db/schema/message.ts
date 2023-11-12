import { pgTable, serial, text, integer, date, timestamp,  } from 'drizzle-orm/pg-core';
import { sql } from "drizzle-orm";
import { users } from './user';
import { chat } from './chat';



export const messages = pgTable('messages', {
    id: serial('id').primaryKey(),
    text: text('text').notNull(),
    createdAt: timestamp('created_at'),
    userId: integer('user_id').references(() => users.id),
    isChatGpt: integer('is_chat_gpt').default(0),
});