const { before, beforeEach } = require('mocha');
const mongoose = require('mongoose');

//ES6 Promises
mongoose.Promise = global.Promise;

//Connect to the databse before test run
before(function(done){
    //Connect to mongodb
    mongoose.connect('mongodb://localhost/task');
    mongoose.connection.once('open',function(){
        console.log('Connection is made');
        done();
    }).on('error',function(error){
        console.log('Connection error', error);
    }); 
});

// Drop the characters collection before each test

beforeEach(function(done){
     //Drop the collection
     mongoose.connection.collections.tasks.drop(function(){
        done();
     });
});
