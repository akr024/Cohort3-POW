const express = require('express');
const jwt = require('jsonwebtoken');
const cors = require('cors');

const JWT_SECRET = "mysecret";

// sign up, sign in, /me

const app = express();
app.use(express.json());

// app.use(cors()); // at runtime: add an obj and add its address as a string

const users = []

function auth(req, res, next){
    try{
        const token = req.headers.token;
        const userId = jwt.verify(token, JWT_SECRET).userId; // {userId: 1}
        req.userId = userId;
        next();
    } catch(err){
        res.json({ 
            error: err.message,
            message: "You are not logged in"
        })
        return;
    }
}

// hosting frontend on the same domain - use cors when frontend on different domain
app.get('/', function(req, res){
    res.sendFile("/Users/abhimanyukumar/VSCode_Projects/Cohort3-POW/6.2/public/index.html")
})

app.post('/signup', function(req, res){
    const username = req.body.username;
    const password = req.body.password;

    const user = users.find(u => u.username === username);

    if(user){
        res.json({
            error: "User already signed up"
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

    const user = users.find(u => u.username === username && u.password === password);

    if(user){
        const token = jwt.sign({
            userId: user.userId
        }, JWT_SECRET);
        // res.header("token", token); - headers can be set like this in response
        res.json({
            message: "User signed in",
            token: token
        })
    } else {
        res.json({
            error: "User not found"
        })
    }
})

app.get('/me', auth, function(req, res){
    try{
        const user = users.find(u => u.userId === req.userId);
 
        // if(user) check not needed because if a userid is not found, control will reach catch
        // else if a userid is found, it means that the user exists and thus no check here is needed.
        res.json({
            username: user.username,
            password: user.password
        }) 
    } catch(err){
        res.json({
            error: err.message
        })
    }
})

app.listen(3000, function(){
    console.log("Server start at port 3000");
})