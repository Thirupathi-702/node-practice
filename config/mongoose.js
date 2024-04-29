const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/codial_development');

const db=mongoose.connection;

db.on('error',console.error.bind(console,"error connecting to mnogoDB"));

db.once('open',function(){
    console.log("connected to Database :: MongoDB");


});

module.exports=db;