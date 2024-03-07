const sequelize = require('../config/database');
const Test = require('../db/models/test');


class customerRepository {
    static async createCustomer(body) {
        // const firstName = body.name;
        // const lastName = body.location;
        // const email = body.email;
        // console.log(firstName, lastName, email)
        try {
            console.log("body in repo", body);
            return await Test.create(
                // {
                //     firstName: firstName,
                //     lastName: lastName,
                //     email: email
                // }
                body
            );
        } catch (error) {
            console.log('catch error', error);
            throw new Error(error);
        }
    }
}

module.exports = customerRepository;