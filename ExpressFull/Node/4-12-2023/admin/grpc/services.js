const grpc = require('@grpc/grpc-js');
const CustomerPackageDefinition = require('./packageDefinition');

const CustomerService = grpc.loadPackageDefinition(CustomerPackageDefinition).CustomerService;

module.exports = CustomerService;