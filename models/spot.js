const mongoose = require('mongoose')
const Schema = mongoose.Schema

const spotSchema = new Schema({
  name: String,
  adress: String,
  going: [userSchema],
  discription: String
},
{
    timestamps: true
});

module.exports = mongoose.model('Spot', stopSchema);