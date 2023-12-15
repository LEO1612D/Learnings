const http = require('http');

// Define the hostname and port number
const hostname = '127.0.0.1';
const port = 3000;

// Create the server
const server = http.createServer((req, res) => {
  // Set the response HTTP header with a status code of 200 (OK) and content type
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  
  // Send a response back to the client
  res.end('Hello, this is your Node.js server!');
});

// Start the server
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

