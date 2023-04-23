module.exports = {
    client: "mysql2",
    conection: {
        host: "apinode",
        user: "root",
        password: " ",
        database: "test"
    },
    pool: {
        min: 2,
        max: 10
    },
    migrations: {
        tableName: "knex_migrations"
    }
}