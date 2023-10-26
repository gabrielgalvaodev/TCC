const mysql = require ('mysql2/promise');

const pool = mysql.createPool({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '123456',
    database: 'tcc',
    connectionLimit: 10
});

//Testa a conexão com o BD
pool.getConnection()
.then((conexao)=>{
    console.log("Conexão ao BD com sucesso!");
    conexao.release();
})
.catch((erro)=>{
    console.log("Falha ao conectar ao BD...");
    console.log(erro);
});

//Exporta o pool de conexão com o BD
module.exports = pool;