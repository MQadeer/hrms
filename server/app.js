const express=require('express');
const server=express();
const bodyParser = require('body-parser');


server.use(bodyParser.urlencoded({ extended: false }))
server.use(bodyParser.json());



server.use(express.static('./static'))
const port = process.env.PORT || 5000;

server.listen(process.env.PORT || 5000,'0.0.0.0', () => {console.log(`server is listening at port ${port}`)});