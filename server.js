const http = require('http');
const app = require('./app');
require('dotenv').config();
const server = http.createServer(app);

server.listen(9000, ()=>{console.log('server started at 9000')})

