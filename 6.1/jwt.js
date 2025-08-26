const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();
const JWT_SECRET = "random";

const users = [];

app.use(express.json());



app.post('/signup', (req,res) => {
    const username = req.body.username;
    const password = req.body.password;

    if(users.find(function(user){
        if (user.username === username) {
            return true};
    })){
        res.json({message: "You are already signed up"})
    }

    users.push({
        username: username,
        password: password
    })
    res.json({
        message: "user signed up"
    })
    console.log(users);
})

app.post('/signin', (req,res) => {
    const username = req.body.username;
    const password = req.body.password;
    const user = users.find(function (u) {
        if(u.username === username && u.password === password){
            return true;
        } else{
            return false;
        }
    })
 
    if (user) {
        const token = jwt.sign({
            username: username
        }, JWT_SECRET);

        res.json({
            token: token
        })
    } else {
        res.status(404).json({
            message: "User does not exist"
        })
    }

})

app.get('/me', function(req, res){
    const token = req.headers.token;
    console.log(token);

    jwt.verify(token, JWT_SECRET, (err, decodedInformation) => {
        if(err) {
            res.status(401).json({
                Error: "Invalid JWT"
            })
            return;
        } else {
            const username = decodedInformation.username;

            if (username){
                users.forEach(function(user){
                    if(user.username == username){
                        res.json({
                            username: username,
                            password: user.password
                        })
                    } 
                })
            }
        }
    }); // returns the object which was signed in jwt.sign

})

app.listen(3000, function(){
    console.log("Server started at Port 3000");
})