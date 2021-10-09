const dotenv = require('dotenv').config();
const express = require('express');
const cors = require('cors');

const server = express();
const port = process.env.PORT || 9000;

server.use(cors());
server.use(express.json());

server.use('/api/*', (_, res) => {
  res.json({ data: 'This is the API data' });
});

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// console.log("It's aliveee");
// console.log(__dirname);
// console.log(__filename);
// console.log(process.env.USERNAME);
// console.log(process.env.PORT);
// console.log(process.env.DB_PASS);
