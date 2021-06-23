const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema and Model

const taskSchema = new Schema({

    description: String,
    completed: Boolean
   
});

const task = mongoose.model('task',taskSchema);
const task1 = mongoose.model('task',taskSchema);
const task2 = mongoose.model('task',taskSchema);
const task3 = mongoose.model('task',taskSchema);


module.exports = task;
module.exports = task1;
module.exports = task2;
module.exports = task3;
