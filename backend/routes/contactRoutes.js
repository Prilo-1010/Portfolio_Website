const express = require('express');
const {newClient} = require('../controllers/contactController')
const router = express.Router();

// @route  POST 
router.route('/').post(newClient);

module.exports = router