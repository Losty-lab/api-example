const nodemailer=require('nodemailer');
const emailTemplate=require('./emailTemplate')

module.exports=(userId,email)=>{

    console.log('USERID',userId)

    var transporter=nodemailer.createTransport({
        service:'gmail',
        auth:{
            user:'dariolostumbo@gmail.com',
            pass:'Milano20%'
        }
    });




    var mailOptions={
        from:'dariolostumbo@gmail.com',
        to:`${email}`,
        subject:'Sending email with nodemailer',
        //text:'It is very easy'
        html:emailTemplate(userId)
    }


    transporter.sendMail(mailOptions, function(error,info){
        if(error){  
            
            console.log('ERRRRR',error)
            return error
            
        }else{
           
            return true
            
        }
    })

}