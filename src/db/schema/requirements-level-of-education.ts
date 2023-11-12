import { pgTable, serial, text, integer, date, } from 'drizzle-orm/pg-core';
import { requirements } from './requirements';
import { levelOfEducation } from './level-of-education';

export const requirementLevelOfEducation = pgTable('requirements_level_of_education', {
    id: serial('id').primaryKey(),
    requirementId: serial('requirement_id').references(() => requirements.id),
    levelOfEducationId: serial('level_of_education_id').references(() => levelOfEducation.id),
});