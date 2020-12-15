const mongoose=require('mongoose');
const {Schema}=mongoose;


const SalesPriceListSchema=new Schema({
    cakeId:{
        type:Schema.Types.ObjectId,
        ref:'cakes'
    },
    first:Number,
    second:Number,
    third:Number,
    pubblication_date:Date,
    sales:Boolean

})

const SalesPriceList=mongoose.model('salepricelists',SalesPriceListSchema);

module.exports=SalesPriceList;