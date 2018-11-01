const express = require('express');
const router = express.Router();
var MongoClient=require('mongodb').MongoClient;
const user = require('../models/user');

const database = "mongodb://users:sairam4@ds135993.mlab.com:35993/practice";

mongoose.Promise = global.Promise;
mongoose.connect(database, function (err) {
    if(err){
        console.error("Error : " + err);
    }
});

router.post('/login', function(req, res){
    console.log('login a user');
    const user_name = req.body.user_name;
    const password = req.body.password;
    
    user.authenticate(user_name, password, (err, user) => {
        if (err) throw err;
        if (!user) {
            return res.json({success: false, msg: "User not found"});
        }
        console.log("logged in");
        return res.json({success: true, msg: "User found"});
    });
});

router.post('/register', function(req, res){
    MongoClient.connect(url, function(err, client) {
        console.log("hi");
        if(err)
        {
            console.log(err);
            res.write("Failed, Error while connecting to Database");
            res.end();
        }
        var db= client.db("practice");
        insertDocument(db, req.body, function() {
            res.write("Successfully inserted");
            res.end();
        });
    });
});
var insertDocument= function(db, data, callback){
    db.collection('users').insertOne(data,function(err, result){
        if(err)
            {
                res.write("Registration Failed, Error While Registering");
                res.end();
            }
            
    })
    }

module.exports = router;
