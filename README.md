# Fullstack Real-time Chat Application (using WebSocket)

This fullstack application contains both a frontend using React (in the `client` subfolder in the repository) and a backend using both `express` and `ws`. The backend servs both the frontend build files (in `client/build`) and the websocket endpoint logic on the same port (3000 by default but can be changed using the `PORT` env variable).

## Install the dependencies

In order to install the dependencies of both the frontend and the backend we need to type the following commands:

```bash
npm i
cd ./client && npm i
```

Note that the second line is equivalent to 
