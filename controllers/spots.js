const Spot = require('../models/spot')


module.exports = {
  newEvent,
  create,
  show,
  delEv,
  editEv,
  updateEv
}

//shows the form page for new event
function newEvent(req, res){
  res.render('events/new',
  {user: req.user,
  id_:null})
}

//saves event to the database
function create(req, res) {
console.log("hit create!")
console.log(req.body)
  const event = new Event(req.body)
  event.save(function (err) {
    //if errors rerender try again....
    if (err) return res.render('events/new')
    //redirects to main page.
    console.log("main shit bitch fuck you")
    res.redirect('/')
  })
}

// function show(req, res) {

//   Flight.findById(req.params.id, function (err, flight) {
//     Ticket.find({flight: flight._id},function(err, tickets){
//       res.render('flights/show', { airline: 'Flight Details', flight, tickets});
//     });
//   });
// }
function show(req, res) {
  Event.findById(req.params.id)
  .then(event => {
    console.log(event)
    res.render('events/show',{
      event,
      user: req.user
    })
})
}

function delEv(req, res) {
console.log(req.params.id)
  Event.findByIdAndDelete( {"_id" : req.params.id})
  .then(event=> {
    console.log(event)
    res.redirect("/")
  }
)
}
//get edit page
function editEv(req, res){
  console.log("EDIT BUTTON HIT")
  console.log(req.body)
  Event.findByIdAndUpdate(req.params.id, req.body,{new: true}, (err, doc)=> {
    if (err) {
        console.log("Something wrong when updating data!");
    }
    console.log(doc);
}).then(event=>{
    res.render('events/edit',{
      event,
      user: req.user
    })
  })
}
//post edit 
function updateEv(req,res){
  Event.findByIdAndUpdate(req.params.id, req.body)
  .then(event=>{
    res.redirect('/')
  })
}


  