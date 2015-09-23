var sutil = require('../index');

var str = sutil.padRight('1', 5);

console.log('|%s|', str);

str = sutil.padLeft('1', 5);

console.log('|%s|', str);
