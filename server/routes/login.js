const express = require('express');
const routes = express.Router();
const mongo = require('../db/db');
const client = require("../db/db");
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
const uri = require("../db/db")



routes.post('/signIn', function (req, res) {
  MongoClient.connect(uri, { useNewUrlParser: true })
    .then(client => {
      console.log(req.body);
      const collection = client.db("hrms").collection("users");
      collection.findOne({ email: req.body.email, password: req.body.password }, function (err, user) {
        client.close();
        res.json(user)
      })

    })
})




module.exports = routes