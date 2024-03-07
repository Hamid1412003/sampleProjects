const errors = require('../helpers/otpErrors.json');
const success = require('../helpers/otpSuccess.json');

class ApiFormatter {
    // success response
    static _200(res, req, data, message) {
        const successMessage = success[message];
        res.status(200).send({ success: true, message: (successMessage) || message, data });
    }

    // error response

    static _400(res, req, message) {
        const errorMessage = errors[message];
        res.status(400).send({ error: true, message: (errorMessage) || message });
    }

    // authorization error response

    static _401(res, req, message, session = false) {
        const errorMessage = errors[message];
        res.status(401).send({ error: true, message: (errorMessage) || message, session });
    }

    // validation error message

    static _422(res, data, message) {
        console.log('data: ', data);
        res.status(422).send({ error: true, message, data });
    }
}

module.exports = ApiFormatter;