const app=require('./app')


if (process.env.NODE_ENV=== 'production '){

    console.log('TEEEEEEEEEEEEEEST',process.env)
    
app.use(express.static('client/build'))
    const path=require('path')

    app.get('*', (req,res)=>{
        res.sendFile(path.resolve(__dirname, '/client/build', 'index.html'))
    })
}else{
    console.log('IN ELSE',process.env)
}


const PORT=process.env.PORT || 3050

app.listen(PORT, ()=>{
    console.log('Running on port 3050')
})

