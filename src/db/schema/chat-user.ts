import { pgTable, serial, text, integer, date, } from 'drizzle-orm/pg-core';
import { users } from './user';
import { messages } from './message';
import { chat } from './chat';

export const chatUser = pgTable('chat_user', {
    id: serial('id').primaryKey(),
    chatId: serial('chat_id').references(() => chat.id),
    userId: serial('user_id').references(() => users.id),
});