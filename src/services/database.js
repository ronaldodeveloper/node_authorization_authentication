const { Pool }= require('pg')
require('dotenv').config()

const pool = new Pool({ 
    host: process.env.DB_HOST ,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORDS ,
    port: process.env.DB_PORT ,
    database: process.env.DB_DATABASE ,
})
pool.connect()

const getUsers= async(req, res) =>{
    try {
        let sql= `SELECT * FROM users`
        const Users= await pool.query(sql)
        res.json(Users.rows)
    } catch (error) {
        res.send(error.message)
    }
}

const userLogin= async(req, res) =>{
    
    try{
       let sql= `INSERT INTO users (name, email, tokenID) VALUES ($1, $2, $3)`
        // const insertUser= ['req.body.nome', 'req.body.email', 'req.body.token']
       const insertUser= [`${req.body.name}`, `${req.body.email}`, `${req.body.tokenID}`]
       const insert= await pool.query(sql, insertUser)
       res.json(insert.rows)
    }catch(error){
        console.log("Error, tente novamente!", error)
    }
}

// EXPORT 
module.exports= {
    getUsers,
    userLogin
};