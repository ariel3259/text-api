const express = require("express");
const cors = require("cors");
const app = express();
const noteBlock = require("./routes/noteBlock");
const users = require("./routes/users");
const jwt = require("jsonwebtoken")

app.use(express.json());
app.use(cors());
app.use(users);
app.use((req, res, next) => {
    if( !req.headers.authorization ) return res.status(400).send("There're no token");
    const token = req.headers.authorization;
    jwt.verify(token, "loremloremlorem", err => {
        if(err) return res.status(400).send("Invalid token");
        next();
    });
});
app.use(noteBlock);

app.get("/", (req, res) => res.send("<h1>Hi word</h1>"));

app.listen(8000, () => console.log("Server online on port 8000"));