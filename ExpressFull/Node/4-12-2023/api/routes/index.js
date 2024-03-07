const express = require('express');
const router = express.Router();

router.get('/status', (req, res) => {
    console.log('API status', req.body);
    res.send('Server running');
});


router.use('/customer', require('./customer'));
console.log('message passed');

module.exports = router;