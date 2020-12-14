const User=require('../database/model/User')
const jwt=require('jwt-simple')
const config=require('../config/config')
const emailService=require('../services/emailService')
const emailSender=require('../services/emailSender')


function tokenForUser(user){

    var timestamp=new Date().getTime();
    return jwt.encode({sub:user.id, iat:timestamp}, config.secret)
    
}


module.exports={
    
    register(req,res){

        console.log('TEST REGISTER')

    if(!req.body.email || !req.body.password){
        return res.status(422).send({error:'You have to provide an email and password'})
    }



    User.findOne({email:req.body.email}, function(err,existingUser){

        if(err){
            return res.status(422).send({error:err})

        }
        if(existingUser){
            
            return res.status(408).send({error:'This email already exist'})
        }

        emailService(req.body.email).then(reeee=>{

            console.log('REEEEE',reeee)

        const user=new User({
            email:req.body.email,
            password:req.body.password
        })
   

      

        user.save().then(user=>{

            console.log('USERIIIID',user._id)

            emailSender(user._id,req.body.email)
            
            res.send({user:user})
        
        }).catch(error=>{

            console.log('ERRRRORRRRR',error)
            const message=error.message;
            res.status(400).send({error:message, user:user})
        })
        

    }).catch(error=>res.status(400).send({error:'This email is not valid'}))


    


})


    
      
  
     
    },

    

    login(req,res){

        console.log('LOGIN REQUEST',req.body)

        var email=req.body.email;
        var password=req.body.password;

        if(!req.body.email || !req.body.password){
            
            return res.status(422).send({error:'Please provide an email and password'})
            
        }

        User.findOne({email:email}, function(err,existingUser){
            
            if(err){
                
                return res.status(422).send({error:err})
            }
            if(!existingUser){
                return res.status(401).send({error:'Wrong email'})

            }

            existingUser.comparePassword(password, function(err,result){

                if(err){
                    return res.status(422).send({error:err})
                }
                if(!result){
                    return res.status(401).send({error:"Wrong password"})
                }
                res.send({token:tokenForUser(existingUser)})
                
            })
        })
    }
}

