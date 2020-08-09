const express = require('express');
const routes = express.Router();
const mongo = require('../db/db');
const client = require("../db/db");
const uri = require("../db/db");
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;


routes.get('/getEmployees', function (req, res) {
  MongoClient.connect(uri, { useNewUrlParser: true })
    .then(client => {
      const collection = client.db("hrms").collection("employees");
      collection.find().toArray((err, items) => {
        console.log(items);
        res.json(items)
        client.close();
      })
    })
  // perform actions on the collection object
})


routes.post('/deleteEmployee', function (req, res) {
  MongoClient.connect(uri, { useNewUrlParser: true })
    .then(client => {
      const collection = client.db("hrms").collection("employees");
      collection.findOneAndDelete({ _id: new ObjectID(req.body.id) }, function (err, resp) {
        console.log("del employee : ", resp);
        res.send("success")
        client.close();
      })
    }).catch(err=>{
      res.send("error")
    })
})

routes.post('/addEmployee', function (req, res) {
  MongoClient.connect(uri, { useNewUrlParser: true })
    .then(client => {
      const collection = client.db("hrms").collection("employees");
      collection.insertOne({ name: req.body.name, number: req.body.number, email: req.body.email,
        martialStatus:req.body.martialStatus },function (err, resp) {
          if(err){
            res.send("error")
          }else{
            res.send("success")
          }
        client.close();
      })
    }).catch(err=>{
      res.send("error")
    })
})

routes.post('/addLoan', function (req, res) {
  MongoClient.connect(uri, { useNewUrlParser: true })
    .then(client => {
      const collection = client.db("hrms").collection("employees");
      collection.findOneAndUpdate({ _id: new ObjectID(req.body.employeeId) },{$push:{loans:{amount:req.body.amount,date:req.body.date}}}, function (err, resp) {
        console.log("loan employee : ", resp);
        if(err){
          res.send("error")
        }else{
          res.send("success")
        }
        
        client.close();
      })
    }).catch(err=>{
      res.send("error")
    })
})

routes.post('/addLeave', function (req, res) {
  MongoClient.connect(uri, { useNewUrlParser: true })
    .then(client => {
      const collection = client.db("hrms").collection("employees");
      collection.findOneAndUpdate({ _id: new ObjectID(req.body.employeeId) },
      {$push:{leaves:{days:req.body.days,from:req.body.from,to:req.body.to,type:req.body.type}}}, function (err, resp) {
        console.log("leave employee : ", resp);
        if(resp){
          res.send("success")
        }else{
          res.send("error")
        }
        client.close();
      })
    }).catch(err=>{
      res.send("error")
    })
})

routes.post('/updateEmployee', function (req, res) {
  MongoClient.connect(uri, { useNewUrlParser: true })
    .then(client => {
      const collection = client.db("hrms").collection("employees");
      collection.findOneAndUpdate({ _id: new ObjectID(req.body.employeeId) },
      {$set:{name:req.body.name,email:req.body.email,number:req.body.number,martialStatus:req.body.martialStatus,}}, function (err, resp) {
        console.log("update employee : ", resp);
        if(resp){
          res.send("success")
        }else{
          res.send("error")
        }
        client.close();
      })
    }).catch(err=>{
      res.send("error")
    })
})
module.exports = routes;