const http = require('http');
const incomingRequest = require('./request');

const server = http.createServer(incomingRequest);

const PORT = 3002;
server.listen(PORT, () => {
  console.log(`Server is running port http://localhost:${PORT}`);
})