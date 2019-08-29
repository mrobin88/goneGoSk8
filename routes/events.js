const express = require('express');
const router = express.Router();
const eventsController = require('../controllers/events');

router.get('/events/new',eventsController.newEvent)
router.post('/events', eventsController.create)
router.get('/events/:id', eventsController.show)
router.delete('/events/:id', eventsController.delEv)
router.get('/events/:id/edit', eventsController.editEv)
router.patch('/events/:id', eventsController.updateEv)


module.exports = router;