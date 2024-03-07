const customerRepository = require('../repository/customerRepository');

const CustomerController = {
    createCustomer: async (call, callback) => {
        try {
            let body = call.request;
            console.log("customerController body", body);
            let result = await customerRepository.createCustomer(body);
            callback(null, { ...result.dataValues });
        } catch (error) {
            callback(error);
        }
    }
}

module.exports = CustomerController;