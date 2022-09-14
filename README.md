# Fullstack Real-time Chat Application (using WebSocket)

This fullstack application contains both a frontend using React (in the `client` subfolder of the repository) and a backend using both `express` and the `ws` npm packages.

The backend serves the frontend build files (in `client/build`) and the websocket endpoint logic simultaneously and on the same port (3000 by default, but can be changed using the `PORT` env variable).

## Install the dependencies

In order to install the dependencies of both the frontend and the backend we need to type the following commands from the root of the respository:

```bash
npm i
cd ./client && npm i
```

## Running the application

To run the application in production, one must type `npm start` from the root of the respository, which will build the frontend and launch the backend at port `3000`.

## Developing the client (i.e. frontend)

To develop the React frontend application, `cd` into the `client` subfolder and launch the development server using `npm start`.
