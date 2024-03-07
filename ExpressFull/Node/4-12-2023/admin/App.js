require('dotenv').config();
const grpc = require('@grpc/grpc-js');
const CustomerService = require('./grpc/services');
const CustomerController = require('./controllers/customerController');


const server = new grpc.Server();
server.addService(CustomerService.service, CustomerController);

server.bindAsync('[::]:' + process.env.PORT, grpc.ServerCredentials.createInsecure(), () => {
    console.log(`Server running at http://0.0.0.0:${process.env.PORT} on ${process.env.NODE_ENV}`);
    server.start();
});