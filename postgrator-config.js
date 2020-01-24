
require('dotenv').config();

module.exports = {
    'migrationDirectory': 'migrations',
    'driver': 'pg',
    'host': process.env.MIGRATION_DB_HOST,
    'port': process.env.MIGRATION_DB_PORT,
    'database': process.env.MIGRATION_DB_NAME,
    'username': process.env.MIGRATION_DB_USER,
    "connectionString": (process.env.NODE_ENV === 'test')
        ? process.env.TEST_DATABASE_URL
        : process.env.DB_URL,
    "ssl": !!process.env.SSL,
};