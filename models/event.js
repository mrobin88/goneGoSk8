const mongoose = require('mongoose')
const Schema = mongoose.Schema

const eventSchema = new Schema({
  createdBy: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  date: Date,
  time: String,
  spot: String,
  discription: String,
  going:[{
    type: Schema.Types.ObjectId,
    ref: 'User'
    }]
    },
    {
      timestamps: true
});

module.exports = mongoose.model('Event', eventSchema);
// var User = mongoose.model('User',userSchema)
