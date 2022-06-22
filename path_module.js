const path = require('path');
console.log(path.sep);
const filePath = path.join('/contant', 'sub_folder', 'text.txt');
console.log(filePath);
const base = path.basename(filePath);
console.log(base);
const absolute = path.resolve(__dirname, 'contant', 'sub_folder', 'test.txt');
console.log(absolute);