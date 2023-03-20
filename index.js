const express = require('express');
const https = require('https');
const fs = require('fs');

const app = express();

// Define your API endpoints here
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/api/users', (req, res) => {
  res.json([
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
    { id: 3, name: 'Bob' }
  ]);
});

// Set up the HTTPS server
const options = {
  key: fs.readFileSync('server.key'),
  cert: fs.readFileSync('server.cert')
};

const server = https.createServer(options, app);

// Start the server
server.listen(5000, () => {
  console.log('Server running on https://localhost:5000/');
});