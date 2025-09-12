const express = require('express');
const jwt = require('jsonwebtoken');
const {auth, JWT_SECRET} = require('./auth')
const mongoose = require('mongoose')
const {UserModel, TodoModel} = require('./db')
const bcrypt = require('bcrypt');

const app = express();
app.use(express.json());

app.post('/signup', async function(req, res){
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;

    const hashedPassword = await bcrypt.hash(password, 10); // 10 are the salt rounds - to complicate the salt


    const resp = await UserModel.create({
        email: email,
        password: hashedPassword,
        name: name
    })

    console.log(resp)

    res.json({
        message: "Signed up"
    })
});

app.post('/login', async function(req, res){
    const email = req.body.email;
    const password = req.body.password;

    const user = await UserModel.findOne({
        email: email
    })

    if(!user){
        res.status(403).json({
            error: "User not found"
        })
        return;
    }

    const passMatch = await bcrypt.compare(password, user.password);

    if(passMatch){
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
 
app.listen(3000, async () => {
    // mongodb+srv://akr:<pass>@cluster0.xe0aftl.mongodb.net is cluster name
    // todo-app-database is database name. cluster => multiple databases
    await mongoose.connect("mongodb+srv://akr:<pass>@cluster0.xe0aftl.mongodb.net/todo-app-database?retryWrites=true&w=majority&appName=Cluster0");
    console.log("Server started at port 3000");
})