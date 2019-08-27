const Event = require('../models/event')


module.exports = {
  newEvent,
  create
}

//shows the form page for new event
function newEvent(req, res){

  res.render('events/new',
  {user: req.user})
}

//saves event to the database
function create(req, res) {
  console.log(req.body)
  const event = new Event(req.body)
  event.save(function (err) {
    //if errors rerender try again....
    if (err) return res.render('events/new')
    //redirects to main flights page.
    res.redirect('/')
  })
}

