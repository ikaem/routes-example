const PORT = process.env.PORT;
const DB_URL = process.env.DB_URL;

if (!PORT) throw new Error('PORT IS NOT SPECIFIED');
if (!DB_URL) throw new Error('DB_URL IS NOT SPECIFIED');

export const envVars = {
  PORT,
  DB_URL,
};
