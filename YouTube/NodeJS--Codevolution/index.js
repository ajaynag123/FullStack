const http = require('node:http');
const fs = require('node:fs')

const server = http.createServer((req, res) => {
  const person = { name: 'ajay', age: 45 }
  if (req.url === '/') {
    res.writeHead(200, { "Content-type": 'text/plain' });
    res.end('Home page')
  }
  else if (req.url === '/about') {
    res.writeHead(200, { "Content-type": 'text/plain' });
    res.end('About page')
  } else if (req.url === '/api') {
    res.writeHead(200, { 'Content-type': 'text/plain' });
    res.end(JSON.stringify(person))
  } else {
    res.writeHead(404)
    res.end('Page not found');
  }
})

server.listen(3000, () => {
  console.log('Server listening');
})