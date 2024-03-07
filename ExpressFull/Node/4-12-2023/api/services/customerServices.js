const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
// const PROTO_PATH = require('../__proto__/customer.proto');
const path = require('path');
const CUSTOMER_PROTO_PATH = path.resolve(__dirname, '../__proto__/customer.proto');

const options = {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true,
};

const packageDefinition = protoLoader.loadSync(CUSTOMER_PROTO_PATH, options);

const CustomerService = grpc.loadPackageDefinition(packageDefinition).CustomerService;

const client = new CustomerService(
    process.env.ADMIN_SERVICE_HOST + ':' + process.env.ADMIN_SERVICE_PORT,
    grpc.credentials.createInsecure()
);

module.exports = client;