// setup requires
const express = require('express');
const cors = require('cors');
const server = express();

// setup uses
server.use(cors());
server.use(express.json());

// setup routes
const postRoutes = require('./routes/posts');
server.use('/posts', postRoutes);


// send message on post 3000 upon successfull server running
server.get('/', (req, res) => res.send('Welcome to the anonymous blog!'));

// export the express server
module.exports = server;
