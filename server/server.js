const express=require('express');
const server=express();
const bodyParser = require('body-parser');
const clientRoute=require("./routes/clientdata");
const employeeRoute=require("./routes/employee");
const loginRoute =require("./routes/login");

server.use(bodyParser.urlencoded({ extended: false }))
server.use(bodyParser.json());


server.use("/login",loginRoute);
server.use("/client",clientRoute);
server.use("/employee",employeeRoute);
server.use(express.static('./static'))
const port = process.env.PORT || 5000;

server.listen(process.env.PORT || 5000,'0.0.0.0', () => {console.log(`server is listening at port ${port}`)});""