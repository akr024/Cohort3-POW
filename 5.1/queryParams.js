const express = require('express');

const app = express();

app.use(express.json());

app.get('/multiply', (req, res) => {
    const a = (Number) (req.query.a);
    const b = (Number) (req.query.b);

    console.log(a);
    console.log(b);

    console.log(a*b);

    res.send(a*b);
})

app.get('/add', (req, res) => {
    const a = (Number) (req.query.a);
    const b = (Number) (req.query.b);

    console.log(a);
    console.log(b);

    console.log(a+b);

    res.send(a+b);
})

app.get('/divide', (req, res) => {
    const a = (Number) (req.query.a);
    const b = (Number) (req.query.b);

    console.log(a);
    console.log(b);

    console.log(a/b);

    res.send(a/b);
})

app.get('/subtract', (req, res) => {
    const a = (Number) (req.query.a);
    const b = (Number) (req.query.b);

    console.log(a);
    console.log(b);

    console.log(a-b);

    res.send(a-b);
})


app.listen(3000, function(){
    console.log("server running");
})