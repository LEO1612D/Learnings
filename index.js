const http = require('http');
const fs = require('fs');

// Define the hostname and port number
const hostname = '127.0.0.1';
const port = 3000;

// Create the server
const server = http.createServer((req, res) => {

    if(req.url === '/text') {
        res.writeHead(200, {
            'Content-Type': 'text/plain'
        });

        res.end("Hello This is Just sample Text");
    }

    else if(req.url === '/image') {
        res.writeHead(200, {
            'Content-Type': 'text/plain'
        });

        fs.createReadStream('./assets/sample_png.png').pipe(res);
    } 

    else {
        res.writeHead(404, {
            'Content-Type': 'text/plain'
        });
        res.end("Page Not Found");
    }
 

});

// Start the server
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

