const http = require('http')

const server = http.createServer((req, res) => {
  if(req.url === '/') {
    res.write('<html>');
    res.write('<head>');
    res.write('<title> Myntra </title>');
    res.write('</head>');

    res.write('<body>');
    res.write('Welcome to Home <br>')
    res.write('<a href="/">Home</a> <br>');
    res.write('<a href="/men">Men</a> <br>');
    res.write('<a href="/women">Women</a> <br>');
    res.write('<a href="/kids">Kids</a> <br>');
    res.write('<a href="/cart">Cart</a> <br>');
    res.write('</body>');
    res.write('</html>');
    return res.end();
  }
  else if(req.url === "/men") {
    res.write('<html>');
    res.write('<head>');
    res.write('<title> Myntra </title>');
    res.write('</head>');

    res.write('<body>');
    res.write('Welcome to Men Page')
    res.write('</body>');
    res.write('</html>');
    return res.end();
  }
  else if(req.url === "/women") {
    res.write('<html>');
    res.write('<head>');
    res.write('<title> Myntra </title>');
    res.write('</head>');

    res.write('<body>');
    res.write('Welcome to Women Page')
    res.write('</body>');
    res.write('</html>');
    return res.end();
  } 
  else if(req.url === "/kids") {
    res.write('<html>');
    res.write('<head>');
    res.write('<title> Myntra </title>');
    res.write('</head>');

    res.write('<body>');
    res.write('Welcome to Kids Page')
    res.write('</body>');
    res.write('</html>');
    return res.end();
  } 
  else if(req.url === "/cart") {
    res.write('<html>');
    res.write('<head>');
    res.write('<title> Myntra </title>');
    res.write('</head>');

    res.write('<body>');
    res.write('Welcome to Cart Page')
    res.write('</body>');
    res.write('</html>');
    return res.end();
  }
  res.write('<html>');
    res.write('<head>');
    res.write('<title> Myntra </title>');
    res.write('</head>');

    res.write('<body>');
    res.write('Error 404 Page')
    res.write('</body>');
    res.write('</html>');
    return res.end();

})

const PORT = 3002;
server.listen(PORT,() => {
  console.log(`Server running on port http://localhost:${PORT}`)
})