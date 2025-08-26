const express = require('express');

const app = express();

const users = [];

app.use(express.json());

function generateToken(){

}

app.post('/signup', (req,res) => {

})

app.post('/signin', (req,res) => {
    
})

app.listen(3000, function(){
    console.log("Server started at Port 3000");
})