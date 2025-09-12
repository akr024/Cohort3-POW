const express = require('express');
const jwt = require('jsonwebtoken');
const {auth, JWT_SECRET} = require('./auth')
const mongoose = require('mongoose')
const {UserModel, TodoModel} = require('./db')
const bcrypt = require('bcrypt');
const {z} = require('zod');

const app = express();
app.use(express.json());

app.post('/signup', async function(req, res){
    try{
        const requiredBody = z.object({
            email: z.email().string().min(3).max(100),
            password: z.string().min(3).max(100),
            name: z.string().min(3).max(100)
        })
        const inputValid = requiredBody.safeParse(req.body);

        if(!inputValid.success){
            res.json({
                message: "input invalid",
                error: inputValid.error
            })
        }

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
    } catch (err){
        res.json({
            error: err.errorResponse.errmsg
        })
    }
});

app.post('/login', async function(req, res){
    try{
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
    } catch (e){
        res.json({
            error: e
        })
    }
});

app.use(auth);

// authenticated endpoint
app.post('/todos', async function(req, res){
    try{
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
    } catch (e){
        res.status(401).json({
            error: e
        })
    }
});

// authenticated endpoint
app.get('/todos', async function(req, res) {
    try{
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
    } catch(e) {
        res.status(401).json({
            error: e
        })
    }
    
})
 
app.listen(3000, async () => {
    try{
        // mongodb+srv://akr:<pass>@cluster0.xe0aftl.mongodb.net is cluster name
        // todo-app-database is database name. cluster => multiple databases
        await mongoose.connect("mongodb+srv://akr:<pass>@cluster0.xe0aftl.mongodb.net/todo-app-database?retryWrites=true&w=majority&appName=Cluster0");
        console.log("Server started at port 3000");
    } catch (e) {
        res.status(401).json({
            error: e
        })
    }
})