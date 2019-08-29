const express = require('express');
const router = express.Router();
const spotsController = require('../controllers/spots');


router.post('/events', isLoggedIn, spotsController.createSpotReview)
router.delete('/events/:id', isLoggedIn, spotsController.DelSpotReview)

function isLoggedIn(req,res,next){
    if(req.isAuthenticated() ) return next()
    res.redirect('/auth/google')
}

module.exports = router;