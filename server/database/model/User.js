const mongoose=require('mongoose');
const {Schema}=mongoose;
const bcrypt=require('bcrypt')


const UserSchema=new Schema({
    email:{
        type:String,
        validate:{
                validator:(email)=>email.length>6,
                message:'An email have to be longer than 6 characters'
        },
        required:[true,'An email is required']
    },
    password:{
        type:String,
        required:[true, 'A password is required']
    },
    active:{
        type:Boolean,
        default:false
    }
})

UserSchema.methods.comparePassword=function(password, next){

    const user=this
        

        bcrypt.compare(password, user.password, function(err,result){

            
            if(err){
                return next(err)

            }
            if(!result){
                return next(null,false)
            }

            return next(null,result)
        })

}

UserSchema.pre('save', function(next){
     
    const user=this;

    bcrypt.genSalt(8, function(err,salt){


        if(err){
            return next(err)
        }

        bcrypt.hash(user.password, salt, function(err,hash){

            if(err){
                return next(err)
            }

            user.password=hash

            next()
        })
    })
 })


const User=mongoose.model('users',UserSchema);


module.exports=User;