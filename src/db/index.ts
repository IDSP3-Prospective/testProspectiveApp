import { neon, neonConfig } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
 
neonConfig.fetchConnectionCache = true;
console.log(process.env.DB_URL)
const sql = neon(process.env.DB_URL!);
export const db = drizzle(sql);