var figlet = require('figlet');
var colors = require('colors');

figlet('MEHEDY TANVIR', function (err, data) {
    if (err) {
        console.log('Something went wrong...'.rainbow);
        console.dir(err.rainbow);
        return;
    }
    console.log(data.rainbow)
});