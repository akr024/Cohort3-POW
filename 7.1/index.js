const express = require('express');
const jwt = require('jsonwebtoken');
const {UserModel, TodoModel} = require('./db')

const app = express();
app.use(express.json());

app.post('/signup', async function(req, res){
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;

    await UserModel.insertOne({
        email: email,
        username: username,
        password: password
    })

    res.json({
        message: "Signed up"
    })

});

app.post('login', function(req, res){

});

app.post('/todos', function(req, res){

});

app.get('/todos', function(req, res) {

})

app.listen(3000, () => {
    console.log("Server started at port 3000");
})