const additionHandler = (req, res) => {
  console.log("In Sum Request Handler", req.url);

  const body = [];
  req.on("data", (chunk) => body.push(chunk));

  req.on("end", () => {
    const full = Buffer.concat(body).toString();
    const params = new URLSearchParams(full);
    const bodyObj = Object.fromEntries(params);
    const result = Number(bodyObj.num1) + Number(bodyObj.num2);
    console.log(result);
    res.setHeader("Content-Type", "text/html");

  res.write(
    `<html>     <head> <title>Calculator</title></head> <body> <h1>Sum is: ${result}</h1> </body></html>`,
  );

  return res.end();
  });
};

exports.additionHandler = additionHandler;
