const { Pool } = require('pg')
const cliente = new Pool({
    user: 'postgres',
    password: '123',
    host: '150.162.182.249',
    port: 5432,
    database: 'Chanel',
});

module.exports = cliente;
