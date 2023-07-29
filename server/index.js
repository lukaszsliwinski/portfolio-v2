// required dependencies
const path = require('path');
const express = require('express');
const app = express();

// dotenv package
require('dotenv').config();

// port number
const PORT = process.env.PORT || 3000;

// middleware
app.use(express.static('public'));
app.use(express.static(path.resolve(__dirname, '../client/build')));

// render react app
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

// run server
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}\nenv: ${process.env.NODE_ENV}`);
});
