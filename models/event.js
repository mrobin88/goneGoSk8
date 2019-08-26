const mongoose = require('mongoose')
const Schema = mongoose.Schema

const eventSchema = new Schema({

  time: Date,
  spot: String,
  going: [userSchema],
  discription: String
},
{
    timestamps: true
});

module.exports = mongoose.model('Event', userSchema);