// small assignment: create a middleware to log the each req's http method, url and timestamp

const express = require('express');

const app = express();

let requestCount = 0;

function logMWFunc(req, res, next){
    requestCount++;
    console.log("Request number:", requestCount);
    console.log("Method: " + req.method);
    console.log("URL:", req.hostname); // req.url contains route, req.hostname contains the full rul
    const time = new Date;
    console.log("Timestamp", time);

    next();
}

// middleware:
app.use(logMWFunc);

app.get('/multiply', (req, res) => {
    const a = req.query.a;
    const b = req.query.b;

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

    res.send((a+b));
})

app.listen(3000, function(){
    console.log("server running");
})