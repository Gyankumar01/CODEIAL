const mongoose = require('mongoose');

mongoose.connect('mongodb://0.0.0.0/codial_database');

const db=mongoose.connection;

db.on('error',console.error.bind(console,"Error connection to database"));

db.once('open',function(){
    console.log('Connected to database');
});

module.exports=db;