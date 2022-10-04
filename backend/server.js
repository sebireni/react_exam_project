const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
let rawData = fs.readFileSync('./data.json');
let data = JSON.parse(rawData);

const server = express();

server.use(express.json());

server.use(
  '/static',
  express.static(path.join('../', 'frontend', 'build', 'static'))
);

server.use(cors());

server.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/build/index.html'));
});

server.post('/registrations', (req, res) => {
  console.log(req.body);
  data.push(req.body);
  fs.writeFileSync('./data.json', JSON.stringify(data));
});

const port = 6789;
server.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
