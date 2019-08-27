const express = require('express');
const router = express.Router();
const eventsController = require('../controllers/events');
const indexController = require('../controllers/index')

/* GET home page. */
router.get('/', indexController.index);

router.get('/events/new',eventsController.newEvent)
router.post('/events', eventsController.create)

module.exports = router;