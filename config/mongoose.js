//require the library
const mongoose = require('mongoose');
//connect to database
mongoose.connect('mongodb://localhost/codeial_development');
//acquire the connection
const db = mongoose.connection;
//error
db.on('error',console.error.bind(console,"Error connecting to MongoDB"));
//up and running to print the message
db.once('open',function(){
    console.log('Connected to the database::MongoDB');
});
module.exports=db;