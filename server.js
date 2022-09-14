const path = require("path");
const express = require("express");
const app = express();
const http = require("http").createServer(app);
const ws = new (require("ws").WebSocketServer)({ server: http });

app.use(express.static(path.join(__dirname, "./client/build")));

http.listen(process.env.PORT || 3000, function () {
  var host = http.address().address;
  var port = http.address().port;
  console.log("App listening at http://%s:%s", host, port);
});

ws.on("connection", function (socket) {
  console.log("Client connected to the WebSocket");

  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });

  socket.on("message", function (msg) {
    console.log("Received a chat message");
    ws.emit("chat message", msg);
  });
});