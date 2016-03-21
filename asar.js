var asar = require('asar');

var src = './www';
var dest = 'electron.asar';

asar.createPackage(src, dest, function() {
  console.log('done.');
})
