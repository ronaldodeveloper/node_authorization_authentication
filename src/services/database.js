const { Pool }= require('pg')

const pool = new Pool({ 
    host: 'localhost',
    user:'postgres',
    password: 'usuario83',
    port: 5432,
    database: 'dashboard',
})
pool.connect()

const getDATA= async(req, res) =>{
    // res.send({nome: 'Mariah'})
    try {
        const usuarios= await pool.query(`select * from users`)
        
        res.json(usuarios.rows)

    } catch (error) {
        res.send(error.message)
    }
}

module.exports= {
    getDATA
};