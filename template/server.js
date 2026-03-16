const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end('<body style="background:white;font-family:Arial;text-align:center;margin-top:40px;font-size:28px;">Welcome to Backstage SSP!</body>');
});

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);

});
