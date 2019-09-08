const express = require('express');
const router = express.Router();
const eventsController = require('../controllers/events');

router.get('/events/new',isLoggedIn,eventsController.newEvent)
router.post('/events', isLoggedIn, eventsController.create)
router.get('/events/:id', isLoggedIn, eventsController.show)
router.delete('/events/:id', isLoggedIn, eventsController.delEv)
router.get('/events/:id/edit', isLoggedIn, eventsController.editEv)
router.put('/events/:id', isLoggedIn, eventsController.updateEv)

function isLoggedIn(req,res,next){
    console.log("Auth Check...")
    if(req.isAuthenticated() ) return next()
    res.redirect('/auth/google')
}

module.exports = router;  