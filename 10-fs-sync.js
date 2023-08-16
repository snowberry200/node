const{readFileSync, writeFileSync} = require ('fs');
console.log('starting... ')
const first = readFileSync('./content/first.txt','utf8')
const second = readFileSync('./content/second.txt','utf8')

console.log(first);
console.log(second);

writeFileSync('./content/results.txt', `here are the results : ${first}, ${second}`, {flag : 'a'})
console.log('done with  this task')