const express=require('express');

const app=express();

const port=8000;

const db=require('./config/mongoose');

app.use(express.static('./assets'));
//extract style and scripts from sub pages into the layouts
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);



const expressLayouts=require('express-ejs-layouts');

app.use(expressLayouts);
//use express router

app.use('/',require('./routes'));
//setup view engine
app.set('view engine','ejs');

app.set('views','./views');

app.listen(port,function(err){
    if(err){
        console.log("error occured while running on the port ",err);
    }
    console.log("The server is running on the port",port);
});