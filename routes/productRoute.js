const express = require('express');
const { getallproducts } = require('../controller/getallproducts.con');

const router = express.Router();


router.route('/').get(getallproducts);

module.exports = router;