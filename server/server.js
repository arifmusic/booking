const path = require("path");
const express = require("express");
const db = require("./db");
const compression = require('compression');
const bodyParser = require('body-parser');
const cors = require('cors');

const routes = require('./routes');

async function startServer(port) {
  const app = express();

  app.use(cors());
  app.use(compression());
  app.use(bodyParser.json());

  app.use(express.static(path.resolve(__dirname, "../dist")));

  app.use('/api', routes);
  app.get("/*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../dist/index.html"));
  });

  app.use((err, req, res, _next) => {
    console.error(`${err.stack}\n`);
    res.status(500).json({ error: "Internal server error." });
  });

  const mode = process.env.NODE_ENV ? process.env.NODE_ENV : "development";
  const defaultPort = 3000; //env
  const actualPort = port || process.env.PORT || defaultPort;

  const server = await createServer(app, actualPort, mode);
  return server;
}

async function createServer(app, port, mode) {
  return new Promise(resolve => {
    const server = app.listen(port, () => {
      console.log(
        `Boking app server is running on port ${port} (mode: ${mode})`
      );
      resolve(server);
    });
  });
}

module.exports = startServer;
