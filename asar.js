var asar = require('asar');

var src = './www';
var dest = 'moodle-electron.asar';

asar.createPackage(src, dest, function() {
  console.log('done.');
})
