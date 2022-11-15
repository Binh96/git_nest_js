export default () => ({
    database: {
        host: process.env.DB_HOST,
        port: parseInt(process.env.DATABASE_PORT)
    }
});