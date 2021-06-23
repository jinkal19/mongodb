const assert = require('assert');
const task = require('../models/task');

// Describe our tests
describe('Updating records', function(){
  var char;
  // Add a character to the db before each tests
  beforeEach(function(done){
    char = new task({
       description:'write my record',
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

  // Create tests
  it('Updates the name of a record', function(done){
      task.findOneAndUpdate({completed: false}, {completed: true}).then(function(){
          task.findOne({_id: char._id}).then(function(result){
              assert(result.completed === true);
              done();
          });
      });
  });

 


});