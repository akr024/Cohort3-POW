// small assignment: create a small backend for computing - utilising cors

const express = require('express');
const cors = require('cors');

const app = express();
// to parse the JSON of the body of the req:
app.use(express.json());
app.use(cors({
    domain: "" // begin server on your frontend seperately using npx serve
}));

app.post('/add', (req, res) => {
    console.log(req.body);
    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);

    const ans = a+b;

    res.json({
        "sum": ans
    })
})

app.listen(3000, function(){
    console.log("server running");
})