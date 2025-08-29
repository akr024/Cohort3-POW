const express = require('express');
const jwt = require('jsonwebtoken');

const JWT_SECRET = "mysecret";

// sign up, sign in, /me

const app = express();
app.use(express.json());

const users = []

app.post('/signup', function(req, res){
    const username = req.body.username;
    const password = req.body.password;

    const user = users.find(u => u.username === username);

    if(user){
        res.json({
            Error: "User already signed up"
        })
    } else {
        const newUser = {
            username: username,
            password: password,
            userId: users.length + 1
        }
        users.push(newUser);
        res.json({
            message: "New user created"
        })
    }
})

app.post('/signin', function(req, res){
    const username = req.body.username;
    const password = req.body.password;

    const user = users.find(u => u.username === username);

    if(user){
        const token = jwt.sign({
            userId: user.userId
        }, JWT_SECRET);
        res.json({
            message: "User signed in",
            token: token
        })
    } else {
        res.json({
            Error: "User not found"
        })
    }
})

app.get('/me', function(req, res){
    try{
        const token = req.headers.token;
        const userId = jwt.verify(token, JWT_SECRET).userId;

        const user = users.find(u => u.userId === userId);

        // if(user) check not needed because if a userid is not found, control will reach catch
        // else if a userid is found, it means that the user exists and thus no check here is needed.
        res.json({
            username: user.username,
            password: user.password
        })
    } catch(err){
        res.json({
            Error: err.message
        })
    }
})