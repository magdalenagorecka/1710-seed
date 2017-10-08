
import express from 'express';
import path from 'path';
import webpack from 'webpack';
import config from '../webpack.config';

const app = express()
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler,{
    noInfo:true,
    publicPath: config.output.publicPath
}))

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../src/index.html'));
})

app.listen(3000)