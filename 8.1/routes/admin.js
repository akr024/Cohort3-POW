const express = require('express');
const router = express.Router;
// another way of writing: const { Router } = require('express');

const adminRouter = router();

adminRouter.post('/signup', function(req, res){

})

adminRouter.post('/login', function(req, res){
    
})

adminRouter.post('/course', function(req,res){

})

adminRouter.put('/course', function(req,res){

})

adminRouter.get('/course/all', function(req,res){

})


module.exports = {
    adminRouter
}