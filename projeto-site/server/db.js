const { Pool } = require('pg')
const cliente = new Pool({
    user: 'postgres',
    password: '123',
    host: '192.168.0.140',
    port: 5432,
    database: 'Chanel',
});

module.exports = cliente;
