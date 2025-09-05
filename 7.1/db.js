const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId; // needs to be imported from mongoose

const User = new Schema({
    email: {type: String, unique: true},
    password: String,
    name: String
})

const Todo = new Schema({
    title: String,
    done: Boolean,
    userId: ObjectId
})

const UserModel = mongoose.model('users', User); //users is the name of the collection in MongoDB with User schema
const TodoModel = mongoose.model('todos', Todo);

module.exports = {
    UserModel, 
    TodoModel
}

// can also export other info like module.exports = "hi"