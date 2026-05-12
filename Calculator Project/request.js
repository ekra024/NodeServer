const { additionHandler } = require("./addtion");

const incomingRequest = (req, res) => {
    console.log(req.url, req.method);
    if(req.url === '/') {
      res.setHeader('Content-Type', 'text/html');
      res.write('<html> <head> <title>Calculator</title></head> <body> <h1>Welcome to the calculator page</h1> <br> <a href="/calculator">Calculator</a> </body></html> ')

      return res.end();
    }
    else if(req.url.toLowerCase() === '/calculator') {
      res.setHeader('Content-Type', 'text/html');
      res.write('<html><head><title>Calculator</title></head><body><form action="/calculate-result" method="POST"><input type="number" name="num1" placeholder="Enter First Number"><br><input type="number" name="num2" placeholder="Enter Last Number"><br><input type="submit" value="Sum"></form></body></html>')
      return res.end();
    }
    else if(req.url.toLowerCase() === '/calculate-result' && req.method =="POST") {
      
      additionHandler(req, res);

    } 


}

module.exports = incomingRequest;