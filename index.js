const express=require('express');

const app=express();

const port=8000;


//use express router

app.use('/',require('./routes'));

app.listen(port,function(err){
    if(err){
        console.log("error occured while running on the port ",err);
    }
    console.log("The server is running on the port",port);
});