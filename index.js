const dotenv = require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');

const server = express();
const port = process.env.PORT || 9000;

server.use(cors());
server.use(express.json());
server.use(express.static(path.join(__dirname, 'client/build')));

server.use('/api/*', (_, res) => {
  res.json({ data: 'This is the API data' });
});

server.use('*', () => (_, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
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
