const keys=require('./config')

module.exports=(userId)=>{
    return `
    <html>
    <body>
    <div style="text-align-center">
    <h3>Click in order to confirm your email</h3>
    
    <a href="${keys.redirectDomain}/api/user/${userId}">Click here</a>
    </div>

    </body>

    </html>
    `
    
}