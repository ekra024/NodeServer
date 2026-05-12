const http = require('http');

const server = http.createServer((req, res) => {
  console.log(req);
    if(req.url === '/') {
      res.write('<html>');
      res.write('<head><title>Complete Coding</title></head>')
      res.write('<body> <h1>Welcome to home Page </h1> </body>')
      res.write('</html>');
      return res.end();
    }
    else if(req.url === '/products') {
      res.write('<html>');
      res.write('<head><title>Complete Coding</title></head>')
      res.write('<body> <h1>Checkoutt our products </h1> </body>')
      res.write('</html>');
      return res.end();
    }
    else {
       res.write('<html>');
      res.write('<head><title>Complete Coding</title></head>')
      res.write('<body> <h1>Error Page </h1> </body>')
      res.write('</html>');
      return res.end();
    }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`)
})

