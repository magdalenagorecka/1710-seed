
import express from 'express';
import path from 'path';
import webpack from 'webpack';
import config from '../webpack.config';

/* eslint-disable no-console */

const app = express();
const compiler = webpack(config);


app.use(require('webpack-dev-middleware')(compiler,{
    noInfo:true,
    publicPath: config.output.publicPath
}))

app.get('/users', function(req, res){
    res.json([
        {"id":1, "firstName":"Anna","lastName":"Apple","email":"ana@gmail.com"},
        {"id":2, "firstName":"Inez","lastName":"Beetrooth","email":"inesss@yahoo.com"},
        {"id":3, "firstName":"Lori","lastName":"Raspunzel","email":"laluna@gogohq.com"}
    ])
})

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../src/index.html'));
})

app.listen(3000)