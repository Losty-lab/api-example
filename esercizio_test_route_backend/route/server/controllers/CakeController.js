const Cake=require('../database/model/Cake')


module.exports={

    insert(req,res){

        console.log('test',req.body)


        Cake.findOne({name:req.body.body.name}, function(err,existingCake){

            if(err){

                return res.status(408).send({error:err})
            }
            if(existingCake){
                return res.status(422).send({result:'This cake already exist'})
            }

            const cake=new Cake({
                name:req.body.body.name,
                ingredients:req.body.body.ingredients,
                weight:req.body.body.weight,
                imgLink:req.body.body.imgLink
            })

            cake.save().then(()=>Cake.find({}, {name:1, imgLink:1})).then(response=>res.send({result:response}));
            

        })


    },


    reading(req,res){

        console.log('REQQQQQ',req.body)

        Cake.find({}, {name:1, imgLink:1})
        .sort({name:1})
        .then(result=>{
                console.log('THIS IS RESULT',result)
            
            if(result.length===0){
                console.log('THERE IS NOT ANY RESULT')
                return res.status(404).send({result:'There is not any result'})
            }
            console.log('sending results')
            res.send({result:result})

        })
        .catch(error=>res.status(422).send({error:error}))
    },


    delete(req,res){

        console.log('req params id',req.params.id)

        var id=req.params.id;

        Cake.findByIdAndDelete(id, function(err,result){

            if(err){
                return res.status(408).send({error:err})
            }
            if(!result){
                return res.status(404).send({result:'There is not any cake with this id'})
            }
            console.log('result deleeeeeeeeeeeeeeeeeeee',result)
            res.send({deletedCake:result.name})
        })

    },

    update(req,res){

        console.log('REQ UPDATEEEEEEEEEE',req.body)

        var id=req.params.id;
        var name=req.body.body;

        Cake.findOne({name:name}, function (err,cake){

            if(err){
                return res.status(408).send({error:err})
            }
            if(cake){
                return res.status(404).send({error:'This cake already exist'})
            }
        

        Cake.findByIdAndUpdate(id, {name:name}, function(err,existingCake){

            if(err){
                return res.status(408).send({error:err})
            }
            if(!existingCake){
                return res.status(404).send({result:'There is not any cake to update'})
            }

            res.send({updatedCake:existingCake.name})

        })



    })

    }

}