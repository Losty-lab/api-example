const mongoose=require('mongoose');
const {Schema}=mongoose;
const Cake=require('./Cake')


const IngredientSchema=new Schema({
    name:{
        type:String
    }

})

IngredientSchema.pre('findOneAndDelete',function(next){
    
    const Cake=mongoose.model('cakes');
    const SalesPriceList=mongoose.model('salepricelists')

    Ingredient.findById(this._conditions._id, {name:true})
    .then(response=>{
        var ingredient=[response.name]
        var cakes;
        
        Cake.find({ingredients:{$in:ingredient}},{_id:true}).then(response=>{
            

            if(response.length!==0){
                
                cakes=response.map(res=>res._id)

         
            SalesPriceList.deleteMany({cakeId:{$in:cakes}}).then((response)=>{
                
                Cake.deleteMany({_id:{$in:cakes}}).then(response=>{
                    
                    next()
                })
                
                   
            })
        }else{
          

            next()
        }
        })
       
    })
    

})




IngredientSchema.pre('findOneAndUpdate', async function(){
    
    var updated=this._update.name

    
    console.log('thissssssssssssssssssssssssssssssssss',this._update.name)
    const Cake=mongoose.model('cakes');

    Ingredient.findById(this._conditions._id, {name:true})
    .then(response=>{
       
        var ingredient=[response.name];
        
        Cake.find({ingredients:{$in:ingredient}})
        .then(response=>{
            
            if(response.length!==0){
                
                
                var cake=response.map(res=>res.name)
               
                Cake.updateMany({name:{$in:cake}, ingredients:{$in:ingredient}},  {$set:{"ingredients.$":updated}}).then(response=>{
                    console.log('RESPONSE MANY',response)
                
                })
            }
        })
    })

    
})

const Ingredient=mongoose.model('ingredients',IngredientSchema);

module.exports=Ingredient;