import { pgTable, serial, text, integer, date, decimal, pgEnum } from 'drizzle-orm/pg-core';


export const incomeClassValues = [
    "low",
    "middle",
    "high",
] as const
export type incomeClass = typeof incomeClassValues[number]
export const incomeClass = pgEnum("income_class", incomeClassValues);


export const requirements = pgTable('requirements', {
    id: serial('id').primaryKey(),
    incomeClass: incomeClass('income_class'),
    grade: integer('grade'),
    gpa: integer('gpa'),    
});
