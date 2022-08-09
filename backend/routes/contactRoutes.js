const express = require('express');
const {newClient, getClients} = require('../controllers/contactController')
const router = express.Router();

// @route  POST 
router.route('/').post(newClient);

router.route('/').get(getClients)

module.exports = router