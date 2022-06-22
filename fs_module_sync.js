const { readFileSync,writeFileSync } = require('fs');
const first=readFileSync('./contant/first.txt','utf8'); 
const second = readFileSync('./contant/second.txt', 'utf8'); 

writeFileSync('./contant/result-sync.txt',`here is the result:${first},${second}`,{flag:'a'});//by using flag a node will appand file everytime

console.log(first,second);



// or
    // const fs=require('fs'); 
    // fs.read();