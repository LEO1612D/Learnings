const http = require('http');
const fs = require('fs');

// Define the hostname and port number
const hostname = '127.0.0.1';
const port = 3000;

// Create the server
const server = http.createServer((req, res) => {
  // Set the response HTTP header with a status code of 200 (OK) and content type
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  
  // Simple text reading
//   // Send a response back to the client
//   res.end('Hello, this is your Node.js server!');

    // Read File

    fs.readFile('./assets/sample_png.png', (err, data) => {
        if(err) {
            res.statusCode = 404;
            res.end("Image Not Found!!");
        }
        else {
            res.end(data);
        }
    });

});

// Start the server
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

