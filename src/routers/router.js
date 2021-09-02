
const express= require('express')
const router = express.Router();
const { getUsers, userLogin }= require('../services/database.js')

router.get('/', getUsers)

router.post('/login', userLogin)

module.exports = router;

