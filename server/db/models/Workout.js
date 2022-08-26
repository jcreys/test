const Sequelize = require("sequelize");
const db = require("../db");

const SALT_ROUNDS = 5;

const Workout = db.define("workout", {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  html: {
    type: Sequelize.TEXT
}
});

module.exports = Workout;
