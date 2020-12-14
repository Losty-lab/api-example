const express=require('express');
const CakeController = require('../controllers/CakeController');
const router=express.Router();
const IngredientController=require('../controllers/IngredientController');
const SalesPriceListController = require('../controllers/SalesPriceListController');


//ingredient

router.post("/ingredient",IngredientController.insert);

router.get("/ingredient", IngredientController.reading);

//se bisogna eliminare più di 1 elemento uso la post

router.delete("/ingredient/:id", IngredientController.delete);

router.put("/ingredient/:id", IngredientController.update);

//cake

router.post("/cake", CakeController.insert);

router.get("/cake",CakeController.reading);

router.delete("/cake/:id", CakeController.delete);

router.put("/cake/:id", CakeController.update);

//salespricelist

router.post("/salespricelist", SalesPriceListController.insert);

router.get("/salespricelist",SalesPriceListController.reading);

router.delete("/salespricelist/:id", SalesPriceListController.delete);

router.put("/salespricelist/:id", SalesPriceListController.update);


module.exports=router;