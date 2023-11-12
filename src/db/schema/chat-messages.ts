import { pgTable, serial, text, integer, date, } from 'drizzle-orm/pg-core';
import { users } from './user';
import { messages } from './message';
import { chat } from './chat';

export const chatMessage = pgTable('chat_messages', {
    id: serial('id').primaryKey(),
    chatId: serial('chat_id').references(() => chat.id),
    messagesId: serial('messages_id').references(() => messages.id),
});