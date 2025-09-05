const express = require('express');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose')
const {UserModel, TodoModel} = require('./db')

mongoose.connect("mongodb+srv://akr:abcd@cluster0.xe0aftl.mongodb.net/todo-app-database?retryWrites=true&w=majority&appName=Cluster0");

const app = express();
app.use(express.json());

const JWT_SECRET = "abcdefgh"

app.post('/signup', async function(req, res){
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;

    await UserModel.create({
        email: email,
        password: password,
        name: name
    })

    res.json({
        message: "Signed up"
    })
});

app.post('/login', async function(req, res){
    const email = req.body.email;
    const password = req.body.password;

    const user = await UserModel.findOne({
        email: email,
        password: password
    })

    if(user){
        const token = jwt.sign({
            id: user._id
        }, JWT_SECRET);
        res.json({
            token: token
        })
    } else{
        res.json({
            message: "Incorrect password or email does not exist"
        })
    }
});

function auth(req, res, next){
    try{
        const token = req.headers.token;
        const userId = jwt.verify(token, JWT_SECRET).id;
        req.userId = userId;
        next();
    } catch(err){
        res.json({
            error: err,
            message: "error occurred"
        })
    }
}

app.use(auth);

// authenticated endpoint
app.post('/todos', async function(req, res){
    const userId = req.userId;
    const title = req.body.title;
    const done = req.body.done;

    await TodoModel.create({
        title: title,
        done: done,
        userId: userId
    })

    res.json({
        message: "todo created successfully"
    })
});

// authenticated endpoint
app.get('/todos', async function(req, res) {
    const userId = req.userId;
    
    const todos = await TodoModel.find({
        userId: userId
    })

    if(todos){
        res.json({
            todos: todos
        })
    } else{
        res.status(403).json({
            error: "no todos found"
        })
    }
})

app.listen(3000, () => {
    console.log("Server started at port 3000");
})