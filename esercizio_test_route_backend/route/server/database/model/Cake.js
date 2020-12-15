const mongoose=require('mongoose');
const {Schema}=mongoose;




const CakeSchema=new Schema({
    name:{
        type:String,
        required:[true, 'A name is required']
    },
    ingredients:'',
    weight:{
        type:String,
        required:[true,'A weight is required']
    },
    imgLink:''

})



CakeSchema.pre('findOneAndDelete', function(next){
    console.log('FINDBYIDAND DELETEEEEEEE',this._conditions._id)
    
    const SalesPriceList=mongoose.model('salepricelists')

    SalesPriceList.findOne({cakeId:this._conditions._id.toString()})
    .then(response=>{
        
        console.log('RESPONSE FINDBYID',response)

        const cakesinsales=response.cakeId
        
        SalesPriceList.findOneAndDelete({cakeId:cakesinsales}).then(response=>{
            console.log('RSPONSE IN DELETE SALESPREICELIST',response)
            next()
        })
    }
        ).catch(()=>{
            console.log('IN CATCH DELETE')
            next()
            
        })   
})

const Cake=mongoose.model('cakes',CakeSchema);

module.exports=Cake;