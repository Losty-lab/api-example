const jwt=require('jwt-simple');
const config=require('../config/config');
const User = require('../database/model/User');


module.exports=(req,res,next)=>{

    console.log('CONTROLLA TOKEN')

    var token;

    if(Object.keys(req.body).length===0){
       

    token=req.headers.authorization;
   

    }else{

        
        token=req.body.headers.authorization
       
        
    }
    
    try{

        var decoded=jwt.decode(token,config.secret)

        console.log('decoded',decoded)

        if(decoded.sub){

           
            User.findById(decoded.sub, function(err, existingUser){
               
                if(err){
                    return res.status(408).send({error:err})
                }
                if(!existingUser){
                  
                    return res.status(401).send({error:'Invalid token'})
                }
                
                    next()
            })
        
        }

    }catch(e){
        
        res.status(422).send({error:'Invalid token'})

    }

}