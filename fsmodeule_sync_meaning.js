const { readFileSync, writeFileSync } = require('fs');
console.log("starting");
const first = readFileSync('./contant/first.txt', 'utf8');
const second = readFileSync('./contant/second.txt', 'utf8');

writeFileSync('./contant/result-sync.txt', `here is the result:${first},${second}`, { flag: 'a' });//by using flag a node will appand file everytime
console.log("writing in file");
// console.log(first,second);

console.log("ready for next");

// here we can see that all the steps are occuring sequentialy thats why it is time consuming see output