const express = require('express');
const mysql = require('mysql');
const app = express();
const PORT = 8800;

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Tejas@3498",
    database: "books"
});

app.get("/", (req, res) => { res.json("Hello this is backend!") })

app.listen(PORT, () => {
    console.log('Server is listeninig on port ' + PORT);
});