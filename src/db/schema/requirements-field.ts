import { pgTable, serial, text, integer, date, } from 'drizzle-orm/pg-core';
import { requirements } from './requirements';
import { field } from './field';

export const requirementField = pgTable('requirements_field', {
    id: serial('id').primaryKey(),
    requirementId: serial('requirement_id').references(() => requirements.id),
    fieldId: serial('field_id').references(() => field.id),
});