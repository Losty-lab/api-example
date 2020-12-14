const nodemailer=require('nodemailer');
const emailExistence=require('email-existence')
const Verifier=require('email-verifier')
const secret=require('./api_verifier')



module.exports=(email)=>{

  

let verifier=new Verifier(secret.apiEmailVerifier)

return new Promise((resolve,reject)=>verifier.verify(email, function(error,response){
    if(error){
        console.log('email existance',error)
        reject(false)

        //return false
    }else{
        if(response.smtpCheck==='true' && response.disposableCheck==='false'){
            
           resolve(true)
        }else{
            console.log('last else error')
            reject(false)
            //return false
        }
    }

}))
//return promise

}