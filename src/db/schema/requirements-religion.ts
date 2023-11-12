import { pgTable, serial, text, integer, date, } from 'drizzle-orm/pg-core';
import { requirements } from './requirements';
import { religion } from './religion';

export const requirementReligion = pgTable('requirements_religion', {
    id: serial('id').primaryKey(),
    requirementId: serial('requirement_id').references(() => requirements.id),
    religionId: serial('religion_id').references(() => religion.id),
});