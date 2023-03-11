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

router.post("/user", (req,res) =>{
    const value = req.query;
    db.run("INSERT INTO user (name,email,password,status) VALUES (?,?,?,?)",
    value.name , value.email, value.password, value.status,
    function(err){
        if (err) {
            res.status(500).send(err);
        }else{
            res.status(200).send(value);
        }
    }
    );
    
//     console.log(req.query.name);
//     console.log(req.query.password);
//     res.end()

 });


 router.put("/user/:id", (req,res) =>{
    const value = req.query;
    db.run("UPDATE user SET name = ?,email = ?,password = ?,status = ? WHERE id = ?",
    value.name , value.email , value.password, value.status, req.params.id,
    function(err){
        if (err) {
            res.status(500).send(err);
        }else{
            res.status(200).send(value);
        }
    });
 });

 router.delete("/user/:id", (req,res) =>{
    db.run("DELETE FROM user WHERE id = ?",req.params.id,
    function(err){
        if (err) {
            res.status(500).send(err);
        }else{
            res.send({});
        }
 });
});

module.exports = router;

