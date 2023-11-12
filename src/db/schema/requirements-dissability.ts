import { pgTable, serial, text, integer, date, } from 'drizzle-orm/pg-core';
import { requirements } from './requirements';
import { disability } from './disability';

export const requirementDisability = pgTable('requirements_disability', {
    id: serial('id').primaryKey(),
    requirementId: serial('requirement_id').references(() => requirements.id),
    disabilityId: serial('disability_id').references(() => disability.id),
});