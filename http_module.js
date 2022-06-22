const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req);
    res.write("well come to nikhils server");
    res.end()
})

server.listen(5000);