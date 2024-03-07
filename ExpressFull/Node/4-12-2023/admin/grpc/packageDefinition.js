const protoLoader = require('@grpc/proto-loader');
// const path = require('path');
const { CUSTOMER_PROTO_PATH } = require('./protoPath');


const options = {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true,
};

const protoDefinition = protoLoader.loadSync(CUSTOMER_PROTO_PATH, options);

module.exports = protoDefinition;