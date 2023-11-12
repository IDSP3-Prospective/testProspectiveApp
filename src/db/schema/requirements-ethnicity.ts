import { pgTable, serial, text, integer, date, } from 'drizzle-orm/pg-core';
import { requirements } from './requirements';
import { ethnicity } from './ethnicity';

export const requirementEthnicity = pgTable('requirements_ethnicity', {
    id: serial('id').primaryKey(),
    requirementId: serial('requirement_id').references(() => requirements.id),
    ethnicityId: serial('ethnicity_id').references(() => ethnicity.id),
});