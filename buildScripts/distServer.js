
import express from 'express';
import path from 'path';
import compression from "compression";

/* eslint-disable no-console */

const app = express()
app.use(compression());
app.use(express.static('dist'));



app.get('/users', function(req, res){
    res.json([
        {"id":1, "firstName":"Anna","lastName":"Apple","email":"ana@gmail.com"},
        {"id":2, "firstName":"Inez","lastName":"Beetrooth","email":"inesss@yahoo.com"},
        {"id":3, "firstName":"Lori","lastName":"Raspunzel","email":"laluna@gogohq.com"}
    ])
})

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
})

app.listen(3000)