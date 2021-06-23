const assert = require('assert');
const { beforeEach } = require('mocha');
const task = require('../modules/task');
const task1 = require('../modules/task');
const task2 = require('../modules/task');
const task3 = require('../modules/task');


//Describe tests
describe('Deleting Records',function(){
    
    var char;
    
    beforeEach(function(done){
         char = new task({
            description:'Write my record',
            completed: false
            
        });

        char.save().then(function(){
            assert(char.isNew === false);
            done();
        });

        char = new task1({
            description:'Do my project',
            completed: true
        });
        char.save().then(function(){
            assert(char.isNew === false);
           done();
          });
        
       

            char = new task2({
            description:'Learn MongoDB',
            completed: true
            });

            char.save().then(function(){
                assert(char.isNew === false);
               done();
              });
          

                char = new task3({
                description:'Do my assignment',
                completed: false
               });
       
       
               char.save().then(function(){
                 assert(char.isNew === false);
                done();
               });
    });
    
    it('Delete one a record from database', function(done){
        
        task.findOneAndRemove({_id: char._id}).then(function(){
            task.findOne({_id: char._id}).then(function(result){
                assert(result === null);
                done();
            });
        });

        });
    });
