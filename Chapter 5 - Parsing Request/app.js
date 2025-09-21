const http = require("http");
const requestHandler = require("./user");

const PORT = 3000;

const server = http.createServer(requestHandler);

server.listen(PORT, () => {
  console.log(`Server is listening on port http://localhost:${PORT}`);
});
