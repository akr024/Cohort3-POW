const jwt = require('jsonwebtoken');

const JWT_SECRET = "abcdefgh"

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

module.exports = {
    auth,
    JWT_SECRET
}