const { Pool } = require('pg') //constante que armazena a biblioteca do pg
const cliente = new Pool({
    user: 'postgres',
    password: '123',
    host: 'localhost',
    port: 5432,
    database: 'chanel',
});

module.exports = cliente;
