const keys=require('./config')

module.exports=(userId)=>{
    return `
    <html>
    <body>
    <div style="text-align-center">
    <h3>Click in order to confirm your email</h3>
    
    <a href="http://localhost:3000/api/user/${userId}">Click here</a>
    </div>

    </body>

    </html>
    `
    
}