const http = require('http');
const fs = require('fs');

// Define the hostname and port number
const hostname = '127.0.0.1';
const port = 3000;

// Create the server
const server = http.createServer((req, res) => {
  // Set the response HTTP header with a status code of 200 (OK) and content type
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  
  // Simple text reading
//   // Send a response back to the client
//   res.end('Hello, this is your Node.js server!');

    // Read File

    fs.readFile('./assets/sample_png.png', (err, imageData) => {
        if(err) {
            res.statusCode = 404;
            res.end("Image Not Found!!");
        }
        else {

            // Send Html Content
                  // Sending HTML content with an image tag referencing the image file
      const htmlContent = `
      <html>
        <body>
          <h1>Hello, this is text</h1>
          <img src="data:image/png;base64,${Buffer.from(imageData).toString('base64')}"/>
        </body>
      </html>
    `;
    res.end(htmlContent);





            // Send file only ----
            //res.end(imageData);
        }
    });

});

// Start the server
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

