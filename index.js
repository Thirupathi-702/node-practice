const express=require('express');
const bodyParser=require('body-parser')
const expressEjsLayouts = require('express-ejs-layouts');
const cookieParser=require('cookie-parser')
const db=require('./config/mongoose');
const app=express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const port=8000;
app.set('view engine','ejs');
app.set('views','./views');
app.use(cookieParser())
app.use(expressEjsLayouts)

app.use('/',require('./routes'));
app.listen(port,function(err){
    if(err){
        console.log(`error ${err}`)
    }
    console.log(`server running on ${port}`)
})
//hj