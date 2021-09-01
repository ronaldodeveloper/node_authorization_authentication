
const express= require('express')
const router = express.Router();
const { getUsers, userLogin }= require('../services/database.js')

router.get('/users', getUsers)

router.post('/users', userLogin)

module.exports = router;

