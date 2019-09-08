const mongoose = require('mongoose')
const Schema = mongoose.Schema

const spotSchema = new Schema({
  name: String, /*how do I referance the spot name*/
  adress: String,
  rating:{   
    type: Number,
    enum: [1,2,3,4,5]
  },
  comment: String
},
{
    timestamps: true
});

module.exports = mongoose.model('Spot', stopSchema);