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

const clients = {};

// This code generates unique userid for everyuser.
const getUniqueID = () => {
  const s4 = () =>
    Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  return s4() + s4() + "-" + s4();
};

ws.on("connection", function (socket) {
  var userID = getUniqueID();
  clients[userID] = socket;
  
  console.log(
    "connected: " + userID + " in " + Object.getOwnPropertyNames(clients)
  );

  socket.on("message", function (data, isBinary) {
    const message = JSON.parse(isBinary ? data : data.toString());
    if (message?.type === "message") {
      console.log(`Received Message '${message.msg}' from ${message.user}`);

      // broadcasting message to all connected clients
      for (key in clients) {
        clients[key].send(JSON.stringify(message));
      }

      console.log(`Broadcasted message to ${Object.keys(clients).length} user(s).`);
    } else {
        console.log(`INCOMPATIBLE MESSAGE (type: ${typeof message})`);
        console.log(message);
    }
  });
});
