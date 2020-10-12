const express = require('express');
const router = express.Router()
const jwt=require('jsonwebtoken')
const {
     getUser, isAuthenticate, 
    userProfile, register,
     login, getAllUser,
      updateUser, deleteUser} = require('../controller/users/user');


// router.post('/user/login', getLogin)
 router.get('/users',  getAllUser)
router.post('/user', register)
router.post('/auth', login)
router.get('/profile', isAuthenticate, userProfile)
router.put('/user/:id', updateUser)
router.delete('/user/:id', deleteUser)

module.exports = router; 
