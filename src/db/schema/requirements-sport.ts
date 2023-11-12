import { pgTable, serial, text, integer, date, } from 'drizzle-orm/pg-core';
import { requirements } from './requirements';
import { sport } from './sport';

export const requirementSport = pgTable('requirements_sport', {
    id: serial('id').primaryKey(),
    requirementId: serial('requirement_id').references(() => requirements.id),
    sportId: serial('sport_id').references(() => sport.id),
});