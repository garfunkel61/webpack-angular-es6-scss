var path = require('path'),
    argv = require('yargs').argv;

if (argv.config && !!argv.config.match('serve')) {
    module.exports.mode = "serve";
} else {
    module.exports.mode = "prod";
}

console.log('---------------------')
console.log('MODE: ' + module.exports.mode);
console.log('---------------------')

module.exports.absPath = (x) => path.join(__dirname, x);
