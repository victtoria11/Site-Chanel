const { Pool } = require('pg')
const cliente = new Pool({
    user: 'postgres',
    password: '123',
    host: 'localhost',
    port: 5432,
    database: 'chanel',
});

module.exports = cliente;
