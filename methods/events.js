// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var eventSchema ...

// custom method to add string to end of name
// you can create more important methods like name validations or formatting
// you can also do queries and find similar users
eventSchema.methods.addEvent = function() {
  // add some stuff to the users name
  this.name = this.name + 'Server Api';

  return this.name;
};

// the schema is useless so far
// we need to create a model using it
var Event = mongoose.model('Event', eventSchema);

// make this available to our users in our Node applications
module.exports = Event;
