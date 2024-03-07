// const grpc = require('@grpc/grpc-js');
// const protoLoader = require('@grpc/proto-loader');
// const CUSTOMER_PROTO_PATH = '../__proto__/customer.proto';
const path = require('path');
const CUSTOMER_PROTO_PATH = path.resolve(__dirname, '../__proto__/customer.proto');



module.exports = { CUSTOMER_PROTO_PATH };