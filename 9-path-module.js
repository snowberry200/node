const { SlowBuffer } = require('buffer');
const path = require ('path');

console.log(path.sep)
console.log(path.join('/content/subcontent/test.txt'))

const absolute = path.resolve(__dirname,'content', 'subcontent', 'test.txt')
console.log (absolute)