const { Router } = require("express");
const con  = require("../db/db");
const usersSql = require("../db/usersSentences");
const route = Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

route.post("/api/users/register", async (req, res) => {
    //verify if exist user's data and if email is an email
    if( !req.body.name || ! req.body.last_name || 
        (!req.body.email || !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(req.body.email))
        || !req.body.password) return res.status(400).send("Invalid data");
    
        //get all data
    const { name, last_name, email, password } = req.body;
    
    //generates salt to hashing password
    const salt = await bcrypt.genSalt(10);
    
    //hashing user's password
    const passwordHashed = await bcrypt.hash(password, salt);
    
    //storages user's data into data 
    const data = [ name, last_name, email, passwordHashed ];
    
    con.query(usersSql.register, data, err => {
        if(err){
            console.log(err);
            return res.status(500).send("Some mistake happened");
        }
        res.send("Congratulations, now you're a new user");
    });
});

route.post("/api/users/auth", (req, res) => {
    if( (!req.body.email || !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(req.body.email)) || !req.body.password ) 
        return res.status(400).send("Invalid data");
    const { email,password } = req.body;
    const data = [ email, password] ;
    con.query(usersSql.auth, data[0], async (err, result) => {
        if(err) return res.status(500).send("Some mistake happened");
        //verifies if user exists
        if(result.length === 0 ) return res.status(400).send("The email doesn't exist");

       //verifies if password is right
        const verifyPassword = await bcrypt.compare(data[1], result[0].password);
        
        if(!verifyPassword) return res.status(400).send("Wrong Password");
        jwt.sign({check : true}, "loremloremlorem",{ algorithm : "HS256", expiresIn : "30m"}, (err, token) => {
            if(err) return res.status(500).send("Some mistake happened");
            const message = {text : `Welcome ${result[0].name} ${result[0].last_name}`, token, id : result[0].id};
            res.send(message);
        });
    });
});

module.exports = route;