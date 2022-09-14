# Fullstack Real-time Chat Application (using WebSocket)

This fullstack application contains both a frontend using React (in the `client` subfolder of the repository) and a backend using both `express` and the `ws` npm packages.

The backend serves the frontend build files (in `client/build`) and the websocket endpoint logic simultaneously and on the same port (3000 by default, but can be changed using the `PORT` env variable).

## Install the dependencies

In order to install the dependencies of both the frontend and the backend we need to type the following commands from the root of the respository:

```bash
npm i
cd ./client && npm i
```

## Build the frontend

To build the React frontend before running the fullstack application, run the following command from the root of the repository:

```bash
npm run build
```

This will generate the dependencies of the client (i.e. frontend) React application at `client/node_modules`.

## Run the application

To run the application in production, run the followint command from the root of the respository:

```
npm start
```

This will launch the application at port `3000`.

### More details

The application that runs with the above command is made up of two logical parts:

- A WebSocket backend serving a WbeSocket endpoint at port `3000``
- An HTTP webserver serving the frontend, also at port `3000` 

## Deploy on Glitch

To deploy on Glitch, please checkout the `build` branch. This branch contains the built bundles of the frontend application, but without the source code (check issue #1 for more information).

### Generate and push the `build` branch to GitHub and Glitch

Assuming the existence of two remotes: `origin` and `glitch` for GitHub and your Glitch project, respectively, one can use the following commands:

```bash
# Delete old and create a new build branch
git branch -D build
git branch -b build
# Remove client subfolder from branch while leaving the files
# in the working tree
git rm --cached -r client
# Generate bundles of frontend application
npm run build
# Add freshly created bundles to branch and commit
git add -f client/build
git commit -m 'Added built bundles of frontend and deleted sources'
# Delete untracked files (sources in client subfolder)
git clean -fd
# Push to glitch and to github (advisable to delete remote branches first)
git push -u glitch build
git push origin build
```
