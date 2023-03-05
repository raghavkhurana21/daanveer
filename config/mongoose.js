const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://raghav:raghav@1234@cluster0.oe3ld4v.mongodb.net/?retryWrites=true&w=majority');

const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to MongoDB"));


db.once('open', function(){
    console.log('Connected to Database :: MongoDB');
});


module.exports = db;