const Sequelize = require("sequelize");
const db = require("../db");

const SALT_ROUNDS = 5;

const Subscriber = db.define("subscriber", {
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: {
        msg: "Please provide a valid email address"
      }
    },
  },
  purchased: {
    type: Sequelize.BOOLEAN
},
  unsubscribe: {
    type: Sequelize.BOOLEAN
},
  deactivated: {
    type: Sequelize.BOOLEAN
},
  count: {
    type: Sequelize.INTEGER
},
});

module.exports = Subscriber;
