import { pgTable, serial, varchar, pgEnum, timestamp, integer, text} from "drizzle-orm/pg-core";
import { requirements } from './requirements';
import { media } from "./media";

export const users = pgTable('users', {
    id: serial('id').primaryKey().notNull(),
    firstName: varchar("first_name", { length: 50 }).notNull(),
    lastName: varchar("last_name", { length: 50 }),
    email: text('email').notNull().unique(),
    username: text('username').notNull().unique(),
    password: text('password').notNull(),
    tuitionCost: integer('tuition_cost').default(0),
    profilePicId: integer('media_id').references(() => media.id),
    requirementsId: integer('requirements_id').references(() => requirements.id),
});
