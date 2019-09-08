const User = require('../models/user')
const Event = require('../models/event')
const moment = require("moment")
module.exports = {
  index,
}
function formatDate(item){
  fDate = moment(item.date).format('ddd MMM Do YYYY')
  item.date = fDate
  return item
}
function index(req,res){
  Event.find({})
.populate("createdBy")
.then(events =>{
  let formatedEvents = events.map(formatDate)
    res.render('index',{
        title:'Gone Go',
        user: req.user,
        events
      })
  })
}



