const API = require('../helpers/apiFormatter');
const client = require('../services/customerServices');

class CustomerController {
    static createCustomer(req, res) {
        console.log("testing customerController", req.body);
        client.createCustomer({ ...req.body }, (error, response) => {
            if (error) {
                return API._400(res, req, error.details);
            }
            return API._200(res, req, response, 'customer created successfully!!');

        });
    }


}

module.exports = CustomerController;