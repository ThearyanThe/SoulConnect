const http = require("http");
const express = require("express");

//!server
const app = express();
const server = http.createServer(app);
//start the server
const PORT = process.env.PORT || 7766;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
