const { Pool }= require('pg')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const pool = new Pool({ 
    host: process.env.DB_HOST ,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORDS ,
    port: process.env.DB_PORT ,
    database: process.env.DB_DATABASE ,
})
// pool.connect()


// exibe todos os usuarios
const getUsers= async(req, res) =>{
    try {
        let sql= `SELECT * FROM users`
        const Users= await pool.query(sql)
        res.json(Users.rows)
    } catch (error) {
        res.send(error.message)
    }
}

// registrar usuarios no db
const register= async(req, res) =>{

       let sql= `INSERT INTO users (name, email, password) VALUES ($1, $2, $3)`
       const insertUser= [`${req.body.name}`, `${req.body.email}`, `${req.body.password}`]
       const insert= await pool.query(sql, insertUser)

       if (insert.rows){
          res.json({
            message: "SUCCESSFUL REGISTERED USER!"
         })
       }else{
         res.json({
            message: "FAILED TO REGISTER..."
         })
       } 
}



// login do usuario
const login= async(req, res) =>{
    //   const {email, password} = req.body
    //   res.json({email, password})

        let sql= `SELECT * FROM users WHERE email= '${req.body.email}'`
        const Users= await pool.query(sql)
        if(Users){
            const {email}= Users.rows[0]
            const token= jwt.sign({ email }, process.env.SECRET_KEY, {expiresIn: '1d'})
           res.json({token}) 
        }else{
            res.status(403).json({"message": "register user!"})  
        }  
}



// Rota privada, depende de autorização para ser acessada
const dashboard = async (req, res) => {
    res.send(req.email)
}

// middleware
const verifyToken= (req, res, next) => {
    const token = req.headers.authorization
    if (!token){
        res.status(403).send('Autorization failed!')
    }

    jwt.verify(token, process.env.SECRET_KEY, (err, auth)=>{
         if(err){ return res.status(401).end()}

         req.email = auth.email;
         next()
    })
}



// EXPORT 
module.exports= {
    getUsers,
    register,
    login,
    dashboard,
    verifyToken
};