const express = require('express');
const router = express.Router;
// another way of writing: const { Router } = require('express');
const { UserModel } = require('../models/userModel');

const userRouter = router();


userRouter.post('/signup', function(req, res){

})

userRouter.post('/login', function(req, res){
    
})

module.exports = {
    userRouter
}