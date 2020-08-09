const express = require('express');
const routes = express.Router();
const mongo = require('../db/db');
const client = require("../db/db");
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
const uri =require("../db/db");


routes.post('/saveCleint', function (req, res) {
  MongoClient.connect(uri, { useNewUrlParser: true })
    .then(client => {
      const collection = client.db("hrms").collection("clients");
      collection.insertOne({ name: req.body.name, number: req.body.number, email: req.body.email,
        status:req.body.status,portfolio:req.body.portfolio,comments:req.body.comments },function (err, resp) {
          if(err){
            res.send("error")
          }else{
            res.send("success")
          }
        client.close();
      })
    })
    console.log(req.body);
})

routes.get('/getClients', function (req, res) {
MongoClient.connect(uri, { useNewUrlParser: true })
      .then(client => {
        const collection = client.db("hrms").collection("clients");
        collection.find().toArray((err, items) => {
          console.log(items);
          res.json(items)
          client.close();
        })
      })
    // perform actions on the collection object
  })




module.exports = routes;