//this is the access point for all things database related!

const db = require("./db");

const User = require("./models/User");
const Workout = require("./models/Workout");
const Subscriber = require("./models/Subscriber");
const Mail = require("./models/Mail");
//associations could go here!
Workout.belongsTo(User);
Subscriber.belongsTo(Workout)
Mail.belongsTo(Workout);
Mail.belongsTo(Subscriber);
module.exports = {
  db,
  models: {
    User,
    Workout,
    Subscriber,
    Mail,
  },
};
