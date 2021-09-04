
const express= require('express')
const router = express.Router();
const { getUsers, register, login, dashboard, verifyToken }= require('../services/database.js')

router.get('/', getUsers)

router.post('/register', register)

router.post('/login', login)

router.get('/dashboard', verifyToken, dashboard)

module.exports = router;

