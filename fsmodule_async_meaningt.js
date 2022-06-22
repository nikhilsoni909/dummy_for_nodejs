const { readFile, writeFile } = require('fs');
console.log("start");

readFile('./contant/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err);
        return;
    }

    const first = result;

    readFile('./contant/second.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        const second = result;
        writeFile('./contant/result-async.txt', `here is the result:${first},${second}`, (err, result) => {
            if (err) {
                console.log(err);
                return;
            }
            console.log("writing file");

        })
    })

})
console.log("ready for next ");
// here we can see that after stating it is ready for next file unlike synchronous approach 