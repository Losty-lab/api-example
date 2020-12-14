
if (process.env.NODE_ENV==='production'){

    console.log('process if',process.env.NODE_ENV)
    module.exports=require('./prod')
}else{
    console.log('process else',process.env.NODE_ENV)
    module.exports=require('./dev')
}