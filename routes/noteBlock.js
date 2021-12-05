const {Router} = require("express");
const con = require("../db/db");
const notesSql = require("../db/notesBlockSentences");

const route = Router();

route.get("/api/notes_block",  (req, res) => {
    const {id} = req.headers;
    con.query(notesSql.readAll, [id], (err, result) => {
        if(err) return res.status(500).send("Some mistake happened");
        res.send(result.length !== 0 ? result : "There's no notes");
    });
});

route.get("/api/notes_block/title", (req, res) => {
    const {title, id} = req.headers;
    const data = [ id, title];
    con.query(notesSql.readByTitle, data, (err, result) => {
        if(err) return console.log(err) && res.status(500).send("Some mistake happened");
        res.send(result.length !== 0 ? result : "The note not exist");
    });
});

route.post("/api/notes_block", (req, res) => {
    if(!req.body.title || !req.body.description || !req.body.id) return res.status(400).send("There's no data");
    const {title, description, id} = req.body;
    const data = [title, description, id];
    con.query(notesSql.add, data, err => {
        if(err){
            console.log(err);
            return res.status(500).send("Some mistake happened");
        }
        res.send("Your note has been saved");
    });
});

route.delete("/api/notes_block", (req, res) =>{
    if(!req.headers.id) return res.status(400).send("there's no data")
    const {id} = req.headers;
    con.query(notesSql.delete, [id], err => {
        if(err) return res.status(500).send("Some mistake happened");
        res.send("Your note has been saved");
    });
});

module.exports = route;