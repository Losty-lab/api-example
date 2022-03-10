const express=require('express');
const route=require('./Route/index')
const path=require('path')

const app=express()

route(app)

app.listen(3030)