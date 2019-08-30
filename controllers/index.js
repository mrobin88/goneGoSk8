const User = require('../models/user')
const Event = require('../models/event')

module.exports = {
  index,
 
}

function index(req,res){
  Event.find({})
  .populate("createdBy")
  .then(events=> {
    console.log(events.date,events.time)
  })
  .then(events =>   
    res.render('index',{
        title:'Gone Go',
        user: req.user,
        events
      })
  )
}


