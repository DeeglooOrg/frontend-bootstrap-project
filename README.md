# Installation

To install packages run `npm install` from root of the project.

# Development

Run `npm start` to start the project. It will be automatically open in your browser at http://localhost:8080/.

# Build

Run `npm run build`. This command will create index.html and bundle.min.js in the dist folder -> _./application/dist/_

# Host

Run `npm run host`. This command will start `npm run build` script and it will use `server.js` to host build files (dist folder). Navigate to http://localhost:3000/.

# Notes
  - if tests for React components do not work -> check compatibility of React and Enzyme adapter defined in the setupTests.ts file 
    - E.g. React version: **^16.4.0-0** -> Enzyme version: enzyme-adapter-react-**16**
