const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');

require('dotenv').config({ path: '.env' });

const createServer = require('./createServer.js');
const db = require('./db');
const server = createServer();

server.express.use(cookieParser());

server.start(
  {
    cors: {
      credentials: true,
      origin: process.env.CLIENT_URL,
    },
  },
  details => {
    console.log(`Server is now running on port http://localhost:${details.port}`);
  }
);
