const express = require('express');

const app = express();

const users = [];

app.use(express.json());

function generateToken(){
    const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
    let token = "";
    for(let i = 0; i < 7; i++){
        token += letters[Math.floor(Math.random() * 6)]
    }
    return token;
}

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
        const token = generateToken();
        user.token = token;
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

    const user = users.find(function(user) {
        if(user.token === token){
            return true;
        } else {
            return false;
        }
    })

    console.log(user)
    if(user){
        res.json({
            username: user.username
        });
    } else {
        res.json({
            Error: "You are not authorized to access this"
        })
    }
})

app.listen(3000, function(){
    console.log("Server started at Port 3000");
})