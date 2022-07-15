const express = require('express')
const router = express.Router()
const { getProject, getProjects} = require('../controllers/portfolioControllers')


router.get('/', getProjects )
router.get('/:id', getProject )

module.exports = router