const express = require('express');
const router = express.Router();
const db = require('../config/db.js');
const app = express();
app.use(express.json());

router.get("/user", (req,res) => {
db.all("SELECT * FROM user", (err,rows) =>{
    if (err) {
        res.status(500).send(err);
    }else{
        res.status(200).send(rows);
    }


});    
});

module.exports = router;

