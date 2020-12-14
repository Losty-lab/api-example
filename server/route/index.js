
const UserController=require('../controllers/Usercontroller');
const IngredientController=require('../controllers/IngredientController')
const SalesPriceListController=require('../controllers/SalesPriceListController')
const checkauth=require('../middleware/checkauth');
const authRoute=require('./authroute');

module.exports=(app)=>{

    // app.get("/",(req,res)=>{

    //     res.send('Hola')

    // })

    

    app.get("/reading/saleshome", SalesPriceListController.reading)

    //-------------------------creare un userRoute
    app.post("/api/login", UserController.login)
      
    app.route("/api/user")
    .get(checkauth, function (req,res){
            
        res.send({response:'Token OK'})
    })
    .post(UserController.register)
        //---------------------------

    app.use("/api", checkauth, authRoute)
    

    
    

    // app.post("/api/user", UserController.register)

    // app.get("/api/user", UserController.login)

}