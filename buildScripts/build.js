/*eslint-disable no-console*/
import webpack from 'webpack';
import webpackConfig from '../webpack.config.prod';
import chalk from 'chalk';

process.env.NODE_ENV = 'production';

console.log(chalk.blue("Generating minified bundle.........."));

webpack(webpackConfig, function(err, stats) {
    err // => fatal compiler error (rar)
    var json = stats.toJson() // => webpack --json
    json.errors // => array of errors
    json.warnings // => array of warnings
});

console.log(chalk.green("Job done."));