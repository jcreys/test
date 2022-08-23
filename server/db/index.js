//this is the access point for all things database related!

const db = require('./db')

const User = require('./models/User')
const Workout = require('./models/Workout')
//associations could go here!
Workout.belongsTo(User);
module.exports = {
  db,
  models: {
    User,
    Workout
  },
}
