const http = require('http');

const server = http.createServer((req, res) => {
  console.log(req);
    if(req.url === '/') {
      res.setHeader('Content-Type','text/html');
      res.write('<html>');
      res.write('<head><title>Complete Coding</title></head>')
      res.write('<body> <h1>Enter Your Details:</h1>');

      res.write('<form>')
      res.write('<input type="text" name="username" placeholder="Enter your name"> <br> ')

      res.write('/form')
      res.write('</body>')
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

