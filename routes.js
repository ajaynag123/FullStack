const fs = require("fs");


const requestHamdler = (req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.write("<html>");
    res.write(
      "<head><title>Enter Message</title><meta charset='UTF-8'></head>"
    );
    res.write(
      "<body><form action='/message' method='POST'><input type='text' name='message' ><button type='submit'>Submit</button></form></body>"
    );
    res.write("</html>");
    return res.end();
  }
  if (url === "/message" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    return req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody);
      const message = parsedBody.split("=")[0];
      fs.writeFile("message.txt", message, err => {
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      });

    });


  }
  res.setHeader("Content-type", "text/html");
  res.write("<html>");
  res.write("<head><title>My first Page</title></head>");
  res.write("<body><p>Amrutha Varshini</p></body>");
  res.write("</html>");
  res.end();

}

module.exports = {
  handler: requestHamdler,
  someText: 'Some hard coded text'
}