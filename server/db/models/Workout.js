const Sequelize = require('sequelize')
const db = require('../db')


const SALT_ROUNDS = 5;

const Workout = db.define('workout', {
    txt: Sequelize.STRING
})

module.exports = Workout

