const mongoose = require('mongoose');


// mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});
mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser:true,
   
});

const db = mongoose.connection

db.on('connected', function(){
    console.log(`Connected to MongoDB at ${db.host}:${db.port} that contains ${db.modelNames.length} things`)
})

module.exports = mongoose

