const Spot = require('../models/spot')

module.exports = {
  createSpotReview,
  DelSpotReview
}
//saves spot review to the database
function createSpotReview(req, res) {
console.log("hit create!")
console.log(req.body)
  const spot = new Spot(req.body)
  spot.save(function (err) {
    //if errors rerender try again....
    if (err) return res.render('events/new')
    //redirects to main page.
    res.redirect('/events/:id')
  })
}

function DelSpotReview(req, res) {
console.log(req.params.id)
  spot.findByIdAndDelete( {"_id" : req.params.id})
  .then(spot=> {
    console.log(event)
    res.redirect("/")
  }
)
}
