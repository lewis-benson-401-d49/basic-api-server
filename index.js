'use strict';

const { SQLDb } = require('./src/models');


const server = require('./src/server');

SQLDb.sync()
  .then(() => {
    console.log('Connected');
  }).catch(err => console.error(err.message));
  
server.start();
