const express=require('express');
const route=require('./server/route/index')
const bodyParser=require('body-parser');
const mongoose=require('mongoose')


if(process.env.NODE_ENV!=='test '){

    mongoose.connect('mongodb://localhost/paste')
    
}

const app=express();

app.use(bodyParser.json())

route(app)


module.exports=app