import { pgTable, serial, text, integer, date, } from 'drizzle-orm/pg-core';
import { requirements } from './requirements';
import { yearOfStudy } from './year-of-study';

export const requirementYearOfStudy = pgTable('requirements_year_of_study', {
    id: serial('id').primaryKey(),
    requirementId: serial('requirement_id').references(() => requirements.id),
    yearOfStudyId: serial('year_of_study_id').references(() => yearOfStudy.id),
});