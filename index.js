const express=require('express');
const expressEjsLayouts = require('express-ejs-layouts');
const db=require('./config/mongoose');
const app=express();
const port=8000;
app.set('view engine','ejs');
app.set('views','./views');

app.use(expressEjsLayouts)

app.use('/',require('./routes'));
app.listen(port,function(err){
    if(err){
        console.log(`error ${err}`)
    }
    console.log(`server running on ${port}`)
})
//hj