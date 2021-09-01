const express= require('express')
const router = express.Router();
const { getDATA }= require('./services/database.js')

router.get('/api', getDATA)