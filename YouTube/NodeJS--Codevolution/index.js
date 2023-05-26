const http = require('node:http');

const server = http.createServer((req, res) => {
  const superHero = {
    'name': 'Ajay',
    'last': 'Nag'
  }
  res.writeHead(200, { 'Content-type': 'text/plain' });
  res.end(JSON.stringify(superHero));
})

server.listen(3000, () => {
  console.log('Server listening');
})