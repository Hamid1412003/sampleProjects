const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url == '/api/courses') {
        res.write(JSON.stringify([1, 2, 3]));
        res.end();
    }
    if (req.url = '/') {
        res.write('Hello World');
        res.end();
    }
});


server.listen(3000);

console.log('listening 0n port 3000');