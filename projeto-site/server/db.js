const { Pool } = require('pg')
const cliente = new Pool({
    user: 'postgres',
    password: '123',
    host: '150.162.183.165',
    port: 5432,
    database: 'Chanel',
});

module.exports = cliente;