
const Ingredient=require('../database/model/Ingredient');


module.exports={

    insert(req,res){

        console.log('REQ.BODY INGREDIENT',req.body)

        var lett=req.body.body;

        Ingredient.findOne({name:lett}, function(err,existingIngredient){

            if(err){

                return res.status(408).send({error:err})
            }
            if(existingIngredient){

                return res.status(422).send({error:'This ingredient already exist'})
            }

            const ingredient=new Ingredient({
                name:lett
            })
            ingredient.save().then(()=>Ingredient.find({}))
            .then((response)=>res.send({ingredients:response}))
            
        })
    },


    reading(req,res){

        console.log('READING INGREDIENTS')

        Ingredient.find({})
        .sort({name:1})
        .then(result=>{
            if(result.length===0){
                return res.status(404).send({error:'There is not any result'})
            }
            res.send({result:result})
        })
        .catch(err=>res.status(422).send({error:err}))
        
    },


    delete(req,res){

        console.log('req delete',req.params)

        deleteIngredientId=req.params.id;

        Ingredient.findByIdAndDelete(deleteIngredientId, function(err,result){

            if(err){
                return res.status(408).send({error:err})
            }
            if(!result){
                return res.status(404).send({deletedIngredient:'This ingredient does not exist'})
            }
            console.log('EXIT FROM EVERYTHNG')
            res.send({deletedIngredient:result})

        })

    },


    update(req,res){

        console.log('REQ UPDATE',req.params)
        console.log('REQ BODY UPDATE',req.body.body)

        ingredientIdToUpdate=req.params.id;
        ingredientUpdated=req.body.body

        Ingredient.findOne({name:ingredientUpdated}, function(err,result){

            if(err){
                return res.status(408).send({error:err})
            }

            if(result){

                return res.status(404).send({error:'This ingredient already exist'})
            }

            Ingredient.findByIdAndUpdate(ingredientIdToUpdate, {name:ingredientUpdated}, function(err,updatedIngredient){

                if(err){
                    return res.status(408).send({error:err})
                }
                if(!updatedIngredient){
                    return res.status(404).send({error:'There is not any ingredient to update'})
                }
    
                res.send({updatedIngredient:updatedIngredient})
        })
        })
    }
}