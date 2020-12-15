const { db } = require("../database/model/Cake");
const Cake = require("../database/model/Cake");
const SalesPriceList = require("../database/model/SalesPriceList");
var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/";

module.exports = {
  reading(req, res) {
    console.log("THIS IS WITHOUT AUTHORIZATION");
    MongoClient.connect(url, function (err, db) {
      if (err) throw err;

      var dbo = db.db("paste");

      dbo
        .collection("salepricelists")
        .aggregate([
          {
            $lookup: {
              from: "cakes",
              localField: "cakeId",
              foreignField: "_id",
              as: "listcakes",
            },
          },
        ])
        .toArray(function (err, resp) {
          if (err) throw err;
          return res.send({ sales: resp });
        });
    });
  },

  insert(req, res) {

    console.log("from fronte end", req.body);

    var arry = [];

    arry = req.body.body.map((ele) => ele.id);

    console.log("ARRY", arry);

    
    

      var promise = Promise.all(
        req.body.body.map((res) => {
          return new Promise((resolve, reject) => {
            
            console.log('RES',res)

            const salespricelist = new SalesPriceList({
              cakeId: res.id,
              first: res.first,
              second: res.second,
              third: res.third,
              pubblication_date: new Date(),
            });

            salespricelist.save().then((r) => {
              console.log("AFTER SAVE");
              resolve(r);
            });
          });
        })
      );


      //

      promise.then(() => {
        console.log("PROMIIIIIIIIIISE");

        Cake.find({ _id: { $in: arry } }).then((result) => {

        MongoClient.connect(url, function (err, db) {
          if (err) throw err;

          var dbo = db.db("paste");

          dbo
            .collection("salepricelists")
            .aggregate([
              {
                $lookup: {
                  from: "cakes",
                  localField: "cakeId",
                  foreignField: "_id",
                  as: "listcakes",
                },
              },
            ])
            .toArray(function (err, resp) {
              if (err) throw err;
              console.log("RESSSSSSSP", resp);
              return res.send({ sales: resp, result: result });
            
            });
        });
      });
    });
  },

  delete(req, res) {},

  update(req, res) {},
};
