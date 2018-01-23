// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var eventSchema = new Schema({
  name: String,
  distance: String,
  date: String,
  city: String,
  state: String,
  zip: String,
  description: String,
  website: String,
  contact_name: String,
  contact_email: String,
  contact_phone: String,
  isApproved: Boolean,
  admin_username: String,
  fb_page: String,
  twitter: String,
  instagram: String
});

// the schema is useless so far
// we need to create a model using it
var Event = mongoose.model('Event', eventSchema);

var race = new Event({
  name: "Test Run",
  distance: "5k",
  date: "Feb. 28, 2018",
  city: "Raleigh",
  state: "NC",
  zip: "27604",
  description: "description about this run",
  website: "www.testrun.com",
  contact_name: "brent",
  contact_email: "brent@email.com",
  contact_phone: "704-555-5555",
  isApproved: false,
  admin_username: "brentfrancese",
  fb_page: "testrun.fb",
  twitter: "@testrun",
  instagram: "@testrun"
})

race.save((err) => {
  if(err) return handleError(err)
})



// make this available to our users in our Node applications
module.exports = Event;
