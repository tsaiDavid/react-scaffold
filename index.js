/**
 * index.js is just a file to bootstrap server.jsx so we can use ES6 / JSX
 */

'use strict';

require('babel/register')({});

var server = require('./server');

const PORT = process.env.PORT || 3000;

server.listen(PORT, function() {
  console.log('Server listening on', PORT);
});
