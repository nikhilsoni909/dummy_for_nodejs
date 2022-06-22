const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end("welcome to nik page");
    }
    if (req.url === '/about') {
        res.end('here is our short');
    }
    // default response
    res.end(
        `<h1>Oops!</h1>
    <p>we are not able to find the page that you are looking for</p>
    <a href="/">back home </a>`

    )
})

server.listen(5000);