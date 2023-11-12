import { pgTable, serial, text, integer, date, } from 'drizzle-orm/pg-core';
import { requirements } from './requirements';
import { institution } from './institution';

export const requirementSchool = pgTable('requirements_school', {
    id: serial('id').primaryKey(),
    requirementId: serial('requirement_id').references(() => requirements.id),
    schoolId: serial('school_id').references(() => institution.id),
});