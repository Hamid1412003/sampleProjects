const express = require('express');
const router = express.Router();
const CustomerController = require('../controllers/customerController');

router.post('/createCustomer', CustomerController.createCustomer);



module.exports = router;