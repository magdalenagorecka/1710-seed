
import express from 'express';
import path from 'path';
const app = express()

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/src/index.html'));
})

app.listen(3000)