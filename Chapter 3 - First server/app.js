const http = require("http");
const PORT = 3000;

const server = http.createServer((req, res) => {
  console.log("Request made", req);
});

server.listen(PORT, () => {
  console.log(`Server is listening on port http://localhost:${PORT}`);
});
