const mysql = require("mysql");

const con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"1234",
    database:"text_block_db"
});

con.connect( err => {
    if(err) {
        console.log(err);
        return;
    }
    console.log("Database connected")
})

module.exports = con;