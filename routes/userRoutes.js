const express = require('express')
const router = express.Router()
const userControllers = require('../controllers/userControllers')

// Create
router.post('/', userControllers.createUser)

// Login
router.post('/login', userControllers.loginUser)

// Update
router.put('/:id', userControllers.updateUser)

// Delete
router.delete('/:id', userControllers.auth, userControllers.deleteUser)

module.exports = router