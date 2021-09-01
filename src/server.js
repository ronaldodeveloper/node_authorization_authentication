const express = require('express');
const app = express();
const port = process.env.PORT || 8088; 
const cors = require('cors');
const urlRouter= require('./routers/router.js')

// middleware
app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json());

// router app
app.use('/', urlRouter)
app.use('/', urlRouter)


// LIFT SERVER
app.listen(port,(err)=>{
    if(err){
        console.log('error: ' + err)
    }else{
        console.log(`access server: https://localhost:${port}`)
    }
});

