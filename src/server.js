const express = require('express');
const app = express();
const port = process.env.PORT || 8088; 
const cors = require('cors');
const { getDATA }= require('./services/database.js')

// connection
// const { Pool }= require('pg')

// const pool = new Pool({ 
//     host: 'localhost',
//     user:'postgres',
//     password: 'usuario83',
//     port: 5432,
//     database: 'dashboard',
// })
// pool.connect()

// middleware
app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json());

app.get('/', (req, res) =>{
    res.send({nome: 'John'})
})

app.get('/api',getDATA)

app.listen(port,(err)=>{
    if(err){
        console.log('error: ' + err)
    }else{
        console.log(`access server: https://localhost:${port}`)
    }
});

